# NAITRA NAVARATRI 3.0

> Official interactive web experience and schedule guide for NAITRA NAVARATRI 3.0 — Garba, Dandiya & Cultural Fest at NIAT Mangalore (Yenepoya School of Engineering and Technology Mangalore).

[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev)

---

## Overview

**NAITRA NAVARATRI 3.0** is an editorial brutalist, data-driven web application designed to present the complete schedule, live lineup, venue guidance, and leadership contacts for the annual Navaratri cultural celebration.

The interface prioritizes instant information hierarchy, tactile typography, fluid responsive layouts, and interactive exploration of all 18 student performances across dance, music, vocals, and traditional Pili Nalike (Tiger Dance).

---

## Key Features

- **Hero & Live Schedule Status**: Dynamic celebration headers detailing event date (`15 October 2026`), kickoff time (`9:00 AM onwards`), and venue location (`Milagres Hall Complex, Mangaluru`).
- **Interactive Stage Showcase (Section 02)**:
  - 18 curated acts catalogued from the official schedule.
  - Category filters: `ALL ACTS`, `DANCE`, `MUSIC & VOCALS`, and `PILINALIKE`.
  - Split-stage interactive spotlight displaying performance order, lead performers, song title, and genres.
- **Lunch & Celebration Highlights (Section 03)**:
  - Detailed callouts for mid-day community dining (`12:15 PM – 1:00 PM`).
  - Dedicated spotlight for the evening Garba, Dandiya, and DJ celebration (`1:00 PM – 3:30 PM`).
- **Full-Width Flow of the Day (Section 04)**:
  - Responsive 7-stage chronological timeline without horizontal scrollbars.
  - Seamless desktop multi-column progression and mobile vertical track.
- **Venue & Map Integration (Section 05)**:
  - Direct directions to the venue via Google Maps.
- **Community Leadership & Media (Section 06)**:
  - Direct telephone links for student event coordinators.
  - Direct link to the `@niatmangalore.media` Instagram channel.

---

## Design System & Typography

The site adopts an editorial Swiss Brutalist design philosophy inspired by high-density print programmes and posters:

- **Typography**:
  - `Barlow Condensed`: High-impact headlines, act titles, and editorial numbers.
  - `DM Mono`: Technical timestamps, phase tags, eyebrows, and navigational coordinates.
  - `DM Sans`: Body typography, notes, and descriptions.
- **Color Palette**:
  - **Crimson Red** (`#b31d1d`): Accent points, primary markers, and stage badges.
  - **Deep Ink** (`#181512`): High-contrast brutalist text and structured boundaries.
  - **Cream Paper** (`#f3eee4`): Warm textured canvas backdrop.
  - **Muted Stone** (`#e4ddd0` / `#9f978a`): Subtle stage card surfaces and grid dividers.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: Pure CSS with CSS Grid, Flexbox, custom properties, and responsive clamp scaling.

---

## Project Structure

```text
naitranavaratriSOP/
├── index.html              # HTML entry point with web font imports
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── LICENSE                 # MIT License
├── README.md               # Project documentation
└── src/
    ├── App.tsx             # Application component and structured event data
    ├── main.tsx            # React application mount
    └── styles.css          # Editorial stylesheet and responsive media queries
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended) and npm installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/radheshpai87/naitranavaratriSOP.git
   cd naitranavaratriSOP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Type-check and create an optimized production build in `dist/`:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Updating Event Data

All event data is organized into typed data structures inside [`src/App.tsx`](src/App.tsx):

- `event`: Event metadata (date, timings, venue, Google Maps coordinates, social links).
- `performances`: Array of stage acts including `id`, `name`, `time`, `category`, and optional `genre` or `details`.
- `schedule`: The 7-step chronological day progression.
- `contacts`: Community heads with names, phone numbers, and dial strings.

---

## License

This project is open-source and licensed under the [MIT License](LICENSE).