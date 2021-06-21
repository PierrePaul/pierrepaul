---
title:  Rasa, part 2
date: 2018-12-28
category: python
tags: Natural Language Understanding
slug: rasa-core-nlu-part-2
summary: The honeymoon is over, after many months, let's review rasa nlu+core (0.11.x) as it is right now.
cover: /images/2018/sad-robot.png
pictureCopyrightsText: The Robot with the stuffed Rabbit by issabissabel
pictureCopyrights: https://www.deviantart.com/issabissabel/art/The-Robot-with-the-stuffed-Rabbit-413625229
status: published
---

Last [article]({filename}/articles/2018/rasa.md) I mentioned I really loved Rasa (let's focus on Rasa Core 0.11.x) and I think I still do, but having developed a real application with a real life use case, I've found many glaring issues.

What do you mean, user retention?
---------------------------------

So, here is the [issue](https://github.com/RasaHQ/rasa_core/issues/1306). To make a short version, they don't actually care about user retention. They have a mechanism in place to launch actions in the future, but if the server crash (or worse, a new version is deployed), all future actions are lost forever. When your bot is working on Facebook and depends on those future actions to make a follow up with your users, it means losing your customers.

Long version, Rasa Core uses the excellent raspscheduler with the `default` job store, which uses a `MemoryJobStore`. As you can guess, puts future action in memory, meaning loosing everything when restarting server. I've raised the issue on the forum in october, ended up in github, has been assigned multiple times to different people, no news.

You can try hacking your way into it and try to change the job store to something else backed by a `RedisJobStore`, but you will find yourself dealing with countless issues about unserializable objects.

But the sad thing is....

It might not even be relevant anymore
-------------------------------------

RasaCore development is so fast that you have drastic breakable changes every 4 months. Which means that, at the time of writing, the future actions system maybe has been completely overhauled and I'm whining about this for nothing. That means your new awesome project literally has a 4 months shelf time. You won't get any updates or any help beyond that (if they keep up that pace). So right now, even if the platform is cool and fun to work with, but I can't recommend it for any project.

I don't actually want a conversational bot
------------------------------------------

That's a thing that really happened to me. Clients don't actually want a conversational bot, they want a bot that can follow a script and stick to it. They don't want a cool-bot-made-with-neural-networks to try to guess what the script should look like. The client will provide you with a mind-map and you need to stick to the script. When making a bot that can (and will) handle life threatening situation, you can't have the bot starting laughing when a user tells him he wants to commit suicide. And sadly, that's pretty much how Rasa is designed from the core. 

It's still a clean and fun platform to work with, but I really can't recommend it at this stage of development to any serious project.
