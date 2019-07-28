(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{233:function(n){n.exports=JSON.parse('{"data":{"tag":{"title":"osx","belongsTo":{"edges":[{"node":{"title":"Genetic algorithm for flappy bird","path":"/genetic-algorithm-for-flappy-bird","date":"10. January 2019","timeToRead":2,"description":"A neural network to play frappy bird with a genetic algorithm with different speeds and watch the progress.","coverImage":{"type":"image","mimeType":"image/gif","src":"/assets/static/flappy.07cc2b7.e0a1b53.gif","size":{"width":860,"height":538},"sizes":"(max-width: 860px) 100vw, 860px","srcset":["/assets/static/flappy.a67b0b2.e0a1b53.gif 480w","/assets/static/flappy.07cc2b7.e0a1b53.gif 860w"],"dataUri":"data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 860 538\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-10\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'10\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-10)\' width=\'860\' height=\'538\' xlink:href=\'data:image/gif%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAoCAYAAABOzvzpAAAACXBIWXMAAAPoAAAD6AG1e1JrAAABkklEQVRo3u3TSU/CUBAH8HIDb3oxMS5spaUsXWgfZSubiCiRGA/GePD7f4q/7w2CJnoy8WD4H15m3nQ6nfySWipUGE8yZPMFJtMl2kGCtD9BFPd1rpB0R2i0Ywyza6l7zQ6m85VEcx%2bNF3C9EPPFPYJOT94zuakNRnM49QCXRRdX5TqKZU9HT6LkpTpKUt8e01fc3/U7JQdnFxU9w0cQdrFcPeDl9Q2PT88IohST2S1ulmt5br6r0ky%2be3u3kb3M/v3hDLEaojeY6hmp9A6zNVpthfMrG9YmDrHZKJT8Cuyqi2rN%2bXbsmvvjqdg1ibse6bc/%2b03ebPnoxAp%2bEEmMoljHBLHOA11Lki5CXQvCjl7KlzxONLxK0Wi2ZcZ%2bruPCrTfguJ7UTJRcP6tUa3qfbd8uft11N0f2/ribWdbpybFOmrAs6%2bBOIV8w0cKhnkLhCFYulyPAf1j2L/b8VwD5fJ6/AAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCDAbwDeAWEWQir2juI%2bAAAAAElFTkSuQmCC\' /%3e%3c/svg%3e"},"content":"<p>During the holidays I got to have some fun together with <a href=\\"https://github.com/JonasRSV\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">JonasRSV</a> (he is top 0.3 % on a few kaggle competitions and a wonderfully kind human being). He and his friend have developed <a href=\\"https://github.com/JonasRSV/flappyMind\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">flappyMind</a> a genetic algorithm solution for FlappyBird. This approach also provides the corresponding learning curve for each agent in a plot. This way you can see the development of the agents as they traverse the different generations.</p>\\n<p>This uses a standard neural network architecture with abstractions for dealing with mutation and inheritance for the different families of generations. The model is trained faster by using the number keys &#x3C;1,..5> for rendering so the progress can be seen from each generation. If you really want to get the high score of flappy bird, just press 0 and it stops to render and just trains; once you feel like the model has been trained enough. Just press whatever rendering button speed you want.</p>\\n<p>model is in </p>\\n<pre class=\\"language-bash\\">$ <span class=\\"token function\\">ls</span> ANNGenetic\\nEvolutionDemoOn2Dfunction.ipynb __pycache__\\nREADME.md                       ann.py\\n__init__.py                     test.py </pre>\\n<p>Rendering uses\\n<code class=\\"language-text\\">$ cat nnplayer.py</code></p>\\n<pre class=\\"language-python\\"><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n  MEAN_SCORE<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>mean<span class=\\"token punctuation\\">)</span>\\n  GEN<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>GENERATION<span class=\\"token punctuation\\">)</span>\\n\\n  plt<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span>GEN<span class=\\"token punctuation\\">,</span> MEAN_SCORE<span class=\\"token punctuation\\">)</span>\\n  plt<span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n  plt<span class=\\"token punctuation\\">.</span>pause<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span></pre>\\n<h1 id=\\"known-issues\\"><a href=\\"#known-issues\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Known issues</h1>\\n<p>If you get a familiar error with (MAC OSX rendering problems :(. ))</p>\\n<pre class=\\"language-python\\"><span class=\\"token number\\">2019</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">01</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">03</span> <span class=\\"token number\\">13</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">45.135</span> python<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">44873</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">3146187</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">-</span><span class=\\"token punctuation\\">[</span>SDLApplication _setup<span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> unrecognized selector sent to instance <span class=\\"token number\\">0x7f824fe98430</span>\\n<span class=\\"token number\\">2019</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">01</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">03</span> <span class=\\"token number\\">13</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">45.139</span> python<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">44873</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">3146187</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">**</span><span class=\\"token operator\\">*</span> Terminating app due to uncaught exception <span class=\\"token string\\">\'NSInvalidArgumentException\'</span><span class=\\"token punctuation\\">,</span> reason<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\'-[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430\'</span></pre>\\n<h2 id=\\"solution\\"><a href=\\"#solution\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>Solution:</h2>\\n<p>Either skip the backend setup in matplotlib and take the default from MacOSx Mojave 10.14.2 (18C54)\\nInstall <code class=\\"language-text\\">$ pip install pyqt5</code></p>\\n<pre class=\\"language-bash\\">$ <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"\\"</span> <span class=\\"token operator\\">></span> ~/.matplotlib/matplotlibrc\\n$ <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"backend: Qt5Agg\\"</span> <span class=\\"token operator\\">></span> ~/.matplotlib/matplotlibrc</pre>\\n<p>Every answer gave me the same solution to my problem. Using TkAgg for backend for matplotlib.\\n<a href=\\"https://stackoverflow.com/a/34583958/3767229\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">use-.matplotlibrc</a>\\n<a href=\\"https://stackoverflow.com/a/34583958/3767229\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">explicit-use-of-matplotlib.use()</a></p>\\n<h2 id=\\"edit-2019-03-03\\"><a href=\\"#edit-2019-03-03\\" aria-hidden=\\"true\\"><span class=\\"icon icon-link\\"></span></a>EDIT: 2019-03-03</h2>\\n<p>found and describing same issue.\\n<a href=\\"https://stackoverflow.com/a/53852328/3767229\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">qt5-matplotlib</a></p>\\n"}}]}}}}')}}]);