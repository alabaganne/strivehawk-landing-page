# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page for Strivehawk, a company offering premium IT services (web development, video editing, and AI solutions). The site is built with React 19, TypeScript, Tailwind CSS, and Framer Motion for animations. It uses the JetBrains Mono font and features a dark theme with green (#3ecf8e) accent colors.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router (`src/app/`)
- Main landing page: `src/app/page.tsx` - composes all section components
- Contact page: `src/app/contact/page.tsx`
- Root layout: `src/app/layout.tsx` - configures JetBrains Mono font and metadata

### Component Organization
- `src/components/` - All UI components are in this directory
- Landing page sections (imported in order in page.tsx):
  - `Navbar` - Navigation header
  - `Hero` - Main hero section
  - `Partners` - Partners marquee with brand logos (infinite scrolling)
  - `Stats` - Statistics display
  - `Services` - Services offered
  - `Process` - Work process explanation
  - `TechStack` - Technologies used
  - `Portfolio` - Project portfolio
  - `Testimonials` - Client testimonials
  - `FAQ` - Frequently asked questions
  - `CTA` - Call to action
  - `Footer` - Site footer
- `src/components/icon/` - SVG icon components for brand logos
- `FadeIn` - Reusable animation wrapper component using Framer Motion

### Styling System
- Tailwind CSS configuration in `tailwind.config.ts`
- Custom color palette defined:
  - `background: #030303` - Main background
  - `foreground: #ededed` - Text color
  - `primary: #3ecf8e` with hover and glow variants - Brand green
  - `surface: #121212` with hover variant - Card backgrounds
  - `border: #2a2a2a` - Border color
- Global styles in `src/app/globals.css`
- Utility function `cn()` in `src/lib/utils.ts` for conditional class merging (combines clsx and tailwind-merge)

### Animation System
- Framer Motion for all animations
- Custom `FadeIn` component provides reusable scroll-triggered animations
- Supports 4 directions: up, down, left, right
- Configurable delay for staggered animations
- Infinite scroll animation for Partners marquee section

### Key Technologies
- Next.js 16.0.3 (App Router)
- React 19.2.0
- TypeScript 5
- Tailwind CSS 3.4.18
- Framer Motion 12.23.24
- React Compiler plugin enabled

## Important Notes

- The site is in French (lang="fr" in layout.tsx)
- All components use 'use client' directive when they need client-side interactivity (animations, state)
- The Partners section uses an infinite scrolling marquee pattern with brand logo icons
- Font: JetBrains Mono is loaded via next/font/google with weights 100-800
