# HailKing Professionals — Public Codebase

This is the intentionally sanitized public codebase for the HailKing Professionals web experience.

Visit the production website at [hailkingpros.com](https://hailkingpros.com/).

## Purpose

This repository demonstrates a small, static Next.js App Router implementation, a public design system, synthetic page compositions, and a tightly approved set of visual references. It is not the production source repository, is not connected to production systems, and does not serve production traffic.

## Included showcase

- reusable, server-rendered presentation components;
- a design-system route with approved, metadata-cleaned logos;
- fictional residential and commercial composition examples;
- two viewport captures of the publicly accessible production homepage; and
- architecture, accessibility, threat-model, and publication-boundary documentation.

All committed media is enumerated and integrity-locked in [`public/asset-manifest.json`](public/asset-manifest.json). See [TRADEMARKS.md](TRADEMARKS.md) for ownership notices.

## Safety boundary

This repository intentionally contains no:

- production API routes, server actions, webhooks, forms, or authentication;
- environment variables, credentials, tokens, or deployment configuration;
- advertising, analytics, CRM, telephony, or account identifiers;
- customer, reviewer, employee, lead, property, or operational data;
- production runbooks, audit evidence, campaign strategy, or internal documentation; or
- copied production media or assets with unclear redistribution rights.

See [PUBLIC-SCOPE.md](PUBLIC-SCOPE.md) before proposing a change.

## Local development

Requirements: Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

The project produces a static export:

```bash
npm run safety
npm run lint
npm run build
```

Build output is written to `out/`. This repository is not configured for deployment.

## Security

Please report suspected exposure privately according to [SECURITY.md](SECURITY.md). Do not open a public issue containing sensitive information.

## Rights

Source is publicly viewable but not offered under an open-source license. See [LICENSE.md](LICENSE.md).
