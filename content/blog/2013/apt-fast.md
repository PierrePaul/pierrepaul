Title: Apt-fast 
Date: 2013-07-03
Slug: apt-fast
Category: Sysadmin
cover: images/2013/lightning.jpg
PictureCopyrights: http://daxxe.deviantart.com/art/Lightning-Power-208734013

<p>Si vous travaillez sur une plateforme ubuntu ou si vous avez des serveurs ubuntu, beaucoup trop souvent vous avez à faire <code>apt-get install mon_super_package_x</code>. À la longue, vous perdez beaucoup moins de temps que ceux qui compilent leur propres paquets, mais c'est du temps qui s'empile petit peu à petit peu.</p>
<p>Je suis recemment tombé sur une petite application nommé <em>apt-fast</em>. Un peu comme les "download accelerators" du bon vieux temps, apt-fast sectionne le téléchargement de chaque fichier en petits morceaux qui peuvent être téléchargés de plusieurs sources. L'application utilise les mêmes sources qui sont définies dans apt-get.</p>
<h3>Installation</h3>
<p>Dans un terminal:</p>
<div class="highlight"><pre>apt-get install apt-fast
</pre></div>


<h3>Configuration</h3>
<p>Par défaut, apt-fast télécharge avec 5 connexions concurrentes, personnellement je monte ce chiffre à 25 et si vous êtes sur Amazon EC2 c'est même recommandé de monter ça à 35.</p>
<div class="highlight"><pre>vi /etc/apt-fast.conf
<span class="nv">_MAXNUM</span><span class="o">=</span>25
</pre></div>


<p>Si vous êtes aussi paresseux que moi, vous allez aussi vouloir que apt-fast soit toujours appelé plutôt que apt-get :</p>
<div class="highlight"><pre><span class="nb">echo</span> <span class="s2">&quot;alias apt-get=&#39;apt-fast&#39;&quot;</span> &gt;&gt; ~/.bashrc
</pre></div>


<p>Pour plus de détails et voir un exemple de configuration plus complêt, je vous suggère cette page sur <a href="http://askubuntu.com/questions/231950/how-do-i-optimize-apt-fast-with-amazon-web-services-aws-mirrors">StackOverflow</a></p>
