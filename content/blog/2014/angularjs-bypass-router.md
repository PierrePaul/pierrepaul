Title:  Bypass AngularJS route provider
Date: 2014-05-21
Category: Javascript
Tags: AngularJS
Slug: bypass-angularjs-route-provider
Summary: Thanks to #angularjs, I've found a gem in the google groups. I was trying to bypass the route provider from AngularJS. I was trying to make an oauth2 call to Google from the server side, but AngularJS was preventing the redirection everytime.
cover: images/2014/card-trick.jpg
PictureCopyrightsText: Card trick by apfe
PictureCopyrights: http://apfe.deviantart.com/art/Card-trick-72246923

Thanks to #angularjs, I've found a gem in the google groups. I was
trying to bypass the route provider from AngularJS. I was trying to make an
oauth2 call to Google from the server side, but AngularJS was preventing the
redirection everytime.

Normally you should do everything from the AngularJS side, but I think I have a
valid excuse to make it server-side. The trick to bypass the route provider
from AngularJS is to put a simple *target="_self"* in your *a* tag.

Example :

        <a href="/please-angularjs-dont-route-this" target="_self">Goto</a>

Neat isn't it? I haven't found anything about this in the documentation, but it
was in an obscure reply on the Google groups of AngularJS.
