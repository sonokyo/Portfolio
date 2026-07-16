<p align="center">
  <img src="public/kyo.jpg" alt="Kyo" width="120" height="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Kyo Portfolio</h1>

<p align="center">
  <strong>Personal portfolio — Next.js 16, i18n, dark/light theme, glassmorphism design.</strong>
</p>

<p align="center">
  <a href="https://sonokyo.vercel.app" target="_blank">sonokyo.vercel.app</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/i18n-EN%2FIT-FF6B6B?style=flat-square" alt="i18n EN/IT" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License MIT" />
</p>

---

## Overview

Modern, responsive portfolio website showcasing Minecraft plugin development and server configuration work. Built with the latest web technologies, fully translated in English and Italian.

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4, glassmorphism design |
| **Animation** | Framer Motion |
| **Internationalization** | next-intl (EN/IT) |
| **Icons** | Lucide React |
| **Fonts** | Sora Variable (body), Space Grotesk (headings), JetBrains Mono (code) |
| **UI Utilities** | CVA, clsx, tailwind-merge |
| **APIs** | Lanyard API (Discord status) |
| **3D** | skinview3d (Minecraft skin viewer) |
| **Tooling** | ESLint, sharp, PostCSS |

## Features

- EN/IT internationalization with next-intl
- Dark/light theme with CSS custom properties
- Glassmorphism UI with animated gradients
- Real-time Discord status via Lanyard API
- Minecraft skin 3D viewer (skinview3d)
- Stats section with animated counters
- Skills grid with official CDN icons
- Project filtering by category
- About page with timeline, values, quick facts
- Project detail pages with tech/feature lists
- Responsive design with smooth page transitions
- SEO metadata, OpenGraph, JSON-LD, sitemap
- PWA manifest with custom icons
- Google Search Console verification
- CSP security headers

## Getting Started

```bash
# Clone the repository
git clone https://github.com/sonokyo/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  app/              # Next.js App Router pages
    [locale]/       # Localized routes (en, it)
  components/       # UI components
    layout/         # Layout components
    sections/       # Page sections
    providers/      # Providers (theme)
    ui/             # Reusable UI components
  data/             # Static data (skills, projects, site)
  i18n/             # Internationalization config & messages
  lib/              # Utility libraries
  types/            # TypeScript type definitions
```

## Deployment

Automatically deployed to Vercel via GitHub integration.

---

<p align="center">
  Built by <a href="https://github.com/sonokyo">Kyo</a>
</p>
