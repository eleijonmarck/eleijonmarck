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
- Global styles in `src/styles/global.css` - Modern system font stack, professional typography
- Custom fonts defined in `src/styles/fonts.css`
- Theme switching capability built-in
- Body text: 1.05rem, H1: 2.5em for professional appearance

## Recent Updates (2025-10-01)

### Content & Messaging
- **Brand positioning**: "Builder of distributed systems" working at Grafana
- Focus on IAM, access control, AI-powered developer tools, and observability
- Homepage features "Now" section with current projects (OpenFGA, Zanzibar, AI agents)
- "Blog" terminology changed to "Writing" throughout site
- Projects page highlights Grafana work: LLM-Powered On-Call Agent, OpenFGA Authorization

### Client-Side Observability System
- **Location**: `/telemetry` page (accessible via projects page, not in main nav)
- **Tech Stack**: OpenTelemetry Web SDK, IndexedDB, D3.js, ApexCharts
- **Features**:
  - Auto-instrumentation for page loads, fetch requests, user interactions
  - Web Vitals tracking (LCP, FCP, CLS, FID, INP, TTFB)
  - IndexedDB storage for local trace data (no backend)
  - Interactive dashboard with metrics cards, trace timeline, span waterfall
  - Export/clear data functionality
- **Implementation**:
  - `src/lib/telemetry/` - Core telemetry infrastructure
  - `BaseLayout.astro` - Auto-initializes telemetry on all pages
  - Bundle size: ~38kb gzipped (OTel), ~19kb (dashboard, lazy-loaded)

### MCP Integration
- Playwright MCP server installed and configured
- Enables browser automation via Claude Code CLI
- Config: `~/.claude.json` contains playwright server setup

## Deployment
- Astro v5.14.1 (upgraded from v2.1.2)
- Deploys to Netlify as static site
- RSS feed available at `/rss.xml`
- Node version compatibility handled in netlify.toml