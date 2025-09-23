# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Architecture

This is an Astro-based personal blog/portfolio website with the following architecture:

### Framework Stack
- **Astro**: Static site generator with server-side rendering
- **Svelte**: Used for interactive components (ThemeToggleButton)
- **MDX**: For enhanced markdown blog posts with embedded components
- **TypeScript**: Type safety throughout the codebase

### Directory Structure
- `src/components/` - Reusable Astro and Svelte components
- `src/layouts/` - Page layout templates (BaseLayout.astro)
- `src/pages/` - File-based routing (index, about, blog, projects)
- `src/data/blog-posts/` - Markdown blog posts with frontmatter
- `src/styles/` - Global CSS and font definitions
- `src/utils/` - Utility functions (getPostData.ts for blog processing)

### Key Components
- `BaseLayout.astro` - Main layout wrapper
- `ThemeToggleButton.svelte` - Interactive dark/light theme switcher
- `[slug].astro` - Dynamic blog post routing

### Content Management
Blog posts are stored as markdown files in `src/data/blog-posts/` with date-based naming convention: `YYYY-MM-DD---title.md`

### Build Configuration
- Math expressions supported via remark-math and rehype-mathjax
- External links automatically open in new tabs
- Nord theme for code syntax highlighting
- Site configured for deployment to Netlify

### Styling
- Global styles in `src/styles/global.css`
- Custom fonts defined in `src/styles/fonts.css`
- Theme switching capability built-in