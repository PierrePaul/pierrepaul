Title:  Tiling window manager (twm) - i3
Date: 2015-08-27
Category: Sysadmin
Slug: i3wm
Summary: I've recently switched to a tiling window manager called i3 (or i3wm). Here are my thoughts so far.
cover: images/2015/i3wm.png

A good friend of mine([Aurelien](http://www.kerunix.com)) has been trying to convince me from a long time to try tiling window manager. After trying a few, I didn't find the value in it. It was either unstable or as slow as a bigger window manager (like Unity or gnome3). And most of all, it broke my work flow.

I can learn and get used to a new work flow, but it's a pain in the ass if it's unstable on top of it. Recently though, I've seen i3wm pop up in the news (mostly Reddit to be frank) and decided to to give it a shot.

I am pleasantly surprised to see how stable and complete it is. For those of you who might now know what a tile window manager is, let me rewind a bit.
Application Windows in an operating system needs what we call a _window manager_ to, I'm sure you guessed already, _manage_ the container holding the application (called _windows_).
In other words, when you start Firefox, the operating system (Windows or Ubuntu, etc.) puts the application in a container called _window_. The Window Manager takes care of resizing, full screen or minimizing the container.

So, getting back to i3wm, it includes a few utilies along side the main window manager. To name only a few: i3lock, i3nag and i3status. 

i3lock
====

Not really surprising, i3lock is a simple lock screen. It has a quite fancy _typing animation_. Characters are hidden (not even stars are displayed) but a small green light pulse on key press. It also pulses red by default when using the backspace key. As I said, it is simple. Custom wallpaper or background color can be set when invoking it.

![i3status](/images/2015/i3wm-lock.png)

Most (I dare not say all) screen lockers or password fields will display stars for each characters. When you think about it, it made sense in 81' *maybe*, when you had password 3 or 4 characters length. You could actually count the stars and know right away if you had forgotten a character. Nowadays though, password are closer to pass phrases (thankfully). Counting characters doesn't make much sense anymore. So, i3lock brings a nice idea. Not displaying characters (as stars) but having visual feedback is pretty cool.

i3nag
====

This can be compared to a command launcher. Displayed at the top, it lets you launch application. It also has auto completion that works pretty well. You can also use i3nag to display message or confirmation dialog. The default configuration file for i3 show a simple example for it :

```
i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit...'
    -b 'Yes, exit i5' 'i3-msg exit'
```

Again, very simple and useful.

![i3status](/images/2015/i3wm-nag.png)

i3status
=====

Small bar with working notification panel. Hides when you put a window in full screen. Also displays all the workplaces containing windows. The bar can be customized to display only information you care about. Here is a sneak peak at my status bar config (~/.i3status.conf):

```
general {
        colors = true
        interval = 5
}

# order += "ipv6"
order += "disk /"
# order += "run_watch DHCP"
# order += "run_watch VPN"
order += "wireless wlan0"
# order += "ethernet eth0"
order += "battery 0"
order += "load"
order += "tztime local"

wireless wlan0 {
        format_up = "W: (%quality at %essid) %ip"
        format_down = "W: down"
}

ethernet eth0 {
        # if you use %speed, i3status requires root privileges
        format_up = "E: %ip (%speed)"
        format_down = "E: down"
}

battery 0 {
        # format = "%status %percentage %remaining"
        format = "%status %percentage"
}

run_watch DHCP {
        pidfile = "/var/run/dhclient*.pid"
}

run_watch VPN {
        pidfile = "/var/run/vpnc/pid"
}

tztime local {
        format = "%Y-%m-%d %H:%M:%S"
}

load {
        format = "%1min"
}

disk "/" {
        format = "%avail"
}
```

You can see I'm not using *eth0* but I want info about *wlan0*.

![i3status](/images/2015/i3wm-status.png)

It's not Unity
====

Don't expect i3wm to be as full featured as Unity. Transparency for example is not supported by default, but can be enabled via different other utilities (which has been the Unix philosophy  since it's inception). i3lock is installed but if you don't want to call it manually each time, you will need to create a binding for it yourself.

i3wm supports floating windows to some extent at least. In some rare case google/firefox tried opening up a new window (most of the time via an unwanted pop up) and everything seemed to be frozen. Leaving full screen from the parent window fixes this right away. So before manually restarting or killing X, try leaving full screen mode of the your active window.

The config
====

Like _i3status.conf_, the main configuration is plain text and doesn't need to recompile the window manager. I'm not going to copy my whole configuration, but here is the small added parts:

```
bindsym $mod+h focus left
bindsym $mod+j focus down
bindsym $mod+k focus up
bindsym $mod+l focus right
```

By default i3wm uses _jkl;_, but being a hardcore vim fan, I really needed to switch this to _hjkl_.

```
bindsym $mod+Up exec --no-startup-id pactl set-sink-volume 0 +10%
bindsym $mod+Down exec --no-startup-id pactl set-sink-volume 0 -10%
```

Always fun to have control over the sound aside from the command line. My base system is Ubuntu, so I'm using PulseAudio. You might have a different _sink_ id (mine is 0). You can list all your sinks to get the proper id with : 

```
pacmd list-sinks
```

Those shortcuts are the i3lock shortcuts I was talking about earlier :
```
bindsym $mod+Shift+p exec i3lock -c 000000
bindsym $mod+Shift+s exec i3lock -c 000000 && sudo pm-suspend
```

And some little utilities I want to be started at the same time as i3wm:

```
exec --no-startup-id dunst
exec --no-startup-id nm-applet
exec --no-startup-id compton
exec --no-startup-id nitrogen --restore
```

_dunst_ manages notification. _nm-applet_ is notification application that helps switch network configuration (eth0 instead of wlan0, etc.). _compton_ gives you a false (and efficient) transparency effect on terminals and the like. _nitrogen_ manages wallpaper, for each screen.


Conclusion
===

If you like command line, you will like window tiling managers. Give it a try at least, to satisfy your thirst of knowledge. [_i3wm_](http://www.i3wm.org) is a nice one, but there is a lot more of them around.
