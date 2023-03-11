import { h as createVNode, F as Fragment } from './astro.98e1a385.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const html = "<p><img src=\"/media/flappy.gif\" alt=\"flappy\"></p>\n<p>During the holidays I got to have some fun together with <a href=\"https://github.com/JonasRSV\" target=\"_blank\" rel=\"nofollow\">JonasRSV</a> (he is top 0.3 % on a few kaggle competitions and a wonderfully kind human being). He and his friend have developed <a href=\"https://github.com/JonasRSV/flappyMind\" target=\"_blank\" rel=\"nofollow\">flappyMind</a> a genetic algorithm solution for FlappyBird. This approach also provides the corresponding learning curve for each agent in a plot. This way you can see the development of the agents as they traverse the different generations.</p>\n<p>This uses a standard neural network architecture with abstractions for dealing with mutation and inheritance for the different families of generations. The model is trained faster by using the number keys &#x3C;1,..5> for rendering so the progress can be seen from each generation. If you really want to get the high score of flappy bird, just press 0 and it stops to render and just trains; once you feel like the model has been trained enough. Just press whatever rendering button speed you want.</p>\n<p>model is in</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #D8DEE9FF\">$ ls ANNGenetic</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">EvolutionDemoOn2Dfunction.ipynb __pycache__</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">README.md                       ann.py</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">__init__.py                     test.py </span></span></code></pre>\n<p>Rendering uses\n<code>$ cat nnplayer.py</code></p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #D8DEE9FF\">...</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">  MEAN_SCORE</span><span style=\"color: #ECEFF4\">.</span><span style=\"color: #88C0D0\">append</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">mean</span><span style=\"color: #ECEFF4\">)</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">  GEN</span><span style=\"color: #ECEFF4\">.</span><span style=\"color: #88C0D0\">append</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">GENERATION</span><span style=\"color: #ECEFF4\">)</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">  plt</span><span style=\"color: #ECEFF4\">.</span><span style=\"color: #88C0D0\">plot</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">GEN</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\"> MEAN_SCORE</span><span style=\"color: #ECEFF4\">)</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">  plt</span><span style=\"color: #ECEFF4\">.</span><span style=\"color: #88C0D0\">show</span><span style=\"color: #ECEFF4\">()</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">  plt</span><span style=\"color: #ECEFF4\">.</span><span style=\"color: #88C0D0\">pause</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #B48EAD\">0.5</span><span style=\"color: #ECEFF4\">)</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">...</span></span></code></pre>\n<h4 id=\"known-issues\">Known issues</h4>\n<p>If you get a familiar error with (MAC OSX rendering problems :(. ))</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #B48EAD\">2019</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">0</span><span style=\"color: #D8DEE9\">1</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">0</span><span style=\"color: #D8DEE9\">3</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">13</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #B48EAD\">20</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #B48EAD\">45.135</span><span style=\"color: #D8DEE9FF\"> python</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #B48EAD\">44873</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #B48EAD\">3146187</span><span style=\"color: #ECEFF4\">]</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">-</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">SDLApplication _setup</span><span style=\"color: #ECEFF4\">:]:</span><span style=\"color: #D8DEE9FF\"> unrecognized selector sent to instance </span><span style=\"color: #81A1C1\">0x</span><span style=\"color: #B48EAD\">7f824fe98430</span></span>\n<span class=\"line\"><span style=\"color: #B48EAD\">2019</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">0</span><span style=\"color: #D8DEE9\">1</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">0</span><span style=\"color: #D8DEE9\">3</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">13</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #B48EAD\">20</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #B48EAD\">45.139</span><span style=\"color: #D8DEE9FF\"> python</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #B48EAD\">44873</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #B48EAD\">3146187</span><span style=\"color: #ECEFF4\">]</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">***</span><span style=\"color: #D8DEE9FF\"> Terminating app due to uncaught exception </span><span style=\"color: #ECEFF4\">'</span><span style=\"color: #A3BE8C\">NSInvalidArgumentException</span><span style=\"color: #ECEFF4\">'</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\"> reason</span><span style=\"color: #ECEFF4\">:</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">'</span><span style=\"color: #A3BE8C\">-[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430</span><span style=\"color: #ECEFF4\">'</span></span></code></pre>\n<h2 id=\"solution\">Solution:</h2>\n<p>Either skip the backend setup in matplotlib and take the default from MacOSx Mojave 10.14.2 (18C54)\nInstall <code>$ pip install pyqt5</code></p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #D8DEE9FF\">$ </span><span style=\"color: #88C0D0\">echo</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">\"\"</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">></span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">~</span><span style=\"color: #D8DEE9FF\">/.matplotlib/matplotlibrc</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">$ </span><span style=\"color: #88C0D0\">echo</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">\"</span><span style=\"color: #A3BE8C\">backend: Qt5Agg</span><span style=\"color: #ECEFF4\">\"</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">></span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">~</span><span style=\"color: #D8DEE9FF\">/.matplotlib/matplotlibrc</span></span></code></pre>\n<p>Every answer gave me the same solution to my problem. Using TkAgg for backend for matplotlib.\n<a href=\"https://stackoverflow.com/a/34583958/3767229\" target=\"_blank\" rel=\"nofollow\">use-.matplotlibrc</a>\n<a href=\"https://stackoverflow.com/a/34583958/3767229\" target=\"_blank\" rel=\"nofollow\">explicit-use-of-matplotlib.use()</a></p>\n<h2 id=\"edit-2019-03-03\">EDIT: 2019-03-03</h2>\n<p>found and describing same issue.\n<a href=\"https://stackoverflow.com/a/53852328/3767229\" target=\"_blank\" rel=\"nofollow\">qt5-matplotlib</a></p>";

				const frontmatter = {"title":"Genetic algorithm for flappy bird","date":"2019-01-10T22:40:32.169Z","template":"post","draft":false,"slug":"flappymind-genetic","category":"ML","tags":["genetic-algorithm"],"description":"A neural network to play frappy bird with a genetic algorithm with different speeds and watch the progress.","socialImage":"./images/flappy.gif"};
				const file = "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/data/blog-posts/2019-01-10---flappymind-genetic.md";
				const url = undefined;
				function rawContent() {
					return "\n![flappy](/media/flappy.gif)\n\nDuring the holidays I got to have some fun together with [JonasRSV](https://github.com/JonasRSV) (he is top 0.3 % on a few kaggle competitions and a wonderfully kind human being). He and his friend have developed [flappyMind](https://github.com/JonasRSV/flappyMind) a genetic algorithm solution for FlappyBird. This approach also provides the corresponding learning curve for each agent in a plot. This way you can see the development of the agents as they traverse the different generations.\n\nThis uses a standard neural network architecture with abstractions for dealing with mutation and inheritance for the different families of generations. The model is trained faster by using the number keys <1,..5> for rendering so the progress can be seen from each generation. If you really want to get the high score of flappy bird, just press 0 and it stops to render and just trains; once you feel like the model has been trained enough. Just press whatever rendering button speed you want.\n\nmodel is in \n```bash\n$ ls ANNGenetic\nEvolutionDemoOn2Dfunction.ipynb __pycache__\nREADME.md                       ann.py\n__init__.py                     test.py \n```\n\nRendering uses\n`$ cat nnplayer.py`\n```python\n...\n  MEAN_SCORE.append(mean)\n  GEN.append(GENERATION)\n\n  plt.plot(GEN, MEAN_SCORE)\n  plt.show()\n  plt.pause(0.5)\n...\n```\n\n#### Known issues\nIf you get a familiar error with (MAC OSX rendering problems :(. ))\n\n```python\n2019-01-03 13:20:45.135 python[44873:3146187] -[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430\n2019-01-03 13:20:45.139 python[44873:3146187] *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '-[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430'\n```\n## Solution:\nEither skip the backend setup in matplotlib and take the default from MacOSx Mojave 10.14.2 (18C54)\nInstall `$ pip install pyqt5`\n```bash\n$ echo \"\" > ~/.matplotlib/matplotlibrc\n$ echo \"backend: Qt5Agg\" > ~/.matplotlib/matplotlibrc\n```\n\nEvery answer gave me the same solution to my problem. Using TkAgg for backend for matplotlib.\n[use-.matplotlibrc](https://stackoverflow.com/a/34583958/3767229)\n[explicit-use-of-matplotlib.use()](https://stackoverflow.com/a/34583958/3767229)\n\n## EDIT: 2019-03-03\nfound and describing same issue.\n[qt5-matplotlib](https://stackoverflow.com/a/53852328/3767229)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"known-issues","text":"Known issues"},{"depth":2,"slug":"solution","text":"Solution:"},{"depth":2,"slug":"edit-2019-03-03","text":"EDIT: 2019-03-03"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
