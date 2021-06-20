Title: Ajouter le nom du backend dans Varnish
Date: 2013-12-03
Category: Varnish
Tags: Sysadmin
Slug: nom-backend-varnish
Summary: Petit truc pour ajouter le nom du backend utilisé par Varnish lors de sa requête. Ça prend malheureusement un peu d'imagination pour réussir ce petit truc vraiment utile. Cet article devrait rendre le tout plus simple.
cover: images/2013/problems.pnb
PictureCopyrights: http://tooga.deviantart.com/art/Problems-332896150
Status: draft

## Pourquoi ?

Parfois vous avez des problèmes avec une seule machine qui est derrière un serveur Varnish. Vous utilisez peut-être un director de type round-robin ou même random, donc c'est pas toujours évident de savoir quel backend génère l'erreur en cours.

La solution qui pourrait paraître simple, est d'ajouter le nom du backend dans les headers de retours. En fouillant un peu, vous allez vous rendre compte que le nom du backend est disponible via beresp.backend.name, mais le module beresp est seulement disponible dans le vcl_fetch_ tandis que les headers sont disponibles 

## beresp.backend.name


