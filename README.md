# JavaScript Playground

A minimal browser-based JavaScript playground powered by Vite. Uses ESM, pnpm,
ESLint (Airbnb base), and Prettier.

## Requirements
- Node.js (LTS recommended)
- pnpm

## Setup
```bash
pnpm install
```

## Run
```bash
pnpm dev
```
Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Build / Preview
```bash
pnpm build
pnpm preview
```

## Lint / Format
```bash
pnpm lint
pnpm format
```

## Notes
- Entry point: `index.html` loads `main.js` as an ESM module.
- ESLint config: `eslint.config.js` (flat config).
