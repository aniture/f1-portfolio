# Press Conference Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Press Conference" section to the portfolio that embeds a YouTube interview with the Benmore CEO, with click-to-play to avoid loading YouTube's iframe on initial page load.

**Architecture:** Single new client component (`PressConference.tsx`) inserted between Experience and Projects on the home page, styled to match the existing F1/red-accent design system, with a nav entry added to `VideoHero.tsx`'s `menuItems`. Default state renders a YouTube poster image with a custom play button; clicking swaps in an autoplaying iframe.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, `framer-motion`, `react-intersection-observer`, `lucide-react`.

**Spec:** [docs/superpowers/specs/2026-05-18-press-conference-section-design.md](../specs/2026-05-18-press-conference-section-design.md)

---

## Verification Approach (read before starting)

**This project has no automated test framework.** `package.json` does not include `vitest`, `jest`, or `@testing-library/*`. Per `CLAUDE.md`, the project's verification contract is:

1. `npm run build` must complete cleanly (no errors; `<img>` warnings are acceptable).
2. `npm run lint` must pass.
3. UI changes are verified by running `npm run dev` and inspecting in a browser.

Each task below uses these as its verification steps in place of unit tests. **Do not** add a test framework as part of this work — that is out of scope (see spec).

---

## File Structure

| File | Role | Action |
|---|---|---|
| `src/app/components/PressConference.tsx` | New section component: header, click-to-play YouTube player, caption | Create |
| `src/app/page.tsx` | Home page composition; inserts the new section in the document flow | Modify |
| `src/app/components/VideoHero.tsx` | Hosts the nav menu items array consumed by both desktop & mobile menus | Modify (line 11-17 only) |
| `CLAUDE.md` | Project context doc; needs the new section reflected in Page Structure and Components table | Modify |

---

## Task 1: Create the `PressConference` component

**Files:**
- Create: `src/app/components/PressConference.tsx`

- [ ] **Step 1: Create the file with the full component**

Create `src/app/components/PressConference.tsx` with this exact content:

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

const VIDEO_ID = 'Yj4e8yZWQTE';
const VIDEO_TITLE = 'From Theoretical Learning to Real-World Client Work';
const SECTION_LABEL = 'Press Conference';
const SECTION_HEADING_LEAD = 'Interview with';
const SECTION_HEADING_ACCENT = 'the Benmore CEO';
const SECTION_BLURB =
  'On-camera conversation about my first month as a Forward Deployed Engineer at Benmore Technologies.';
const CAPTION =
  '"From Theoretical Learning to Real-World Client Work" — Benmore Technologies';

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(
    `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
        title={VIDEO_TITLE}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play interview video"
      className="group absolute inset-0 w-full h-full cursor-pointer"
    >
      <img
        src={posterSrc}
        alt={VIDEO_TITLE}
        onError={() =>
          setPosterSrc(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`)
        }
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 shadow-2xl shadow-red-950/50 transition-all duration-200">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
}

