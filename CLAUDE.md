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

The site uses the **HeroUI default theme** (blue accent) as shipped by `@heroui/styles` — `globals.css` does not override any color tokens, only `--font-sans`. Don't reintroduce custom palettes unless asked. Notably:
- `--foreground` and `--background` auto-swap per theme — use `bg-foreground text-background` (or vice versa) to get an automatically inverted block that works in both modes. This is the pattern used for icon containers in Experience/Education.
- `--accent` — primary brand color (`text-accent`, `bg-accent`).

## UI libraries

- **HeroUI v3** (`@heroui/react`) — compound components: `Chip`/`Chip.Label`, `Card`/`Card.Header`/`Card.Content`/`Card.Footer`, `Button`, `Avatar`. Do not assume v2 APIs; use the `heroui-react` MCP server for current docs. Since 3.2.6 React Aria packages (`react-aria`, `react-aria-components`, `@internationalized/date`, `@react-aria/ssr`, `@react-aria/utils`) are peer deps — they are pinned explicitly in `package.json` because the user's npm config sets `legacy-peer-deps=true`. Bump them together with HeroUI.
- **lucide-react** for icons.
- **`motion/react`** (not `framer-motion`) for animation. Sections use a simple fade+rise on viewport entry, respecting `useReducedMotion`.
- **`next/image`** for all raster images; never raw `<img>`.

## Editing workflow

To update content, edit `src/lib/content.ts` only — types will catch missing/wrong keys. Hot reload via `next dev`.

## Italian context

User often writes prompts in Italian. Site copy stays in English. AI Kosmo (current employer) is an Italian AI hospitality concierge startup based in Predazzo.
