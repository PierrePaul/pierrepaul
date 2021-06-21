---
title:  Rasa Core/NLU
date: 2018-09-13
category: python
tags: Natural Language Understanding
slug: rasa-core-nlu
summary: I've been working for the past 4 months with Rasa Core and Rasa NLU. I've become a fan boy and I'd like to show you how simple and fun it is.
cover: /images/2018/robot_by_matmoon.jpg
pictureCopyrightsText: Robot by batmoon
pictureCopyrights: https://www.deviantart.com/matmoon/art/Robot-107177620
status: published
language: en
---

So, for the past 4 months I've been working on a conversational bot, with Rasa Core and Rasa NLU. 

## What's Rasa Core/NLU?

So Rasa is separated in two different very important modules.

*NLU* is the part that translate user submitted text into intents. 
By training *NLU*, sending `yeah for sure` can be translated into the intent `affirm`.
Keep in mind that you are responsible for the training (and naming the resulting intent).

The *Core* part is the one deciding what to do when it gets a new intent. Let's see this simple example:

```md
* greet
  - utter_greet_intro
```

This is a story file. When someone sends the intent *greet*, it's going to respond with the action named *utter_greet_intro*.
Actions, and their templates, are defined in what we call a domain file. It looks like this :

```md
actions:
  - utter_greet_intro
intents:
  - greet
templates:
  utter_greet_intro:
    - text: "Hi! How are you?"
```

The *intents* keyword specify which intents you are expecting from your user. In our case, *greet*.

The *actions* keyword specify all the possible actions. In our case, it's a simple action that prints a template, but you can call any python code.

## Storing variables

Variables in Rasa Core are named _Slots_. Most of the time you will need to create a custom Python Action to fill the Slot. With proper NLU training you don't have to, but I usually feel it's safer this way. From python code you can access the last entered text with : 

```python
last_message = tracker.latest_message.parse_data['text']
```

And then fill the slot by having your action return a SlotSet:

```python
return [SlotSet('name', last_message)] 
```

## tl;dr

Rasa Core and Rasa NLU are two awesome solutions to build custom and complex bots. It comes bundled with a lot of stuff (Facebook Messenger Connector, Twilio, etc.) which can be activated most of the time with a flag and properly set configuration (Facebook credentials in a config file, etc.).

Documentation is not great, but not bad either. I wish sometimes it was more exhaustive, but to be frank, the code is super clean and easy to follow.

If you need a conversational bot that needs to do a little more than "hi - hello!" and you don't mind working in python, give Rasa a try!
