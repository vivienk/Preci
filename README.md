# Preci

Preci is a relationship-memory assistant that remembers the little things people mention and turns them into thoughtful gifts at the right time.

## Product loop

Person → relationship memories → occasion → 3 explainable recommendations → save gift → plan/remind → feedback.

Memory types: **Mentioned · Liked · Needed · Avoid**.

## Build direction

- Expo + React Native, iOS first
- Supabase for auth and persistent product data
- Structured AI recommendations from compact relationship signals
- RevenueCat for monetization and entitlements
- Shipaton 2026 target

## Agent workflow

This repository is organized for progressive disclosure so coding agents do not need to load the entire project context on every task.

Start with:

1. [`AGENTS.md`](AGENTS.md)
2. [`PROJECT_STATE.md`](PROJECT_STATE.md)
3. [`feature_status.json`](feature_status.json)

Read deeper docs only when the current task needs them. The reusable repo-local workflow lives at [`.agents/skills/context-efficient-coding/SKILL.md`](.agents/skills/context-efficient-coding/SKILL.md).

## Docs

- [`docs/PRODUCT.md`](docs/PRODUCT.md)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/DATA_MODEL.md`](docs/DATA_MODEL.md)
- [`docs/AI_RECOMMENDATIONS.md`](docs/AI_RECOMMENDATIONS.md)
- [`docs/REVENUECAT.md`](docs/REVENUECAT.md)
- [`docs/SHIPATON.md`](docs/SHIPATON.md)

## Current state

The Expo app foundation and separate staging/production build profiles are in place. See [`docs/STAGING.md`](docs/STAGING.md) for setup and the remaining account/service provisioning steps. The next product milestone is implementing the first real person → occasion → gift idea loop.

Run `npm install` and `npx expo start` to open the app locally. After your personal Apple Developer enrollment is active and the EAS project is linked, `npx eas-cli build --profile staging --platform ios` creates the signed staging build.
