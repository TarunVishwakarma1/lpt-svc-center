---
name: ILS IT Laptop Solution
description: A laptop repair shop's site drawn as one laptop opened flat on a green bench.
colors:
  board: "#173f31"
  board-2: "#1f4c3c"
  board-3: "#275a47"
  pcb: "#1d4a3a"
  trace: "#2e6250"
  paper: "#eef2ec"
  paper-2: "#e0e7de"
  paper-3: "#d2dbd0"
  paper-lift: "#ffffff"
  body: "#dfe5dd"
  body-2: "#c9d2c7"
  body-3: "#b3beb1"
  deep: "#0a1611"
  glass: "#10241d"
  muted: "#3c5a4e"
  muted-on-board: "#bccbc2"
  copper: "#d39a45"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "clamp(2.6rem, 0.9rem + 6.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  giant:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "30.5cqw"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "lnum"
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  none: "0"
  lid: "1.4rem 1.4rem 0.4rem 0.4rem"
  chassis: "1.75rem"
spacing:
  seam: "0.375rem"
  margin: "clamp(1rem, 2.2vw, 2rem)"
  section: "clamp(6rem, 11vw, 11rem)"
  block: "2.5rem"
components:
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.deep}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.375rem 0.375rem 0.375rem 1.25rem"
    height: "3.25rem"
  button-paper-hover:
    backgroundColor: "{colors.paper-lift}"
  button-paper-cell:
    backgroundColor: "{colors.paper-3}"
    size: "2.5rem"
  button-deep:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.375rem 0.375rem 0.375rem 1.25rem"
    height: "3.25rem"
  button-deep-hover:
    backgroundColor: "{colors.board}"
  button-deep-cell:
    backgroundColor: "{colors.board-2}"
    size: "2.5rem"
  chip-brand:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.95rem"
  chip-brand-hover:
    backgroundColor: "{colors.board-3}"
  chip-brand-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.deep}"
  repair-bar:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "calc(0.45rem + n * 0.36rem) 1.15rem"
  repair-bar-hover:
    backgroundColor: "{colors.board-3}"
  contact-cell-ink:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "4.5rem"
  contact-cell-tone:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.deep}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "4.5rem"
  contact-cell-tone-hover:
    backgroundColor: "{colors.paper-3}"
  select-board:
    backgroundColor: "{colors.board-3}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 2.25rem 0 0.9rem"
    height: "2.75rem"
  arrow-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.deep}"
    rounded: "{rounded.none}"
    size: "3rem"
  arrow-button-disabled:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.muted-on-board}"
  part-tag-lit:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.deep}"
    typography: "{typography.label}"
    padding: "0.05rem 0.4rem"
  phone-dock:
    backgroundColor: "{colors.deep}"
    padding: "0.375rem"
    height: "3.25rem"
---

# Design System: ILS IT Laptop Solution

## Overview

**Creative North Star: "The Open Laptop on the Bench"**

The page is a laptop opened flat and seen from above. Solder-mask green is the bench and the board. Silkscreen white is the laptop's body and every paper field. Near-black green glass is the screen and the ink. The screen carries the shop's name and promise. The cut-away base is the service menu, and its parts light up copper when chosen. Every later surface is a piece of the same machine: square plates of paper and board, a sticker on the palm rest, the underside with its rubber feet as the footer.

The system is flat and filled. Shapes are solid fills with no strokes or shadows. Depth comes from tone steps within one green family and from paper sitting on board. Interface pieces have square corners. Only the hardware itself (lid, deck, underside, feet, vents and the parts drawn on the board) has the soft corners of a real machine. Type follows a shop banner: tall, condensed Barlow Condensed for display, plain Barlow for reading. There are five sizes and nothing between them.

Copper is the only signal colour. It marks the part that is lit, the repair that is open, the trace that leads to it, the focus ring and the text selection. Anywhere else it would mean nothing.

