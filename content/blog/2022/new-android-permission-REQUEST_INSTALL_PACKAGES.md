---
title: New Flutter and Android REQUEST_INSTALL_PACKAGES error
date: 2022-11-10
category: mobile
tags: flutter
slug: flutter-request-install-package-permission
summary: New policy changes introduced this year is now generating errors about a new permission required, called REQUEST_INSTALL_PACKAGES. Let's see what happens and how to fix this.
cover: /images/2022/
pictureCopyrightsText:
pictureCopyrights:
status: draft
language: en
---

Earlier this year Google introduced some policy changes that probably affects a lot of flutter dev at the moment. If your app is suddenly getting rejected at the store because of the permission `REQUEST_INSTALL_PACKAGES`, you're likely affected by the recent policy change.
See this [video](https://www.youtube.com/watch?v=6Jv_eyCgVDg) from Google that I completely missed in April.

So you're likely wondering why all of the sudden your app is getting rejected even if you didn't add any permission recently.

A lot of flutter app on the market are using the [open_file](https://pub.dev/packages/open_file) package. If you don't, maybe one of the package you're using is calling it.
One of the issue(or feature) `open_file`, is the ability to install arbitrary apps
A lot of people are using one
very popular flutter extension called `open_url`.

# The multiple tracks issue

One thing that bit me this week, was the multiple tracks issue. If you have one of the bogus release (a release with the previous open_file extension) in one of your track (like open testing, internal testing, etc), you will fail validation for any new release as well.
https://github.com/Baseflow/flutter-permission-handler/issues/869#issuecomment-1280208815
