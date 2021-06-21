---
title:  Phaser Virtual Joystick
date: 2016-01-24
category: Javascript 
tags: Phaser.io, Typescript
slug: phaser-virtual-joystick
summary: I've recently started a new personal game and needed a virtual joystick implementation. Here it is, free of all rights.
cover: images/2016/desktop.jpg
language: en
status: published
---

I had way too much time on my hands while being on vacation for christmas, so I decided to make a new game. This new one
is called _ast-roid_ (working title, everybody calls it ass-droid, so it will be changed soon :)).

For now, it's a real time multi-player spaceship 2d game. I'm still not sure where it's going, but it's going to be fun. 

So, this game is meant to be played in the browser, but also on mobile devices, so I needed a virtual joystick.

Phaser [sells a version of a virtual joystick](http://phaser.io/shop/plugins/virtualjoystick) that seems awesome. This is an easy way to
help fund the development of an awesome library, but sometimes you want to learn and build it yourself.

My version is made in Typescript, as I wanted to learn more about it (more to come on that). You can get it [on Github](https://gist.github.com/PierrePaul/e6d623f136efc3f8bb14).
It's not a plug and play solution and doesn't use Phaser plugin system, but I'm sure it can be useful to get you started.

The code given on Github and the code below are free of all rights and be considered public domain.

![AstRoid virtual joystick](/images/2016/joystick-ingame.png)

The joystick expects 2 images preloaded by the preload step called : 'hud-control-field' and 'hud-control-stick'.
The joystick has four public boolean attributes : *isUp*, *isRight*, *isLeft*, *isDown*.
This implementation doesn't return the vector force, but it should be pretty easy to add.

Here is how I use it :
```typescript
/// <reference path="../lib/phaser.d.ts"/>
/// <reference path="../lib/socket.io.d.ts"/>
/// <reference path="stick.ts"/>

module AstRoidGame {
    controlStick: ControlStick;
    export class Hud extends Phaser.Group {
        constructor(game: Phaser.Game) {
            this.controlStick = new ControlStick(this.game, this, 0, this.game.height);
            this.controlStick.update = ()=> this.moveShip();
        }
        moveShip() {
            if(this.controlStick.isUp){
                this.playerShip.tryThrust();
            }
            if(this.controlStick.isRight){
                this.playerShip.tryRotateRight();
            }
            if(this.controlStick.isLeft){
                this.playerShip.tryRotateLeft();
            }
        }
    };
};
```

I can't publish the images with it, because of the licence, but the hard part is now behind you :).
