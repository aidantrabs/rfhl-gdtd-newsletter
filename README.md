# GDTD Newsletter

Internal monthly newsletter for **Group Digital Technology Division (GDTD)** at Republic Financial Holdings Limited. Shipped as a single-page interactive web app hosted on the company intranet.

Currently in **v2 rebuild**. The v1 single-file HTML version lives in git history.

## Quick start

```sh
cd web
bun install
bun run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Stack

- **Bun** (runtime + package manager)
- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **motion/react** (Framer Motion) for animations
- **Lenis** for smooth scroll
- **Biome** for lint + format (replaces ESLint + Prettier)
- **IIS** on a Windows intranet server (static hosting, URL rewrite, security headers)

## Repository layout

```
newsletter/
    web/                 ← the Bun + Vite app (source of truth)
    iis/                 ← web.config + deploy docs
    README.md            ← this file
```

## Commands

All commands run from `web/`.

| Command | What it does |
|---|---|
| `bun install` | Install dependencies |
| `bun run dev` | Vite dev server with HMR at `localhost:5173` |
| `bun run build` | Production build to `web/dist/` |
| `bun run preview` | Serve the built `dist/` locally |
| `bun run biome check .` | Lint + format check |
| `bun run biome check --write .` | Auto-fix formatting + safe lint fixes |

## Deployment

Static site deploy to a Windows server running IIS.

1. `cd web && bun run build`
2. Copy `web/dist/*` and `iis/web.config` to the server's site root
3. IIS handles URL rewrite, security headers, compression

See `iis/DEPLOY.md` for the full step-by-step.

## Constraints

- **Desktop-only** - intranet users are on work machines, no mobile responsive
- **Network-restricted access** - no app-level auth, IT firewalls the server
- **Bundle budget**: < 250kb gzipped JS, < 30kb gzipped CSS
- **No 3D**, no WebGL, no heavy visualization libraries

## Contributing

- **4-space indentation** everywhere, no tabs
- **Minimal comments** - well-named identifiers first. If a comment must exist, it is lowercase and explains *why*.
- **Expand code** for readability - no clever one-liners, no compressed JSX
- **Atomic commits** - small, meaningful units. Target 50+ commits for the v2 rebuild. User drives every git operation.
- `bun run build` and `bun run biome check .` must pass cleanly at every commit

