---
title: Interesting Drupal issue queue tickets
date: 2024-07-09
category: Drupal
tags: Drupal, Open-source
slug: interesting-drupal-issue-queue-tickets
summary: I don't follow enough initiatives on the Drupal project, but here's a few tickets I do follow! 
cover: /images/2024/binoculars.webp
pictureCopyrightsText:
pictureCopyrights: 
status: published
language: en
---

I'm doing my best to watch any Drupalcon sessions recording, but I have to admit, I could do a better job at getting
involved in the tickets and the initiatives.

There are still a few tickets that I'm following, even if I'm not actively contributing to them. I figured it might be interesting to other people, so here it is!

### [Allow specifying default props values when opting an SDC in for XB](https://www.drupal.org/project/experience_builder/issues/3452397)

This one was closed this morning! It allows you to specify default value for props in your brand new shiny Single Directory components. It's meant to be
used in the new Experience Builder initiative, but everyone can benefit from this, once backported into Drupal Core. The [interesting PR](https://git.drupalcode.org/project/experience_builder/-/merge_requests/63/diffs#a3623cce4d184762b4733618a86061e519fea6b9).

### [500 error with JSONAPI on Base Entity Fields](https://www.drupal.org/project/field_permissions/issues/3411976)

We recently started doing some experimentations with the JSONAPI core module and we stumbled on an already reported bug.
When making filters on base entity fields (like promote=true or sticky), it would crash the request. The proposed patch works well for us.

### [Wrong language field labels after `drush cr` because of Drush language negotiation](https://www.drupal.org/project/drupal/issues/3221375)

This one is kind of a mess. In some random cases, when working on the BAnQ site, the `drush cex` command would export the configuration in french. It's super hard to reproduce 
consistently, so it's hard to say if the patch works (or even if it's actually doing something...).

### [FilterHtmlImageSecure filters out valid local svg images](https://www.drupal.org/project/drupal/issues/2855653)

This one is fun. If I recall correctly, it was preventing us from uploading SVG images (so we could reuse it in the content). It's working well for us.
The momentum seems to have died a bit on this one even though it's almost complete. I should probably lock some personal time and help it cross the finishing line.

### [Multiple IDP Support](https://www.drupal.org/project/samlauth/issues/3088092)

I actually contributed to this one, but the patch is so out of date now... It's my own fault for never finishing it up correctly.

## User dashboard

Drupal.org user dashboard is pretty useful to keep track of tickets. Just hit the follow-star icon!

![Follow the ticket on drupal.org](/images/2024/follow.png)
