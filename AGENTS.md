# AGENTS.md: Project Standards & Implementation Blueprint

**Project:** HANCO Property Developers  
**Headquarters:** Kalpathy, Palakkad, Kerala  
**Design Paradigm:** Architecture Journal + Premium Real Estate + Luxury Hospitality + Editorial Web Standards  
**Status:** Phase 1 – Research, Information Architecture & Design System Complete. Production code pending review.  

---

## 1. Absolute Technical Commandments

All agents, subagents, and contributors working on this codebase must strictly abide by the following technical constraints. Any violation will be rejected.

1. **Semantic HTML5:**  
   Every page must be authored with semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<dl>`, `<dt>`, `<dd>`). No `<div>` soup.
2. **Modern Vanilla CSS Only:**  
   Use standard CSS with custom properties (variables), modern layouts (`display: grid`, `grid-template-columns: subgrid`, `display: flex`), CSS clamp formulas for fluid sizing, and standard CSS nesting.  
   * **STRICTLY FORBIDDEN:** Tailwind CSS, Bootstrap, Bulma, Foundation, Sass/SCSS preprocessors, CSS-in-JS.
3. **Modern Vanilla JavaScript (ES6+):**  
   Use vanilla JavaScript written as clean, modular ES modules or plain scripts. Keep DOM operations explicit, readable, and performant.  
   * **STRICTLY FORBIDDEN:** React, Next.js, Vue, Angular, Svelte, jQuery, Three.js, heavy animation libraries (GSAP, Framer Motion, Anime.js, Lottie).
4. **No Artificial UI Frameworks or Bloat:**  
   Every component must be custom-crafted from zero to match our editorial design language. Do not install or import external UI component kits.
5. **Zero Build Step Dependency:**  
   The application should be directly servable via standard static HTTP servers (e.g. `npx serve`, Python `http.server`, or Vite if needed). It must run cleanly in modern browsers without compilation failures.

---

## 2. Design System & Editorial Rules

### 2.1 The Core Aesthetic
* **Identity:** An architectural monograph (akin to *Ark Journal*, *El Croquis*, or *Kinfolk*) fused with quiet luxury hospitality (*Aman*, *Six Senses*).
* **Tone:** Measured permanence, quiet confidence, structural honesty, cultural resonance with Palakkad.

### 2.2 Prohibited Anti-Patterns (Strictly Barred)
* ❌ NO giant 3D renders or spinning 3D floor plan canvases.
* ❌ NO floating 3D spheres, geometric shapes, or abstract blobs.
* ❌ NO neon gradients, pastel gradients, or artificial tech glows.
* ❌ NO glassmorphism (frosted glassy cards with heavy borders).
* ❌ NO bubbly, heavily rounded cards (`border-radius > 4px` is banned; prefer `border-radius: 0` or `2px`).
* ❌ NO heavy drop shadows (`box-shadow: 0 20px 40px rgba(...)` is banned; use 1px hairline borders).
* ❌ NO generic stock photography (people pointing at blueprints, actors holding keys).
* ❌ NO intrusive modals, aggressive pop-up newsletters, or bouncing WhatsApp badges.
* ❌ NO repetitive template card grids.
* ❌ NO cliché real estate marketing copy ("ultra-luxury dream paradise").

### 2.3 Visual Foundations & Design Tokens
```css
:root {
  /* Chromatic Tokens: Derived from Palakkad Stone, Earth & Light */
  --color-bg-base: #FBF9F5;         /* Archival book stock / Warm paper */
  --color-bg-surface: #F4EFEA;      /* Warm limestone for contrasting panels */
  --color-bg-elevated: #EDE6DE;     /* Deep stone neutral */
  --color-bg-dark: #141517;         /* Deep basalt carbon for footer & dramatic plates */
  --color-bg-dark-surface: #1E2023; /* Elevated dark surface */

  --color-text-primary: #18191B;   /* Warm charcoal black */
  --color-text-secondary: #5E6065; /* Muted graphite for descriptive prose */
  --color-text-muted: #8C8E94;     /* Archival caption gray */
  --color-text-inverse: #F9F8F6;   /* Limestone white on dark backgrounds */
  --color-text-inverse-muted: #9E9FA3;

  --color-accent: #8C5E3C;          /* Warm burnished laterite / antique bronze */
  --color-accent-hover: #754C2D;
  --color-accent-subtle: #DFD3C6;   /* Sandstone wash */

  --color-border: rgba(24, 25, 27, 0.08);       /* 1px architectural hairline */
  --color-border-subtle: rgba(24, 25, 27, 0.04);
  --color-border-dark: rgba(255, 255, 255, 0.12); /* Hairline for dark containers */

  /* Typographic Stacks */
  --font-serif: "DM Serif Display", serif;
  --font-sans: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-primary: "Manrope", sans-serif;
  --font-mono: "Space Mono", Consolas, monospace;

  /* Fluid Fluid Typography Scale (CSS Clamp) */
  --text-display-1: clamp(2.75rem, 5.5vw + 1rem, 5.25rem); /* Hero headlines */
  --text-display-2: clamp(2.0rem, 3.5vw + 0.5rem, 3.5rem);  /* Section editorial titles */
  --text-headline: clamp(1.4rem, 2vw + 0.5rem, 2.2rem);     /* Project titles & major blocks */
  --text-subhead: clamp(1.05rem, 1vw + 0.4rem, 1.3rem);     /* Editorial leads */
  --text-body: clamp(0.95rem, 0.3vw + 0.85rem, 1.05rem);    /* Continuous reading prose */
  --text-caption: 0.8125rem;                                /* Captions, specifications, tags */
  --text-micro: 0.72rem;                                    /* Coordinates, RERA codes, labels */

  /* Spacing Scale */
  --space-unit: 8px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --space-2xl: 96px;
  --space-3xl: clamp(4rem, 8vw, 9rem);

  /* Container & Layout Constraints */
  --container-max-width: 1440px;
  --container-reading-width: 68ch;
  --container-gutter: clamp(1.5rem, 4vw, 4.5rem);

  /* Micro-Interactions & Transitions */
  --transition-fast: 180ms ease;
  --transition-smooth: 320ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 500ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 3. Verified Factual Data Registry

When implementing project pages, marketing statements, or technical disclosures, **only use factual data** established in our research:

* **Company:** Hanco Property Developers Private Limited (CIN: `U45200KL2011PTC028080`, Inc. 31/03/2011, RoC Ernakulam).
* **Leadership:** Ananthanarayanan Hariharan (Managing Director), Vani Subalakshmi (Director).
* **Corporate Office:** 5/479, Janaki Kripa, Mani Iyer Road, Kalpathy P.O., Palakkad, Kerala – 678003.
* **Official Communications:** `info@hanco.in` | `+91 81290 53222` | `https://hanco.in`.
* **Projects Database:**
  1. **Hanco Fort Heights:**
     * Location: Stadium Bypass Road, Palakkad (adjacent to Civil Station).
     * RERA: `K-RERA/PRJ/PKD/009/2022`
     * Scale: Twin Towers, 80 units, 2 & 3 BHK (1,030 – 1,480 sq.ft).
     * Status: Tower 1 delivered/sold; Tower 2 available.
     * Features: Rooftop swimming pool, gym, mini theatre, EV charging, 100% backup.
  2. **Hanco Krishna Leela:**
     * Location: Vadakkanthara Main Road, Palakkad.
     * RERA: `K-RERA/PRJ/PKD/025/2024`
     * Scale: G+5 Floors, 2 & 3 BHK (approx. ₹44.98L to ₹85L).
     * Status: Launched Jan 2024, projected handover 2028.
     * Features: Dedicated STP, EV bays, rainwater harvesting, cultural heritage precinct.
  3. **Hanco Sivam:**
     * Location: Mattumantha, Kalpathy Riverbank, Palakkad.
     * RERA: `K-RERA/PRJ/318/2020`
     * Scale: 29 boutique 2 & 3 BHK residences, river and Malampuzha hill vistas.
  4. **Completed Footprint:**
     * Hanco Ganesh Avenue (Kalpathy), Hanco Srinivasa Enclave (Vadakkanthara), Hanco The Green Village (Palakkad).

---

## 4. Architectural Codebase Structure

The production project will follow this clean, unbundled file structure:

```
/
├── index.html                      # Home (Editorial Showcase & Overview)
├── projects.html                   # Projects Catalogue & Filter Index
├── project-fort-heights.html       # Flagship Project Dossier (Stadium Bypass)
├── project-krishna-leela.html      # Boutique Project Dossier (Vadakkanthara)
├── services.html                   # Development, Bespoke Interiors & Asset Care
├── discover.html                   # Discover Hub (Philosophy, Craft, Locations, FAQs, RERA)
├── estimate.html                   # Interactive Residence Matcher & Evaluation Engine
├── about.html                      # Heritage (H. Ananthanarayanan & Co), Leadership & Values
├── contact.html                    # Kalpathy Office, Channels & Visit Scheduler
│
├── css/
│   ├── base.css                    # CSS resets, variables, root typography, utilities
│   ├── layout.css                  # Grid systems, containers, header, mega-menu, footer
│   ├── components.css              # Cards, buttons, tables, accordions, badges, tabs
│   ├── pages.css                   # Page-specific editorial layouts (Home, Projects, Detail)
│   └── estimate.css                # Interactive estimator multi-step styles
│
├── js/
│   ├── main.js                     # Global initialization, scroll listeners, accessibility
│   ├── nav.js                      # Mega-menu toggle, mobile drawer, keyboard trap
│   ├── estimate.js                 # Multi-step state machine, scoring & budget calculator
│   ├── floorplans.js               # Interactive 2D floor plan switcher & specs inspector
│   └── faq.js                      # Accessible accordion with ARIA support
│
├── assets/
│   ├── images/                     # Curated architectural photography & material plates
│   ├── plans/                      # 2D architectural blueprint layouts
│   └── icons/                      # Inline semantic SVGs (no external icon fonts)
│
├── research/                       # Research, UX architecture & competitive docs
│   ├── brand.md
│   ├── competitors.md
│   ├── content.md
│   ├── design-direction.md
│   └── sitemap.md
│
└── AGENTS.md                       # This master rules document
```

---

## 5. Component Construction Guidelines

### 5.1 Global Editorial Navigation
* Must have an understated sticky header with hairline bottom border.
* Wordmark: `HANCO` with secondary descriptor `PROPERTY DEVELOPERS · PALAKKAD`.
* Primary links: `Home`, `Projects`, `Services`, `Discover ▾`, `Estimate`, `Contact`.
* The `DISCOVER` dropdown must render as an editorial 3-column mega-panel displaying sub-links with contextual annotations.
* Must support full keyboard navigation (`Tab`, `Escape`, `Arrow` keys) and `aria-expanded` state.

### 5.2 The Interactive Residence Estimator (`/estimate`)
* Must be implemented as a clean 5-step interactive evaluation tool:
  * Step 1: Purpose & Lifestyle (Family home, NRI sanctuary, retirement, investment)
  * Step 2: Preferred Micro-Location (Stadium Bypass, Vadakkanthara, Mattumantha, Flexible)
  * Step 3: Space & Configuration (2 BHK compact, 2 BHK standard, 3 BHK generous, penthouse)
  * Step 4: Budget Range (₹45L–60L, ₹60L–80L, ₹80L–1.1Cr+)
  * Step 5: Key Architectural Priority (Ready to occupy, riverfront view, rooftop pool, EV readiness)
* Real-time calculation: Displays a percentage match against Hanco Fort Heights, Krishna Leela, or Sivam, with an itemized investment breakdown and direct booking action.

### 5.3 Technical Specification Sheets
* Render specifications as a crisp, archival table with 1px hairline rules.
* Categories: Foundation & Structure, Masonry & Wall Finishes, Flooring & Skirting, Doors & Windows, Electrical & Lighting, Plumbing & Sanitary, Elevators & Green Systems.
* Never omit the exact technical grade (e.g. `Fe 500D TMT Steel`, `UPVC 3-Track Windows with SS mesh`).

### 5.4 K-RERA Transparency Display
* Every project plate and detail header must feature the official K-RERA registration code in monospace:  
  `K-RERA REGISTRATION: K-RERA/PRJ/PKD/009/2022`
* Must provide an outbound verification link to `https://rera.kerala.gov.in`.

---

## 6. Accessibility & SEO Invariants

1. **Heading Hierarchy:** Strictly one `<h1>` per page. Sub-sections must follow logical `<h2>`, `<h3>` descent.
2. **Accessible Forms:** Every form control must have an associated `<label>` (either explicit `for="..."` or wrapping). Inputs must feature clear focus rings with adequate contrast.
3. **Contrast Ratios:** Text against background must exceed WCAG 2.1 AA requirement (minimum 4.5:1 for body copy, 3:1 for large display titles).
4. **Motion Safety:** All animations and transitions must be wrapped in `@media (prefers-reduced-motion: reduce)`.
5. **Mobile Viewports:** Zero horizontal scrollbars. Every element must reflow gracefully from 320px screen width up to 2560px ultra-wide monitors.

---

## 7. Current Project Phase & Action Protocol

> **CRITICAL PROTOCOL:**  
> The research, information architecture, design direction, sitemap, and AGENTS.md files are now complete.  
> **DO NOT BUILD PRODUCTION CODE OR HTML/CSS/JS FILES YET.**  
> Present the completed findings and strategy to the user for formal review and feedback. Await user confirmation before beginning Phase 2 (code implementation).
