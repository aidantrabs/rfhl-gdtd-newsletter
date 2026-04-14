# Digital Products Newsletter

Internal company newsletter for the Digital Products department. Each issue is a self-contained interactive webpage + an Outlook-compatible email teaser.

## How It Works

1. **Email goes out** via Outlook — a short teaser with a link
2. **Link opens** the full interactive newsletter on the intranet
3. **Each issue** is a single `.html` file — no server, no build step, no dependencies

## Publishing a New Issue

1. Copy the latest issue from `issues/` (e.g., `issue-1.html` → `issue-2.html`)
2. Update the content — all placeholder sections are marked with `<!-- [PLACEHOLDER] -->` comments
3. Create a matching email teaser in `email/` (copy and update `issue-1-teaser.html`)
4. Upload `issue-X.html` to the intranet
5. Send the email teaser with the link to the hosted page

## File Structure

```
newsletter/
├── README.md              — This file
├── reference/             — Design reference files
├── issues/
│   ├── issue-1.html       — First newsletter (self-contained)
│   └── issue-2.html       — Second newsletter, etc.
└── email/
    ├── issue-1-teaser.html — Outlook email for Issue 1
    └── issue-2-teaser.html — etc.
```

## Tech Details

- **No build step** — each issue is a single HTML file with inline CSS and JS
- **No external dependencies** — works offline, passes IT security review
- **System fonts** — no Google Fonts or CDN requests
- **Dark theme** — consistent brand across all issues
- **Mobile responsive** — works on phone, tablet, and desktop
- **Interactive** — scroll animations, expandable cards, tabs, polls

## Content Calendar (Template)

| Month | Theme | Key Sections |
|-------|-------|--------------|
| 1     | Meet Digital Products | Intro, org structure, product map, how to reach us |
| 2     | What We Shipped | Recent launches, behind the scenes, team spotlight |
| 3     | By the Numbers | Metrics, uptime, usage stats, data stories |
| 4     | Roadmap Preview | What's coming, early previews, feedback poll |

## Who Maintains This

- **Editor rotation**: A different team member leads each issue
- **Coordinator**: [PLACEHOLDER: Name] — owns the schedule and quality bar
- **Design/code**: The newsletter is built by our own team — it's a showcase of what we do
