---
title: My first Drupal contrib module
date: 2022-03-27
category: drupal
tags: drupal, coding, php
slug: my-first-drupal-contrib-module-zookeeper
summary: Even though I have been working with Drupal for more than 10 years, I have never published an open-source contrib module. Today I did.
cover: /images/2022/zookeeper.png
status: published
language: en
---

This is silly. For more than 10 years I've been working with various versions of Drupal.

I have put my personal time in Drupal, but it was never related to code directly.

I was an administrator of a non-profit  trying to make events in Montreal, about Drupal
(DrupalMTL). I've given my time to help others get into Drupal for free. I have given
sessions at small drupalcon or PHP/Tech conferences to help promote the product.

It's all wonderful and good ways to get involved and help the community, but as a full time developer, it always felt weird. I excel at coding at day,
but end up giving my time to do a "people job" at night/weekends.

I have very rarely contributed patches (didn't find much issues either, that goes hand in hand), and I have never contributed **my own contrib module**, until today.

This weekend I decided I would find an idea, no matter how silly, and get my first contrib module out there.

I'm not sure you are aware, but maintaining an open-source project is a lot of stress. Given the recent pandemic and personal stuff going around, I didn't want to add
even more stress to my life.

So if I could come up with a very ~~stupid~~ silly idea, it would be even better.

The less likely people are going to use the module, the less likely I'm going to get issues, right?

# Zookeeper

Ever heard of [ZooKeeper](https://zookeeper.apache.org/)? The awesome project often used with kafka?
Well I do and my contrib module is **not** related at all with it.

My project is called [Zookeeper](https://www.drupal.org/project/zookeeper) just because it translate animal strings into emojis...
So it's what we call in the Drupal world, a Filter Input Plugin. You type words (like dog, cat, elephant, zebra) and it changes the words by their 
emojis equivalent (🐕, 🐈, 🐘, 🦓) when displaying the content.

...

I told you it would be silly.

...

At the moment, the module doesn't support translations (chat, chien).

It also doesn't support plural really well (dogs will end up with 🐕s).

So yeah, at least now I can say I have a [module out there](https://www.drupal.org/project/zookeeper)!
Let's see if it gets flagged as spam now...
