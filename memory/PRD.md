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
- Portrait photo: user declined uploading for now (2026-09-28); hero uses a branded solar-park visual with ET monogram caption instead of a stock portrait.
- Contact card updated (2026-09-28): eduard.toader@gmail.com, +40 723 772 210, Ploiești, Romania.

## LinkedIn Data (integrated 2026-09-28)
- Real experience: Qair Renewables (2023–present), Amromco Energy (2012–2016), WPD Romania (2009–2011), Kaufland (2007–2008) + "Earlier Career 1993–2007" strip (Shell, Amoco, Connex/Vodafone, Billa, Plus Discount, Trigranit, GFS).
- Hero stats replaced with real figures: 30+ years, 248 ha solar & BESS secured, 6+ BESS plots.
- About bio, competencies and skill tags rewritten around real land-acquisition/permitting profile.

## Backlog
- P0: Swap in real portrait.
- P1: Admin view for inquiries (GET /api/inquiries exists, no UI).
- P2: Projects/case-study section with imagery; downloadable CV PDF; SEO structured data (Person schema).

## Email Notifications (implemented 2026-09-28)
- Every contact-form submission triggers an email to OWNER_EMAIL (eduard.toader@gmail.com) via Emergent-managed Resend proxy (EMERGENT_EMAIL_KEY in backend/.env).
- Server-side template only (name, email, phone, type, message — all escaped); fixed subject; guardrail gate `_assert_safe_email` runs on every send; send failures never block the inquiry save (`email_sent` flag in response).
- Verified: test inquiry returned `email_sent: true`.
