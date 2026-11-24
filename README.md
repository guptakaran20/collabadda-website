# CollabAdda — website

One-page site for CollabAdda ("We make ads people talk about."), built with Next.js 16 as a fully static export.

## Run

```bash
npm install
npm run dev      # http://localhost:3000 with hot reload
npm run build    # static site in ./out
npm start        # serve ./out locally
```

## Deploy

Push to GitHub and import into Vercel (zero config; `vercel.json` adds cache headers).
Set `NEXT_PUBLIC_SITE_URL` to the live domain so social previews use absolute image URLs.
`./out` also works on any static host (Netlify, Cloudflare Pages, S3).

## Where things live

| Path | What |
|---|---|
| `app/page.tsx` | All page markup (static, rendered at build time) |
| `app/globals.css` | All styles |
| `app/layout.tsx` | Fonts (self-hosted via `next/font`), SEO metadata |
| `components/Interactions.js` | Every animation / interaction (intro, stories, clapper, BTS video, services, flip board) |
| `public/assets/` | Optimised WebP images, logos, BTS video |
| `source-media/` | Raw Instagram downloads — not shipped, git-ignored |
| `legacy/index.html` | The original single-file version, for reference |

## Editing common things

- **Instagram follower count** on the flip board: `data-v="7665"` in `app/page.tsx`.
- **Brands / call-sheet details**: the `brands` array in `components/Interactions.js`.
- **Contact form link**: search `forms.gle` in `app/page.tsx`.
