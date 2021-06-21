---
title:  Python gotcha
date: 2015-10-29
category: Python
slug: python-gotcha
summary: Got bitten recently by a hard to find gotcha (not a bug, just something that you need to keep in mind). I invite you to read further, so you don't loose your time too!
cover: /images/2015/python-gotchas.jpg
pictureCopyrightsText: Cat Snake by nakitez
pictureCopyrights: http://nakitez.deviantart.com/art/Cat-snake-263535345
status: published
language: en
---

A few weeks ago, I stumbled on a very hard to find bug while working on [Kickoff Legends](https://www.kickofflegends.com).
To explain correctly the issue, I need to start with a simplier version.

Imagine this:

```python
def get_status(item):
    if item is None:
       item = {}
    return item.get('status', 1)
```

This seems pretty simple and you won't find a bug in there.
Coming from other languages though, you might have the reflex to write it like this:

```python
def get_status(item={}):
    return item.get('status', 1)
```

Python veterans will understand right away. *`item={}`* is called only the first time. The *`dict`* will be assigned a memory space in the ram and it will be fixed on subsequent calls.
On single threaded, single process application, you might never see a bug, but on application running concurrent requests, it becomes obvious there is a bug _somewhere_.

Now, let's see the actual gotcha I wanted to talk about :

```python
class Player:
    positions = []
    current_position = None

    def move(self, position):
        self.positions.append(position)
        self.current_position = position
        return self
```

You will see exactly the same bug.

```python
player1 = Player()
player1.move('go front')
player2 = Player()
player2.positions
>>> ['go front']
```

So in this case, the proper way to write it would be :

```python
class Player:
    def __init__(self):
        self.positions = []
        self.current_position = None

    def move(self, position):
        self.positions.append(position)
        self.current_position = position
        return self
```

There you go! One _easy_ way to test for it, is to check the memory allocation per variable. You could also use an IDE like PyCharm in debugging mode. Memory space are printed next to variables when running in debugging mode.

```python
player1 = Player()
id(player1)
>>> 139828555449984
```
