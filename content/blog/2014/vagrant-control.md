Title:  Vagrant-Control
Date: 2014-09-21
Category: Contribution
Tags: Python, AngularJS, Flask
Slug: vagrant-control-mp47
Summary: Vagrant-Control is a project I have been working on for the past year. It's web UI to control a small cluster of Vagrant projects with many providers out of the box (vsphere/vmware, lxc, virtualbox, etc).
cover: images/2014/vagrant-control.jpg

I have been working on Vagrant-Control for almost 8 months now and the project is starting to shape up into something really great. For those who missed my session at Montreal-Python last year(or last june), Vagrant-Control is a Flask/AngularJS web application coupled with 3 microapplications (*nginx-api*, *htpasswd-api* and *vagrant-worker*). Vagrant-Control & friends let you manage a _cluster_ of vagrant machines with ease. Vagrant can be used with LXC/VMWare and get almost the same performance as bare metal servers, and this is where VagrantControl really shines. 

You might think this is overkill for VirtualBox machines, but Vagrant can also be used with LXC, AWS (Amazon Web Services) and/or vSphere/Fusion (VMWare), and this is where VagrantControl really shines. Aside the VirtualBox provider, Vagrant can get very very good performance. Having a tool to manage this seemed really important to us and open up the door to a multiple Cloud-based vendors solution within the same virtual _cluster_.

Here is a short description of each applications, keep in mind that each application opens up a REST API and can be called without Vagrant-Control:

## nginx-api

Creates and manage proxy sites. Can also be used with *htpasswd-api* to force BASIC AUTH on a site. Keep in mind that the server using this API will also be used as the proxy for *every* vagrant site/machine. Right now it can be used with SSL but the keys and certificates options are limited for now.

## htpasswd-api

Simply manages htpasswd file creation and updates. It also lists all the htpasswd available so *nginx-api* can use it to protect one(or more) site. The created/updated files needs to be shared with the nginx-api/nginx server.

## vagrant-worker

The core behind it all, it starts/stops/status Vagrant machines. It is also used to retrieve the IP of the machines. It currently does not use the global-status feature introduced in 1.6 (https://docs.vagrantup.com/v2/cli/global-status.html), but will do in the next big rewrite. One nice thing with small microapplications, you never really mind rewriting them from scratch to make them better.

## Vagrant-Control

And the final piece, Vagrant-Control. It's small Flask project that gives you a nice web interface to manage all the other APIs.

Here is a few screenshots of the application :

### Link a domain to an internal IP via the nginx-api

![Link a domain to an IP](/images/2014/vagrant-control/create-domain.png)

### Create a new machine, from a public git repository.

![Create a new machine](/images/2014/vagrant-control/create-machine.png)

### Start the machine. Also works with multi-machines setup.
![Start the machine](/images/2014/vagrant-control/start-lxc.png)

### Manage simple htpassword files.
![Manage htpassword file](/images/2014/vagrant-control/htpassword.png)

## Open-Source

I hope you like it! The project is, of course, open-source and can be found at [vagrant-control.com](http://vagrant-control.com). A big thank you to [Pheromone](http://www.pheromone.ca) to invest so much time in this idea.

Right now the login only works with Google Accounts and you will need to create your OAuth keys. If you have any questions or need any help, don't hesitate to [contact me](https://www.pierre-paul.com/#contact)!