**Key Characteristics:**
- Two inks plus one signal: green board and paper white, with copper for "this one".
- Flat filled shapes. No strokes, no shadows and no gradients on interface pieces.
- Square interface corners. Rounded corners appear only on the laptop's own hardware.
- Condensed display type set like the shop's banner, with plain sans for reading.
- Interface pieces sit 0.375rem apart, like modules on a board.

## Colors

One deep green family, with silkscreen white and a single copper signal.

### Primary
- **Solder-Mask Green** (board): the page's ground, the html and body background, the footer's bench and the hover fill of deep buttons.
- **Raised Board** (board-2) and **Lit Board** (board-3): the two tone steps above the ground. Board-2 fills brand chips, repair bars, the progress track, disabled arrows and the dock's Call cell. Board-3 is the hover fill for both, the select field and the board's idle parts.
- **PCB Green** (pcb) and **Copper Trace, unlit** (trace): used only in the drawing. Pcb is the exposed motherboard. Trace is the idle trace and the unlit lamp on a repair bar.

### Tertiary
- **Copper** (copper): the one signal. It fills a lit part, its tag and its trace, the lamp of an open repair bar, the focus ring (3px outline) and the text selection. Copper text is never set on green.

### Neutral
- **Silkscreen Paper** (paper): body text on the board, the paper plate and FAQ fields, the visit card, primary buttons and selected chips.
- **Paper Tone** (paper-2) and **Paper Shade** (paper-3): the secondary contact cell and its hover, button icon cells on paper, and the border around the footer photo.
- **Paper Lift** (paper-lift): the hover state of paper-filled controls, slightly brighter than paper.
- **Chassis** (body, body-2, body-3): the laptop's own aluminium. Body is the deck and the underside. Body-2 and body-3 are keycaps, hinges and vents.
- **Deep Glass Ink** (deep): the lid, ink on paper, deep buttons and the phone dock. The `--ink` custom property is an alias of deep.
- **Screen Glass** (glass): the screen face, a single step lighter than the lid.
- **Muted Ink** (muted): secondary text on paper, such as captions, dt labels, notes, the imprint and unchosen symptoms.
- **Muted on Board** (muted-on-board): secondary text on green, such as repair symptoms, the menubar, the bezel and unlit status dots.

### Named Rules
**The Two Inks Rule.** Each surface is green with paper ink or paper with deep ink. A third colour can only be copper, and copper only means "selected, open or focused".

**The Tone Step Rule.** Hover and nesting move one step along a ramp (board to board-2 to board-3, or paper to paper-2 to paper-3). They never introduce a new hue.

## Typography

**Display Font:** Barlow Condensed (with Barlow, sans-serif), weights 600 and 700
**Body Font:** Barlow (with system-ui, sans-serif), weights 400, 500 and 600

**Character:** Tall condensed caps and headings, like a shop banner, over a sturdy, plain grotesque that reads like a printed service sheet. Lining figures throughout, and tabular figures in hours and phone numbers.

### Hierarchy
- **Display** (600, clamp to 6rem, 0.95): the headline on the laptop screen only, balanced and kept within about 13ch.
- **Giant** (700, uppercase, 30.5cqw of its column, 0.8): the single word "Repairs" heading the repairs list. It is the only type set larger than Display and is used once.
- **Headline** (600, clamp to 4rem, 1): section headings.
- **Lead** (400, clamp to 1.5rem, 1.4): the line under a heading and the symptom answers, within 34–40ch.
- **Body** (400, clamp 1.0625–1.1875rem, 1.55): all reading text, within 30–38ch in columns. Names and controls use the same size at 600.
- **Label** (500–600, 0.875rem, 1.5): part tags, the menubar, captions, the sticker, the imprint and the select heading in a repair panel. Labels are sentence case, never tracked uppercase.

### Named Rules
**The Five Sizes Rule.** The scale has small, body, lead, head and display, with nothing between. The one exception is the giant repairs word.

