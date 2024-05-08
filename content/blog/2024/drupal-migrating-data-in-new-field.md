---
title:  draft
date: 2024-05-07
category: Drupal
tags: Drupal, Migration
slug: drupal-migrate-block-content-field
summary: It happens to everyone. You created a field for a block, to be used in layout builder, and turns out you actually need to change the field type. It should have been formatted, but it's not. Here's a how-to on how to fix that.
cover: /images/2024/migration.webp
pictureCopyrightsText:
pictureCopyrights: 
status: published
language: en
---

It happens to everyone.
You created a field for a block, to be used in layout builder, and turns out you actually need to change the field type.

It should have been formatted, but it's not. 

For this little how-to,
I will assume you are using the [Drupal config management system](https://www.drupal.org/docs/administering-a-drupal-site/configuration-management) and [ddev](https://ddev.readthedocs.io/en/stable/).

If you're not using `ddev`, just remove it from the commands 😊.

This little how-to is specific to new fields in block_content, like the blocks used in layout builder.

The plan is to:

1. Create the new field
2. Export the configuration
3. Write three functions, called hook updates
4. Test everything
5. Remove the old field and re-export the configuration

## 1. Creating the new field

In my case, my old field is called `field_description` while the new one is called `field_rich_description`, which accepts HTML content.

To make sure I dont have too many configs exported later on, I will import the config right now to make sure my DB is up 
to date with my config files.

```bash
ddev drush cim -y
```

I will use the Drupal Field UI to create the new field.

![Adding a new text formatted field in Drupal, using the new admin theme Gin](/images/2024/migration/ajout-champ.png)

Once the field is added and configured to my taste, it's time to export the new configuration.

## 2. Exporting configuration

```bash
ddev drush cex -y
```

If you haven't run `cim` in step one, you might end up with a lot of changes, depending on your initial state.

Your result should be similar to this :

![Exporting configuration after adding new field](/images/2024/migration/export.png)

The thing we really care about is the first two files :

1. field.storage.block_content.field_rich_description
2. field.field.block_content.collector_page_header.field_rich_description

The other two are important, but not for migrating the data. So git commit those as well, but we don't care about it for now.

## 3. Writing the three hook updates

Normally after a deployment, we want to execute those commands in this order :

1. drush cr (cache rebuild)
2. drush updatedb
3. drush config:import (cim)

The `updatedb`, also called a [hook update](https://www.drupal.org/docs/drupal-apis/update-api/introduction-to-update-api-for-drupal-8),
is a perfect place to run our migration steps, but we have a "Chicken or the egg" issue here.

The configuration of our new field will be imported in the last step only. The other issue is the deleting of the old field, which should
also happen when we run the `config:import`, making this less than ideal to migrate the data.

So we will create three functions hook_update_N to:

1. Read and import the configuration files for our new field
2. Migrate the data into the new field
3. Delete the old field

The `hook_update_N` functions must be located in one of your custom module, specifically in the `.install`. 
For this how-to, let's call your custom module `my_module`.

For our first function, in our file named `my_module.install`: 

```php
function my_module_update_1001() {
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
      \Drupal::logger('my_module')->info('my_module_update_1001: config already imported, ignoring.');
    } else {
      try {
        $entity->save();
      } catch (\Drupal\Core\Entity\EntityStorageException $exception) {
        \Drupal::logger('my_module')->error('my_module_update_1001: ' . $exception->getMessage());
      }
    }
  }
}
```

Make sure to change the `field.storage.block_content.field_rich_description` for the file extracted in step 2.

It's important to put the file named `field.straoge.block_content....` first. If you don't, Drupal won't know how to add
the field because it doesn't have the storage settings.

For our second function, small reminder
my old field was named `field_description` and the new one is called `field_rich_description` :

```php
function my_module_update_1002() {
  $nids = \Drupal::entityQuery('block_content')->condition('type','my_block_type')->accessCheck(FALSE)->execute();
  $blocks =  \Drupal\block_content\Entity\BlockContent::loadMultiple($nids);
  foreach($blocks as $block_content) {
    $current_value = $block_content->get('field_description')->getValue();
    $block_content->set('field_rich_description', $current_value);
    try {
      $block_content->save();
    } catch (\Drupal\Core\Entity\EntityStorageException $exception) {
      \Drupal::logger('my_module')->error('my_module_update_1002: ' . $exception->getMessage());
    }
  }
}
```

I'm not doing any transformation here. I'm just copying the data into the new field.

And lastly, one last function to delete the old field, `field_description`.
Keep in mind this one is kind of optional;
you could delete the field from the UI then export the config.
I just find it cleaner.

```php
function my_module_update_1003() {
  $field = \Drupal\field\Entity\FieldConfig::loadByName(
    'block_content',
    'my_block_type',
    'field_description',
  );
  if ($field !== NULL) {
    $field->delete();
  } else {
    \Drupal::logger('my_module')->info('my_module_update_1003: field already deleted.');
  }
}
```

## 4. Testing everything

Here's an easy way to test all the hooks with Drush:

```bash
ddev drush php-eval "\Drupal::moduleHandler()->loadInclude('my_module', 'install'); my_module_update_1001();" -vv
ddev drush php-eval "\Drupal::moduleHandler()->loadInclude('my_module', 'install'); my_module_update_1002();" -vv
ddev drush php-eval "\Drupal::moduleHandler()->loadInclude('my_module', 'install'); my_module_update_1003();" -vv
```

## 5. Deleting the old field

We are deleting the field in the last function, but we still want to make sure our configurations are up-to-date with those changes.
If we don't, the field might be recreated at the next `drush cim`.

```bash
ddev drush cex -y
```

## Conclusion

I hope it was useful to you! This how-to is specific to block fields, but could be easily adapted to content types as well.
I'm planning to make another article dedicated to content types soon-ish.
