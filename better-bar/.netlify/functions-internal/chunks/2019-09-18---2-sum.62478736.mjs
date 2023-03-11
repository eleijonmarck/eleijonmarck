import { h as createVNode, F as Fragment } from './astro.98e1a385.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const html = "<h1 id=\"2sum---why-it-is-such-a-good-question\">2sum - why it is such a good question</h1>\n<h2 id=\"2sum\">2sum</h2>\n<p>Given an array of random elements <code>[1, -8, 1, 2, 36, -24]</code> and a target <code>10</code>\nYou are to write an algorithm to get the target from two of the elements of the given array and return their respective index as an sorted array.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #D8DEE9FF\">target </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">10</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">nums </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">8</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">12</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">3</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">6</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">2</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">4</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">output </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #B48EAD\">4</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">6</span><span style=\"color: #ECEFF4\">]</span></span></code></pre>\n<h3 id=\"first-solution---naive-approach\">First solution - Naive approach</h3>\n<p>To start we iterate of the array once to get the first element of the two.\nMeaning we will have a pointer from the beginning of the array to the end of the array.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> i </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)):</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    first_number </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #88C0D0\">print</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">first_number</span><span style=\"color: #ECEFF4\">)</span></span></code></pre>\n<p>This approach means that we take the first element of the array. Adding another iteration to look for another element of the array is a bit more complicated since we have to take care of the two pointers and what they are looking at.\nFirst iteration, we need to take care of that the last element will be looked at from the second iteration. But how do we combine the two?</p>\n<blockquote>\n<p>But how do we combine the two?</p>\n</blockquote>\n<p>We combine the iterations by having the first index going into the second iterations. Meaning the second iterations starts of where the first iteration start plus one index forward.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> i </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)):</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> j </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">i </span><span style=\"color: #81A1C1\">+</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)):</span></span></code></pre>\n<p>First pointer <code>i</code> starts from the beginning, but since we now have a second pointer <code>j</code> also looping through the array; this <code>j</code> will go all the way to the end. However the first pointer does not need to go to the end of the array since we have <code>j</code> taking care of that now.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #616E88\"># first iteration will start in the beginning</span></span>\n<span class=\"line\"><span style=\"color: #616E88\"># i ends at next last element</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">nums </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">8</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">12</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">3</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">6</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">2</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">4</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">        i</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\">...</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\">       i</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> i </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">-</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">):</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #616E88\"># j goes from the pointer of i upto the end of the array</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">nums </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">8</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">12</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">3</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">6</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #81A1C1\">-</span><span style=\"color: #B48EAD\">2</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #B48EAD\">4</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">           j</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\">...</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\">      j</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> j </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">i </span><span style=\"color: #81A1C1\">+</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)):</span></span></code></pre>\n<p>The whole operation with checking if the two elements actually match for the target can now be calculated given the looping of the array; as we are now iterating over each possible outcome of the array.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #616E88\"># O(n)</span></span>\n<span class=\"line\"><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> i </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">-</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">):</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #616E88\"># O(n)</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> j </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">i </span><span style=\"color: #81A1C1\">+</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #B48EAD\">1</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)):</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">        </span><span style=\"color: #81A1C1\">if</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">]</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">+</span><span style=\"color: #D8DEE9FF\"> nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">j</span><span style=\"color: #ECEFF4\">])</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">==</span><span style=\"color: #D8DEE9FF\"> target</span><span style=\"color: #ECEFF4\">:</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">            </span><span style=\"color: #81A1C1\">return</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">,</span><span style=\"color: #D8DEE9FF\">j</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"><span style=\"color: #81A1C1\">return</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[]</span></span></code></pre>\n<p>Time and space complexity of the algorithm is n^2 due to the fact that we have a nested for loop of the entire array, but no external variables that we are saving.</p>\n<blockquote>\n<p>time: O(n^2)\nspace: O(1)</p>\n</blockquote>\n<hr>\n<h1 id=\"second-approach\">Second approach</h1>\n<p>What if we could reduce the time but use some more space? This is where we will be using a hashmap of the values that we have seen already to calculate the missing element we would want in order for us to get to the target given the current element we are on.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #2e3440ff; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #D8DEE9FF\">seen_nums </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">{}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #81A1C1\">for</span><span style=\"color: #D8DEE9FF\"> i </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #88C0D0\">range</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #88C0D0\">len</span><span style=\"color: #ECEFF4\">(</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">)):</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    diff </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> target </span><span style=\"color: #81A1C1\">-</span><span style=\"color: #D8DEE9FF\"> nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #81A1C1\">if</span><span style=\"color: #D8DEE9FF\"> diff </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> seen_nums</span><span style=\"color: #ECEFF4\">:</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">        </span><span style=\"color: #81A1C1\">return</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">seen_nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">]],</span><span style=\"color: #D8DEE9FF\"> i</span><span style=\"color: #ECEFF4\">]</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">    </span><span style=\"color: #81A1C1\">if</span><span style=\"color: #D8DEE9FF\"> nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">]</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">not</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">in</span><span style=\"color: #D8DEE9FF\"> seen_nums</span><span style=\"color: #ECEFF4\">:</span></span>\n<span class=\"line\"><span style=\"color: #D8DEE9FF\">        seen_nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">nums</span><span style=\"color: #ECEFF4\">[</span><span style=\"color: #D8DEE9FF\">i</span><span style=\"color: #ECEFF4\">]]</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #81A1C1\">=</span><span style=\"color: #D8DEE9FF\"> i</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #81A1C1\">return</span><span style=\"color: #D8DEE9FF\"> </span><span style=\"color: #ECEFF4\">[]</span></span></code></pre>\n<h1 id=\"todo\">TODO:</h1>\n<h1 id=\"write-the-two-pointer-method-and-the-hash-method\">write the two pointer method and the hash method</h1>";

				const frontmatter = {"title":"Data structures and algorithms - 2sum","date":"2019-09-18T22:40:32.169Z","template":"post","draft":false,"slug":"2-sum","category":"algorithms","tags":["data-structures","algorithms","leetcode"],"description":"Data structures and algorithms - 2sum","socialImage":""};
				const file = "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/data/blog-posts/2019-09-18---2-sum.md";
				const url = undefined;
				function rawContent() {
					return "\n# 2sum - why it is such a good question\n\n## 2sum\nGiven an array of random elements `[1, -8, 1, 2, 36, -24]` and a target `10`\nYou are to write an algorithm to get the target from two of the elements of the given array and return their respective index as an sorted array.\n\n```python\ntarget = 10\nnums = [1,-8,12,3,6,-2,4]\n\noutput = [4,6]\n```\n\n### First solution - Naive approach\nTo start we iterate of the array once to get the first element of the two.\nMeaning we will have a pointer from the beginning of the array to the end of the array.\n\n```python\nfor i in range(len(nums)):\n    first_number = nums[i]\n    print(first_number)\n```\nThis approach means that we take the first element of the array. Adding another iteration to look for another element of the array is a bit more complicated since we have to take care of the two pointers and what they are looking at.\nFirst iteration, we need to take care of that the last element will be looked at from the second iteration. But how do we combine the two?\n\n> But how do we combine the two?\n\nWe combine the iterations by having the first index going into the second iterations. Meaning the second iterations starts of where the first iteration start plus one index forward.\n```python\nfor i in range(len(nums)):\n    for j in range(i + 1, len(nums)):\n```\n\nFirst pointer `i` starts from the beginning, but since we now have a second pointer `j` also looping through the array; this `j` will go all the way to the end. However the first pointer does not need to go to the end of the array since we have `j` taking care of that now.\n```python\n# first iteration will start in the beginning\n# i ends at next last element\nnums = [1,-8,12,3,6,-2,4]\n        i,...,       i\n\nfor i in range(len(nums) - 1):\n\n\n# j goes from the pointer of i upto the end of the array\nnums = [1,-8,12,3,6,-2,4]\n           j,...,      j\n\n    for j in range(i + 1, len(nums)):\n```\n\nThe whole operation with checking if the two elements actually match for the target can now be calculated given the looping of the array; as we are now iterating over each possible outcome of the array.\n\n```python\n# O(n)\nfor i in range(len(nums) - 1):\n    # O(n)\n    for j in range(i + 1, len(nums)):\n        if (nums[i] + nums[j]) == target:\n            return [i,j]\nreturn []\n```\n\nTime and space complexity of the algorithm is n^2 due to the fact that we have a nested for loop of the entire array, but no external variables that we are saving.\n\n> time: O(n^2)\n> space: O(1)\n\n---\n\n# Second approach\nWhat if we could reduce the time but use some more space? This is where we will be using a hashmap of the values that we have seen already to calculate the missing element we would want in order for us to get to the target given the current element we are on.\n\n```python\nseen_nums = {}\n\nfor i in range(len(nums)):\n    diff = target - nums[i]\n\n    if diff in seen_nums:\n        return [seen_nums[nums[i]], i]\n    if nums[i] not in seen_nums:\n        seen_nums[nums[i]] = i\n\nreturn []\n```\n\n# TODO:\n# write the two pointer method and the hash method\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"2sum---why-it-is-such-a-good-question","text":"2sum - why it is such a good question"},{"depth":2,"slug":"2sum","text":"2sum"},{"depth":3,"slug":"first-solution---naive-approach","text":"First solution - Naive approach"},{"depth":1,"slug":"second-approach","text":"Second approach"},{"depth":1,"slug":"todo","text":"TODO:"},{"depth":1,"slug":"write-the-two-pointer-method-and-the-hash-method","text":"write the two pointer method and the hash method"}];
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
