# PRD — Eduard Toader Executive Portfolio

## Original Problem Statement
Build a professional, high-converting single-page portfolio website for "Eduard Toader" (real estate, renewable energy development, commercial project oversight). Bilingual RO/EN. Corporate-elegant design (navy, slate, gold accent), sticky navbar, kinetic hero with portrait, About, Experience timeline (3-4 placeholder roles), Skills, editorial marquee, functional contact form (phone, email, inquiry details), LinkedIn link, semantic SEO HTML, smooth scrolling, mobile-first.

## Architecture
- Frontend: React (CRA/craco), Tailwind, framer-motion (reveals, parallax), lenis (smooth scroll), sonner (toasts). Components: Navbar, Hero, Marquee, About, Experience, Competencies, Contact, Reveal. Translations in `src/i18n.js` (EN/RO state-driven).
- Backend: FastAPI, MongoDB (motor). `POST /api/inquiries`, `GET /api/inquiries`. UUID string ids, `_id` excluded.
- Favicon: custom "ET" SVG monogram (`public/favicon.svg`).

## User Personas
- Investors / partners evaluating Eduard for real estate & renewable energy projects.
- Recruiters / boards reviewing executive track record.

## Implemented (2026-09-28)
- Bilingual EN/RO full-site content with navbar toggle.
- Kinetic hero: masked line-by-line reveal, gold serif accent line, parallax portrait with spotlight frame, stats strip.
- Slow editorial marquee (45s, pause on hover).
- About (asymmetric editorial layout + pillars), Experience timeline (4 placeholder roles), Competencies bento grid (5 cards, 2 with imagery) + skill tags.
- Contact: functional form (name, phone, email, inquiry type, message) saved to MongoDB + success/error toasts; LinkedIn link; footer.
- Lenis momentum scrolling, custom scrollbar, grain overlay, ET favicon, SEO title/meta.

## Placeholders to replace by user
- Portrait photo (user said they have one — not yet uploaded).
- `[Company Name]` entries + stats (€150M+, 250MW+, 15+ yrs), email `eduard.toader@example.com`, phone `+40 700 000 000`.

## Backlog
- P0: Swap in real portrait; replace placeholder company names/stats with LinkedIn data.
- P1: Admin view for inquiries (GET /api/inquiries exists, no UI); email notification on new inquiry (Resend).
- P2: Projects/case-study section with imagery; downloadable CV PDF; SEO structured data (Person schema).