**The Weight Is Emphasis Rule.** Emphasis comes from weight 600, never colour or italics. Part names, "Usually same day", hours values and links are all 600.

## Layout

Full bleed with a fluid page margin (margin). Sections stack vertically with a fluid section gap (section) and alternate between green board and paper plates, so the page reads as parts of one machine. The laptop is centred at up to 60rem wide. Its screen is 4:3 on phones and 16:10 from 640px. On phones the whole laptop fits the first screen.

Grids are simple. Repairs uses 5fr/7fr from 1024px, with the giant word and chips sticky at top 2rem. The board plate and the underside split 1fr/1fr from 900px. Questions run on a 12-column grid from 1024px (heading in 1–3, text in 5–12, two text columns from 768px). Steps form a horizontal snap row with cards of min(72vw, 18rem), staggered by a varying gap above each photo.

Interface modules sit a seam (0.375rem) apart: chips, repair bars, contact cells, arrow buttons and dock cells. Blocks inside a section sit 2.5rem apart.

Breakpoints in use: 380, 560, 640, 768, 900 and 1024px. Below 640px a fixed two-cell dock (Call, WhatsApp) appears and the footer reserves 4.5rem for it.

## Elevation & Depth

The system is fully flat and has no box-shadows. Depth comes from tone: paper on board, board-3 on board-2 on board, glass inside the deep lid. Overlap is the other device: the visit card overlaps its photograph by 5rem on phones and floats over it on desktop. Hierarchy comes from fill, never from a lift.

### Named Rules
**The Flat Fill Rule.** Nothing casts a shadow. To separate a thing, change its fill one tone step or put it on paper.

## Shapes

Interface corners are square (radius 0): buttons, chips, bars, cells, cards, plates, the select field, the dock and the progress bar. The laptop's hardware has physical radii: the lid at 1.4rem top and 0.4rem bottom, the underside chassis at 1.75rem, rubber feet and vents with fully rounded ends, and drawn parts with small rx values. Status dots and the photo loupe are the only circles. The address separator is a 0.55rem square turned 45°.

Shapes are filled, not outlined. The two borders in the system are physical objects: the 6px paper ring of the loupe and the 6px paper-2 frame round the footer photo, like a printed label. Keyboard focus is the 3px copper outline.

### Named Rules
**The Hardware Radius Rule.** A rounded corner means "this is part of the laptop". Interface controls never borrow it.

## Components

### Buttons
Square plates that carry their icon in a separate cell.
- **Shape:** square (0), with a minimum height of 3.25rem.
- **Primary (paper):** paper fill and deep ink, label at 600, and a 2.5rem paper-3 cell holding a 1.25rem line icon at the right.
- **Deep:** deep fill and paper ink, with a board-2 cell. Hover moves to board. On the visit card the deep button runs to the card's edges, with a board fill and a board-3 cell.
- **Hover / Active:** paper brightens to paper-lift. The icon cell nudges up and right (2px, -2px, scale 1.05, 240ms ease-out). Press scales to 0.97 (140ms).
- **Text link:** 600, underlined at 1.5px, thickening to 2.5px on hover.

### Chips
- **Style:** brand chips are square board-2 fills, padded 0.6rem by 0.95rem, at weight 500, a seam apart.
- **State:** hover moves to board-3. Selected is paper with deep ink. Press scales to 0.96. Focus shows a copper outline on the chip.

### Cards / Containers
- **Corner Style:** square.
- **Background:** paper on board (visit card, footer label) or board-2 on board (repair bars).
- **Shadow Strategy:** none. See Elevation.
- **Border:** none.
- **Internal Padding:** 1.75rem by 1.5rem on phones and 2rem on desktop for the visit card. Its action button runs to the bottom and side edges.

