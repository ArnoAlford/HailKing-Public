# HailKing Professionals — Public Codebase

This is the intentionally sanitized public codebase for the HailKing Professionals web experience.

Visit the production website at [hailkingpros.com](https://hailkingpros.com/).

## Purpose

This repository demonstrates a small, static Next.js App Router implementation and selected presentation patterns. It is not the production source repository, is not connected to production systems, and does not serve production traffic.

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
npm run lint
npm run build
```

Build output is written to `out/`. This repository is not configured for deployment.

## Security

Please report suspected exposure privately according to [SECURITY.md](SECURITY.md). Do not open a public issue containing sensitive information.

## Rights

Source is publicly viewable but not offered under an open-source license. See [LICENSE.md](LICENSE.md).