export default function PressConference() {
  const { ref: headRef, inView: headInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: playerRef, inView: playerInView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">
            {SECTION_LABEL}
          </p>
          <h2 className="text-4xl font-bold text-white mb-3">
            {SECTION_HEADING_LEAD}{' '}
            <span className="text-red-600">{SECTION_HEADING_ACCENT}</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            {SECTION_BLURB}
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Player */}
        <motion.div
          ref={playerRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={playerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-800 hover:border-red-900/50 hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300"
        >
          <VideoPlayer />
        </motion.div>

        {/* Caption */}
        <p className="mt-5 text-center text-xs text-gray-500 italic">
          {CAPTION}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the build accepts the new component**

Run: `npm run build`

Expected: Build completes successfully. There may be an `<img>` warning for the YouTube poster — that is acceptable per `CLAUDE.md`. Any TypeScript or module-resolution error is a failure: stop and read the error.

- [ ] **Step 3: Verify lint**

Run: `npm run lint`

Expected: No errors. `<img>` warnings (e.g. `@next/next/no-img-element`) are acceptable.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/PressConference.tsx
git commit -m "Add PressConference component for Benmore CEO interview

Click-to-play YouTube embed: poster loads on page render, iframe
loads only after user clicks play. Matches existing section visual
conventions (red eyebrow, accent heading, 16:9 player, hover glow)."
```

---

## Task 2: Wire the component into the home page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add the import**

In `src/app/page.tsx`, add the import next to the other component imports. The new import line:

```tsx
import PressConference from './components/PressConference';
```

Add it alphabetically near the others — after `import Philosophy from './components/Philosophy';` is a sensible spot, though exact ordering isn't enforced by lint.

- [ ] **Step 2: Insert the section between Experience and Projects**

In the `<Home>` return JSX, find:

```tsx
<div id="experience"><Experience /></div>
<TrackDivider />
<div id="projects"><Projects /></div>
```

Replace with:

```tsx
<div id="experience"><Experience /></div>
<TrackDivider />
<div id="press-conference"><PressConference /></div>
<TrackDivider />
<div id="projects"><Projects /></div>
```

- [ ] **Step 3: Verify the build still passes**

Run: `npm run build`

Expected: Build completes. If you see "PressConference is not defined" or similar, the import is missing or the path is wrong.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Wire PressConference section into home page between Experience and Projects"
```

---

## Task 3: Add "Interview" to the nav menu

**Files:**
- Modify: `src/app/components/VideoHero.tsx` (line 11-17)

- [ ] **Step 1: Add the menu item**

In `src/app/components/VideoHero.tsx`, find the `menuItems` array (lines 11-17):

```tsx
const menuItems = [
  { name: 'About',      href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects',   href: 'projects' },
  { name: 'Skills',     href: 'skills' },
  { name: 'Contact',    href: 'contact' },
];
```

Replace with (insert "Interview" between Experience and Projects to match document flow):

```tsx
const menuItems = [
  { name: 'About',      href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Interview',  href: 'press-conference' },
  { name: 'Projects',   href: 'projects' },
  { name: 'Skills',     href: 'skills' },
  { name: 'Contact',    href: 'contact' },
];
```

The desktop nav (line ~101) and mobile nav (line ~117) both `.map()` over this array, so this single edit propagates to both.

- [ ] **Step 2: Verify the build**

Run: `npm run build`

Expected: Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add src/app/components/VideoHero.tsx
git commit -m "Add Interview link to nav (desktop + mobile)"
```

---

## Task 4: Update `CLAUDE.md`

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update the Page Structure block**

In `CLAUDE.md`, find the Page Structure block under `## Page Structure (\`src/app/page.tsx\`)`. Locate the line:

```
#experience  Experience  — Career Circuit timeline (3 roles)
```

Insert a new line immediately after it:

```
#press-conference  PressConference  — Benmore CEO interview (click-to-play YouTube embed)
```

- [ ] **Step 2: Update the Navigation section**

In `CLAUDE.md`, find:

```
Current nav items: About · Experience · Projects · Skills · Contact
```

Replace with:

```
Current nav items: About · Experience · Interview · Projects · Skills · Contact
```

- [ ] **Step 3: Update the Components table**

Find the Components table. After the `Experience.tsx` row, add a new row:

```
| `PressConference.tsx` | Benmore CEO interview section — click-to-play YouTube embed |
```

- [ ] **Step 4: Verify no other CLAUDE.md sections need updating**

Skim the rest of `CLAUDE.md`. The "Known Gotchas" section, "Stack" table, and "Deployment" section do not need changes for this addition. No new public assets were added.

- [ ] **Step 5: Commit**

```bash
git add CLAUDE.md
git commit -m "Document PressConference section in CLAUDE.md"
```

---

## Task 5: Manual browser verification

**Files:** None modified.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`

Expected: Dev server starts on `http://localhost:3000` (or the next free port).

- [ ] **Step 2: Verify the section appears in the right place**

Open the local URL in a browser. Scroll past the Experience section. You should see:

- A small red uppercase eyebrow reading "Press Conference".
- A heading "Interview with **the Benmore CEO**" (red accent on "the Benmore CEO").
- A short gray blurb below.
- A 16:9 container showing the YouTube poster image with a large red circular play button centered over it.
- An italic gray caption below.

Then the Projects section appears next, with a `TrackDivider` between them.

- [ ] **Step 3: Verify the nav**

Look at the top nav. Items should read: **About · Experience · Interview · Projects · Skills · Contact**. Click "Interview" — the page should smooth-scroll to the new section.

Resize to a narrow mobile viewport (or use DevTools mobile mode), open the hamburger menu, and confirm "Interview" appears there too and works.

- [ ] **Step 4: Verify click-to-play behavior**

Open DevTools → Network tab → filter by "youtube". Before clicking play: there should be **no** request to `youtube.com/embed/...` — only the poster image from `i.ytimg.com`. Click the red play button. The thumbnail should be replaced by the YouTube iframe and the video should begin autoplaying.

- [ ] **Step 5: Verify keyboard accessibility**

Reload the page. Tab through the page until focus reaches the play button (it should receive a visible focus ring from the browser default since no `:focus-visible` style was added — that's acceptable). Press Enter or Space — the iframe should swap in and play.

- [ ] **Step 6: Verify hover state**

Hover the play button. The button should grow slightly (scale 110%) and brighten to a lighter red. Hover the player container itself — the border should shift from gray to a faint red glow.

- [ ] **Step 7: Stop the dev server, run a final build + lint**

Stop the dev server (Ctrl+C). Then run:

```bash
npm run build && npm run lint
```

Expected: Both pass cleanly. `<img>` warnings are acceptable.

- [ ] **Step 8: Final state — verify clean working tree**

Run: `git status`

Expected: `nothing to commit, working tree clean`. All four commits (Tasks 1-4) should be on `main` ahead of `origin/main`.

The implementer should NOT push to `origin/main` — leave that for the user (Vercel auto-deploys on push, so the user should choose when to publish).

---

## Acceptance Recap

When all tasks are complete, the spec's acceptance criteria should all hold:

1. ✅ Section renders between Experience and Projects with the F1 red-accent visual identity (Tasks 1, 2).
2. ✅ "Interview" appears in both desktop and mobile nav and smooth-scrolls to the section (Task 3, verified in Task 5).
3. ✅ Initial page load triggers no `youtube.com/embed` request — only the poster image loads (Task 1, verified in Task 5 Step 4).
4. ✅ Clicking play swaps in an autoplaying iframe of `Yj4e8yZWQTE` starting at 0:00 with `rel=0` (Task 1, verified in Task 5).
5. ✅ Play button is a real `<button>` element activatable via keyboard (Task 1, verified in Task 5 Step 5).
6. ✅ `npm run build` completes cleanly (verified after each task).
7. ✅ Section is centered, 16:9 responsive, hover shows red-tinted border glow (Task 1, verified in Task 5 Step 6).
