# Property Development Website — Updated Brand Design System

## 1. Brand Colors

The primary brand palette is intentionally minimal.

### Primary Brand

```text
Brand Burgundy
#69024B
```

Use for:

* Primary buttons
* Navigation CTA
* Important headings
* Links
* Active states
* Key highlights
* Icons
* Brand elements
* Section accents

### Brand Dark

```text
#4A0136
```

Use sparingly for:

* Hover states
* Darker UI states
* Footer accents
* Strong text emphasis where appropriate

### Brand Light

```text
#F5EAF1
```

Use for:

* Soft section backgrounds
* Highlight boxes
* Selected states
* Feature backgrounds
* Subtle cards

---

# 2. White

```text
Pure White
#FFFFFF
```

Use as the primary background.

Recommended:

* Main website background
* Cards
* Navigation
* Forms
* Content sections
* Negative space

White should be the dominant background color.

---

# 3. Neutral Colors

Although the brand only uses **#69024B + white**, neutral colors are required for readable UI.

These should remain visually quiet and should never compete with the brand color.

### Primary Text

```text
#1A1A1A
```

Use for:

* Body text
* Main content
* Headings where burgundy is not being used

### Secondary Text

```text
#666666
```

Use for:

* Supporting descriptions
* Metadata
* Locations
* Captions

### Muted Text

```text
#8A8A8A
```

Use for:

* Helper text
* Secondary metadata
* Disabled states

### Border

```text
#E5E5E5
```

Use for:

* Form borders
* Card borders
* Dividers
* Navigation separators

### Light Background

```text
#FAFAFA
```

Use sparingly for:

* Alternate sections
* Form backgrounds
* Subtle content separation

---

# 4. Color Hierarchy

The website should follow this approximate ratio:

```text
White / Neutral backgrounds     75–85%
Brand Burgundy #69024B          10–15%
Neutral text                     5–10%
```

The burgundy should feel **intentional and premium**, not overwhelming.

Do not make the entire website burgundy.

---

# 5. Recommended Color Usage

| Element           | Color     |
| ----------------- | --------- |
| Main Background   | `#FFFFFF` |
| Primary Text      | `#1A1A1A` |
| Secondary Text    | `#666666` |
| Primary CTA       | `#69024B` |
| CTA Text          | `#FFFFFF` |
| CTA Hover         | `#4A0136` |
| Links             | `#69024B` |
| Active Navigation | `#69024B` |
| Borders           | `#E5E5E5` |
| Light Section     | `#FAFAFA` |
| Brand Highlight   | `#F5EAF1` |
| Footer            | `#69024B` |
| Footer Text       | `#FFFFFF` |

---

# 6. Buttons

## Primary Button

```text
Background: #69024B
Text:       #FFFFFF
Border:     #69024B
```

### Hover

```text
Background: #4A0136
Text:       #FFFFFF
```

### Dimensions

```text
Height: 48px
Padding: 0 24px
Font Size: 14–16px
Font Weight: 600
Border Radius: 4px
```

---

## Secondary Button

```text
Background: #FFFFFF
Text:       #69024B
Border:     1px solid #69024B
```

### Hover

```text
Background: #69024B
Text:       #FFFFFF
```

---

# 7. Typography Color Rules

### Main Heading

Option 1:

```text
#1A1A1A
```

Option 2 for important brand sections:

```text
#69024B
```

Do not make every heading burgundy.

Use burgundy strategically.

### Body

```text
#1A1A1A
```

### Secondary Text

```text
#666666
```

### Links

```text
#69024B
```

---

# 8. Section Design

The website should alternate between:

### White Section

```text
Background: #FFFFFF
Heading: #1A1A1A
Accent: #69024B
```

and:

### Soft Brand Section

```text
Background: #F5EAF1
Heading: #1A1A1A
Accent: #69024B
```

Avoid using multiple different background colors.

---

# 9. Hero Section

