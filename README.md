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

## Editor Diagnostics

Red squiggles in `.tsx` files come from three distinct layers — hover to identify which:

| Layer | Source | Catches |
|---|---|---|
| **TypeScript** (built-in) | `tsserver`, bundled with VS Code — always on | Undeclared vars, type mismatches — tooltip shows `ts(2304)` |
| **tsconfig strictness** | `tsconfig.app.json` | Extra checks from `strict`, `noUnusedLocals`, `noUnusedParameters`, etc. |
| **ESLint** | ESLint VS Code extension + `eslint.config.js` | Style, patterns, import order — tooltip shows `eslint(rule-name)` |

## Scripts

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # type-check + production build
npm run lint     # run ESLint
npm run format   # format all files with Prettier
npm run preview  # preview production build
```