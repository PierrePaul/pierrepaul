Title: Vagrant
Date: 2013-10-10
Category: Devops 
Tags: Vagrant
Slug: vagrant
cover: images/2013/vagrant.jpg
PictureCopyrights: http://hque1011.deviantart.com/art/The-Wanderer-172001266
PictureCopyrightsText: The Wanderer
Status: draft

Vagrant est ce qu'on appele en bon français, un *wrapper* qui supporte différends types de virtualisation. L'idée principale derrière le projet, est de donner les outils aux développeurs de tester leurs applications sur un environnement se rapprochant le plus possible des serveurs de production. Avec vagrant en place, l'excuse *mais ça marche sur mon poste* ne devrait plus être valide.

Par défaut Vagrant utilise VirtualBox, mais d'autres systèmes (appelés *provider*) peuvent être utilisés, notamment lxc qui est un système de contextualisation.

## Contextualisation et Virtualisation

La différence est flagrante, regardons rapidement chacune des deux options :

**Virtualisation** : l'option la plus facile à mettre en place. Sur un ordinateur personnel, *Virtualbox* est souvent utilisé, sur un serveur vous trouverez plus probablement *kvm*. L'idée de la virtualisation est de mettre un système complet et d'émuler un ordinateur. C'est souvent la solution la plus lente et requiert que les options VT-X du CPU soit exposées. Virtualbox est disponible pour tous les systèmes d'opération, mettant Virtualbox comme la meilleure option pour Vagrant.

**Contextualisation** : une option plus difficile à mettre en place, selon votre système d'opération. C'est l'option la plus rapide, plutôt que d'émuler un système complet, il tente de rouler le système d'exploitation en utilisant les ressources du système d'exploitation courrant. Les options de contextualisation sont souvent réservées aux différentes version de linux.
