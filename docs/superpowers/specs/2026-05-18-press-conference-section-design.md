# Press Conference Section — Design

**Date:** 2026-05-18
**Status:** Approved (ready for implementation plan)
**Owner:** Aditya Niture

## Goal

Add a new portfolio section that embeds a YouTube interview between Aditya and the CEO of Benmore Technologies. The video title is *"From Theoretical Learning to Real-World Client Work: An FDE's First Month at Benmore"*. Its purpose: high-credibility social proof that ties directly to the "Forward Deployed Software Engineer" positioning that drives the rest of the portfolio.

## Scope

**In scope**
- A new client component, `PressConference.tsx`, rendering a single embedded YouTube video with section heading and caption.
- Wiring the section into `page.tsx` between `Experience` and `Projects`, with section id `press-conference`.
- Adding a new nav entry "Interview" (target: `press-conference`) to the `menuItems` array in `VideoHero.tsx`. Both desktop and mobile nav update from this single array.
- Updating `CLAUDE.md` (Page Structure block and Components table) to reflect the new section.

**Out of scope**
- No video hosting, transcripts, chapter markers, or analytics.
- No multi-video gallery. A second interview would be a separate change.
- No timestamped deep-link into the video — playback starts at 0:00. If a specific moment becomes important later, surface it as text in the caption ("jump to ~10:11 for X"), not as an embed parameter.
- No fallback UI for YouTube being down. If YouTube is offline, the thumbnail still renders; the click just won't load a player. Acceptable for a personal portfolio.

## Content & Copy

All copy lives as `const` at the top of `PressConference.tsx`. No props.

```ts
const VIDEO_ID = 'Yj4e8yZWQTE';
const VIDEO_TITLE = 'From Theoretical Learning to Real-World Client Work';
const VIDEO_SUBTITLE = "An FDE's First Month at Benmore";
const SECTION_LABEL = 'Press Conference';       // small uppercase red eyebrow
const SECTION_HEADING_LEAD = 'Interview with';   // gray-white
const SECTION_HEADING_ACCENT = 'the Benmore CEO'; // red accent word(s)
const SECTION_BLURB = 'On-camera conversation about my first month as a Forward Deployed Engineer at Benmore Technologies.';
const CAPTION = '"From Theoretical Learning to Real-World Client Work" — Benmore Technologies';
```

The section heading renders as: **Interview with <span class="red">the Benmore CEO</span>** — matching the existing `Career` <span class="red">Circuit</span> / `Project` <span class="red">Race Grid</span> pattern from other sections.

## Component Design

**File:** `src/app/components/PressConference.tsx`

**Shape (mirrors `Experience.tsx`):**

```
<section className="py-20 px-6 md:px-20 bg-black text-white">
  <div className="max-w-4xl mx-auto">

    {/* Section header — same conventions as Experience */}
    <motion.div ref={headRef} ...>
      <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">
        {SECTION_LABEL}
      </p>
      <h2 className="text-4xl font-bold text-white mb-3">
        {SECTION_HEADING_LEAD} <span className="text-red-600">{SECTION_HEADING_ACCENT}</span>
      </h2>
      <p className="text-gray-500 text-sm max-w-md mx-auto">{SECTION_BLURB}</p>
      <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </motion.div>

    {/* Player */}
    <motion.div ref={playerRef} ...>
      <VideoPlayer />
    </motion.div>

    {/* Caption */}
    <p className="mt-5 text-center text-xs text-gray-500 italic">{CAPTION}</p>

  </div>
</section>
```

