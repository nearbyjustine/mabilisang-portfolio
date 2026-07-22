# Portfolio Content and Motion Update Design

## Objective

Update Justine Castañeda's existing portfolio to reflect her current Lead Software Engineer role, AI automation specialization, leadership scope, and recent work. Preserve the current teal visual identity, light/dark/hybrid themes, illustration style, and overall component language. The finished site must serve recruiters and prospective clients equally, keep current-company projects anonymous, and deploy at `https://howstine.vercel.app`.

## Audience and Positioning

The page should establish Justine as a lead-level engineer who can both architect and implement production systems. Recruiters should quickly see leadership, system ownership, and technical breadth. Clients should see clear problem-solving ability, delivery credibility, and a direct contact path.

Primary positioning: **Lead Software Engineer focused on AI automation, production systems, and engineering leadership.** Full-stack breadth supports this positioning rather than competing with it.

## Visual Direction

Retain the existing design:

- Teal accent color and zinc-based light/dark surfaces.
- Existing illustration and sketch assets.
- Current rounded cards, generous spacing, and section rhythm.
- Existing light, dark, and hybrid theme behavior.
- Lucide/react-icons visual language.

Only targeted refinements are in scope: clearer information hierarchy, shorter copy, consistent CTA styling, accessible states, better mobile behavior, and coherent motion. This is not a rebrand or wholesale layout replacement.

## Information Architecture

The single-page flow remains familiar but is sharpened:

1. **Navigation** - Work Experience, About, Skills, Projects, Contact; résumé CTA remains easy to reach.
2. **Hero** - Lead-level role, concise value proposition, proof metrics, project and contact CTAs.
3. **Experience** - Current Lead Software Engineer role first, followed by prior roles. Current employer details use résumé-approved company/role information, while product-specific descriptions remain generalized.
4. **About** - A shorter narrative centered on progression from hands-on builder to technical lead.
5. **Skills** - Prioritize Python, React, TypeScript, Firebase, AI integrations, automation, observability, testing, cloud, and leadership. Retain credible prior-stack breadth without presenting an undifferentiated tool wall.
6. **Featured Work** - Lead with an anonymized AI Content Automation Platform case study, then anonymized creator operations, iOS publishing fleet, and observability tooling. Retain selected earlier public projects as supporting work.
7. **Contact** - Speak to both engineering roles and select client engagements.
8. **Footer/metadata** - Canonical URL and social/profile data consistently use `https://howstine.vercel.app`.

## Content Rules

- Do not expose private repository URLs, internal domains, credentials, account names, or client-sensitive implementation details.
- Use generic case-study names for current-company products.
- Quantified claims may use facts already present in the résumé: four developers, three concurrent workstreams, 35k+ post corpus, and music match improvement from 27% toward 90%+.
- Do not imply ownership of third-party open-source projects merely because they exist locally.
- Replace the downloadable résumé with `/Users/justine/Downloads/resume.pdf` and use a stable public filename.
- Preserve public links only when they are already intentionally exposed by the portfolio or résumé.

## Motion and Interaction

Motion supports scanning and cause-and-effect:

- Hero text and proof items enter once with a restrained stagger.
- Sections reveal on first viewport entry using `IntersectionObserver`.
- Cards use subtle translate/elevation on hover and press without layout shift.
- Navigation and theme changes retain smooth state transitions.
- Durations remain approximately 150-400ms; opacity and transform are the primary animated properties.
- `prefers-reduced-motion: reduce` disables nonessential reveals, smooth scrolling, and transforms.
- No perpetual decorative animation, scroll hijacking, parallax, or animation that blocks interaction.

Implementation should avoid a heavy animation dependency unless the existing stack cannot meet these requirements cleanly. CSS and a small reusable reveal primitive are preferred.

## Accessibility and Responsive Requirements

- Semantic landmarks and sequential heading hierarchy.
- Skip-to-content link and visible keyboard focus states.
- Icon-only controls have accessible names.
- Interactive targets are at least 44px where practical.
- Normal text meets WCAG AA contrast in every theme.
- Contact form keeps visible labels, inline errors, and announced submission feedback.
- Meaningful images have accurate alt text; decorative images use empty alt text.
- No horizontal overflow at 320, 375, 768, 1024, or 1440px widths.
- Resume download and external links work by keyboard and indicate their purpose.

## Component and Data Boundaries

- Store portfolio content in typed data modules where it reduces repeated JSX and makes future résumé updates straightforward.
- Add one reusable reveal component/hook for viewport motion.
- Keep section components focused on presentation and map over typed content.
- Do not refactor unrelated UI primitives or replace the current theme system.

## Metadata and Deployment

- Update title, description, canonical tag, Open Graph/Twitter metadata, JSON-LD, `robots.txt`, and `sitemap.xml` to `https://howstine.vercel.app`.
- Ensure Vite production output works on Vercel without server-side assumptions.
- The repository's default deploy branch must end as `main`; push the finished verified change to `origin/main` so Vercel can build automatically.
- Confirm the resulting Vercel deployment is successful and the canonical URL responds with the updated site.

## Verification

- Add focused tests where practical for content/data and reveal behavior before implementation changes.
- Run TypeScript build and ESLint.
- Inspect the production site locally in both desktop and mobile viewports and in light/dark modes.
- Verify reduced-motion behavior, keyboard navigation, links, résumé download, metadata, and no console errors.
- Review the final diff for sensitive names or URLs before pushing.
- After pushing `main`, monitor Vercel and smoke-test `https://howstine.vercel.app`.

## Out of Scope

- A new brand identity or editorial redesign.
- Publishing private source code or current-company screenshots.
- Adding a CMS, blog, project filtering, or multi-page routing.
- Rewriting the contact delivery backend unless testing reveals a defect directly blocking the updated portfolio.
