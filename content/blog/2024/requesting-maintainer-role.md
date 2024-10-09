---
title: How to become a co-maintainer for an existing Drupal module
date: 2024-10-08
category: drupal
tags: Zombieland
slug: become-maintainer-drupal-module
summary: Let's be honest, there's lot of Drupal modules out there that would need some clean up and some porting to Drupal 10 or Drupal 11. Let's see how you can help.
cover: /images/2024/code.jpeg
pictureCopyrightsText: I have no idea why there's so many people and what they are looking at. I also have no idea why there's someone doing a presentation by himself in the back. The eyes are so creepy. Thanks AI.
pictureCopyrights: 
status: published
language: en
---

There's a lot of Drupal modules out there that need some love. It's a bit sad to be honest, it feels like zombie land.
There's still a lot of awesome modules out there still supported and kicking ass, but a lot of them needs love.

There's a module I like, [admin_tooltips](https://drupal.org/projects/admin_tooltips) that we use a lot at work, like 21 other people according to the stats.
Across the years we piled up quite a few issues and merge requests that were left unattended, so this summer I decided I would try to become co-maintainer and see if I can change the fate of the module.
So here's my story!

It all started with a message on the #contribute channel, on the [Drupal slack](https://www.drupal.org/slack) (I highly recommend that you join!).
I asked how I should proceed with my plan. Some people were thinking the open-source way, fork the project and resubmit
under a new name. While I really like the idea of not having to wait and filling paperwork and just moving forward, fast,
it will end up making the zombie land situation worst.
Then a very nice person pointed me out to the [official doc](https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/maintainership/offering-to-become-a-project-owner-maintainer-or-co-maintainer/how-to-become-project-owner-maintainer-or-co)!
That's lot of text that tries to be very thorough, which is great, but here's a quick rundown:

- Open a new ticket in the issue queue of module that you want to maintain.
- Use the following template for the title : Offering to maintain [PROJECT_NAME].
- Describe why you want to maintain the module (I'm using it at work. They are interested in sponsoring the development, for example).
- Look at the current maintainers profile of the module. They might have the Contact tab enabled, which sends them an e-mail.
You can basically copy-paste what you put into the issue queue at this point.
- The waiting game begins, any maintainers have 14 days to respond to the request. If they have abandoned the module, they are likely to never respond.
- Once the 14 days are done, you can move the issue into the _Drupal.org project ownership_ in the project field.
- Make sure to add a link of the module page in the issue to facilitate the work of whoever is going to pick up the issue.
- Project moderators will likely try the contact tab again of all the existing maintainers, so the 14 days wait time restarts again.
- If you don't have any news after those new 14 days, leave a comment to show you're still interested.

So the whole process takes roughly a month. Keep in mind that the maintainer could also reply, refuse, or give you limited
permissions. In my case I was given co-maintainer role, which is sadly not enough to publish a new release and update the 
module page. 

Now I'm waiting for my permissions to be elevated, so I can make a proper release, add support for Drupal 10 and Drupal 11, add support for composer.
Which basically means restarting the 30 days process... let's see how it goes!
