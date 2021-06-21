---
title:  Leap motion
date: 2014-05-02
category: /dev/random
tags: Leapmotion, Javascript
slug: leap-motion
summary: I really had a blast testing out the Leap motion, an infrared kinect type controller for the computer. It works on any OS and expose very neat APIs(unlike the kinect).
cover: images/2014/leapmotion.jpg
pictureCopyrights: https://www.leapmotion.com
status: draft
---

At Pheromone we backed the project when it was a kickstarter, but I never had
the time to play with it. I still don't have the time for it, but I had nothing
to play with while watching the hockey game so I gave it a try.

Here are some of my thoughts about it. Keep in mind I tested it on Ubuntu 14.04
and your experience with it might differ if you're using MacOs or Windows.

Installation
===

I was expecting to find a package in the standard ubuntu repository, but I couldn't find anything, so I went to the website.
To download the package you actually have to create an account. Once created you then have to accept a few license terms
that nobody reads. And after figgling again and again you end up with the .tar.gz that contains two .deb package (one for x64 and
i686). The installation of the package was flawless and hinted at a new service installed _leapd_. 

Once the service is running (it should have been automatically started), you
can start having fun and forget the bad form-filling-licence-agreement
experience you just had.
