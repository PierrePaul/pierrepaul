---
title:  Migration de champs de bloc
date: 2024-05-07
category: Drupal
tags: Drupal, Migration
slug: drupal-migration-champs-bloc
summary: Ça nous arrive tous. Les requis initiaux mentionnent un nouveau champ de type texte. Deux mois plus tard, on se rend compte que ce champ devrait pouvoir accepter du contenu HTML. Voici un petit guide pour créer ce nouveau champ, migrer les données dans le nouveau champ et effacer l'ancien.
cover: /images/2024/migration.webp
status: published
language: fr
---

Ça nous arrive tous. Les requis initiaux mentionnent un nouveau champ de type texte. Deux mois plus tard, on se rend compte que ce champ devrait pouvoir accepter du contenu HTML.
Pour ce petit guide, je vais présumer que vous utilisez le système de configuration Drupal et `ddev`.
Si vous n'utilisez pas `ddev`, retirer la mention `ddev` devant les commandes 😊 Si vous n'utilisez pas `ddev`, retirer la mention `ddev` devant les commandes 😊.

Le guide en question est spécifiquement pour un nouveau champ dans un bloc. Le bloc dans mon example est utilisé dans 
layout builder.

En gros le plan est:

1. Créer le nouveau champ
1. Exporter la configuration
1. Écrire 3 hooks updates
1. Tester le tout
1. Effacer le champ et réexporter la configuration

## 1. Création du nouveau champ

Dans mon cas, mon ancien champ s'appelle `field_description`. Je vais ajouter un nouveau champ, nommé `field_rich_description`, qui accepte du contenu HTML.

Pour éviter des problèmes lors de l'exportation du nouveau champ plus tard, je vais importer ma configuration tout de suite.

```
ddev drush cim -y
```

Pour créer mon nouveau champ, je vais utiliser l'interface régulière de Drupal.

![Ajout d'un champ formatté dans l'interface de gestion Drupal, avec le thème Gin](/images/2024/migration/ajout-champ.png)

Une fois le champ ajouté et configuré à notre goût, c'est le temps d'exporter la configuration.

## 2. Exportation de la configuration

```
ddev drush cex -y
```

Si vous n'avez pas roulé le `cim` plus tot, c'est possible que vous ayez plus de changements que prévus.

Votre résultat devrait etre similaire à ceci :

![Exportation de la configuration après l'ajout d'un nouveau champ](/images/2024/migration/export.png)

Ce qui nous intéresse vraiment, ce sont ces deux fichiers :

1. field.storage.block_content.field_rich_description
2. field.field.block_content.collector_page_header.field_rich_description

Les deux derniers fichiers sont les paramètres d'affichage. Ils sont importants, mais pas pour la migration des données.

## 3. Écrire les 3 hooks update

Normalement lors de d'un déploiement, nous voulons exécuter ces commandes dans cet ordre :

1. drush cr (cache rebuild)
2. drush updatedb
3. drush config:import (cim)


Le `updatedb`, aussi appelé le [hook update](https://www.drupal.org/docs/drupal-apis/update-api/introduction-to-update-api-for-drupal-8) est l'endroit parfait
pour migrer nos données d'un champ à l'autre, mais nous avons un problème d'oeuf et la poule ici.

La configuration pour notre nouveau champ sera importé seulement à la dernière étape. Si nous effacons l'ancien champ
 dans le meme déploiement, nous risquons aussi de perdre les données avant de pouvoir les migrer, advenant que nous roulons le `cim` avant le `updatedb`.

Nous allons donc faire trois hook_update_N pour :

1. Lire les fichiers de config qui ajoute le champ
2. Forcer l'import tout de suite
3. Effacer l'ancien champ

Les `hook_update_N` doive se trouver dans un de vos modules personalisés (custom), spécifiquement dans le fichier `.install`.
Pour les besoins du guide, je vais appeler ce module `mon_module`.

Pour notre premier hook :

```php
function mon_module_update_1001() {
 $config_storage = new \Drupal\Core\Config\FileStorage(Drupal\Core\Site\Settings::get('config_sync_directory'));
  foreach ([
    'field.storage.block_content.field_rich_description',
    'field.field.block_content.collector_page_header.field_rich_description',
  ] as $config_name) {
    $entity_type = \Drupal::service('config.manager')
      ->getEntityTypeIdByName($config_name);
    $storage = \Drupal::entityTypeManager()->getStorage($entity_type);
    $config_record = $config_storage->read($config_name);

    /** @var \Drupal\Core\Config\Entity\ConfigEntityStorageInterface $storage */
    $entity = $storage->createFromStorageRecord($config_record);
    if ($storage->load($entity->id())) {
      \Drupal::logger('mon_module')->info('mon_module_update_1001: config already imported, ignoring.');
    } else {
      try {
        $entity->save();
      } catch (\Drupal\Core\Entity\EntityStorageException $exception) {
        \Drupal::logger('mon_module')->error('mon_module_update_1001: ' . $exception->getMessage());
      }
    }
  }
}
```

C'est important de changer `field.storage.block_content.field_rich_description` par le nom du fichier extrait dans l'étape 2.

C'est aussi important que le fichier nommé `field.storage.block_content. ....` soit le premier dans la liste. 
Sans la configuration de "storage", Drupal ne saura pas comment importer le deuxième fichier.

Pour notre deuxième hook, petit rappel, mon ancien champ s'appelle `field_description` alors que mon nouveau s'appelle `field_rich_description` :

```php
function mon_module_update_1002() {
  $nids = \Drupal::entityQuery('block_content')->condition('type','mon_type_bloc')->accessCheck(FALSE)->execute();
  $blocks =  \Drupal\block_content\Entity\BlockContent::loadMultiple($nids);
  foreach($blocks as $block_content) {
    $current_value = $block_content->get('field_description')->getValue();
    $block_content->set('field_rich_description', $current_value);
    try {
      $block_content->save();
    } catch (\Drupal\Core\Entity\EntityStorageException $exception) {
      \Drupal::logger('mon_module')->error('mon_module_update_1002: ' . $exception->getMessage());
    }
  }
}
```

Je ne fais aucune transformation ici, je prends simplement les données d'un champ que j'ajoute à un autre champ.

Pour finir, une dernière fonction pour effacer mon ancien champ, `field_description` :

```php
function mon_module_update_1003() {
  $field = \Drupal\field\Entity\FieldConfig::loadByName(
    'block_content',
    'mon_type_bloc',
    'field_description',
  );
  if ($field !== NULL) {
    $field->delete();
  } else {
    \Drupal::logger('mon_module')->info('mon_module_update_1003: field already deleted.');
  }
}
```

## 4. Tester le tout

Une façon facile de tester ce genre de hook est avec la command `eval` de drush.

```bash
ddev drush php-eval "\Drupal::moduleHandler()->loadInclude('mon_module', 'install'); mon_module_update_1001();" -vv
ddev drush php-eval "\Drupal::moduleHandler()->loadInclude('mon_module', 'install'); mon_module_update_1002();" -vv
ddev drush php-eval "\Drupal::moduleHandler()->loadInclude('mon_module', 'install'); mon_module_update_1003();" -vv
```

## 5. Effacer l'ancien champ

On efface le champ dans notre dernière fonction, mais on veut quand meme que le changement soit refleté dans notre configuration.
Sinon au prochain `drush cim`, il sera très probablement recréé.

```bash
ddev drush cex -y
```

## En conclusion

J'espère que c'est utile ! Ce guide est spécifiquement pour les blocs, mais c'est possible de l'adapter pour des types de contenus standard.
Je vais probablement faire un nouvel article spécifiquement pour les types de contenus.

