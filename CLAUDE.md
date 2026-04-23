# CLAUDE.md — f1-portfolio

Personal portfolio for **Aditya Niture** (Forward Deployed Software Engineer). F1/racing theme: black backgrounds, red accents, motion animations.

## Commands

```bash
npm run dev       # dev server (Turbopack)
npm run build     # production build — run before every commit
npm run lint      # ESLint
```

Always run `npm run build` before committing. The build must be clean (no errors; `<img>` warnings are acceptable).

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, fully static) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline` block) |
| Animation | `framer-motion` (most components) + `motion/react` (VideoHero) |
| UI primitives | shadcn-style: `Button` (CVA), `cn()` (clsx + tailwind-merge) |
| Icons | `lucide-react`, `react-icons/fa` |
| Slider | custom `InfiniteSlider` (react-use-measure + framer-motion) |
| Blur edges | custom `ProgressiveBlur` |
| Scroll triggers | `react-intersection-observer` (`useInView`) |
| Deployment | Vercel (`aniture` / team `adityas-projects-955d7601`) |

## Page Structure (`src/app/page.tsx`)

```
RaceLights          — full-screen red lights intro (fades out after 4s)
VideoHero           — hero video + HeroHeader nav + tech stack slider
Stats               — animated impact numbers strip
#about  AboutMe     — Meet the Driver
#experience  Experience  — Career Circuit timeline (3 roles)
#projects  Projects — Project Race Grid (19 projects, show more/less)
#skills  Skills     — Pit Crew Toolkit bento grid
#education  Education     — Race School (IIT + Bidve)
#certifications  Certifications  — Trophy Cabinet (4 certs)
Philosophy          — Race Philosophy (4 engineering principles)
Availability        — Open-to-work banner with CTA
#contact  Contact   — Formspree contact form
TrackDivider        — subtle gradient line between sections
```

## Navigation

Nav is embedded inside `VideoHero` → `HeroHeader`. It is **fixed z-50**.

All nav links use `onClick={() => scrollToSection(id)}` with `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`. **Do NOT use `<Link href="#...">` or `<a href="#...">` for in-page scroll** — Next.js App Router intercepts same-origin clicks and breaks hash navigation.

Current nav items: About · Experience · Projects · Skills · Contact

## Key Conventions

- **`'use client'`** on every component (all use motion/hooks).
- **Animations**: entrance via `useInView({ triggerOnce: true })` + `framer-motion` `initial/animate`. No `whileInView` (causes show-more bugs with AnimatePresence).
- **Section IDs**: set on wrapper `<div id="...">` in `page.tsx`, not on the component root.
- **Tailwind v4**: uses `@theme inline` block in `globals.css` to map CSS vars → utility classes. No `bg-card` / `text-card-foreground` — use direct color classes.
- **No `<Link>` for hash nav** — use plain `<button onClick>` with `scrollIntoView`.
- **Scrollbar hidden** globally: `html { scrollbar-width: none }` + `html::-webkit-scrollbar { display: none }`.

## Components

| File | Purpose |
|------|---------|
| `VideoHero.tsx` | Hero video, HeroHeader nav, tech-stack InfiniteSlider |
| `HeroHeader` (inside VideoHero) | Fixed nav, scroll-aware background, hamburger menu |
| `AwsIcon` (inside VideoHero) | Inline SVG for AWS logo — CDN removed this icon |
| `Stats.tsx` | 6-cell impact numbers grid |
| `AboutMe.tsx` | Centered bio, social links |
| `Experience.tsx` | Timeline: Benmore (current), Ping Cares, Unilife |
| `Projects.tsx` | 19 projects, 6 visible default, AnimatePresence show more |
| `ProjectCard.tsx` | h-full card with top-sweep hover |
| `Skills.tsx` | 6-category bento grid, primary/secondary skill tiers |
| `Education.tsx` | IIT Chicago M.S. + Bidve B.Tech cards |
| `Certifications.tsx` | 4 cert cards: Anthropic AI, AWS, IBM, SEED |
| `Philosophy.tsx` | 4 engineering principle cards |
| `Availability.tsx` | Open-to-work banner, role targets, email CTA |
| `Contact.tsx` | Formspree form — replace `YOUR_FORM_ID` with real ID |
| `RaceLights.tsx` | Intro animation (5 red lights, fades after 4s) |
| `TrackDivider.tsx` | `h-px` gradient divider |
| `ui/button.tsx` | shadcn Button (CVA variants) |
| `ui/infinite-slider.tsx` | Looping logo slider |
| `ui/progressive-blur.tsx` | Edge fade for slider |

## Public Assets

| File | Notes |
|------|-------|
| `racing-bg.mp4` | Hero background video — 4.1 MB, committed to git |
| `track-bg.jpg` | Poster frame shown before video loads |
| `AdityaNiture_ForwardDeployedSoftwareEngineer_Resume.pdf` | Resume download |

## Tech Stack Slider — Icon Sources

All icons use `https://cdn.simpleicons.org/{slug}/ffffff` **except AWS**, which is an inline `<AwsIcon>` SVG component (CDN returns 404 for all AWS slugs as of 2026). If adding new icons, verify the CDN slug returns 200 before committing.

## Known Gotchas

- **AWS SimpleIcons CDN**: `amazonaws`, `amazonwebservices`, and `aws` all 404. Use the inline `AwsIcon` component.
- **Next.js `<Link>` + hash**: breaks in-page scroll. Always use `scrollIntoView`.
- **`whileInView` + AnimatePresence**: items added via show-more get stuck at `opacity: 0`. Use `useInView` + `initial/animate` props instead.
- **Hero content z-index**: hero text div is `z-20`; nav must be `z-50` or higher or clicks on nav are intercepted.
- **Tailwind v4 CSS vars**: must use `@theme inline` mapping block or utilities like `bg-primary` won't resolve.
- **Formspree**: `Contact.tsx` has `const FORMSPREE_ID = 'YOUR_FORM_ID'` — replace before going live.

## Deployment

- **Vercel account**: `aniture` (team `adityas-projects-955d7601`)
- **Production URL**: `https://f1-portfolio-adityas-projects-955d7601.vercel.app`
- **Deploy trigger**: push to `main` — Vercel auto-deploys
- **Next.js version**: must stay ≥ 15.3 — Vercel blocks vulnerable versions
