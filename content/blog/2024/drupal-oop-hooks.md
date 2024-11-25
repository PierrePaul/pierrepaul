---
title: Les crochets (hooks) Drupal 11.1 et la programmation orientée objet.
date: 2024-11-25
category: Drupal
tags: backend
slug: drupal-11-1-oop-hooks-fr
summary: Drupal 11.1 amène des changements importants et très attendus aux hooks.
cover: /images/2024/hook.jpg
pictureCopyrightsText: Kasia Derenda
pictureCopyrights: https://unsplash.com/photos/a-fishing-hook-hanging-from-the-side-of-a-boat-Fl3Rf_t8dMs
status: published
language: fr
---
Drupal 8 a amené de grands changements dans le développement de sites Drupal.
Un grand effort a été mis pour rendre la plateforme plus professionnelle, en intégrant plus de concept de programmation orienté objet.
Cependant, les hooks avaient encore des limitations importantes.

Les hooks devaient etre définis dans un fichier spécifique, avec l'extension `.module`.

Les AccessChecks, les WebformHandler, les services, les EventSuscriber, le Routing... tout est possible en utilisant des classes... sauf les hooks...
À ma connaissance, les hooks étaient le dernier bastion des fichiers `.module`. 

En travaillant sur le générateur de [SDC pour Drush](https://pierre-paul.com/blog/drush-generators), je suis tombé sur la demande de fusion ajoutant le [support des hooks dans Drupal](https://git.drupalcode.org/project/drupal/-/commit/1584d2c9f2e6718034f5c7c051d702a75a5dae62).

Les [changements au module Node](https://git.drupalcode.org/project/drupal/-/commit/1584d2c9f2e6718034f5c7c051d702a75a5dae62?page=2) sont un bon exemple de comment migrer votre module personnalisé vers la nouvelle manière de faire,
mais je pourrais comprendre que ça soit indigeste pour certains.

### Alors voici un exemple plus simple :

Pour `monmodule.module`, cette fonction ajoute automatiquement la librairie `malibrairie` si l'utilisateur est authentifié, sur toutes les pages:

```php
<?php
/**
 * Implémente hook_preprocess_html().
 */
function monmodule_preprocess_html(&$variables) {
  $logged_in = \Drupal::currentUser()->isAuthenticated();
  if ($logged_in) {
    $variables['#attached']['library'][] = 'monmodule/malibrairie';
  }
}
```

### Maintenant, avec la nouvelle manière de faire :

Après avoir créé les dossiers `src/Hook/` dans `monmodule`, je peux y ajouter un nouveau fichier `MonModuleHooks.php` avec ce contenu :

```php 
<?php
namespace Drupal\monmodule\Hook;

use Drupal\Core\Hook\Attribute\Hook;

class MonModuleHooks {

  /**
   * Implémente hook_preprocess_html().
   */
  #[Hook('preprocess_html')]
  public function monModulePreprocessHtml(&$variables) {
    $variables['#attached']['library'][] = 'monmodule/malibrairie';
  }
}
```

La magie s'opère grâce à l'[attribut PHP](https://stitcher.io/blog/attributes-in-php-8), `Hook`, qui est maintenant dans le coeur de Drupal.

N'oubliez pas de vider votre cache pour être certain que Drupal voit votre nouveau fichier.

Personnellement, j'ai hate de pouvoir utiliser la nouvelle manière de faire dans tous mes projets !
