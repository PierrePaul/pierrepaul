---
title: Drush generators
date: 2024-11-03
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
As the title suggest, you can probably guess that drush generator lets you generate stuff. 
The list of stuff you can generate is pretty extensive.
[Issue #115](https://github.com/Chi-teck/drupal-code-generator/issues/155) might change that, but for now the list is quite big right now.

The drush generators are actually not part of the official drush project.
It's an independent subproject named [drupal-code-generator](https://github.com/Chi-teck/drupal-code-generator).

The generators have neat little features that helps get you off the ground:

## Auto-complete

The generators have access to the whole Drupal stack.
So it can fetch the valid services, theme names, modules names, libraries that you currently enabled and suggest those depending on your use case.
Like adding requirements to your new module. Not as useful since Auto-wiring is in core, but still useful.

## ID generation

They usually ask you for a name, then it will suggest you a valid id from the name. It can be overridden, of course.

## File name generation

We have a very specific file naming convention in Drupal.
The module file should be the module id followed by a '.module', like 'my_custom_module.module', for everything to work.
Before using drush generators, I would always copy and paste my simplest module, then start renaming everything, including function names, namespaces and everything.
I would always forget something somewhere or make a typo doing all those edits then losing them debugging everything.
