---
name: Nélio Dias Portfolio
description: Full-stack developer portfolio — calibrated, dark, technically confident
colors:
  violet: "#7c3aed"
  violet-soft: "#a78bfa"
  navy-deep: "#020617"
  section-dark: "#0f172a"
  surface-dark: "#1e293b"
  ink: "#f8fafc"
  ink-muted: "#94a3b8"
  ink-subdued: "#6b7280"
  teal: "#14b8a6"
  teal-deep: "#0f766e"
  canvas: "#ffffff"
  surface-light: "#f1f5f9"
  surface-mid: "#e2e8f0"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "#6d28d9"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  tag-tech:
    backgroundColor: "rgba(20,184,166,0.10)"
    textColor: "{colors.teal-deep}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  project-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.lg}"
    padding: "0"
---

# Design System: Nélio Dias Portfolio

## 1. Overview

**Creative North Star: "The Precision Instrument"**

This portfolio is calibrated, not decorated. Every choice — the dark-by-default canvas, a single chromatic accent, tight geometric letterforms — signals that Nélio's engineering judgment is the product. The interface does not impress through volume or ornamentation; it impresses through exactness. Each section break, spacing decision, and typographic scale serves communication. Nothing is present to feel designed.

The palette is nearly achromatic. Deep navy-black anchors everything. Violet fires precisely where trust must be established — the developer's name, the primary call to action. Teal marks technology tags as a distinct data type; it never appears on interactive controls. Nothing else competes for attention. Restraint here is a deliberate signal: the developer who built this knows what to leave out.

This system explicitly rejects: shadcn/ui slate kit defaults used without customization; identical three-card service grids; SaaS startup energy (loud gradients, bouncy animations, "Let's build something amazing!" copy); gradient text; side-stripe borders; hero-metric templates; and any decorative motion that isn't grounded in a user interaction.

**Key Characteristics:**
- Dark canvas by default; light mode is supported, not the primary experience
- One chromatic accent (violet) for identity and primary action — nothing else
- Teal as a bounded read-only signal for technology tags exclusively
- Typography is the primary design instrument — hierarchy through weight and scale, not decoration
- Motion is restrained: hover feedback and scroll reveals only; no choreographed entrance sequences

## 2. Colors: The Near-Achromatic Palette

Almost everything is neutral. Violet and teal earn their presence precisely because they are surrounded by nothing.

### Primary
- **Violet Signal** (`#7c3aed`, dark-mode soft: `#a78bfa`): The identity color. Applied to Nélio's name in the hero and the primary CTA button. Two usages per screen maximum. Its rarity is the point — the moment it appears, the eye recognizes it as significant.

### Neutral
- **Navy Deep** (`#020617`): The base canvas in dark mode. Also the primary text color in light mode. The visual anchor everything else inhabits.
- **Midnight Section** (`#0f172a`): Section backgrounds that alternate with Navy Deep in dark mode. The tonal separation creates rhythm without color.
- **Surface Dark** (`#1e293b`): Elevated surfaces in dark mode — cards, sheet drawers, hover states on interactive surfaces.
- **Near White** (`#f8fafc`): Primary text in dark mode; light-mode canvas fallback.
- **Slate Mid** (`#94a3b8`): Muted/supporting text in dark mode. Body copy, secondary labels.
- **Slate Gray** (`#6b7280`): Muted text in light mode.
- **Canvas** (`#ffffff`): Background in light mode.
- **Surface Light** (`#f1f5f9`): Alternating section backgrounds in light mode.
- **Surface Mid** (`#e2e8f0`): Deeper alternating sections, light mode.

### Secondary (Tech Tag Accent)
- **Teal Signal** (`#14b8a6`, text: `#0f766e` light / `#5eead4` dark): Technology skill tags. Read-only, informational. Never interactive.

### Named Rules

**The One-Voice Rule.** Violet appears on ≤ 2 elements per screen: the developer's name and one action. Every additional violet usage halves its impact — and the trust it builds.

**The Teal Boundary Rule.** Teal is a read-only signal for technology tags. Prohibited on interactive controls, section headings, body copy, and decorative elements.

**The Tonal Rhythm Rule.** Depth is achieved through alternating background steps in the navy-slate ramp, not through shadows at rest. Shadows indicate interaction, not structure.

## 3. Typography

