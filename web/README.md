# web

The Vite + React app that powers the GDTD newsletter. See `../README.md` for project context, install, and deploy.

## Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Vite dev server with HMR at `localhost:5173` |
| `bun run build` | Type check and production build to `dist/` |
| `bun run preview` | Serve the built `dist/` on the network |
| `bun run lint` | Biome check (no auto-fix) |
| `bun run check` | Biome check with auto-fix |
| `bun run format` | Biome format only |

## Architecture

```mermaid
flowchart TD
    main[main.tsx] --> App[App.tsx]
    App --> ScrollProgress[ScrollProgress]
    App --> WheelNav[WheelNav]
    App --> Sections[Sections]

    Sections --> Hero[HeroSection]
    Sections --> About[AboutSection]
    Sections --> Org[OrgPlaceSection]
    Sections --> GM[GMLetterSection]
    Sections --> Updates[KeyUpdatesSection]
    Sections --> Team[TeamSection]
    Sections --> Products[ProductsSection]
    Sections --> Contact[ContactSection]
    Sections --> Next[ComingNextSection]

    Hero -.reads.-> Data[(src/data)]
    About -.reads.-> Data
    Org -.reads.-> Data
    GM -.reads.-> Data
    Updates -.reads.-> Data
    Team -.reads.-> Data
    Products -.reads.-> Data
    Contact -.reads.-> Data

    WheelNav --> Progress[useSectionProgress]
    Progress --> Scroll[motion/react useScroll]

    App -.uses.-> Motion[MotionConfig reducedMotion]
```

## Source layout

```
src/
    main.tsx           ← entry point
    App.tsx            ← section composition
    components/
        common/        ← SectionShell, SectionEyebrow, Watermark, Marquee
        effects/       ← Reveal, Parallax, NumberCounter
        nav/           ← WheelNav + ScrollProgress
        sections/      ← the 9 newsletter sections
        team/          ← person / team card building blocks
    data/              ← team, products, stats, gm, sections, keyUpdates
    hooks/             ← useSectionProgress (wheel sync)
    lib/               ← cn, motion variants, scroll utility
    styles/            ← globals.css (Tailwind v4 @theme tokens)
    types/             ← shared type definitions
```

Data lives in `.ts` files (not JSON) for type safety and autocomplete. Adding a new section means: creating a file in `components/sections/`, adding an entry to `data/sections.ts`, and mounting it in `App.tsx`. The wheel nav picks it up automatically.