Recommended:

```text
Background: #FFFFFF
```

or use a full-width property image.

If using image + text:

```text
Heading: #1A1A1A
Accent/Overline: #69024B
Body: #666666
Primary CTA: #69024B
```

Example:

```text
DISCOVER YOUR NEXT ADDRESS

Designed for a better
way of living.

Thoughtfully designed homes that combine
architecture, comfort and modern living.

[ Explore Projects ]   [ Contact Us ]
```

---

# 10. Navigation

### Default

```text
Background: #FFFFFF
Logo: Brand
Navigation: #1A1A1A
CTA: #69024B
```

### Sticky Navigation

Use:

```text
Background: rgba(255,255,255,0.95)
```

with a subtle bottom border:

```text
#E5E5E5
```

Avoid making the entire navbar burgundy unless the brand identity specifically requires it.

---

# 11. Cards

Property cards should primarily be:

```text
Background: #FFFFFF
Border: #E5E5E5
```

On hover:

```text
Border: #69024B
```

The project title can use:

```text
#1A1A1A
```

and the project category/location can use:

```text
#666666
```

CTA:

```text
#69024B
```

---

# 12. Icons

Default:

```text
#69024B
```

Secondary:

```text
#666666
```

On dark/burgundy backgrounds:

```text
#FFFFFF
```

Use one icon family throughout the website.

Recommended:

**Lucide Icons**

---

# 13. Forms

### Input

```text
Background: #FFFFFF
Border: #E5E5E5
Text: #1A1A1A
```

### Focus

```text
Border: #69024B
```

### Label

```text
#1A1A1A
```

### Placeholder

```text
#8A8A8A
```

### Submit Button

```text
Background: #69024B
Text: #FFFFFF
```

---

# 14. Footer

The footer can be one of the strongest uses of the brand color.

```text
Background: #69024B
```

Primary footer text:

```text
#FFFFFF
```

Secondary footer text:

```text
#F5EAF1
```

Links:

```text
#FFFFFF
```

Hover:

```text
#F5EAF1
```

Use subtle borders:

```text
rgba(255,255,255,0.2)
```

---

# 15. Design Token

Use these variables in the development system:

```css
:root {

  /* =========================
     BRAND
     ========================= */

  --brand-primary: #69024B;
  --brand-dark: #4A0136;
  --brand-light: #F5EAF1;


  /* =========================
     NEUTRALS
     ========================= */

  --white: #FFFFFF;

  --text-primary: #1A1A1A;
  --text-secondary: #666666;
  --text-muted: #8A8A8A;

  --border: #E5E5E5;

  --background-light: #FAFAFA;


  /* =========================
     TYPOGRAPHY
     ========================= */

  --font-primary: "Manrope", sans-serif;


  /* =========================
     SPACING
     ========================= */

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 96px;
  --space-11: 120px;


  /* =========================
     RADIUS
     ========================= */

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;


  /* =========================
     LAYOUT
     ========================= */

  --container: 1280px;
  --page-padding: 40px;


  /* =========================
     TRANSITIONS
     ========================= */

  --transition-fast: 150ms ease;
  --transition: 250ms ease;
  --transition-slow: 500ms ease;
}
```

---

# 16. Final Visual Direction

The overall visual language should be:

```text
WHITE
   ↓
Large Property Photography
   ↓
Strong Black/Dark Typography
   ↓
#69024B Burgundy Accents
   ↓
Generous Whitespace
   ↓
Clean Architectural Grid
   ↓
Premium Property Experience
```

### Core rule

> **#69024B is the brand accent, not the entire interface.**

Use white as the dominant canvas and allow `#69024B` to appear where the user's attention should go:

* CTA
* Important headings
* Navigation CTA
* Links
* Icons
* Key numbers
* Active states
* Brand sections
* Footer

This will make the **#69024B + white combination feel premium and architectural rather than overly colorful.**
