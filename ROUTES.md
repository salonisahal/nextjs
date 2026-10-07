# Priya issue — Routes & Navigation

## How to run
cd /workspace/frontend_runs/f4ea8756-2edb-4a9f-b9e1-0c1872c9113a/project
npm install --legacy-peer-deps && npx next dev -p 36565
Then open http://localhost:36565

## Routes

| Route | Page file | Description |
|-------|-----------|--------------|
| / | app/page.tsx | Single-page site: navbar, hero, about, and contact sections stacked on one scrollable page |
| * (unmatched) | app/not-found.tsx | Catch-all 404 page with a "Go Home" link back to / |

## Navigation map
- Navbar "Home" link -> scrolls to the #home section on the same page (Hero)
- Navbar "About" link -> scrolls to the #about section on the same page (About)
- Navbar "Contact" link -> scrolls to the #contact section on the same page (Contact)
- Hero "Get in touch" button -> scrolls to the #contact section
- Hero "Learn more" button -> scrolls to the #about section
- Contact form submit -> validates name/email/message, shows an inline success message on the
  same page (UI-only demo, no backend, no page navigation)
- Any unknown URL -> app/not-found.tsx -> "Go Home" link returns to /

## Shared components
- components/Navbar.tsx — fixed top navbar with smooth-scroll links to Home/About/Contact and a
  mobile menu toggle
- components/Hero.tsx — hero section with heading, tagline, and two scroll-to-section CTA buttons
- components/About.tsx — about section with two short paragraphs
- components/Contact.tsx — contact form (name, email, message) with inline validation and a
  success state; UI only, no backend call
- components/Footer.tsx — footer with dynamic copyright year

## Design tokens
Defined in an `@theme` block in app/globals.css (Tailwind CSS v4 CSS-first config):
- `--color-primary: #4f46e5` — primary brand/accent color (links, buttons)
- `--color-primary-dark: #4338ca` — primary hover state
- `--color-surface: #f8fafc` — light section background
- `--color-muted: #64748b` — secondary/body text
- `--color-accent: #22c55e` — accent green
- `--color-danger: #ef4444` — form error text
- `--color-success: #16a34a` — form success message
- `--color-dark: #0f172a` — headings and primary text