**State:** A single `const [playing, setPlaying] = useState(false)` inside the `VideoPlayer` child (or inline — implementer's call; whichever is simpler).

## Click-to-Play Behavior

The single non-trivial technical decision in this design.

**Why not a direct iframe:** A YouTube iframe pulls roughly half a megabyte of JS/CSS on page load even if no one plays the video. The portfolio already loads a 4.1 MB hero video. Stacking a YouTube iframe on top is wasteful and slows time-to-interactive.

**Approach:**

1. Default state — render a poster image: `https://i.ytimg.com/vi/Yj4e8yZWQTE/maxresdefault.jpg` (with `hqdefault.jpg` as fallback if needed). Use a plain `<img>` tag, consistent with how `VideoHero.tsx` handles `cdn.simpleicons.org` logos. The `<img>` lint warning is documented as acceptable in `CLAUDE.md`.
2. Overlay a centered circular play button: red (`bg-red-600`), white triangle icon (lucide `Play`), `hover:scale-110` and `hover:bg-red-500` transitions.
3. Wrap the whole thing in a `<button>` (not a `div`) for accessibility — keyboard activatable, announced as a button by screen readers. `aria-label="Play interview video"`.
4. On click, swap to:
   ```tsx
   <iframe
     src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
     title={VIDEO_TITLE}
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen
     className="absolute inset-0 w-full h-full"
   />
   ```
5. `rel=0` keeps related-video suggestions limited to the same channel (Aditya's), avoiding random recommendations after the video ends.

**Container:** 16:9 aspect ratio enforced via Tailwind's `aspect-video` utility, `rounded-xl overflow-hidden`, `border border-gray-800` at rest, `border-red-900/50 shadow-2xl shadow-red-950/30` on hover — matching the visual treatment of `ProjectCard`.

## Visual & Animation Conventions

Strict match to existing sections so the new one doesn't stand out as inconsistent.

- `'use client'` directive at the top of the file.
- Animations driven by `useInView({ triggerOnce: true })` from `react-intersection-observer` + `framer-motion`'s `motion.div` with `initial` / `animate` props. **No `whileInView`** — documented gotcha in `CLAUDE.md`.
- Two `useInView` hooks: one for the header (`threshold: 0.4`), one for the player (`threshold: 0.12`) — matches what `Experience.tsx` does for its header vs. cards.
- Header animation: `initial={{ opacity: 0, y: 18 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.6 }}`.
- Player animation: `initial={{ opacity: 0, scale: 0.96 }}`, `animate={{ opacity: 1, scale: 1 }}`, `transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}`.
- Section background: solid `bg-black` (matches `Experience`). Outer wrapper in `page.tsx` provides the `id="press-conference"` anchor.

## File-Level Changes

| File | Change |
|---|---|
| `src/app/components/PressConference.tsx` | **New file.** Implements the component described above. |
| `src/app/page.tsx` | Import `PressConference`, insert `<TrackDivider />` + `<div id="press-conference"><PressConference /></div>` between the existing Experience block and Projects block. |
| `src/app/components/VideoHero.tsx` | Add `{ name: 'Interview', href: 'press-conference' }` to the `menuItems` array (line 11–17). The desktop and mobile menus both render from this array, so this single edit covers both. |
| `CLAUDE.md` | Add a row to the Page Structure block reflecting the new section between `#experience` and `#projects`. Add a row to the Components table for `PressConference.tsx`. Update the Navigation section to list "Interview" as a nav item (6 items total now). |

No package additions. No global CSS changes. No new public assets — the poster comes from YouTube's CDN.

## Acceptance Criteria

1. Section renders between Experience and Projects, with the F1 red-accent visual identity matching surrounding sections.
2. The nav item "Interview" appears in both the desktop and mobile menus and smooth-scrolls to the section.
3. On initial page load, the section loads only the YouTube **thumbnail image** — no `youtube.com/embed` request is made until the user clicks play.
4. Clicking the play button swaps in an autoplaying iframe of `Yj4e8yZWQTE`, starting at 0:00, with related videos limited to the same channel (`rel=0`).
5. The play button is a real `<button>` element, focusable via keyboard, and activatable with Enter or Space.
6. `npm run build` completes cleanly. `<img>` warnings from the YouTube poster are acceptable, consistent with existing project policy.
7. Visual check in a browser: section is centered, the player container is responsive 16:9 on mobile and desktop, hover state shows the red-tinted border glow.

## Open Implementation Choices (Implementer's Call)

These don't change the design and don't need user input — call them at implementation time:

- Whether the `<VideoPlayer>` swap logic lives inside `PressConference.tsx` or as a tiny inner component. Either is fine; pick whichever reads cleaner.
- Whether the play-button SVG uses lucide's `Play` icon or a hand-rolled triangle. Lucide is already a dependency; default to it unless the visual demands otherwise.
- Exact poster fallback strategy (`maxresdefault.jpg` not all videos have it). Acceptable to start with `maxresdefault.jpg` and add an `onError` swap to `hqdefault.jpg` if the max-res returns 404 during testing.
