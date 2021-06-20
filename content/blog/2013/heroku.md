Title: Heroku 
Date: 2013-06-18 
Category: DevOps
Tags: Python
Slug: heroku 
cover: images/2013/heroku.jpg

<p>Depuis environ 6 mois que je cherche une bonne solution devops qui serait assez flexible et assez puissante pour n'importe quel type de projet, tout en restant abordable. 
Un peu par hasard, je suis tombé sur <a href="http://get.heroku.com">Heroku</a>. J'avais déjà vu le nom passer dans les mailing lists et dans les nouvelles reliées au devops, mais il n'y a que 24 heures dans une journée et je ne lui ai pas donné le temps qu'il méritait. </p>
<p>Je commence par un bémol tout de suite, afin de vous évitez de perdre du temps, Heroku ne supporte pas officiellement PHP. Heroku est une belle plateforme pour le développeur qui veut faire du python sans avoir à apprendre comment configurer apache pour servir ses sites. C'est aussi parfait pour le petit développeur pauvre qui cherche une solution pas cher (c'est gratuit, pour 1 serveur). Je ne recommanderais pas le système pour de la production (ceux qui le font, ont beaucoup de fonds).</p>
<h2>Installation</h2>
<p>L'installation est simple, pour Ubuntu : </p>
<div class="highlight"><pre>wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
</pre></div>


<p>MacOS : https://toolbelt.heroku.com/download/osx</p>
<h2>Première utilisation</h2>
<p>Dans un terminal</p>
<div class="highlight"><pre>heroku login
</pre></div>


<p>L'application, en command line, vous demandera les informations de connexion aux services de heroku. Ces informations seront sauvegardées afin d'éviter de les rentrer à chaque appel.</p>
<h2>Mon premier projet python (flask)</h2>
<p>Toujours en terminal, naviguer jusqu'à votre projet et taper <em>heroku create</em>. C'est lors du déploiement qu'Heroku détecte le type de projet (ruby, nodejs, python) que vous utilisez.</p>
<div class="highlight"><pre><span class="nb">cd </span>monprojet
heroku create
</pre></div>


<p>On veut ensuite utiliser virtualenv pour installer nos packages. 
On veut aussi installer Flask et gunicorn qui va nous servir de serveur pour livrer nos pages.</p>
<div class="highlight"><pre>virtualenv venv
<span class="nb">source </span>venv/bin/activate
pip install Flask gunicorn
</pre></div>


<p>Créons ensuite notre première application flask, bonjour.py :</p>
<div class="highlight"><pre><span class="kn">import</span> <span class="nn">os</span>
<span class="kn">from</span> <span class="nn">flask</span> <span class="kn">import</span> <span class="n">Flask</span>

<span class="n">app</span> <span class="o">=</span> <span class="n">Flask</span><span class="p">(</span><span class="n">__name__</span><span class="p">)</span>

<span class="nd">@app.route</span><span class="p">(</span><span class="s">&#39;/&#39;</span><span class="p">)</span>
<span class="k">def</span> <span class="nf">bonjour</span><span class="p">():</span>
<span class="k">return</span> <span class="s">&#39;Bonjour tout le monde!&#39;</span>
</pre></div>


<h2>Configuration de gunicorn</h2>
<p>Pour faire fonctionner gunicorn, il est essentiel de créer un fichier <em>Procfile</em> à la racine du projet qui va déterminer quelle application flask sera roulée par défaut :</p>
<div class="highlight"><pre>web: gunicorn bonjour:app
</pre></div>


<h2>Packages</h2>
<p>Heroku supporte nativement la gestion des packages (ou paquets) via pip. Étant donné que nous roulons flask, nous devons avoir au moins Flask de défini dans notre fichier requirements.</p>
<div class="highlight"><pre>pip freeze &gt; requirements.txt
</pre></div>


<h2>Les déploiements</h2>
<p>Heroku utilise git pour faire les déploiements. Simple, efficace, un simple <em>push heroku master</em> vous permet d'initialiser votre serveur et de démarrer les services requis. Donc, pour ce faire, nous allons initialiser notre git ainsi qu'ignorer le dossier de virtualenv.</p>
<div class="highlight"><pre><span class="nb">echo</span> <span class="s2">&quot;venv\n*.pyc&quot;</span> &gt; .gitignore
git init
git add .
git commit -am<span class="s2">&quot;Commit initial&quot;</span>
heroku create <span class="c">#va ajouter le remote heroku à notre configuration git</span>
git push heroku master 
heroku ps:scale <span class="nv">web</span><span class="o">=</span>1 <span class="c">#active 1 serveur web</span>
</pre></div>


<p>Heroku permet d'ajouter autant de serveur web que nous voulons, mais attention, le plan gratuit de heroku inclus seulement 750 heures serveurs web (dyno). Un serveur web régulier qui roule 24 heures sur 24 pendant un mois, prend un peu moins de 745 heures. Donc, si vous ajouter un deuxième serveur web, attendez-vous à payer.
Une autre note importante qui n'était pas claire pour moi, c'est 750 heures <em>par</em> application, non pas par compte. Vous pouvez donc avoir plusieurs applications sur le plan gratuit d'Heroku.</p>
<p>Pour vérifier si votre serveur roule bien (et pour avoir l'url) :</p>
<div class="highlight"><pre>heroku ps
heroku open
</pre></div>


<p>Ou encore pour voir les logs :</p>
<div class="highlight"><pre>heroku logs
</pre></div>


<p>Dans le prochain article je vais expliquer comment ajouter une base de données postgresql à notre application :)
Dans ce prochain article nous allons aussi voir comment ajouter notre propre nom de domaine. "fjord-123.herokuapps.com" est peu sexy et ne fait pas très professionnel.</p>
<h2>Conclusion</h2>
<p>Heroku est vraiment une très belle plateforme, mais j'ai des doutes sur l'utilisation d'Heroku pour un projet avec plusieurs développeurs. Avez-vous des commentaires? Avez-vous déjà utilisé heroku dans un tel scénario?</p>
