---
title: Set limits docker containers, when using dokku
date: 2022-03-13
category: sysadmin
tags: dokku
slug: limits-docker-containers-dokku
summary: Got a rogue container taking all your CPU on your dokku instance? When using dokku with multi tenants, it makes sense to set some limits.
cover: /images/2022/limit.jpg
pictureCopyrightsText: Rest In Peace Neil Amstrong
pictureCopyrights: https://www.deviantart.com/takemetoanotherplace/art/Rest-In-Peace-Neil-Armstrong-176564426
status: published
language: en
---

If you're using Dokku and Docker for your project, in some cases your docker containers can syphon all the juice from your machine
and it's not really fair for your other containers. They have feelings too, you know.

It's is fairly easy to do with Dokku, but depending on your base Operating System, it varies a little bit.
If you look at the official [documentation](https://dokku.com/docs/advanced-usage/resource-management/), there is a big and very useful warning:

![Excerpt from the documentation](/images/2022/limits-docs.png)

Let me rephrase some of it like this : `Values specified are dependent on the docker scheduler.`

This scheduler can vary a bit from Operating system to another. So this article will talk about the default docker scheduler on Ubuntu 18.04 LTS.

You can set a good variety of [limits](https://dokku.com/docs/deployment/schedulers/docker-local/#supported-resource-management-properties): 


* cpu
* memory
* memory-swap
* network-ingress
* network-egress
* nvidia-gpu


The `cpu` limit is pretty easy to remember :

```
dokku resource:limit <your_app> --cpu 1
```

The `memory` limit need a suffix :

```
dokku resource:limit <your_app> --memory 1g
```

According to the documentation, the default suffix is `m`, for megabyte.

Documentation is a bit light on `network-ingress` and `network-egress`, but it seems to be as simple:

```
dokku resource:limit <your_app> --network-ingress 1g --network-egress 1g
```

For those unfamiliar with the terms, `ingress` means incoming traffic, `egress` means outgoing traffic.

At any time you can your `report` with `dokku resource:report <your_app>`.

Very important
--------------

Don't forget that you need to restart your application for the new values to be applied.

```
dokku ps:restart <your_app>
```

It's also a good hygiene to do it, instead of having a bad surprise at the next automatic deploy of your `<you_app>`.

Have fun!
