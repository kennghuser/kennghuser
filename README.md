# Kenn — Portfolio

Personal portfolio of Kenn, a full-stack, AI-driven developer in Tokyo.

**Live:** https://kennghuser.vercel.app

**Stack:** Astro 7 + TypeScript + Tailwind CSS 4 + MDX content collections. ~0 KB of JavaScript by default — the right tool for a content site.

## Develop

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build to dist/
pnpm lint       # astro check (types + diagnostics)
```

Content lives in `src/content/work/` as MDX case studies. Pages: home (`src/pages/index.astro`) and one case-study page per entry (`src/pages/work/[slug].astro`).

Placeholders marked `TODO(kenn)` in the source (LinkedIn, email, CV, product name) are awaiting final details.
