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

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages with:

- Production branch: `main`
- Framework preset: `None`
- Build command: `npm run build:static`
- Build output directory: `dist/client`
- Root directory: `/`
- Node.js version: `22`

Cloudflare builds and deploys every push to `main`. Other branches become preview deployments.

## Project map

- `app/page.tsx`: page content and structure
- `app/globals.css`: design system and responsive layout
- `app/layout.tsx`: metadata and social sharing
- `public/og.png`: social card
- `design.md`: complete design/content specification
- `scripts/export-static.mjs`: static export for Cloudflare Pages

## Runtime note

Current landing page is static. Payment links work directly. Newsletter delivery through Resend requires a server-side Cloudflare Pages Function; never expose a Resend API key in browser code.
