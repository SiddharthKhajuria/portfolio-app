# Portfolio App

Static portfolio built with React + Vite and deployed to GitHub Pages.

## Run locally

1. Install dependencies:
	- `npm install`
2. Start dev server:
	- `npm run dev`
3. Open the local URL shown by Vite.

## Build

- `npm run build`

Build output is generated in `dist/`.

## Deploy to GitHub Pages

1. Push this repository to GitHub (branch: `main`).
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` again (or run the workflow manually from **Actions**).

The workflow file at `.github/workflows/deploy.yml` builds and deploys automatically.