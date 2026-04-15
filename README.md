# GDTD Newsletter

Internal monthly newsletter for **Group Digital Technology Division (GDTD)** at Republic Financial Holdings Limited. Shipped as a single-page interactive web app hosted on the company intranet.

## Stack

- Bun + Vite + React + TypeScript
- Tailwind CSS v4
- motion/react for animations
- Biome for lint + format
- IIS for static hosting

## Local development

This project uses **Bun** as both the runtime and package manager.

Install Bun (once). On a locked-down work machine the easiest route is via npm:

```sh
# works anywhere Node + npm is already installed
npm install -g bun
```

Alternative installers if you don't have Node:

```sh
# macOS / Linux / WSL
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell, if script execution is allowed)
powershell -c "irm bun.sh/install.ps1 | iex"
```

Restart your shell, confirm with `bun --version` (>= 1.1), then run the app:

```sh
cd web
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173).

Other commands from `web/`:

```sh
bun run build     # production build to web/dist/
bun run preview   # serve the built dist/
bun run lint      # biome check
bun run check     # biome check --write (auto-fix)
```

## Deployment

```sh
cd web && bun run build
```

Copy `web/dist/*` and `iis/web.config` to the server's site root. Full steps in `iis/DEPLOY.md`.