### Inputs / Fields
- **Select:** square board-3 fill, paper text, 2.75rem tall, and a drawn chevron. It replaces the brand chips below 1024px.
- **Symptom switch:** plain 600 words in muted ink on paper. The chosen word turns deep and gets a 3px underline offset 0.35em. Focus is a copper outline.

### Navigation
- **Top row:** a wordmark ("ILS IT" in Barlow Condensed 700 with "Laptop Solution" at 500), four plain links at 500 from 900px that underline on hover, and a paper WhatsApp button at the right.
- **Phone dock:** fixed, deep fill, two cells a seam apart (Call in board-2, WhatsApp in paper), 3.25rem tall with safe-area padding. It slides away when the visit section is in view.
- **Steps arrows:** 3rem square paper buttons that disable to board-2. Below them is a 6px paper progress bar on a board-2 track.

### The Open Laptop (signature)
The deep lid frames the glass screen, which holds the display headline, a lead line, an address line and actions. A menubar along the screen's foot shows the live Jaipur time and open status, with a paper dot when open. The base is an inline SVG. The left half is the chassis deck with keyboard and touchpad. The right half is the board cut away in pcb green. Each part has an idle fill (board-3 on the board, body-2 on the deck) and a lit fill (copper), and changes in 120ms linear. A lit part's trace draws in copper (520ms). The fan spins while lit. Part tags are label type: always shown from 768px, shown only when lit on phones, and positioned outside their part so they never cover it. Selecting a part opens its repair bar, and opening a bar lights its part.

### Repair Bars (signature)
Full-width board-2 bars, each padded in proportion to its number of repairs. The bar's height is a measure of how much the shop does for that part. Each has a square lamp (trace, copper when open), name at 600, symptom in muted-on-board label, and a drawn plus that turns into a minus. The open panel lists repairs with "Usually same day" at 600 on the right, and a paper WhatsApp button whose message names the brand and the part.

### Underside Footer (signature)
The laptop flipped over: a rounded body-coloured chassis with four deep rubber feet and a row of body-3 vents. It holds the closing headline, a paper label with a framed photo, the contact lines and the picture credits. Where scroll timelines are supported, it rotates up into view as you scroll.

### Motion
Ease-out is cubic-bezier(0.22, 1, 0.36, 1). Press takes 140ms, hover 180ms, UI 240ms and reveals 800ms. Entrances rise by 18–24px with 80–110ms staggers. Headline lines slide up out of a mask. The lid rises and the screen flashes once as it powers on. Photos open like a shutter (clip-path, 1100ms). All motion stays behind `prefers-reduced-motion: no-preference` and a `.js` class, so content is visible without either.

## Do's and Don'ts

### Do:
- **Do** set every surface as board with paper ink or paper with deep ink. Use copper (#d39a45) only for lit, open, focused or selected states.
- **Do** keep interface corners square (0). Keep rounded corners for the laptop's hardware: lid 1.4rem/0.4rem, chassis 1.75rem, feet and vents.
- **Do** separate things by one tone step (board, board-2, board-3 or paper, paper-2, paper-3), never by a shadow.
- **Do** put a button's icon in its own square cell (2.5rem) and nudge the cell 2px up and right on hover.
- **Do** space sibling modules a seam (0.375rem) apart.
- **Do** keep to the five type sizes. Use Barlow Condensed 600/700 for display and headlines, and Barlow for everything else. Emphasise with weight 600.
- **Do** draw icons as single-stroke 1.6 line SVGs in currentColor, made for this site.

### Don't:
- **Don't** add box-shadows, gradients or outline strokes to interface pieces. The only lines are the copper focus ring and the physical frames on the loupe and footer photo.
- **Don't** use copper for decoration, headings or body text.
- **Don't** round buttons, chips, cards or fields.
- **Don't** add a size between the five steps. Don't reuse the giant word treatment: it appears once.
- **Don't** set labels in tracked uppercase or put small headings above section titles. A section opens with its headline.
