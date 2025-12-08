# SmartRide Watch · WearOS Prototype

> Glanceable, fast ride-hailing for WearOS — built with React, Vite, Tailwind, shadcn-ui.

---

## Overview
- One-tap ride request, car type selection, and driver tracking with text ETA.
- Clean, watch-friendly flows that respect circular safe areas and 44–48dp touch targets.
- Accessible, minimal UI mapped to Nielsen’s heuristics for clarity and control.

---

## Quick Start
```sh
git clone https://github.com/HaithamAlduais/smartwatch.git
cd smartwatch
npm install
npm run dev
```

---

## Screen-by-Screen & Heuristics Mapping

| Screen | Purpose | Key Heuristics (Nielsen) |
| --- | --- | --- |
| Home / Request Ride | Primary action to request ride, show current location | 1 Visibility, 2 Match to real world, 7 Efficiency, 8 Minimal |
| Car Type | Choose Economy / Comfort / Premium via simple list | 2 Match, 6 Recognition, 7 Efficiency, 8 Minimal |
| Destination | Select saved/recent locations | 2 Match, 6 Recognition, 7 Efficiency, 8 Minimal |
| Driver Matching | Show assigned driver + progress and cancel | 1 Visibility, 5 Error prevention, 8 Minimal, 9 Recover |
| Tracking (ETA) | Countdown inside progress ring + call + cancel | 1 Visibility, 7 Efficiency, 8 Minimal, 9 Recover |
| Arriving Soon | Driver details + “Start ride” | 1 Visibility, 2 Match, 8 Minimal |
| In-Ride | Remaining minutes + progress bar + share | 1 Visibility, 7 Efficiency, 8 Minimal |
| Cancel Ride | Confirm destructive action | 3 Control, 5 Error prevention, 9 Recover |
| Ride Completed | Arrival confirmation + new ride action | 1 Visibility, 8 Minimal |
| Notifications Center | Ride updates as cards | 1 Visibility, 6 Recognition, 8 Minimal, 9 Recover |
| History | Past rides with quick rebook cue | 6 Recognition, 7 Flexibility |
| Profile | Rider info, payments, addresses | 6 Recognition, 8 Minimal |
| Settings | Profile/notifications/payment access | 3 Control, 4 Consistency, 6 Recognition |
| No Drivers | Error recovery with retry guidance | 5 Error prevention, 9 Recover, 10 Help |

---

## Feature Highlights
- **One-tap Request**: Large primary control sized for wrist use.
- **Car Type & Destination**: List chips for quick selection.
- **Driver Matching / Tracking**: Text-only ETA, progress ring, cancel + call.
- **Arriving / In-Ride**: Glanceable status, minimal text, key actions only.
- **Notifications & History**: Card lists optimized for recognition.
- **Profile & Settings**: Simple lists; no nested menus.
- **Safety & Recovery**: Cancel confirmations, “No drivers” recovery suggestions.

---

## UX Principles Applied
- **Glanceability**: Short labels, few actions per screen.
- **Touch Targets**: 44–48dp controls, pill/circular buttons.
- **Safe Area**: Insets for round displays; edge-aligned content.
- **Minimalism**: Only essential info per flow; text ETA instead of maps.
- **Control & Recovery**: Always-present cancel; confirmations for destructive steps.

---

## Tech Stack
- Vite · React (TypeScript) · Tailwind CSS · shadcn-ui

---

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — lint all files

---

## Deployments
- Vercel auto-deploys on push to `master`.

---

## License
MIT
