# Ubaidah Nazri · Personal portfolio

A responsive Nuxt 3 portfolio based on the supplied v2.1 clay design proposal. Local portrait and font assets keep the first screen independent of third-party requests.

## Run locally

Validated with Node 24.19.0 and Yarn 1.22.22. The exact Yarn version is declared in package.json.

```sh
yarn install --frozen-lockfile
yarn dev --host 0.0.0.0 --port 3000
```

In this cloud environment, Yarn is available at `/workspace/.onboarding-tools/node_modules/.bin/yarn`. Set `YARN_CACHE_FOLDER=/workspace/.cache/yarn` if the default home directory is not writable.

## Build and validate

Stop the development server before building: both commands write Nuxt's generated directory.

```sh
yarn build
PORT=3000 HOST=0.0.0.0 node .output/server/index.mjs
# In another terminal:
yarn test:smoke
```

`SMOKE_BASE_URL` can target a different running server. The smoke checks exercise server-rendered pages, public assets, the experience redirect, unpublished routes, canonical and share metadata, and the sitemap. No backend, database, secrets, or production credentials are required. The reporting sandbox is local and uses five fictional records.

## Content and links

- Edit shared contact details and product links in `data/portfolio.ts`.
- Journal entries live in `content/journal/`; use `docs/templates/journal.md` to start.
- Only entries with `status: published` appear on public journal pages.
- Keep unpublished work outside `content/`, or use a `.draft.md` filename. Those files are excluded from the content API, not merely hidden from lists. **A draft status by itself does not make a file private in Nuxt Content.**
- The older sample posts in `content/blog/` remain preserved but are excluded from the content API. The unverified hiking story is not published. The existing welcome post has been adapted for the Journal.
- The Marang contribution page uses the original experience record. Its preview and sandbox are clearly labelled illustrations, with no claimed production metrics.
- A project outline is provided in `docs/templates/project.md`. Add a real route and an index entry when the contribution is ready; no fictional projects are included.
- `/experience` redirects permanently to `/about#experience`.
- The existing Google Drive resume URL is retained. Replace it with a local PDF when a verified resume file is available; do not use the proposal PDF as a resume.

## Site URL and sharing

Set optional `NUXT_PUBLIC_SITE_URL` to the final origin (for example, `https://your-domain.example`) at deployment. Otherwise canonical URLs, share-image URLs, and the sitemap use the incoming request origin. `/sitemap.xml` includes the main pages and published articles. Fonts and the portrait are self-hosted; the Nunito Sans license is in `public/fonts/OFL.txt`.

## Motion and accessibility

The theme uses a one-time portrait entrance, short page and menu transitions, tactile button presses, card hover lifts, and restrained section movement as it enters the viewport in supported browsers. Content never requires an animation to become available. Reduced-motion settings disable movement. A keyboard skip link, visible focus styles, labelled controls, copy feedback, and resettable demo states are included.

## Artwork source

The clay portrait was extracted, with transparency, from the user-supplied proposal PDF and optimized to WebP. The full-resolution original is retained at `assets/img/ubaidah-clay-original.png` and is not imported into the application bundle.
