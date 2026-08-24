# Public architecture

This repository is a static presentation artifact. Next.js renders every route at build time and exports plain files. There is no runtime server owned by this project.

## Boundaries

```text
authored pages + approved assets
             │
             ▼
      Next.js static build
             │
             ▼
        inert HTML/CSS/JS
```

The repository contains no route handlers, server actions, forms, databases, authentication, production configuration, analytics, advertising integrations, or deployment workflow. Links to the production website cross a clear external boundary.

Shared components are presentation-only. Synthetic examples live in a dedicated data module and are labeled on the rendered page. Approved images are enumerated by path and digest in the asset manifest.
