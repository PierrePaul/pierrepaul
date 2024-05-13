---
title: flutterup
date: 2024-05-14
category: dev
tags: Flutter
slug: flutterup
summary: There's a lot of changes to the Flutter package in the AUR repo. If you're using Manjaro and your flutter is broken, there's an alternative, `flutterup`!
cover: /images/2024/flutter.jpg
pictureCopyrightsText:
pictureCopyrights: 
status: published
language: en
---

I'm using manjaro, which has a bad reputation in the last years, but I'm also too lazy to reinstall everything, if I
don't need to. I'm also a flutter enthusiast, I'm not using it professionally, so I don't really need to update it that often.

Since this [change though](https://aur.archlinux.org/packages/flutter#comment-963516), Manjaro updates has been breaking up
for me. While I don't really care about flutter updates, having an error message everytime I do a system upgrade is bothering me.

I've stumbled on [flutterup](https://github.com/Decodetalkers/flutterup), which let you install flutter outside the normal
package update. It doesn't let you update or install only the tools you actually need (like the new AUR update), but this one actually
works on Manjaro.

So short version: 

```bash
sudo pacman -Rs flutter
sudo pacman -Syu flutterup
flutterup install
```

You might have an issue when starting Android studio. If you have an error about the dart sdk being unavailable, you can
set this new path : `~/.local/share/flutterup/bin/cache/dart-sdk`.

You can also use `flutterup showconfig` to see where your new flutter is installed.
