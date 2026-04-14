# Deploying the GDTD Newsletter to IIS

The newsletter ships as a fully-static SPA. There is no backend to install - just a build artifact, a config file, and a web root on the intranet server.

## Server prerequisites

- Windows Server with **IIS 10 or newer** (for `removeServerHeader` support).
- **URL Rewrite Module 2.x** installed on the IIS site. Download from the Microsoft IIS extensions catalogue and install on the server before the first deploy.
- **Dynamic and Static Compression** IIS role services enabled.
- An IIS site (or virtual application) configured to serve the `dist/` contents at the desired URL, e.g. `http://intranet/gdtd`.
- Intranet firewall rule restricting inbound traffic to the RBL network. There is no app-level auth - everything depends on the firewall.

## One-time site setup

1. On the server, create the web root directory, e.g. `C:\inetpub\wwwroot\gdtd`.
2. In IIS Manager, add a new **Application** or **Site** pointing at that directory.
3. Copy `iis/web.config` from this repo into that directory. The same file stays there across deploys - every subsequent `robocopy` only replaces content, not the config.
4. In IIS Manager, set the Application Pool to **No Managed Code** (the site is pure static HTML/JS/CSS).
5. Confirm the pool identity has read access to the web root.

## Build locally

From the repo root:

```sh
cd web
bun install
bun run build
```

The build output lives at `web/dist/`. Verify it locally with `bun run preview` before pushing anywhere.

## Copy to the server

From a workstation that can reach the server over a UNC path:

```sh
robocopy web\dist \\server\c$\inetpub\wwwroot\gdtd /E /PURGE /XF web.config
```

Flags:

- `/E` copies all subdirectories including empty ones.
- `/PURGE` removes any files at the destination that are not in the source, so old hashed bundles get cleaned up.
- `/XF web.config` skips the `web.config` at the destination. The config is managed separately and must not be overwritten by `dist/` contents.

If the server rejects UNC access, zip `web/dist/`, copy it to the server over your preferred transport, and unzip into the web root with the same `/PURGE` semantics (delete then copy).

## Verify

After the copy:

1. Open the public URL from a workstation on the RBL network.
2. Confirm the hero section loads, Lenis smooth scroll works, and the wheel nav rotates.
3. Open DevTools Network and confirm:
    - `index.html` responds with `Cache-Control: no-cache, no-store, must-revalidate`.
    - Hashed assets (`/assets/index-*.js`, `/assets/index-*.css`) respond with `Cache-Control: max-age=31536000`.
    - Response headers include `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
    - `Server` header is absent (stripped by `removeServerHeader`).
4. Try navigating to a deep path like `/gdtd/anything` - the SPA fallback rewrite should return the index document.

## Rollback

Keep the previous `dist/` folder around as a dated backup before each deploy, e.g. `dist-backup-2026-04-14`. To roll back, re-run the `robocopy` from the backup directory. Because the site is pure static files, rollback is instant.

## Updating `web.config`

If you change `iis/web.config` in the repo, copy it to the server manually the next time you deploy - `robocopy /XF web.config` skips it by design, so the updated config will NOT be pushed automatically.
