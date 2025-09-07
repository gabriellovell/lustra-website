# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server with Turbopack
- **Build**: `npm run build` - Creates production build with Turbopack
- **Start production**: `npm run start` - Starts production server
- **Lint**: `npm run lint` - Runs ESLint

Note: This project uses Turbopack as the build tool for faster development and builds.

## Architecture

This is a Next.js 15 application using the App Router architecture:

- **Framework**: Next.js 15.5.2 with React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Fully typed with strict mode enabled
- **Fonts**: Uses Geist font family (sans and mono variants)
- **Path aliases**: `@/*` maps to root directory

### Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with font setup
  - `page.tsx` - Home page component
  - `globals.css` - Global Tailwind styles
- Configuration files at root level (next.config.ts, tsconfig.json, etc.)

### Key Configuration

- **ESLint**: Uses Next.js core-web-vitals and TypeScript rules
- **TypeScript**: Strict mode with ES2017 target
- **Next.js**: Minimal configuration with Turbopack enabled