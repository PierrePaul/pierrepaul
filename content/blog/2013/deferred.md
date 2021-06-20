Title: Deferred 
Date: 2013-07-09
Slug: deferred
Category: Javascript
cover: images/2013/clock.jpg
PictureCopyrights: http://yellowcandyfloss.deviantart.com/art/Clock-289959263

<p>Je me suis souvent retrouvé dans une situation où je devais gérer plusieurs animations jquery qui dépendaient des autres.
Example classique, je dois cacher 4 div sur 8 et remettre les bonnes classes CSS 'odd' et 'even'. </p>
<p>En temps normal on pourrait penser que ce code ferait le boulot :</p>
<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div5, #div6&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;odd even&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:odd&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;odd&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:even&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;even&#39;</span><span class="p">);</span>
</pre></div>


<p>Mais ça ne marche pas. La fonction hide est une fonction asynchrone. Elle va commencer son boulot et javascript va continuer son travail avant même que hide() soit terminé. Il y a plusieurs solutions à ce problème que l'on rencontre plus souvent pour les appels ajax, mais ma préférée pour l'instant sont les objets différés (deferred) qui sont disponibles en jquery.</p>
<h3>jQuery defered</h3>
<p>Commençons par un exemple:</p>
<div class="highlight"><pre><span class="kd">var</span> <span class="nx">dfo</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span>
<span class="nx">dfo</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div5, #div6&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span>
<span class="p">})</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;odd even&#39;</span><span class="p">);</span>
<span class="p">})</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:odd&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;odd&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:even&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;even&#39;</span><span class="p">);</span>
<span class="p">})</span>
<span class="nx">dfo</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span>
</pre></div>


<p>Nous commençons par créer notre objet différé avec $.Deferred().</p>
<div class="highlight"><pre><span class="kd">var</span> <span class="nx">dfo</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span>
</pre></div>


<p>Cet objet peut être appelé à n'importe comment et il sera utilisé plus tard pour lui assigner les fonctions à executer.</p>
<div class="highlight"><pre><span class="nx">dfo</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div5, #div6&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span>
<span class="p">})</span>
</pre></div>


<p>Nous lui assignons la première fonction à executer. Nous pouvons aussi écrire cet appel de cette manière :</p>
<div class="highlight"><pre><span class="nx">dfo</span><span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div5, #div6&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span>
<span class="p">})</span>
</pre></div>


<p>Dans notre cas par contre, nous avons plusieurs <em>done</em>, alors je trouve plus lisible de le mettre sur une ligne séparée.</p>
<p>Une fois le <em>hide()</em> terminé, et seulement lorsqu'il sera terminé, l'execution passera au prochain bloc.</p>
<div class="highlight"><pre>  <span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;odd even&#39;</span><span class="p">);</span>
<span class="p">})</span>
</pre></div>


<p>De cette manière nous sommes sûr d'assigner les classes <em>odd</em> et <em>even</em> aux bons divs.</p>
<div class="highlight"><pre>  <span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:odd&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;odd&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:even&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;even&#39;</span><span class="p">);</span>
<span class="p">})</span>
</pre></div>


<p>Dans ce cas ci je peux me permettre de faire les deux <em>addClass</em> dans le même bloc, parce que l'un n'est pas dépendant de l'autre.</p>
<div class="highlight"><pre><span class="nx">dfo</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span>
</pre></div>


<p>Et finalement, on part l'execution de notre objet différé.</p>
<h3>Mais Pierre Paul, jQuery te permet de spécifier un <em>callback</em> à hide()</h3>
<p>C'est vrai, mais ce n'est pas le cas de <em>addClass</em>, <em>removeClass</em> et autres. Pour l'instant du moins, CSS3 est plus rapide que jQuery pour faire une animation. C'est moins demandant, mais aussi moins bien supporté par les navigateurs.</p>
<p>De plus, je préfère garder tout les styles directement dans le CSS. Question de garder les pommes avec les pommes et les oranges avec les oranges.
Une autre raison, qui s'applique surtout dans ce cas ci, c'est que le <em>callback</em> va être appelé à la fin de chaque élément :</p>
<div class="highlight"><pre><span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="mi">20</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;div&#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">);</span>
<span class="p">}</span><span class="nx">$</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div3, #div4&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">(</span><span class="mi">1000</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;salut&#39;</span><span class="p">);</span>
<span class="p">});</span>
</pre></div>


<p>Va nous afficher un <em>salut</em> 4 fois plutôt qu'une. C'est une pénalité de performance qui peut être acceptable si les opérations fait dans le callback sont légères, mais c'est inaceptable si on manipule 200 div.</p>
<p>Il y a aussi une question de style aussi :</p>
<div class="highlight"><pre><span class="kd">var</span> <span class="nx">dfo</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span>
<span class="nx">dfo</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div5, #div6&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span>
<span class="p">})</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="c1">// Est appelé qu&#39;une seule fois</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;odd even&#39;</span><span class="p">);</span>
<span class="p">})</span>
<span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:odd&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;odd&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:even&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;even&#39;</span><span class="p">);</span>
<span class="p">})</span>
<span class="nx">dfo</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#div1, #div2, #div5, #div6&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">(</span><span class="mi">1000</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<span class="c1">// Va être appelé lorsque chaque div a terminé son animation</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;odd even&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:odd&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;odd&#39;</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div:even&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;even&#39;</span><span class="p">);</span>
<span class="p">});</span>
</pre></div>


<p>Beaucoup d'autres manières existent. Si vous voulez vous amuser, je vous conseille de toute les <a href="http://tech.pro/blog/1402/five-patterns-to-help-you-tame-asynchronous-javascript">essayer</a>. L'article parle surtout d'ajax, mais on peut l'appliquer dans notre contexte aussi.</p>
