@AGENTS.md

# Portfolio — project notes

## Content model

All visible content lives in `src/lib/content.ts`. Sections read from typed arrays/objects:

- `profile` — name, role, location, avatarUrl, socials
- `projects: Project[]`
- `skills: SkillGroup[]`
- `experience: Experience[]` — newest first
- `education: Education[]` — newest first

Both `Experience` and `Education` support a logo via:
- `logo?: string` — path under `/public/` (e.g. `/jobs/ai_kosmo_logo.jpeg`, `/education/uni-roma-tre.png`)
- `icon?: "code" | "graduation-cap"` — themed lucide icon fallback

`Education.school` is optional (degree-only entries are allowed). `Education.grade?` renders as a green `Chip` for highlighting.

## Section pattern

Each page section is a client component in `src/components/sections/` wrapped by `SectionShell` (`id`, `title`, children). `SectionShell` renders the `<h2>` only — no eyebrow/kicker. The Intro section is a standalone component (no SectionShell).

Add/remove a section in `src/app/page.tsx`.

## Public assets

- `/public/me3.jpg` — profile picture (referenced by `profile.avatarUrl`)
- `/public/jobs/<name>.{png,jpeg}` — company logos for experience entries
- `/public/education/<name>.{png,jpeg}` — school logos for education entries

## Theming

CSS variables in `globals.css` define light + dark token pairs. Notably:
- `--foreground` and `--background` auto-swap per theme — use `bg-foreground text-background` (or vice versa) to get an automatically inverted block that works in both modes. This is the pattern used for icon containers in Experience/Education.
- `--accent` — primary brand color (`text-accent`, `bg-accent`).

## UI libraries

- **HeroUI v3** (`@heroui/react`) — compound components: `Chip`/`Chip.Label`, `Card`/`Card.Header`/`Card.Content`/`Card.Footer`, `Button`, `Avatar`. v3 is in beta; do not assume v2 APIs.
- **lucide-react** for icons.
- **`motion/react`** (not `framer-motion`) for animation. Sections use a simple fade+rise on viewport entry, respecting `useReducedMotion`.
- **`next/image`** for all raster images; never raw `<img>`.

## Editing workflow

To update content, edit `src/lib/content.ts` only — types will catch missing/wrong keys. Hot reload via `next dev`.

## Italian context

User often writes prompts in Italian. Site copy stays in English. AI Kosmo (current employer) is an Italian AI hospitality concierge startup based in Predazzo.
