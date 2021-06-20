---
title: Using loaddata properly
date: 2020-05-05
category: /dev/random
tags: 
slug: template
summary: 
cover: /images/2016/
pictureCopyrightsText:
pictureCopyrights: 
status: draft
---


python manage.py dumpdata --indent 2  --exclude auth.permission --exclude contenttypes --natural-foreign > /home/pierrepaul/fermecormier.json

