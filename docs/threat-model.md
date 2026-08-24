# Publication threat model

## Protected assets

- credentials and account access;
- customer, employee, property, and operational privacy;
- production architecture and implementation details;
- advertising strategy and performance data; and
- media ownership and embedded metadata.

## Primary risks

The main risk is accidental disclosure through a seemingly harmless commit: an environment file, identifier, screenshot, copied production module, image metadata, generated report, or Git history imported from a private repository.

## Controls

- a separate repository with fresh history;
- deny-by-default scope rules;
- no production deployment or runtime integrations;
- an allowlist manifest for every binary asset;
- integrity verification and PNG metadata checks;
- secret and prohibited-path heuristics;
- protected branches, required review, and required CI; and
- private vulnerability reporting.

Automated checks reduce risk but do not replace human review. If provenance, sensitivity, or necessity is uncertain, the material stays private.
