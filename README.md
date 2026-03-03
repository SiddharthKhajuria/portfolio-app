# Portfolio App

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Overview

This project showcases:
- Professional summary and education
- Technical skills with visual progress indicators
- Featured DevOps/cloud projects
- Contact information and message form

The app uses a shared layout with responsive navigation and route-based pages.

## Tech Stack

- React 18
- Vite 5
- React Router DOM 6 (`HashRouter`)
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons

## Pages

- Home (`/`)
- About (`/about`)
- Skills (`/skills`)
- Projects (`/projects`)
- Contact (`/contact`)

Unknown routes are redirected to Home.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build production bundle

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` – start local dev server
- `npm run build` – create production build in `dist/`
- `npm run preview` – preview the production build locally
- `npm run predeploy` – run build before deployment
- `npm run deploy` – publish `dist/` to GitHub Pages via `gh-pages`

## Deployment Notes

- `vite.config.js` sets `base` to `/portfolio-app/` in production.
- Routing is handled with `HashRouter` for GitHub Pages compatibility.

If your repository name changes, update the production `base` path in `vite.config.js`.

## Project Structure

```text
portfolio-app/
├── App.jsx
├── main.jsx
├── pages/
├── Components/
├── Portfolio-app/
│   ├── globals.css
│   └── layout.jsx
├── utils/
├── public/
└── entities/
```
