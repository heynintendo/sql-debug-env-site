# sql-debug-env — showcase site

Marketing and interactive demo site for [**sql-debug-env**](https://github.com/heynintendo/sql-debug-env), an OpenEnv 1.0 reinforcement learning environment that trains agents to debug SQL queries. The site lets a visitor pick one of three curated tasks, submit a fix to the live Hugging Face Space, and watch the five-dimension partial-credit grader render the result.

- **Live:** https://sql-debug-env-site.vercel.app
- **Backend (Hugging Face Space):** https://huggingface.co/spaces/AnishKishore/sql-debug-env
- **Backend repo:** https://github.com/heynintendo/sql-debug-env
- **Built for:** Meta PyTorch × Scaler OpenEnv Hackathon

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5
- Tailwind CSS v4 via the `@theme` directive for the design tokens
- Geist Sans + Mono via `next/font/google`
- `@monaco-editor/react` (lazy-loaded with `next/dynamic`, `ssr: false`) for the SQL editor
- `lucide-react` for icons (GitHub mark is inline SVG since lucide v1 dropped brand icons)
- `next/og` for the OpenGraph image and favicon
- No state library, no shadcn — plain React state, custom Tailwind components

## Local development

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build (PORT=3001 pnpm start to avoid clashing with dev)
pnpm lint
```

`.env.local` is gitignored. Copy `.env.example` if you want to point at a non-default backend:

```env
NEXT_PUBLIC_BACKEND_URL=https://anishkishore-sql-debug-env.hf.space
```

## Project structure

```
app/
  layout.tsx              metadata, themeColor, Geist fonts, Header/Footer
  page.tsx                hero + sections + demo
  globals.css             Tailwind @theme tokens + hero animation keyframes
  opengraph-image.tsx     1200×630 OG via next/og
  icon.tsx                32×32 favicon via next/og
components/
  Header.tsx              sticky nav
  Footer.tsx
  Reveal.tsx              IntersectionObserver scroll-fade wrapper
  icons.tsx               inline GitHub SVG
  sections/               Hero, Why, Numbers, Architecture, Credit
  demo/                   DemoSection, TaskSelector, TaskCard, SqlEditor,
                          ResultPanel, DimensionBar, MobileFallback
lib/
  api.ts                  typed fetch client for /reset and /step
  tasks.ts                pre-baked task metadata for the three demo tasks
```

## Deploy

The Vercel project is linked under scope `atomgrid-goals-vercelapp`. From the project root:

```bash
vercel deploy --yes --scope atomgrid-goals-vercelapp           # preview
vercel deploy --prod --yes --scope atomgrid-goals-vercelapp    # production
```

Preview deployments are auth-protected by default. Production at `sql-debug-env-site.vercel.app` is public.

## Notes

- The backend Hugging Face Space sleeps after 48 hours of inactivity. A GitHub Actions cron in the backend repo pings `/health` every 12 hours to keep it warm; first request after a longer sleep can take up to a minute, which the demo's submit button surfaces in copy.
- The HF Space holds a single global episode, so the demo pairs `POST /reset` with `POST /step` on every submission to ground each fix in a fresh setup. A race window exists at multi-user load but is negligible at single-user showcase traffic.
- Hero card animation runs once on load and respects `prefers-reduced-motion`. Below 640 px viewport, the interactive editor is replaced with a static buggy-vs-fixed example.
