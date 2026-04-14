# GDTD Newsletter (web)

The Bun + Vite + React + TypeScript app that powers the GDTD newsletter site.

See the repo root for project context and the v2 plan: `../README.md`.

## Quick start

```sh
bun install
bun run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Vite dev server with HMR |
| `bun run build` | Type check and production build to `dist/` |
| `bun run preview` | Serve the built `dist/` locally |
| `bun run lint` | Biome check (no auto-fix) |
| `bun run check` | Biome check with auto-fix |
| `bun run format` | Biome format only |

## Stack

- Bun (runtime + package manager)
- Vite 5 + React 18 + TypeScript 5
- Tailwind CSS v4 via `@tailwindcss/vite`
- Biome for lint and format
