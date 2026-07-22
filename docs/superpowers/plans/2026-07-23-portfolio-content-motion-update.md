# Portfolio Content and Motion Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the existing portfolio with Justine's current lead-level résumé, anonymized recent work, accessible motion, and canonical Vercel metadata while retaining the current design.

**Architecture:** Keep the current React section structure and theme hook. Move reusable current-work content into typed arrays, add a small IntersectionObserver-based reveal component, and apply targeted semantic/accessibility refinements without introducing a motion library.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS 4, Vitest, Testing Library

## Global Constraints

- Preserve the current teal identity, illustration assets, theme behavior, and component language.
- Current-company product work must use anonymous case-study names and no private URLs or screenshots.
- Canonical production URL is exactly `https://howstine.vercel.app`.
- Motion uses opacity/transform, lasts 150-400ms, and respects `prefers-reduced-motion`.
- Replace the public résumé with `/Users/justine/Downloads/resume.pdf`.

---

### Task 1: Content Model and Résumé

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/data/portfolio.test.ts`
- Modify: `src/sections/Hero.tsx`, `src/sections/Experiences.tsx`, `src/sections/AboutMe.tsx`, `src/sections/TechStack.tsx`, `src/sections/Projects.tsx`
- Replace: `public/justine_castaneda_resume.pdf`

**Interfaces:** Produces typed `experience`, `projects`, `proofPoints`, and `techStack` arrays consumed by sections.

- [ ] Write a failing Vitest test asserting current role, anonymized featured work, proof metrics, and absence of private repository/company product names.
- [ ] Run `npm test -- --run`; expect failure because `src/data/portfolio.ts` does not exist.
- [ ] Implement typed content arrays and refactor sections to render them while preserving their existing layout/classes.
- [ ] Copy the supplied PDF to the stable public résumé path and verify with `cmp` and `pdfinfo`.
- [ ] Run tests and commit with `feat: update portfolio content and resume`.

### Task 2: Accessible Motion and Page Semantics

**Files:**
- Create: `src/components/Reveal.tsx`
- Create: `src/components/Reveal.test.tsx`
- Modify: `src/App.tsx`, `src/index.css`, relevant section wrappers and interactive controls

**Interfaces:** Produces `Reveal({ children, delay?, className? })` and global `.reveal`/`.is-visible` behavior.

- [ ] Write tests that mock IntersectionObserver and assert visibility plus reduced-motion-safe classes.
- [ ] Run the targeted test and confirm it fails before implementation.
- [ ] Implement one-time viewport reveals, hero staggering, hover/press transitions, a skip link, `main` landmark, accessible control names, and visible focus styles.
- [ ] Add a reduced-motion media query that disables reveals, transforms, and smooth scrolling.
- [ ] Run tests and commit with `feat: add accessible portfolio motion`.

### Task 3: Canonical Metadata and Production Polish

**Files:**
- Modify: `index.html`, `public/robots.txt`, `public/sitemap.xml`, `src/sections/Footer.tsx`, `README.md`, `package.json`

**Interfaces:** Produces consistent public metadata for `https://howstine.vercel.app` and test scripts used by CI/local verification.

- [ ] Add a test/script assertion that no stale production hostname remains in public metadata.
- [ ] Update title, descriptions, canonical, Open Graph/Twitter tags, JSON-LD, robots, sitemap, footer, and README.
- [ ] Run `npm run lint`, `npm test -- --run`, and `npm run build`; all must exit 0.
- [ ] Commit with `chore: update portfolio metadata`.

### Task 4: Visual QA, Review, and Deployment

**Files:** All changed files; no new runtime interface.

- [ ] Serve the production build and inspect 375px and 1440px layouts in light/dark modes, keyboard focus, reduced motion, résumé response, metadata, and console errors.
- [ ] Search the diff for private repo URLs/product names and fix any disclosures.
- [ ] Run final `npm run lint && npm test -- --run && npm run build` and record passing output.
- [ ] Review the final diff, commit any QA fixes, rename/merge the verified branch into `main`, and push `origin/main`.
- [ ] Monitor Vercel and smoke-test `https://howstine.vercel.app` until the updated deployment responds successfully.
