# Grow & Close

Senior-led GTM execution studio for B2B SaaS.

Production: [growandclose.com](https://growandclose.com)

Repository visibility: private. Cloudflare's GitHub app must retain access for production builds.

## Brand source of truth

`design.md` is the complete visual, messaging, responsive, and image-generation specification. Read it before creating any Grow & Close page, LinkedIn visual, proposal, deck, campaign, or AI-generated asset.

Consistency order:

1. Reuse checked-in brand assets.
2. Follow exact tokens and composition rules in `design.md`.
3. Use the prompt recipes in `design.md` for new visual concepts.
4. Never let a model invent replacement colors, fonts, logos, icons, gradients, or decorative styles.

Core system:

- IBM Plex Sans: display and body.
- IBM Plex Mono: labels, numbering, operational metadata.
- Ink `#090a0c`, paper `#f6f7fb`, electric blue `#0b4fe8`.
- G/C mark with electric-blue slash.
- AND/OR logic diagrams translated into GTM motion maps.
- Flat editorial grids, hard borders, no gradients, no orange, no lime.

Reusable assets:

- `public/favicon.svg`: compact G/C mark.
- `public/brand/logic-and.svg`: converging inputs / positioning logic.
- `public/brand/logic-or.svg`: branching choice / activation logic.
- `public/brand/logic-ship.svg`: completion / learning loop.
- `public/brand/logic-system.svg`: large multi-motion background.
- `public/og.png`: production social card.

For exact repetition, use these files. Prompting different image models can produce stylistically aligned work, but cannot guarantee pixel-identical output.

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

Tests cover server rendering, canonical-domain redirects, accessible color pairs, and required brand assets.

## Cloudflare Workers

Production uses Cloudflare Workers Builds connected to this repository:

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Node.js version: `22`
- Production domain: `https://growandclose.com`
- Custom domains: `growandclose.com` and `www.growandclose.com`, managed separately in the Cloudflare dashboard

Vinext generates the Wrangler bundle and static-asset manifest. `vite.config.ts` targets the existing production Worker and keeps its `workers.dev` fallback enabled. Cloudflare custom domains remain dashboard-managed because the Git build token does not own zone routing. Add apex and `www` as two separate domains; never use **Edit** to replace one with the other. Merges to `main` trigger production deployment.

If repository visibility changes, confirm Cloudflare's GitHub app retains access and verify one post-change deployment before treating the integration as healthy.

## Project map

- `app/page.tsx`: content and page structure.
- `app/globals.css`: tokens, components, responsive system.
- `app/layout.tsx`: IBM Plex loading, metadata, social sharing, favicon.
- `public/brand/`: deterministic reusable visual language.
- `public/og.png`: social card.
- `design.md`: cross-channel brand and creative specification.
- `tests/rendered-html.test.mjs`: release checks.
- `scripts/export-static.mjs`: optional static-export fallback.

## Runtime note

Payment links can work directly. Newsletter delivery through Resend requires a server-side Worker endpoint. Never expose API keys in browser code or commit secrets.
