---
title:  ngResource
date: 2014-10-08
category: Javascript
tags: AngularJS
slug: ngresource
summary: ngResource and the JSend format does not mix well together. A small warning and explanation.
cover: /images/2014/ngresource.png
status: published
language: en
---

ngResource is an awesome and very mysterious module for AngularJS. Many people, like me, both build their API and the AngularJS and seem to have some issue about how it works exactly. The documentation on the angularjs is about the module itself, but it's taking into account that your API is already perfect, wich might not be the case if you're the one doing it :).

So let's take the more complete code example from the doc :

```
var CreditCard = $resource('/user/:userId/card/:cardId',
    {
        userId:123,
        cardId:'@id'
    },
    {
        charge: {
            method:'POST',
            params:{
                charge:true
            }
        }
    }
);

var cards = CreditCard.query(function() {
    // GET: /user/123/card
    // server returns: [ {id:456, number:'1234', name:'Smith'} ];

    var card = cards[0];
    card.name = "J. Smith";
    card.$save();

    // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
    // server returns: {id:456, number:'1234', name: 'J. Smith'};

    // our custom method is mapped as well.
    card.$charge({amount:9.99});
    // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
});

// we can create an instance as well
var newCard = new CreditCard({number:'0123'});
newCard.name = "Mike Smith";
newCard.$save();
```

I removed a few comments and added a few spaces and line returns, because I am the kind of guy that thinks that clean code is more important than outdated comments.

With time I think, my eyes learned to ignore the comments and move along, but in this case, the comments are *extremely important*.
The return values explain exactly how your API should behave.

If, again like me, you're a big fan of [JSend](http://labs.omniti.com/labs/jsend), you're out of luck and you're having very important issues. But those issues are not throwing any errors.

Following the example, you probably have something like this :

```
CreditCard.query(function(infos) {
    // GET: /user/123/card
    // server returns: { status:'success', data: [{id:456, number:'1234', name:'Smith'}] };
    var cards = infos['data'];

    var card = cards[0];
    card.name = "J. Smith";
    card.$save();

    // In the POST url you would be missing the id
    // POST: /user/123/card/ {id:456, number:'1234', name:'J. Smith'}
    // server returns: 500
});
```

I have not found a proper solution to this, aside not using the JSend format at all.

So keep it mind, if you make your own API and you're using ngResource, put the JSend format away.
