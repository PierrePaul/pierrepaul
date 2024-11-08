---
title: Drush generators
date: 2024-11-08
category: Drupal 
tags: Drush, Drupal, SDC
slug: drush-generators
summary: Tired of copying your smallest module everytime you want to make a new module? Can't remember the synthax to create a new single directory component? Drush generators might be for you.
cover: /images/2024/drush-generators.jpg
pictureCopyrightsText:
pictureCopyrights: 
status: published 
language: en
---

I think Drush generators need more exposure, so I decided to write a bit about it.
As the title suggests, you can probably guess that drush generator lets you generate stuff. 
The list of stuff you can generate is pretty extensive.
[Issue #115](https://github.com/Chi-teck/drupal-code-generator/issues/155) might change that, but for now the list is quite big.

The drush generators are actually not part of the official drush project.
It's an independent subproject named [drupal-code-generator](https://github.com/Chi-teck/drupal-code-generator).

The generators have neat little features that help get you off the ground:

### Auto-complete

The generators have access to the whole Drupal stack.
So it can fetch the valid services, theme names, module names,
libraries that you currently enabled and suggest those depending on your use case.
Like adding requirements to your new module.
Not as useful since Auto-wiring is in Drupal core now, but still useful.

### ID generation

They usually ask you for a name, then it will suggest you a valid id from the name. It can be overridden, of course.

### File name generation

We have a very specific file naming convention in Drupal.
The module file should be the module id followed by a '.module', like `my_custom_module.module`, for everything to work.
Before using drush generators, I would always copy and paste my simplest module, then start renaming everything, including function names, namespaces and everything.
I would always forget something somewhere or make a typo, doing all those edits then losing time debugging everything.


## Single directory components generator

When SDC landed in core, I worked on the new [SDC generator](https://github.com/Chi-teck/drupal-code-generator/blob/4.x/src/Command/SingleDirectoryComponent.php),
that is now available for everyone using Drush. 

I recently worked on a [new issue](https://github.com/Chi-teck/drupal-code-generator/issues/190) that adds support for _slots_ as well.

A new release is already out for drupal-code-generator, so if you update your drush package, you should now have support for SDC and slots as well.

```
ddev composer update drush/drush -W 
# The -W is required to force an update on the drupal-code-generator dependency
```

Depending on your Drupal version, you might be stuck with an old version of Drush, which would prevent the upgrade of `drupal-code-generator`.

[Contact me](https://pierre-paul.com/#contact) if you need help updating your project.

## New features and bugs

If you have any feature request for generators, don't hesitate to open up a [new issue on Github](https://github.com/Chi-teck/drupal-code-generator/issues).

While you're at it, [drop me a word about it](https://pierre-paul.com/#contact).
I can probably take care of it and give a break to project maintainers.
