# JavaScript Playground

A minimal browser-based JavaScript playground powered by Vite. Uses ESM, pnpm,
ESLint's recommended rules, and Prettier.

## Requirements

- Node.js 22.13+ in the 22.x series, or Node.js 24+ (an LTS release is recommended).
  Node.js 20.19+ in the 20.x series is also accepted by the tooling.
- pnpm 10.34.5, pinned in `package.json`.

## Setup

```bash
pnpm install --frozen-lockfile
```

## Run

```bash
pnpm dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).
The page is intentionally blank: open the browser's developer console to see the
Axios response from JSONPlaceholder. This example requires an internet connection.

## Build / Preview

```bash
pnpm build
pnpm preview
```

## Lint / Format

```bash
pnpm lint
pnpm format:check
pnpm format
```

`format:check` checks formatting without changing files; `format` writes changes.
ESLint uses its recommended rules and Prettier integration. Browser globals are
available in exercise files; Node.js globals are available in `eslint.config.js`.
Unused variables produce warnings, and `console.log`, `++`, and anonymous
functions are allowed for exercises. The old Airbnb and import-plugin rule sets
are no longer applied.

## Dependency updates

Direct dependencies use exact versions. `pnpm-workspace.yaml` sets
`minimumReleaseAge: 20160` (14 days) for newly resolved dependency versions and
`saveExact: true` for future additions. Verify the publication date of an exact
version before updating it; the age setting does not revalidate an existing
lockfile. Commit `package.json`, `pnpm-lock.yaml`, and configuration changes
together when updating dependencies.

After an update, run lint, formatting checks, build, `pnpm audit`, and
`pnpm audit --prod`. Check the console output in both development and preview.

## Notes

- Entry point: `index.html` loads `main.js` as an ESM module.
- ESLint config: `eslint.config.js` (flat config).
