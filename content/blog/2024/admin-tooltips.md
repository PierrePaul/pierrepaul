---
title: Admin tooltips
date: 2024-10-23
category: Drupal
tags: Drupal, module, open-source
slug: admin-tooltips
summary: Make your Drupal admin editing a little more fluid and consistent with the admin tooltips module.
cover: /images/2024/
pictureCopyrightsText:
pictureCopyrights: 
status: published
language: en
---

In a [previous post](https://pierre-paul.com/blog/become-maintainer-drupal-module) I was mentioning I was trying the maintainer status on one Drupal module.
This module is [Admin Tooltips](https://www.drupal.org/project/admin_tooltips) and we were finally able to make a new release that supports
Drupal 10 and Drupal 11 🎉.


# What is Admin tooltips?

It's a very simple module that adds a small "?" next to your fields, when editing content in Drupal. On hover, it shows more information
on _how_ this field should be filled. The information shown is completely customizable and translatable (trough config_translate though... which sadly can
be a challenge sometimes).

I added composer.json, so you're able to install the module with composer, like most Drupal modules nowadays.

# How does it work?


