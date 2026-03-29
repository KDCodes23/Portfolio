# Kanishka Dutta Portfolio

Premium one-page portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 15 (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lenis (smooth scrolling)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content You Should Replace

- `data/site.ts`
  - `email`, `github`, `linkedin`, `discord`, `resumeUrl`
  - `valueProp`, `location`, `focus`, `availability`
  - `portraitImage`, `portraitAlt`
- `data/projects.ts`
  - all project `summary`, `tech`, and `links`
- `data/experience.ts`
  - timeline entries and periods
- `data/skills.ts`
  - skills per category

## Optional Tweaks

- Turn off custom cursor by removing `<CustomCursor />` from `app/page.tsx`.
- Turn off smooth scrolling by removing `<SmoothScroll />` from `app/page.tsx`.
- Adjust accent color in `tailwind.config.ts`.
- Replace portrait placeholder at `public/images/kanishka-fullbody-placeholder.svg` with your real image and update `portraitImage` in `data/site.ts`.
