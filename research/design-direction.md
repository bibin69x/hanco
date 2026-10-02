# Design Direction & Aesthetic System: HANCO

**Document Version:** 1.0.0  
**Design Paradigm:** Architecture Journal + Premium Real Estate + Luxury Hospitality + Editorial Typography  
**Target Mood:** Quiet Permanence, Measured Dignity, Tactile Warmth, Architectural Rigor  

---

## 1. Aesthetic Manifesto

The digital presence of HANCO is conceived as a **bound architectural monograph or high-end design journal (such as *Ark Journal* or *El Croquis*)**, brought to life through refined web standards.

We reject the disposable, garish aesthetic that dominates Indian real estate portals. There are no pulsing WhatsApp widgets, no spinning 3D floor plans, no fake countdowns, no neon gradient cards, and no generic stock photography of actors smiling with keys.

Every layout, rule, and typeface is selected to communicate:
* **Permanence:** Structures built to endure for half a century in the torrential rains and dry winds of Palakkad.
* **Restraint:** Confidence that speaks in measured tones rather than breathless superlatives.
* **Materiality:** A tactile appreciation for exposed aggregate, solid teak, brushed bronze, and lime-washed masonry.
* **Context:** A deep rootedness in the Palakkad Gap, Western Ghats horizons, and the cultural serenity of Kalpathy.

---

## 2. Typographic Architecture

Typography is the primary visual architecture of the website. It establishes cadence, dignity, and intellectual weight before an image is even viewed.

### 2.1 The Three Typefaces
1. **Editorial Display Serif (Headlines & Chapter Titles):**
   * *Selection:* `Cormorant Garamond` (Google Fonts) with fallbacks to `Playfair Display`, `Georgia`, `serif`.
   * *Role:* Evokes classical architectural publications, editorial prestige, and cultural depth.
   * *Styles:* Regular (400), Medium (500), and Italic (400i) for poetic pull-quotes and architectural annotations.

2. **Structural Humanist Sans (Body, Navigation & Functional UI):**
   * *Selection:* `Plus Jakarta Sans` or `Inter` (Google Fonts) with fallbacks to `system-ui`, `-apple-system`, `sans-serif`.
   * *Role:* Crisp, open counterforms, engineered legibility across both desktop screens and mobile viewports.
   * *Weights:* 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold).

3. **Technical Monospace / Technical Caps (Metadata, Numbers & RERA Certifications):**
   * *Selection:* `Space Mono` or `JetBrains Mono` (Google Fonts) or Uppercase Sans with `letter-spacing: 0.15em`.
   * *Role:* Communicates surveyor coordinates, structural grades, square footages, project codes, and legal certifications (`K-RERA/PRJ/PKD/009/2022`).

### 2.2 Fluid Scale Matrix (CSS Clamp Standards)
* **Display 01 (Hero Headline):** `clamp(2.75rem, 6vw + 1rem, 5.5rem)` | `line-height: 1.05` | `letter-spacing: -0.02em`
* **Display 02 (Section Feature):** `clamp(2.0rem, 4vw + 0.5rem, 3.75rem)` | `line-height: 1.15`
* **Headline 03 (Project Title):** `clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)` | `line-height: 1.25`
* **Sub-headline (Editorial Lead):** `clamp(1.125rem, 1.2vw + 0.5rem, 1.35rem)` | `line-height: 1.6`
* **Body Regular:** `clamp(0.95rem, 0.4vw + 0.8rem, 1.05rem)` | `line-height: 1.75`
* **Micro / Annotation / Label:** `0.75rem – 0.825rem` | `text-transform: uppercase` | `letter-spacing: 0.12em` | `line-height: 1.4`

---

## 3. Chromatic Palette & Material Tokens

The palette is derived directly from the geological and architectural materials of Palakkad: laterite stone, aged river sand, teak wood, limestone wash, and monsoon forest foliage.

```
       #FBF9F5              #141517              #8C5E3C              #2F3B32
  [ Limestone / Paper ]   [ Basalt / Carbon ]   [ Raw Terracotta ]   [ Monsoon Moss ]
```

### 3.1 Core Palette Tokens (CSS Custom Properties)
* `--color-bg-base`: `#FBF9F5` (Warm off-white reminiscent of heavy archival book stock)
* `--color-bg-surface`: `#F4EFEA` (Warm limestone tint for contrasting panels, cards, and input fields)
* `--color-bg-elevated`: `#EDE6DE` (Deeper neutral for subtle background strata)
* `--color-bg-dark`: `#141517` (Deep basalt carbon used for the footer and inverted dramatic plates)
* `--color-text-primary`: `#18191B` (Near-black with a warm charcoal undertone; avoids harsh `#000000`)
* `--color-text-secondary`: `#5E6065` (Muted pencil graphite for descriptive copy and sub-headlines)
* `--color-text-muted`: `#8C8E94` (Quiet caption tone for metadata and dates)
* `--color-text-inverse`: `#F9F8F6` (Limestone white for dark surfaces)
* `--color-accent`: `#8C5E3C` (Warm burnished laterite / antique bronze; used with extreme restraint)
* `--color-accent-subtle`: `#DFD3C6` (Muted sand-wash for accent highlights and active pill borders)
* `--color-border`: `rgba(24, 25, 27, 0.08)` (1px ultra-fine architectural hairline divider)
* `--color-border-subtle`: `rgba(24, 25, 27, 0.04)`
* `--color-border-dark`: `rgba(255, 255, 255, 0.12)` (Divider for dark sections)

