---
title: Admin tooltips
date: 2024-10-31
category: Drupal
tags: Drupal, module, open-source
slug: admin-tooltips
summary: Make your Drupal admin editing a little more fluid and consistent with the admin tooltips module.
cover: /images/2024/admin_tooltips/en/4-create-article.png
pictureCopyrightsText:
pictureCopyrights: 
status: published
language: en
---

In a [previous post](https://pierre-paul.com/blog/become-maintainer-drupal-module), I was mentioning I was trying to get the maintainer status on one Drupal module.

This module is [Admin Tooltips](https://www.drupal.org/project/admin_tooltips) and we were finally able to make a new release that supports
Drupal 10 and Drupal 11 🎉.


# What is Admin tooltips?

It's a very simple module that adds a small "?" next to your fields, when editing content in Drupal.

On hover, it shows more information on _how_ this field should be filled.
The information shown is completely customizable and translatable (trough config_translate though... which sadly can
be a challenge sometimes).

It is pretty similar to the field help text you're most likely already used to, but admin_tooltips lets you
be more verbose, as the text is not shown by default (only on hover) and doesn't encumber the interface.

Which is always appreciated by content editors that have a lot of content to write, but can be used as a reminder for some less used content types.
It's also good documentation for new content editors and let onboard them faster.

I added support for composer, so you're now able to install the module like most Drupal modules nowadays.

```bash
# Remove ddev at the beginning if you're not using ddev
ddev composer require 'drupal/admin_tooltips:^1.0@beta' # Downloads the module
ddev drush en admin_tooltips # Enables the module in Drupal
```

# How does it work?

To add a tooltip, you will first need to visit the content type form display management interface.

1. Select the content type first ![The content type selection screen](/images/2024/admin_tooltips/en/1-content-types.png "Content type selection screen")
1. Click on the "manage fields" button on the right then select the "Manage form display" tab at the top. ![Manage form display screen](/images/2024/admin_tooltips/en/2-form-display.png "Manage form display screen")
1. Click on the gear icon, on the right. ![Click on the gear icon](/images/2024/admin_tooltips/en/3-form-display-gear.png "Click on the gear icon")
1. Put anything you want in the tooltip settings. ![Tooltip settings screen](/images/2024/admin_tooltips/en/3-tooltip-settings.png "Tooltip settings screen")
1. When you create or edit content, it will show up next to the field. ![Create article interface](/images/2024/admin_tooltips/en/4-create-article.png "Create article screen")

So, that's it!

We've been using this module for a long time, so I'm happy to see it alive once more instead of the spaghetti of patches we had.
A big thank you to [BAnQ](https://www.banq.qc.ca) to give me [some time to work](https://www.drupal.org/biblioth%C3%A8que-et-archives-nationales-du-qu%C3%A9bec) on this!

Let [me know](/#contact) if this is useful to you! The [issue queue](https://www.drupal.org/project/issues/admin_tooltips?categories=All) is open if you have any questions or feature requests 😀.
