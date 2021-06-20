Title:  htop
Date: 2014-10-22
Category: Sysadmin
Tags: utils
Slug: htop
Summary: On visite ou re-visite un petit utilitaire très utile : *htop*. Notament les fonctions strace et lsof.
cover: images/2014/htop.png

Tout le monde connait le petit utilitaire qui s'appele *top*. Cette petite application vous permet de lister sur un système linux quelles applications sont présentement en cours d'exécution et combien de ressource chacune des applications consomment. Certains par contre, ne connaissent pas encore *htop*.

On peut considérer *htop* comme étant *top*, mais sur stéroides. L'application permet, entre autre, de voir aussi la charge de chacun des processeurs. On note aussi au premier coup d'oeil l'utilisation de couleurs qui permet facilement de détectés quelles applications consomment trop de ressources.

Il faut savoir cependant, que *htop* permet de faire beaucoup plus.

### strace

Pour ceux qui ne sont pas familier (et je vous envie) avec *strace*, c'est une application qui permet de voir les appels systèmes (system calls) en temps réel d'un processus.
Ca permet de voir (plus ou moins facilement) si votre processus est pris dans une boucle infinie.

Si vous avez *strace* d'installé, vous pouvez choisir un processus dans la liste et appuyer sur la touche *s*. L'interface va changer pour *strace* tout en gardant le contexte de *htop*.

![htop en mode strace](/images/2014/htop-strace.png)

F4 (ou F8, selon votre plateforme) vous permet de faire le scroll automatiquement.

### lsof

*lsof* comme *strace*, est une petite application très utile pour trouver des problèmes d'un processus, mais au niveau des fichiers. *lsof* permet de lister tous les fichiers en cours d'utiilsation par le processus sélectionné.

Toujours à partir de la liste des processus, vous pouvez sélectionner un processus et appuyer sur *l* pour lister les fichiers (ou sockets) utilisés.

![htop en mode lsof](/images/2014/htop-lsof.png)


### Conclusion

Comprendre *strace* (et accessoirement *lsof*) est plus complexe, mais au moins vous avez un outil simple et rapide qui vous aide à comparer les données importantes.
