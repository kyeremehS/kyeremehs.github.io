# samuelkyeremeh.dev

Business site for **Samuel Kyeremeh — web development**. A multi-page React
(Vite + Tailwind v4) site covering services, pricing, work, about and contact,
live at [samuelkyeremeh.dev](https://samuelkyeremeh.dev).

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build + sync to repo root (main-branch Pages)
npm run lint     # eslint
npm run preview  # serve dist/ locally
```

## Editing content

All copy lives in [`src/data.js`](src/data.js) — services, packages and prices,
FAQ, terms, timeline, contact details. Change it there and rebuild; no JSX
changes needed for content updates.

| File | Purpose |
| --- | --- |
| `src/data.js` | Every piece of site copy and pricing |
| `src/index.css` | Design tokens (colours, fonts) and component classes |
| `src/pages/*` | The six pages: Home, Services, Pricing, Work, About, Contact |
| `src/components/*` | Layout (nav/footer) and shared UI |
| `index.source.html` | Source of the HTML entry (title, meta description) |

## How deployment works

GitHub Pages serves this repo **from the `main` branch root**, so the build
output is committed to the root:

1. `npm run build` first restores `index.html` from `index.source.html`
   (otherwise Vite would re-bundle the previous build), compiles `src/`, then
   `postbuild` copies `dist/` back to the repo root.
2. Commit and push `main`.

Never edit `index.html` directly — it is generated. Edit `index.source.html`.
