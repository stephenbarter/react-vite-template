# react-vite-template

Lean React frontend template — Vite, TypeScript, Tailwind CSS v4, ESLint v9.

No backend assumptions. Use with any API or as a standalone frontend.

## Getting Started

```bash
gh repo create my-app --template stephenbarter/react-vite-template --clone --public
cd my-app/frontend
npm install
npm run dev
```

## Stack

- **React 18** — UI
- **Vite 5** — dev server + bundler
- **TypeScript** — strict mode enabled
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin, no config file needed
- **ESLint v9** — flat config with React hooks + refresh rules

## Scripts

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # type-check + production build
npm run lint     # run ESLint
npm run preview  # preview production build
```
