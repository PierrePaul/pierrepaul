---
title: CloudFront
date: 2014-01-13
category: Sysadmin
tags: Amazon
slug: cloudfront
summary: I recently had to calculate expenses for a new big international project. The drupal project needs caching around the world and I was very curious about the Amazon offering, *CloudFront*. Obviously, I have just fallen in love with yet another Amazon solution. I'll go over the good, the bad and ugly points I have found out throughout my research.
cover: images/2014/cloudfront.png
pictureCopyrightsText: Wellsville Mountain January Afternoon
pictureCopyrights: http://nmsmith.deviantart.com/art/Wellsville-Mountain-January-Afternoon-279816917
status: published
language: en
---

I recently had to calculate expenses for a new big international project. The drupal project needs caching around the world and I was very curious about the Amazon offering, *CloudFront*. Obviously, I have just fallen in love with yet another Amazon solution. I'll go over the good, the bad and ugly points I have found out throughout my research.

## Closed source

I was a skeptic, as usual. Every time I try a new all-in-one product (no matter where it comes from) I have a feeling that a custom tailored installation of an open-source solution will end up much better than the said product. Most of the time the product offers a bad interface, is missing important configuration options or just doesn't work at all. I am always looking for open-source solutions around me before going "better-do-that-myself", but closed source solutions like CloudFront scares me the most.

Once again, Amazon proved me wrong. 

No, CloudFront interface is not perfect, but it does a good job. CloudFront lets you cache your content across the world for a very very small fraction of the price you would pay to roll your own CDN. The documentation could be improved, but it works. Like all Amazon's products, the API works most of the time better than the interface. A strong API is always a big plus for everyone like me that loves automating everything.

## Prices

Right now, the first 10GB are 1.20$USD. The price fluctuate from region to region (US and India are not the same price for exemple), but you can configure CloudFront to serve content only from the low-cost locations (called Edge). So if you have less than 10GB of bandwidth transferred each month, it should cost you less than 1.20$USD to have your content cached around the world. Even one micro instance fully-reserved in only one location cost more than that.

## SSL

The only downside I have found so far, are the SSL certificates. You can use your own, but if you do, it will cost you around 20$ per day. It ends up being 600$ per month to have your own certificate. CloudFront provides their SSL if you don't provide yours and this one is free, which is a good alternative if you only want to cache your assets. CloudFront though, supports caching dynamic content and you can configure it to take the cache headers sent from your webserver (called origin).

So in the end, if you want to cache your whole site, you will want to use your own domain name, which won't work with SSL unless you use your own certificates (and pay 600$ per month). Like any product from Amazon though, expect this price to go lower every year.

## Conclusion

In the end, CloudFront is yet another good product from Amazon that needs a good polishing, but works well. At this price and with these performances, I'm ready to use a closed-source alternative and concentrate my time on something else.
