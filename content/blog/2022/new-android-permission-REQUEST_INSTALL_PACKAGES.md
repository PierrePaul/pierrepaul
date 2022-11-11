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

Earlier this year Google introduced a new permission called REQUEST_INSTALL_PACKAGES. A lot of people are using one
very popular flutter extension called `open_url`.

# The multiple tracks issue

One thing that bit me this week, was the multiple tracks issue. If you have one of the bogus release (a release with the previous open_file extension) in one of your track (like open testing, internal testing, etc), you will fail validation for any new release as well.
https://github.com/Baseflow/flutter-permission-handler/issues/869#issuecomment-1280208815
