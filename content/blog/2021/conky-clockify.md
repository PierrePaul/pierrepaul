---
title: Outputing clockify data into conky
date: 2021-01-24
category: /dev/random
tags: concky clockify
slug: conky-clockify
summary: Using clockify on a daily basis, I find it useful to show to my timesheet directly on my desktop using conky.
cover: /images/2021/conky.png
status: published
---

Conky
=====

Conky is a nice linux utility that display real time information to your desktop. I've taken a liking to manjaro-i3 variant and it has been enabled by default for a long time. It comes with a few different themes, we will make a copy of the maia theme to add the clockify report.

Clockify
========

[Clockify](https://clockify.me) is a good and cheap solution your track time online. You can manage your team, have reports shared publicly (so your client can now in real time how much time has been spent) and even the pro features are pretty cheap, if you ever need them.

i3
==

I'm using i3, so the first steps will cover i3 specifically. With manjaro-i3, by default the conky is started inside `~/.i3/config`. Somewhere in your config file you will find `start_conky_maia`. This bash script starts two conky file, one for the shortcut and another one for the things we actually care about, live informations. We want to replace the theme file with our own, so it doesn't get overwritten in the next update.


```bash
cp /usr/share/conky/conky_maia ~/conky_theme
```

In your `~/.i3/config`, change the following call :

```bash
exec --no-startup-id start_conky_maia
```

For this one :
```bash
exec --no-startup-id conky -c ~/conky_theme
```

The fun part
============

Let's get into the fun part now, you will need some utilities I made open source to get the data out of clockify :

```bash
git clone git@git.fixrs.ca:pierrepaul/clockify.git <your favorite place to store your projects>/clockify
cd <your favorite place to store your projects>
pip install -r requirements.txt --user
```

You will need to generate your access key in clockify: https://clockify.me/user/settings

Then create new `config.py` file at root of the project and put it there :

```bash
token = '<your token>'
```

We will also need the workspace id (wid) and your user id (uid) to generate your report, so run this :

```bash
python info.py
```

And put those values in `config.py`:

```python
# config.py
token = '<your token>'
wid = '<your workspace id>'
uid = '<your user id>'
```

Now open up your conky theme and at the bottom, before the closing `]]`, add this call:

```bash
${execpi 300 python <your path>/clockify/report.py}
```

That's it! You should have something close to the image at top. Don't hesitate to play with transparency to make it more readable.
