# Priya issue

A simple one-page landing site called "TunnelCheck Demo". It has a navbar that smooth-scrolls
to the Home, About, and Contact sections on the same page, a hero section, an about section with
two short paragraphs, a UI-only contact form, and a footer with copyright text. There is no
backend — this is a static demo.

## Tech stack
Next.js (App Router) + TypeScript, Tailwind CSS v4.

## Getting started
```
npm install --legacy-peer-deps
cp .env.example .env
npm run dev
```
Then open http://localhost:36565

## Environment variables
See .env.example. This project has no backend calls, so NEXT_PUBLIC_API_URL is unused by default
and included only for forward compatibility.

## Project structure
- app/ — App Router pages (home page, not-found page, root layout, smoke tests)
- components/ — shared UI sections (Navbar, Hero, About, Contact, Footer)
- lib/validation/ — shared contact form validation helpers
