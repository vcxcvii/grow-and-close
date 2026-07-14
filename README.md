# Grow & Close

Senior-led GTM execution studio for B2B SaaS.

## Local development

Requirements: Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run lint
```

## Cloudflare Workers

Production uses Cloudflare Workers Builds connected to this GitHub repository:

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Node.js version: `22`
- Production domain: `https://growandclose.com`

The Vinext build generates Wrangler's deployment bundle and static-asset manifest. `vite.config.ts` targets the Worker created by Cloudflare's dashboard. Every push to `main` triggers a production build.

## Project map

- `app/page.tsx`: page content and structure
- `app/globals.css`: design system and responsive layout
- `app/layout.tsx`: metadata and social sharing
- `public/og.png`: social card
- `design.md`: complete design/content specification
- `scripts/export-static.mjs`: optional static-export fallback

## Runtime note

Payment links work directly. Newsletter delivery through Resend requires a server-side Worker endpoint; never expose a Resend API key in browser code.