**Display Font:** Bricolage Grotesque (geometric variable font, distinctive at large display sizes — the wide ink traps and optical peculiarities read as a maker's hand)
**Body Font:** Source Sans 3 (humanist sans-serif, warm and legible at every size)

**Character:** Bricolage Grotesque reads as precise and contemporary without coldness — a tool built to last. Source Sans 3 grounds everything else in functional clarity. The pairing contrasts on geometry (geometric display, humanist body) and weight authority (black/bold for display, regular for prose). No second geometric sans is ever paired with Bricolage Grotesque; the contrast must be on the geometric/humanist axis.

### Hierarchy
- **Display** (900, `clamp(3rem, 7vw, 4.5rem)`, lh 1.1, ls −0.03em): Developer name in hero. Maximum one per page. Never uppercase.
- **Headline** (700, `clamp(2rem, 4vw, 3rem)`, lh 1.2, ls −0.02em): Section headings. Use uppercase tracking-tight as the current system does, or drop the uppercase for a more restrained read — either works; never mix.
- **Title** (700, `clamp(1.125rem, 2vw, 1.375rem)`, lh 1.3): Card titles, subsection headers, navbar brand.
- **Body** (400, `1rem`, lh 1.6, max 70ch): Prose, project descriptions, About copy.
- **Label** (600, `0.875rem`, lh 1.4): Navbar links, tags, UI controls, button text.

### Named Rules

**The No-Eyebrow Rule.** Section headings appear once, at display scale, unaccompanied. Small-caps kicker text (text-xs uppercase tracking-wide) preceding a larger heading is prohibited — that is the AI scaffold everyone uses, and it directly undermines the "Precision Instrument" identity.

**The No-Pair Rule.** Never pair Bricolage Grotesque with another geometric sans. The contrast must be geometric/humanist. Source Sans 3 is the body pairing; nothing else without deliberate approval.

## 4. Elevation

This system is flat by default. Depth is tonal: sections alternate between Navy Deep and Midnight Section (dark) or Canvas and Surface Light (light), stepping the visual register through background color alone. No structural shadows are used at rest.

The single elevation exception: project cards carry a faint shadow (`0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)`) and scale 1→1.01% on hover. This marks them unambiguously as navigable destinations — the only interactive surface that warrants elevation.

The navbar uses `backdrop-blur-sm` instead of a shadow — a glass-adjacent separation, not a lifted card.

### Named Rules

**The Flat-By-Default Rule.** No shadow on any element at rest unless it is a primary interactive destination (project card). If you're adding a shadow to a static section or illustration, you're decorating, not designing.

**The One-Lift Rule.** Interactive surfaces have one elevation state: scale + optional shadow on hover. No multi-step hover progressions.

## 5. Components

### Navigation
Sticky, 56px, `backdrop-blur-sm`. Dark: `rgba(0,0,0,0.95)` + `border-b border-slate-800/80`. Light: `rgba(255,255,255,0.95)` + `border-slate-200/80`. Fades out when scrolled away, reappears on hover. Bricolage Grotesque 600, 0.875rem. Active section gets a violet underline indicator. Collapses to hamburger + Sheet on mobile (≤500px).

### Buttons — Primary
Full violet fill (`#7c3aed`), near-white text (`#f8fafc`), pill radius (9999px), `px-8 py-3` (32px/12px). Hover: violet-700 (`#6d28d9`) + 1px upward translate. Transition `0.2s ease-out`. No border. Font: Bricolage Grotesque 600. This is the only full-fill button; ghost/text variants are acceptable for secondary actions.

### Tags (Technology Skills)
Teal-500/10 background, teal-700 text (dark: teal-300), pill radius, `px-3 py-1`, 0.75rem Bricolage Grotesque 500. Hover: teal-500/20 + scale 1.05. Transition `0.15s ease-out`. Read-only — no interactive role unless explicitly navigating to a filtered view.

### Project Cards
White (dark: `rgba(0,0,0,0.4)`) background. Slate border (`border-slate-200` / `border-slate-700/50`). `shadow-sm` at rest. Scale 1→1.01 on hover. 8px radius. Overflow hidden. Top image fills width at object-cover. Bricolage Grotesque bold title, Source Sans 3 0.875rem body, tag footer. Minimum 22rem wide.

### Service Cards
Slate-50 (dark: slate-700) background. Slate border. No shadow. Equal-width columns. SVG illustration fills top area. Bricolage Grotesque title, Source Sans 3 body. Hover: background steps one shade lighter/darker. These should not be identical three-column card grids as the default Services layout — replace with an asymmetric or list-based layout for differentiation.

### Footer
Narrow gradient strip (`amber-500→violet-600`) as a visual separator, with a full-width content band above it. Bricolage Grotesque 600 contact label + social icons.

## 6. Do's and Don'ts

### Do:
- **Do** use violet on ≤ 2 elements per screen — the name and one action.
- **Do** use teal exclusively for technology tags.
- **Do** keep section backgrounds in the tonal slate ramp (navy-deep → midnight-section → surface-dark).
- **Do** use `shadow-sm` + scale-hover on project cards as the single elevation exception.
- **Do** use `backdrop-blur-sm` on the navbar instead of a box-shadow.
- **Do** cap hero display text at 4.5rem; anything above is shouting.
- **Do** include `prefers-reduced-motion` coverage on every animation — already present in globals.css, keep it.
- **Do** write `text-wrap: balance` on h1–h3.
- **Do** keep body line length at max 70ch.

### Don't:
- **Don't** use gradient text (`background-clip: text` with a gradient) — prohibited without exception.
- **Don't** use `border-left > 1px` as a colored accent stripe on cards or callouts — prohibited.
- **Don't** use identical three-card grids for Services — that is the absolute ban pattern this PRODUCT.md explicitly named.
- **Don't** use the shadcn/ui default slate palette without deliberate customization — it reads as AI kit output.
- **Don't** add small-caps eyebrow text before section headings (`text-xs uppercase tracking-wide`) — the No-Eyebrow Rule.
- **Don't** use numbered section markers (01 / 02 / 03) as decorative scaffolding — only when sequence carries real information.
- **Don't** use hero-metric templates (large number + small label + supporting stats + gradient).
- **Don't** use glassmorphism decoratively — blur effects only on the navbar, where functional.
- **Don't** add bounce or elastic easing — ease-out-quart or ease-out-expo only.
- **Don't** pair Bricolage Grotesque with another geometric sans — contrast must be geometric/humanist.
- **Don't** center body prose over 65ch; it breaks readability for desktop visitors.
- **Don't** use violet or teal on section backgrounds — their identity depends on scarcity.
