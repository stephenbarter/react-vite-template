# react-vite-template

Lean React frontend template — Vite, TypeScript, Tailwind CSS v4, ESLint v9, Prettier.

No backend assumptions. Use with any API or as a standalone frontend.

## Getting Started

```bash
gh repo create my-app --template stephenbarter/react-vite-template --clone --public
cd my-app
npm install        # installs Husky pre-commit hook automatically
cd frontend
npm install
npm run dev
```

## Stack

- **React 19** — UI
- **Vite 5** — dev server + bundler
- **TypeScript** — strict mode enabled
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin, no config file needed
- **ESLint v9** — strict flat config (typescript-eslint strict+stylistic, react, import-x, jsx-a11y, unicorn)
- **Prettier 3** — double quotes, semis, tabs, pre-commit hook via Husky + lint-staged

## Scripts

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # type-check + production build
npm run lint     # run ESLint
npm run format   # format all files with Prettier
npm run preview  # preview production build
```
