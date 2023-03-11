import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.98e1a385.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                            */import readingTime from 'reading-time';

const $$Astro$a = createAstro("https://astro-blog-template.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, permalink } = Astro2.props;
  const socialUrl = Astro2.site.href + "assets/social.png";
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/x-icon" href="/favicon.ico">


<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(permalink, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(socialUrl, "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(permalink, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(socialUrl, "content")}>

<!-- This is intentionally inlined to avoid FOUC -->
`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/BaseHead.astro");

const $$Astro$9 = createAstro("https://astro-blog-template.netlify.app");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`

${maybeRenderHead($$result)}<a href="/" class="astro-TVRURPNS">
  <img alt="Blog Logo" src="/assets/logo.webp" width="75" height="50" class="astro-TVRURPNS">
</a>`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/Logo.astro");

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}

/* src/components/ThemeToggleButton.svelte generated by Svelte v3.56.0 */

const ThemeToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const rootEl = typeof document !== 'undefined'
	? document.documentElement
	: null;

	const themes = ['light', 'dark'];
	let theme = '';

	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	} else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	const icons = [
		`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>`,
		`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>`
	];

	{
		if (rootEl && theme === 'light') {
			rootEl.classList.remove('theme-dark');
		} else if (rootEl && theme === 'dark') {
			rootEl.classList.add('theme-dark');
		}
	}

	return `<div class="theme-toggle">${each(themes, (t, i) => {
		return `<label${add_attribute("class", theme === t ? 'checked' : '', 0)}><!-- HTML_TAG_START -->${icons[i]}<!-- HTML_TAG_END -->
      <input type="radio" name="theme-toggle" ${theme === t ? "checked" : ""}${add_attribute("value", t, 0)}${add_attribute("title", `Use ${t} theme`, 0)}${add_attribute("aria-label", `Use ${t} theme`, 0)}>
    </label>`;
	})}</div>`;
});

const $$Astro$8 = createAstro("https://astro-blog-template.netlify.app");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  const { current = "" } = Astro2.props;
  return renderTemplate`

${maybeRenderHead($$result)}<nav class="astro-DMQPWCEC">
  <a${addAttribute((current === "" ? "selected" : "") + " astro-DMQPWCEC", "class")} href="/">home</a>
  <a${addAttribute((current === "about" ? "selected" : "") + " astro-DMQPWCEC", "class")} href="/about">about</a>
  <a${addAttribute((current === "blog" ? "selected" : "") + " astro-DMQPWCEC", "class")} href="/blog">blog</a>
  <div class="theme-toggle-container astro-DMQPWCEC">
    ${renderComponent($$result, "ThemeToggleButton", ThemeToggleButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/ThemeToggleButton.svelte", "client:component-export": "default", "class": "astro-DMQPWCEC" })}
  </div>
</nav>`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/Nav.astro");

const $$Astro$7 = createAstro("https://astro-blog-template.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  const { current = "" } = Astro2.props;
  return renderTemplate`

${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
  ${renderComponent($$result, "Logo", $$Logo, { "class": "astro-3EF6KSR2" })}
  ${renderComponent($$result, "Nav", $$Nav, { "current": current, "class": "astro-3EF6KSR2" })}
</header>`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/Header.astro");

const $$Astro$6 = createAstro("https://astro-blog-template.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
  <span class="astro-SZ7XMLTE">
    &copy; ${new Date().getFullYear()} A* information.
    Powered by <a href="https://astro.build" target="_blank" rel="noopener" class="astro-SZ7XMLTE">Astro</a>.
    Template by <a href="https://www.twitter.com/Charca" target="_blank" rel="noopener" class="astro-SZ7XMLTE">Maxi Ferreira</a>.
  </span>
</footer>`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/Footer.astro");

const $$Astro$5 = createAstro("https://astro-blog-template.netlify.app");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, permalink, current } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-37FXCHFA">
<head>
  ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "permalink": permalink, "class": "astro-37FXCHFA" })}
${renderHead($$result)}</head>
<body class="astro-37FXCHFA">
  <div class="layout astro-37FXCHFA">
    ${renderComponent($$result, "Header", $$Header, { "current": current, "class": "astro-37FXCHFA" })}

    <main class="astro-37FXCHFA">
      ${renderSlot($$result, $$slots["default"])}
    </main>

    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" })}
  </div>
</body></html>`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/layouts/BaseLayout.astro");

const $$Astro$4 = createAstro("https://astro-blog-template.netlify.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  const title = "My Astro Blog";
  const description = "The perfect starter for your perfect blog.";
  const permalink = Astro2.site.href;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="home-container astro-J7PV25F6">
    <div class="home-copy astro-J7PV25F6">
      <h1 class="astro-J7PV25F6">A* information</h1>
    </div>

    <div class="hero-image-container astro-J7PV25F6">
      <picture class="astro-J7PV25F6">
        <source srcset="/assets/a-start-logo.png" media="(min-width: 600px)" class="astro-J7PV25F6">
        <img class="hero-image astro-J7PV25F6" alt="Illustration of person reading a book" src="/assets/home-illustration-small.webp" width="550" height="466">
      </picture>
      <p class="caption astro-J7PV25F6">
      Illustration by @eleijonmarck
      </p>
    </div>
  </div>` })}`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/index.astro");

const $$file$3 = "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://astro-blog-template.netlify.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  const title = "About";
  const description = "A blog about ml/ai/philosophy/health/tech";
  const permalink = `${Astro2.site.href}about`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "current": "about", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="container astro-KH7BTL4R">
    <h1 class="astro-KH7BTL4R">About</h1>
    <figure class="about-image astro-KH7BTL4R">
      <img src="/assets/about-illustration.webp" alt="Illustration of a notebook" width="330" class="astro-KH7BTL4R">
      <figcaption class="astro-KH7BTL4R">
        Illustration by
        <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6" target="_blank" rel="noopener" class="astro-KH7BTL4R">Icons 8</a>
        from
        <a href="https://icons8.com/illustrations" target="_blank" rel="noopener" class="astro-KH7BTL4R">Ouch!</a>
      </figcaption>
    </figure>
    <p class="astro-KH7BTL4R">
      </p><p class="astro-KH7BTL4R">
        I'm a philosopher/tech/happy guy at heart. I love data-driven innovation
        or rather data-informed businesses. My passion is to explore data and
        understand the meaning of it.
      </p>
      <p class="astro-KH7BTL4R">
        I found my passion during my studies and I have since then dived deep
        into the world of ML/AI, optimization of data-processing or the trenches
        of UNIX "everything as a file" to this day. Might put some time for vim
        configuration (way too much time at times) ;)
      </p>

      <h2 class="astro-KH7BTL4R">Projects that are half done, half finished, half fun</h2>

      <ul class="astro-KH7BTL4R">
        <li class="astro-KH7BTL4R">
          Playing around with service-workers to build a PWA for myself of a
          session and task management tool - <a href="https://zentered.netlify.app/" class="astro-KH7BTL4R">https://zentered.netlify.app/</a>
        </li>
        <li class="astro-KH7BTL4R">
          Learning Rust by building a Pomodoro app in the terminal - <a href="https://github.com/eleijonmarck/pomo" class="astro-KH7BTL4R">https://github.com/eleijonmarck/pomo</a>
        </li>
        <li class="astro-KH7BTL4R">
          Educating about compounding interest in saving money over time - <a href="https://monys.netlify.app/scenario" class="astro-KH7BTL4R">https://monys.netlify.app/scenario</a>
        </li>
      </ul>
      <h2 class="astro-KH7BTL4R">
        [Tony Robbins - Mastery University
        2020](https://www.tonyrobbins.com/mastery-university/)
      </h2>
      <p class="astro-KH7BTL4R">
        Mastery University promotes life-long learning to help me create my
        extraordinary life. I have attened three life-changing live events
        mastering all aspects of your life - mind, body, emotions, physical
        health, finances, time and business.
      </p>
      <h2 class="astro-KH7BTL4R">
        [Winner - Hack for Sweden
        2018](https://www.linkedin.com/company/hack-for-sweden/)
      </h2>
      <figure class="image astro-KH7BTL4R">
        <img src="media/about-me/winner-hack-for-sweden.jpg" alt="winner" class="astro-KH7BTL4R">
        <figcaption class="astro-KH7BTL4R">
          "They found a way to solve a big social problem and a big challenge
          and they did it by finding a way to quicker find the right job. They
          used innovative technology like machine learning and they did it with
          a unique combination of personality testing plus company culture."
        </figcaption>
      </figure>
      <p class="astro-KH7BTL4R">
        Dreamteam from Stockholm AI: Eric Leijonmarck, Birger Moëll, Viktor
        Qvarfordt, Anton Osika
      </p>
      <p class="astro-KH7BTL4R">
        <a href="http://www.mynewsdesk.com/se/hack-for-sweden/pressreleases/vinnarna-av-hack-for-sweden-2018-2478241" class="astro-KH7BTL4R">http://www.mynewsdesk.com/se/hack-for-sweden/pressreleases/vinnarna-av-hack-for-sweden-2018-2478241</a>
      </p>
    
  </div>` })}`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/about.astro");

const $$file$2 = "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/about.astro";
const $$url$2 = "/about";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://astro-blog-template.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Blog";
  const description = "Latest articles.";
  const permalink = `${Astro2.site.href}blog`;
  let allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../data/blog-posts/2019-01-10---flappymind-genetic.md": () => import('../2019-01-10---flappymind-genetic.60ceb3ba.mjs'),"../../data/blog-posts/2019-03-03---generative-models-dummy-text.md": () => import('../2019-03-03---generative-models-dummy-text.c9bf6d2f.mjs'),"../../data/blog-posts/2019-06-09---understanding-gradient-descent.md": () => import('../2019-06-09---understanding-gradient-descent.20393bde.mjs'),"../../data/blog-posts/2019-06-17---calculating-probability-of-event-z-score.md": () => import('../2019-06-17---calculating-probability-of-event-z-score.f41fa956.mjs'),"../../data/blog-posts/2019-07-28---echoservers.md": () => import('../2019-07-28---echoservers.945df3a3.mjs'),"../../data/blog-posts/2019-09-09---introduction-to-algorithms-1.md": () => import('../2019-09-09---introduction-to-algorithms-1.19283a65.mjs'),"../../data/blog-posts/2019-09-18---2-sum.md": () => import('../2019-09-18---2-sum.62478736.mjs'),"../../data/blog-posts/2019-09-18---algorithms-window-function.md": () => import('../2019-09-18---algorithms-window-function.c27c52dd.mjs'),"../../data/blog-posts/2019-09-25---idea-to-prototype.md": () => import('../2019-09-25---idea-to-prototype.59a3c844.mjs'),"../../data/blog-posts/2019-10-20---intro-to-bfs.md": () => import('../2019-10-20---intro-to-bfs.2ace28ff.mjs'),"../../data/blog-posts/2019-11-17---music-genre-classification.md": () => import('../2019-11-17---music-genre-classification.aa32a7c3.mjs'),"../../data/blog-posts/2019-12-18---how-to-spot-a-recession.md": () => import('../2019-12-18---how-to-spot-a-recession.2d691303.mjs'),"../../data/blog-posts/2020-02-06---google-sheet.md": () => import('../2020-02-06---google-sheet.c2cdb0fa.mjs'),"../../data/blog-posts/2020-04-12---side-effects.md": () => import('../2020-04-12---side-effects.1f3d08c0.mjs'),"../../data/blog-posts/2021-02-06---typescript-yarn-project.md": () => import('../2021-02-06---typescript-yarn-project.af2726ff.mjs'),"../../data/blog-posts/2022-06-02---merkletree.md": () => import('../2022-06-02---merkletree.1fbd8101.mjs'),"../../data/blog-posts/2022-10-02---rust-ownership.md": () => import('../2022-10-02---rust-ownership.c575d686.mjs'),"../../data/blog-posts/2023-03-11---rustybucket-1.md": () => import('../2023-03-11---rustybucket-1.30670e8f.mjs')}), () => "../../data/blog-posts/*.md");
  allPosts = allPosts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "current": "blog", "class": "astro-5TZNM7MJ" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="container astro-5TZNM7MJ">
    <h1 class="astro-5TZNM7MJ">Blog</h1>
    ${allPosts.map((post, index) => {
    const href = `/blog/${post.file.split("/").pop().split(".").shift()}`;
    return renderTemplate`<div class="astro-5TZNM7MJ">
          ${index !== 0 && renderTemplate`<hr class="astro-5TZNM7MJ">`}
          <div class="post-item astro-5TZNM7MJ">
            <h2 class="astro-5TZNM7MJ">
              <a${addAttribute(href, "href")} class="astro-5TZNM7MJ">${post.frontmatter.title}</a>
            </h2>
            <p class="astro-5TZNM7MJ">${post.frontmatter.description}</p>
            <div class="post-item-footer astro-5TZNM7MJ">
              <span class="post-item-date astro-5TZNM7MJ">— ${post.frontmatter.date}</span>
            </div>
          </div>
        </div>`;
  })}
  </div>` })}`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/blog/index.astro");

const $$file$1 = "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://astro-blog-template.netlify.app");
const $$Bio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Bio;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-2JILUK5E">
  <img src="/assets/eric-small.png" alt="Headshot of Maxi Ferreira" class="astro-2JILUK5E">
  <p class="astro-2JILUK5E">
    Hi, I'm <strong class="astro-2JILUK5E">Eric</strong>. I'm a software engineer and data scientist based in Lisbon.
    You can follow me on <a href="https://www.twitter.com/eleijonmarck" target="_blank" class="astro-2JILUK5E">Twitter</a>,
    see some of my work on <a href="https://www.github.com/eleijonmarck" target="_blank" class="astro-2JILUK5E">GitHub</a>,
  </p>
</div>`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/components/Bio.astro");

