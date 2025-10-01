import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'

import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"
import rehypeExternalLinks from "rehype-external-links"

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-template.netlify.app',
  integrations: [mdx(), svelte(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [
      [remarkMath, { inlineMathDouble: true }],
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
      rehypeMathjax,
    ],
  },
})