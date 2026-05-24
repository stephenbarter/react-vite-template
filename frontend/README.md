# Frontend

A modern React starter built with **Vite**, **TypeScript**, and **Tailwind CSS v4**.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev) | 18.3 | UI component library |
| [TypeScript](https://www.typescriptlang.org) | 5.5 | Static typing |
| [Vite](https://vitejs.dev) | 5.4 | Dev server & build tool |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Utility-first CSS framework |
| [ESLint](https://eslint.org) | 9.9 | Linting (flat config) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm, yarn, or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with Hot Module Replacement |
| `npm run build` | Type-check then produce an optimised production build in `dist/` |
| `npm run preview` | Serve the production build locally for manual testing |
| `npm run lint` | Run ESLint across all `.ts` / `.tsx` files |

---

## Out-of-the-Box Features

### ⚡ Vite
- Near-instant cold starts and sub-millisecond HMR via native ESM
- Single config file: [`vite.config.ts`](vite.config.ts)
- Plugins used:
  - `@vitejs/plugin-react` — Babel-based React Fast Refresh
  - `@tailwindcss/vite` — Tailwind v4 Vite-native integration

### 🎨 Tailwind CSS v4
Tailwind v4 ships as a first-class Vite plugin — no `tailwind.config.js` or PostCSS required.

**How it works:**
- The plugin is registered in `vite.config.ts`
- A single line in [`src/index.css`](src/index.css) activates it:
  ```css
  @import "tailwindcss";
  ```
- All utility classes are available immediately in any component via `className`

**Example usage:**
```tsx
<div className="min-h-screen bg-gray-50 flex items-center justify-center">
  <h1 className="text-4xl font-bold text-gray-900">Hello</h1>
</div>
```

> **v4 vs v3:** If you're familiar with Tailwind v3, note that v4 removes the PostCSS dependency, uses CSS-native cascade layers under the hood, and no longer needs `content` paths configured — it scans your source automatically via the Vite plugin.

### 🟦 TypeScript
Full TypeScript support with **project references** — the config is split into three files:

| File | Covers |
|------|--------|
| `tsconfig.json` | Root — ties together the two sub-configs |
| `tsconfig.app.json` | Browser/React source (`src/`) |
| `tsconfig.node.json` | Vite config & tooling (Node environment) |

This split prevents Node types from bleeding into your React code and vice versa.

### 🔍 ESLint (Flat Config)
ESLint v9 uses the new **flat config** format (`eslint.config.js` — no `.eslintrc`). The setup includes:

- **`@eslint/js`** — core JS recommended rules
- **`typescript-eslint`** — TypeScript-aware linting
- **`eslint-plugin-react-hooks`** — enforces the Rules of Hooks
- **`eslint-plugin-react-refresh`** — warns when a module exports non-component values that would break Fast Refresh

### 🔄 React Fast Refresh
Changes to React components are reflected instantly in the browser **without losing component state**, powered by `@vitejs/plugin-react` and Babel's Fast Refresh transform.

---

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Shared/reusable components (add yours here)
│   ├── App.tsx            # Root application component
│   ├── main.tsx           # React DOM entry point
│   └── index.css          # Global styles & Tailwind import
├── index.html             # HTML entry point (Vite SPA shell)
├── vite.config.ts         # Vite + plugin configuration
├── tsconfig.json          # TypeScript project references root
├── tsconfig.app.json      # TS config for src/ (browser)
├── tsconfig.node.json     # TS config for vite.config.ts (Node)
└── eslint.config.js       # ESLint flat config (v9)
```

---

## Production Build

```bash
npm run build
```

Outputs to `dist/`. Vite will:
1. Run `tsc -b` to type-check the project
2. Bundle and tree-shake via Rollup
3. Minify JS and purge unused Tailwind classes automatically

To preview the production build locally before deploying:

```bash
npm run preview
```
