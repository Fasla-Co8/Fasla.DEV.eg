# FASLA.DEV — Premium Software Development Education Platform

A complete, bilingual (English-first / Arabic) marketing and registration experience for
**FASLA.DEV** — a professional software development academy.

> **Stack note:** the workspace entry point is a React + Vite + Tailwind project, so the
> implementation uses that required stack. All requested behaviour (hash routing, centralized
> translations, RTL/LTR, localStorage persistence, booking flow, WhatsApp handoff) is implemented
> in the React source. No backend is used.

## Run

```bash
npm install
npm run dev
npm run build
```

## Pages / routes

| Route | Page |
| --- | --- |
| `#/` | Home — hero (no header), about, 9 specializations, projects, why us, testimonials, footer |
| `#/courses` | All specializations & tracks with major filters (`#/courses?major=ai-ml`) |
| `#/course/:slug` | Full track details, skills roadmap, objectives, projects, FAQs |
| `#/booking` | Bilingual registration form + live booking summary (sends to WhatsApp) |
| `#/about` | About FASLA.DEV |
| `#/privacy`, `#/terms`, `#/refund` | Legal pages |

## Catalog: 6 specializations · 25 fields

| # | Specialization | Tracks | Price range (EGP) |
| --- | --- | --- | --- |
| 01 | Software Development | Front-End · Back-End · Full-Stack · WordPress · Desktop · Software Engineering · QA Automation · Software & AI Foundation | 4,000–13,000 |
| 02 | Mobile Development | Flutter · Android (Kotlin) · iOS (Swift) | 9,000–12,000 |
| 03 | Artificial Intelligence & Data | AI · ML · Deep Learning · Computer Vision · Generative AI · Data Science · Data Analysis · Data Engineering | 7,000–18,000 |
| 04 | Cybersecurity & Cloud | Cybersecurity · Cloud Computing · DevOps | 12,000–15,000 |
| 05 | Game Development | Unity / Unreal | 12,000 |
| 06 | IoT & Automation | IoT · Automation | 10,000 | 3,500–9,000 |

All catalog data (names, concepts, skills, projects, price ranges) lives in
`src/data/courses.ts` — edit it there and the whole site updates.

## Where to edit

| What | File |
| --- | --- |
| Email, phone, WhatsApp number, social destinations, location | `src/data/site.ts` → `siteConfig` |
| Specializations, tracks, skills, projects, price ranges | `src/data/courses.ts` |
| All interface copy (English + Arabic) | `src/i18n/translations.ts` → `dict` |
| Testimonials, why-us cards, project levels, governorates, legal copy | `src/data/site.ts` |
| Logo lockup / F mark | `src/components/Brand.tsx` |
| Colours, typography, sharp-edge rules, marquee | `src/index.css` |

## Official contact channels

- **Email:** fasla.dev.eg@gmail.com
- **Phone / WhatsApp:** 01201847164 (`+20 120 184 7164`)
- **Every booking and inquiry is sent to WhatsApp** (`wa.me/201201847164`) with the student's
  full registration details. A floating WhatsApp button is available on every page.
- Socials (footer icons): Facebook, Instagram, YouTube, **WhatsApp** (official channel),
  **Telegram**, **TikTok**, **GitHub** (github.com/fasladev), **LinkedIn** — live URLs are
  configured in `siteConfig.socials` (`src/data/site.ts`). The LinkedIn icon is in place and
  ready for its official profile URL.
- The footer email button opens the visitor's mail app with a pre-addressed, pre-written
  inquiry message (subject + body, bilingual).

## Language behaviour

- **Default language: English** (LTR). Students can switch to Arabic (RTL) at any time.
- Switcher: **EN / ع** in the navbar (and a floating switcher on the no-header homepage).
- Preference is stored in `localStorage` under `fasla:lang` and applied to `<html lang dir>`
  before React mounts (inline script in `index.html`), so it survives navigation and refresh.
- Booking drafts are stored under `fasla:bookingDraft` and can be cleared from the form.

## Brand

The F mark in `src/components/Brand.tsx` is a clean vector redraw of the official supplied logo:
the sharp italic electric-blue F, the `Fasla` wordmark in white with `.DEV` in blue, and the
`Code • Learn • Build` tagline with blue separators.

## Design system

- Black `#050505` dominant, panels `#101010`, cards `#151515`, borders `#292929`.
- Electric blue `#1677FF`, bright blue `#2585FF`, secondary text `#A7A7A7`.
- **Zero rounded corners** globally enforced; rectangular buttons, inputs, cards and badges.
- Space Grotesk / Inter / Plus Jakarta Sans for English, Alexandria / Cairo for Arabic.
- Testimonials are clearly labelled **sample reviews from fictional students** until verified
  student feedback is collected. No employment guarantees are made anywhere.
