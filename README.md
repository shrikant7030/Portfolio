# Shrikant Goski — Portfolio

A React single-page portfolio for a backend & cloud engineer. Dark-first design
system, light theme toggle, scroll-reveal motion, and a case-study page per project.

**Live:** _add your deployment URL here_

---

## Stack

| Area       | Choice                                               |
| ---------- | ---------------------------------------------------- |
| Framework  | React 18 (Create React App)                          |
| Routing    | React Router 6                                       |
| Motion     | Framer Motion (respects `prefers-reduced-motion`)    |
| Styling    | Hand-written CSS with custom-property design tokens  |
| Deployment | Vercel (`vercel.json` handles SPA rewrites)          |

## Running it

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production bundle in build/
```

## Project structure

```
src/
├── App.js                  # routes, theme provider, layout shell
├── App.css                 # design tokens + shared component classes
├── context/ThemeContext.js # dark/light theme, persisted to localStorage
├── data/
│   ├── profile.js          # bio, skills, achievements, experience, awards
│   └── projects.js         # project case studies
├── components/
│   ├── Icons.js            # shared inline SVG icon set
│   ├── Navbar.js           # sticky nav, theme toggle, scroll progress
│   ├── Footer.js
│   ├── Reveal.js           # scroll-into-view fade wrapper
│   ├── ScrollToTop.js      # route-change scroll handling (incl. #hash)
│   ├── ProjectItem.js
│   └── sections/           # Hero, Skills, Impact, Contact
├── Pages/                  # Home, Projects, ProjectDisplay, Experience, NotFound
└── styles/                 # one stylesheet per page/component
```

## Keeping the content up to date

Everything on the site reads from two files — you should rarely need to touch JSX.

### `src/data/profile.js`

- **`CAREER_START`** — your first working day. The `5+ years` figure in the hero
  and on the Experience page is derived from it, so it never goes stale.
- **`profile`** — name, headline, contact details, social links, resume path.
- **`skillGroups`** — grouped skills with a 0–100 `level` that drives the
  proficiency bars. `accent` picks the card colour (`indigo`, `cyan`, `violet`,
  `emerald`, `amber`, `rose`).
- **`achievements`** — the "Work that moved a number" cards. Keep them
  outcome-shaped: a metric, a short title, one sentence of context.
- **`experiences`** — the Experience timeline. Set `current: true` on your
  present role to get the live badge.
- **`awards`** — newest first. The hero stat tile counts and pluralises this
  array automatically, so adding an award is a one-place edit.
- **`resume` / `resumeFileName`** — the PDF served from `public/` and the
  filename the browser saves it as. Every Download resume button reads these.

### `src/data/projects.js`

One entry per case study. `github` and `live` are optional — leave them `null`
for client work you cannot share and those buttons simply will not render.
`slug` becomes the URL (`/projects/<slug>`), so avoid changing it on a project
you have already shared a link to.

`image` is optional as well. Packtrak, Shure Associate Portal and Order
Management System are currently `null`: their cards fall back to a generated
monogram tile and their case studies drop the hero image. To add a real
screenshot, drop the file in `src/assets/`, import it at the top of the file,
and set `image:` to that import.

## Before you deploy

1. **Add the missing project screenshots** — Packtrak, Shure Associate Portal
   and Order Management System have `image: null` and render a monogram tile
   until you supply one.
2. **Add GitHub/live links** to any project in `src/data/projects.js` you can
   share publicly.
3. Optionally update the favicon and `logo192/512.png` in `public/` — they are
   still the Create React App defaults, and `logo512.png` is used as the social
   share image.

The resume is already in place at `public/Shrikant_Goski_Resume.pdf`. Replace
that file to publish a new version — the filename is referenced in
`src/data/profile.js`, so keep the name or update it there too.

## Accessibility & performance notes

- All animation is disabled under `prefers-reduced-motion: reduce`.
- The theme is applied by an inline script in `public/index.html` before first
  paint, so there is no light flash on load for dark-theme visitors.
- Icon-only links carry `aria-label`s; skill bars expose `role="progressbar"`.
- Images below the fold are lazy-loaded.
