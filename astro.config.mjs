import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

import remarkMath from "remark-math"

import rehypeMathjax from "rehype-mathjax"

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-template.netlify.app',
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [
      [remarkMath, { inlineMathDouble: true }],
    ],
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
      rehypeMathjax,
    ],
  },
})