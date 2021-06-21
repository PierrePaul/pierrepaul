---
title: RecentActions with custom models
date: 2020-02-25
category: django
tags: contenttypes, grappelli
slug: grappelli-recentactions-custom-models
summary: You would like to show the recent actions on your custom models, but the docs is not very clear how. Let's see how!
cover: /images/2020/contenttypes.png
status: published
language: en
---

The [RecentActions class](https://django-grappelli.readthedocs.io/en/latest/dashboard_api.html#the-recentactions-class) from Grappelli is really cool to show the latest actions on models, but the documentation doesn't really go in details on how to use the `exclude_list` and `include_list` with your custom models.

The `RecentActions` uses the `contenttypes` framework from django. If it's your first time using (directly at least), it might seems a bit weird. 
The rules seems to go as follow :
- lowercase app name
- lowercase model name
- no space

So let's say you have a `myapplication.models.SuperComment` model, it would become `myapplication.supercomment`. To make sure it's really the case, fire up your favorite shell :

```bash
python migrate.py shell
```

```python
from myapplication.models import SuperComment
from django.contrib.contenttypes.models import ContentType
ct = ContentType.objects.get_for_model(SuperComment)
print(f'{ct.app_label}.{ct.model}')
```

There you go!