---

## 4. Layout Architecture & Compositional Grid

### 4.1 The 12-Column Editorial Grid
* **Maximum Container Width:** `1440px` (preserving generous gutter margins even on ultra-wide screens).
* **Gutter Margin:** Responsive `clamp(1.5rem, 5vw, 5rem)` on left and right edges.
* **Asymmetric Compositions:**
  * 5:7 Split (5 columns narrative text, 7 columns architectural plate)
  * 4:8 Split (4 columns index sidebar / metadata, 8 columns visual dossier)
  * Single-column centered reading wells (`max-width: 68ch`) for narrative essays.

### 4.2 Architectural Pacing & Rhythm
* Sections are separated by intentional vertical voids (`padding-block: clamp(4rem, 8vw, 9rem)`).
* Strict horizontal alignment using 1px hairline rules (`--color-border`) that echo architectural blueprint elevations.
* Alternation of visual density:
  * Dense, structured data table (specifications, RERA disclosures)
  * Followed by an expansive, unhurried photographic landscape.

---

## 5. Component Design Patterns

### 5.1 Global Editorial Navigation
* **Structure:** Minimal sticky bar (`height: 72px`) with subtle backdrop blur (`backdrop-filter: blur(12px)`) and hairline border.
* **Wordmark:** `HANCO` in clean, widely tracked architectural letterforms with sub-label `PROPERTY DEVELOPERS · PALAKKAD`.
* **Primary Navigation Items:** `Home`, `Projects`, `Services`, `Discover ▾`, `Estimate`.
* **Discover Mega-Menu:**
  * Displays cleanly upon interaction without jarring pop-ups.
  * Organised into 3 architectural columns:
    * Column 1: *The Developer* (Our Story, Our Philosophy, How We Build)
    * Column 2: *Standards & Palakkad* (Quality & Craft, Palakkad Locations, FAQs)
    * Column 3: *Sanctity & Contact* (K-RERA & Legal Archive, Kalpathy Headquarters, Private Meeting)
* **Mobile Drawer:** Custom full-screen editorial drawer with oversized serif links and direct phone/email metadata.

### 5.2 Project Editorial Cards
* **Rule:** No floating drop shadows. No rounded pill buttons.
* **Structure:**
  * Architectural photography plate (16:10 aspect ratio) with subtle hover scale (`scale(1.02)` over 400ms cubic-bezier).
  * Overhead indexing: `[ 01 ]` and `K-RERA REGISTERED`.
  * Title set in bold serif (`Hanco Fort Heights`).
  * Micro-metadata list separated by middle dots (`Stadium Bypass Road · 2 & 3 BHK · 80 Residences`).
  * Understated link with subtle directional arrow (`Explore Residence Dossier →`).

### 5.3 Interactive Residence Estimator (`/estimate`)
* **Philosophy:** A private architectural consultation rather than a cold lead form.
* **Interface:**
  * Multi-step progress indicator with clean step numerals (`01 / 05`).
  * Large, comfortable selection tiles with crisp radio affordances.
  * Real-time calculation readout showing matched residence, estimated investment range, and configuration suitability.
  * One-click PDF dossier request and direct private walkthrough booking.

### 5.4 Architectural Specification Matrix
* Two-column tabular presentation mimicking construction blueprints.
* Left column: Category (`Structural System`, `Window Joinery`, `Plumbing`, `EV Infrastructure`).
* Right column: Exact engineering standards (`Fe 500D TMT`, `3-Track UPVC with mesh`, `Kohler concealed fittings`, `Dedicated 15A/32A conduit`).

---

## 6. Motion & Interaction Principles

1. **Slowness & Grace:** All transitions use refined cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
2. **Duration:** 250ms for subtle UI changes (color, border), 400ms for photographic reveals.
3. **No Bouncing or Jiggling:** Physics-based spring animations and bouncing icons are strictly forbidden.
4. **Interactive Hover States:**
   * Text links: Animated 1px underline that expands smoothly from left to right.
   * Buttons: Inverted color shift (Warm paper to Basalt carbon) with crisp border retention.
   * Images: Gentle contrast enhancement and micro-zoom (max 2% scale).
5. **Reduced Motion Support:** All transitions are wrapped in `@media (prefers-reduced-motion: reduce)`.
