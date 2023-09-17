---
title: Second day at Drupalcon Pittsburgh 2023
date: 2023-06-06
category: Drupal
tags: Open Source
slug: second-day-drupalcon-pittsburgh-2023
summary: Second day in Pittsburgh!
cover: /images/2023/
status: draft
language: en
---

Algorithms of oppression
------

algorithims

People are searching for themselves on google. Black girl should not return (only, mainly) pornography.
When private companies uses algorithms that are biaised, those private companies gets bigger and ends up with political influence,
which ends up with diverting resources where it would be needed.
Hard to know if the black people needs help if only porn is returned by a search.
As a person, we need to think twice when we answer people "just google it".
Predictive analytics will just widen the gap between the low classes. Using predective analytics, you can determine the success rate
of a student,
- lives on campus
- does not work at the same time (parents have money)
- parents have higher education
By using predictive analytics, lower classes people are targeted by those analytics and might be kicked out of a program faster, since their success rate is lower.
Which just make the thing worse, lower classes people are stuck in this loop for forever.

How can we fix it:
- take responsibility for what you're building
- do we need to create this thing, what are the implications of this thing?
- design with justice in mind

things to read:
- race after technology
- data feminism
- content (by kate eichhorn)
- design justice

Published book gave an outline of things to change within Google, which they at least partially fixed.

We should be applying the same regulatory we use for the drugs than for IT. We would never let 3 guys in a mall roll drugs then sell it at CVS country-wide, but we're doing exactly that
with software (exemple given was the program that calculates rates of black people going back to prison after being released).

Advanced caching
------------

Cache rendered markup, important to remember
Cache contexts let you decide when the cache needs to be rebuilt (if something has changed, you want to invalidate the cache). 
You can provide a max-age, in milliseconds, to your caching context. The default is -1. So your cache will be invalidated when there's a manual cache clear or when something triggers a cache clear with the proper cache tags.
Metadata bubbling is an important concept to be aware of. Imagine a tree structure, leaf being the smallest component (like an image tag). When metadata is configured on the leaf, it will bubble up to top of the tree (so the page inherits the image caching metadata).
This includes max-age when bubbling. If you set a max-age of 0 on an image tag, it will set the max-age to 0 on the whole page that contains the image tag. Max-age 0 means un-cachable.
You should avoid using cache variation per user, as it makes the caching systems pretty useless.

--- to be completed
There's a few different layers of caching in the drupal ecosystem: 
- layers
  - big pipe
  - dynamic page cache
  - X - went too fast
----

When using an external CDN, if you're setting your caching tags correctly, you should be able to call the API of whatever CDN you're using and the data should be invalidated correctly.
Placeholders are great and are a good alternative to max-age=0.
When you start getting cache issues, clients will get the habit of clearing the whole cache of the site all the time. You don't want that.

Contexts to avoid: user, path, session, url, url.query_args. If you really need to cache by query_args, you can use user.query_args:some_arguments instead.
For a good example of caching placeholders, see status messages.
In your services.yml (or better, development.services.yml), you can enable debug settings to have more information about the caching informations:
 - parameters.http.response.debug_cacheability_headers : true
 - renderer.config:
   - debug: true will add caching infos directly in html comments

In production, you can use https://www.drupal.org/project/cache_metrics to send your caching statistics into NewRelic.
You can destroy your caching is so many easy ways, this is amazing.
By default views will cache by tags, but has no idea really which tags to use, so will very likely use tags that are too broad.
Time based caching in views doesnt work, because it doesnt remove the tags (issue open in core).
When using sorting, you're sorting by random, expect your caching to not work, obviously.
This neat little module https://www.drupal.org/project/views_custom_cache_tag let you define your own caching tags in your views.
Make sure you monitor your cache tags and the max string length. Many web servers, CDN and other caching softwares (varnish for exemple), 
have a maximum length for header strings. Which means if you have too many caching tags sets, you might crash apache or disable your caching (varnish).
Creating your own custom tags might be worth and is simpler than many thinks.

Women in tech keynote at the same time as the lunch.

Progressive Decoupling: best of both world?
------------

So you still want to use the drupal frontend and backend, but you want to leverage other technologies in some small parts of your website.
We're not talking about headless here.
When and what to decouple actually depends on your team working on the site. The less your team is proficient with Drupal, the more gain you're going to be doing.
Case study, Inline entity form module was working fine, but then the client started asking for conditional on the parent form.
https://www.contentacms.org/

Habits of an Effective Drupal Contributor
---------

Be a nice human
the end.


Assume positive intent, be inclusive, abide by the drupal code of conduct
https://lb.cm/effective-contrib
