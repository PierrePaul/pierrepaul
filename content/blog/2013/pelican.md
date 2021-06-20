Title: Pelican 
Date: 2013-07-01
Tags: Python
Slug: pelican 
Category: /dev/random
cover: images/2013/pelican.jpg
PictureCopyrights: http://poseidonsimons-s.deviantart.com/art/pelican-surfing-62018714 

<p>Bon, pour les habitués, vous aurez remarqué que ce blogue a une allure quelque peu différente. Pour le plaisir, j'ai décidé de jouer un peu avec <a href="http://blog.getpelican.com/">Pelican</a> qui est un générateur de HTML (oui, du HTML pur). Ca peut sembler très bizarre, de nos jours, de vouloir mettre de côté un système comme Wordpress Drupal ou même Django qui sont plus ou moins (selon la solution) fait pour remplir les besoins d'un simple blogue comme celui ci. </p>
<p>C'est cependant un choix logique, rien n'est plus rapide qu'une page HTML simple. Un autre problème que je voyais souvent en utilisant une solution spécialisée, c'était la maintenance. À l'origine, un blogue devrait permettre de créer des articles, de les publier ou non et d'afficher en liste chacun de ses articles. </p>
<p>Mon point important, c'est que le système doit permettre l'ajout et la modification d'articles rapidement et facilement. Dans mon cas, je suis un avide fan de <a href="http://en.wikipedia.org/wiki/Vim_(text_editor)">Vim</a>, alors c'est beaucoup plus naturel pour moi d'écrire mes articles directement dans Vim plutôt que dans la navigateur. Vim me permet d'écrire plus rapidement et avec moins de distractions.</p>
<blockquote>
<p>Oui, mais c'est pas très pratique d'écrire du code HTML dans un éditeur de texte...</p>
</blockquote>
<p>Exactement, c'est pour cette raison que Pelican supporte le format <a href="http://en.wikipedia.org/wiki/Markdown">Markdown</a> et <a href="http://en.wikipedia.org/wiki/ReStructuredText">ReST</a>. Les deux formats se ressemblent, c'est vraiment une question de choix personnel, de mon côté j'ai une préférence Markdown. À noter ici, je n'ai pas choisi Pelican à cause de Markdown et ReST, parce que c'est deux formats sont aussi supportés par les grandes plateformes comme Wordpress et Drupal.</p>
<p>Chaque article Pelican correspond à un fichier sur disque et, par le fait même, peut être versionné via <a href="http://en.wikipedia.org/wiki/Git_(software)">Git</a> ou n'importe quel autre système de versionnage de code. Plus besoin de garder un backup de la base de données ET des fichiers, tout le monde est à la même place :). Lors d'un appel en ligne de commande, les fichiers HTML seront générés à partir du thème.</p>
<h3>Thèmes</h3>
<p>Plusieurs thèmes sont disponibles. Beaucoup sont très simples (ou très laid), mais si vous aimez bien ce thème, il est disponible sous le <a href="https://github.com/getpelican/pelican-themes">repo officiel</a> sous le nom de html5-dopetrope, tiré (avec beaucoup d'inspiration du design de <a href="http://html5up.net/dopetrope/">html5up-dopetrope</a>). Je suis présentement le "maintainer" du thème, mais n'hésitez pas à faire un fork et l'ajuster selon vos besoins :).</p>
<h3>Les côtés négatifs</h3>
<p>Pelican n'a pas de système de commentaires. Les utilisateurs de Pelican se tournent généralement vers un système externe pour les commentaires, comme <a href="http://www.disqus.com">Disqus</a>. Ne l'ayant pas mis en place encore, il m'est difficile de commenter sur ce système.</p>
<p>C'est un système qui fonctionne seulement en ligne de commande. Ce n'est pas pour tout le monde.</p>
<p>Aucun système gratuit, comme drupalgardens ou wordpress.com, ne fonctionne officiellement avec "Pelican", mais étant du HTML, je suis sûr que c'est possible de trouver.</p>
<p>Difficile de faire fonctionner deux langues, mais pas impossible.</p>
<h3>Quelques côtés possitifs</h3>
<p>Je pense assez avoir vanté Pelican pour cet article, mais au cas où:</p>
<ul>
<li>Peut rouler sur n'importe quel type de serveur, incluant un petit amazon EC2 t1.micro. Je vais faire un article plus tard sur amazon.</li>
<li>Versionnage sur Git de tout le site.</li>
<li>Permet d'ajouter et d'éditer les articles directement et facilement.</li>
<li>Vient avec plusieurs scripts préfaits et configurables afin de faciliter la mise à jour sur le serveur.</li>
<li>Déplace le "bottleneck" de la performance au niveau front-end et au niveau du serveur.</li>
</ul>
<h3>Conclusion</h3>
<p>Créer un thème sur Pelican n'était pas une partie de plaisir. Peut-être lié à mon manque d'expérience, mais il m'était difficile de débuggué le contenu de chaque variable. Pelican étant open-source et en python, il était quand même facile de fouiller dans le code et de comprendre la structure de chaque variable, mais ce n'était pas plaisant. Pour l'instant, j'adore Pelican. Déjà quand le blogue étant en Drupal, j'écrivais chacun de mes articles dans Vim en format Markdown. Je fesais ensuite la traduction en HTML manuellement parce que je n'étais jamais satisfait de la conversion automatique markdown &gt; HTML. C'était long, pénible et presqu'à chaque fois que j'écrivais un article, je devais mettre à jour mon installation (parce qu'un profesionnel, ça garde son installation Drupal à jour) ;).</p>
<p>Pour la postérité, voici la page d'accueil de l'ancien système:
<div class="image">
<img src="/static/images/2013/liteweb-old.png" />
</div></p>