function getPostData(post) {
  return {
    slug: post.file.split("/").pop().split(".").shift(),
    readingTime: readingTime(post.rawContent()).text
  };
}

const $$Astro = createAstro("https://astro-blog-template.netlify.app");
const Astro = $$Astro;
async function getStaticPaths() {
  const posts = await Astro.glob(/* #__PURE__ */ Object.assign({"../../data/blog-posts/2019-01-10---flappymind-genetic.md": () => import('../2019-01-10---flappymind-genetic.60ceb3ba.mjs'),"../../data/blog-posts/2019-03-03---generative-models-dummy-text.md": () => import('../2019-03-03---generative-models-dummy-text.c9bf6d2f.mjs'),"../../data/blog-posts/2019-06-09---understanding-gradient-descent.md": () => import('../2019-06-09---understanding-gradient-descent.20393bde.mjs'),"../../data/blog-posts/2019-06-17---calculating-probability-of-event-z-score.md": () => import('../2019-06-17---calculating-probability-of-event-z-score.f41fa956.mjs'),"../../data/blog-posts/2019-07-28---echoservers.md": () => import('../2019-07-28---echoservers.945df3a3.mjs'),"../../data/blog-posts/2019-09-09---introduction-to-algorithms-1.md": () => import('../2019-09-09---introduction-to-algorithms-1.19283a65.mjs'),"../../data/blog-posts/2019-09-18---2-sum.md": () => import('../2019-09-18---2-sum.62478736.mjs'),"../../data/blog-posts/2019-09-18---algorithms-window-function.md": () => import('../2019-09-18---algorithms-window-function.c27c52dd.mjs'),"../../data/blog-posts/2019-09-25---idea-to-prototype.md": () => import('../2019-09-25---idea-to-prototype.59a3c844.mjs'),"../../data/blog-posts/2019-10-20---intro-to-bfs.md": () => import('../2019-10-20---intro-to-bfs.2ace28ff.mjs'),"../../data/blog-posts/2019-11-17---music-genre-classification.md": () => import('../2019-11-17---music-genre-classification.aa32a7c3.mjs'),"../../data/blog-posts/2019-12-18---how-to-spot-a-recession.md": () => import('../2019-12-18---how-to-spot-a-recession.2d691303.mjs'),"../../data/blog-posts/2020-02-06---google-sheet.md": () => import('../2020-02-06---google-sheet.c2cdb0fa.mjs'),"../../data/blog-posts/2020-04-12---side-effects.md": () => import('../2020-04-12---side-effects.1f3d08c0.mjs'),"../../data/blog-posts/2021-02-06---typescript-yarn-project.md": () => import('../2021-02-06---typescript-yarn-project.af2726ff.mjs'),"../../data/blog-posts/2022-06-02---merkletree.md": () => import('../2022-06-02---merkletree.1fbd8101.mjs'),"../../data/blog-posts/2022-10-02---rust-ownership.md": () => import('../2022-10-02---rust-ownership.c575d686.mjs'),"../../data/blog-posts/2023-03-11---rustybucket-1.md": () => import('../2023-03-11---rustybucket-1.30670e8f.mjs')}), () => "../../data/blog-posts/*.md");
  return posts.map((p) => ({
    params: { slug: p.file.split("/").pop().split(".").shift() },
    props: { post: p }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { Content, frontmatter } = Astro2.props.post;
  const { title, description, date } = frontmatter;
  const { slug, readingTime } = getPostData(Astro2.props.post);
  const permalink = `${Astro2.site.href}${slug}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "current": "blog", "class": "astro-4SN4ZG3R" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<header class="astro-4SN4ZG3R">
    <p class="astro-4SN4ZG3R">${date} ~ ${readingTime}</p>
    <h1 class="astro-4SN4ZG3R">${title}</h1>
    <hr class="astro-4SN4ZG3R">
  </header><div class="container astro-4SN4ZG3R">
    <article class="content astro-4SN4ZG3R">
      ${renderComponent($$result2, "Content", Content, { "class": "astro-4SN4ZG3R" })}
    </article>
    <hr class="astro-4SN4ZG3R">
    ${renderComponent($$result2, "Bio", $$Bio, { "class": "astro-4SN4ZG3R" })}
  </div>` })}`;
}, "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/blog/[slug].astro");

const $$file = "/Users/eleijonmarck/dev/eleijonmarck/better-bar/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
