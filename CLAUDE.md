# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

**Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui (Radix UI), Embla Carousel, react-markdown.

**Path alias**: `@/*` maps to the project root.

### Key directories

- `app/` — Next.js App Router pages and page-specific components
  - `app/components/` — Section components (Hero, Navbar, Projects, About, Services, Footer)
  - `app/static/` — Reusable display components (Tag, Timeline, SocialMedia, Summary)
  - `app/projects/[projectId]/` — Dynamic route for individual project detail pages
  - `app/globals.css` — Global styles including custom scrollbar
- `components/ui/` — shadcn/ui components (do not edit these directly)
- `constants/constant.tsx` — All portfolio data: `projectData` (projects array) and `timelineData` (work experience). **This is the primary file to edit when adding/updating content.**
- `hooks/` — `useDeviceSize` (viewport dimensions) and `useScrollPos` (scroll tracking)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Data flow

All portfolio content lives in `constants/constant.tsx`. Projects are rendered by reading `projectData` entries; each project has an `id` used as the dynamic route segment (`/projects/[projectId]`). Project descriptions support markdown and are rendered via `app/projects/components/markdown.tsx`.

### Styling conventions

- Tailwind utility classes throughout; CSS variables for theme colors (HSL-based, dark mode ready via `class` strategy)
- Custom animations defined in `tailwind.config.ts`: `scalepulse`, `accordion-down/up`, plus all `tailwindcss-animated` utilities
- Content is in Portuguese (pt-BR)
