# Project State

## Current working state
- GitHub repository initialized.
- Token-efficient agent/context structure is established and validated.
- Expo app foundation added with isolated staging and production build profiles.

## Recent decisions
- Product name: Preci.
- Mobile direction: Expo + React Native, iOS first.
- Backend/data: Supabase for auth and persistence; Python/FastAPI only where AI/backend logic genuinely needs it.
- Monetization: RevenueCat.
- AI recommendations should use structured relationship signals rather than full raw history.

## Known blockers
- Apple personal developer enrollment is pending; signing and App Store Connect cannot be completed yet.
- EAS project, separate Supabase/backend environments, and RevenueCat apps still need live provisioning; see `docs/STAGING.md`.

## Next highest-priority action
Verify the Expo app boots, then implement the first real person → occasion → gift idea flow. Complete EAS signing once personal Apple membership is active.

## Important files
- `AGENTS.md`
- `feature_status.json`
- `docs/PRODUCT.md`
- `docs/ARCHITECTURE.md`
- `docs/AI_RECOMMENDATIONS.md`
- `docs/DATA_MODEL.md`
- `docs/REVENUECAT.md`
- `docs/SHIPATON.md`

Keep this file compact. Replace stale state rather than appending a running diary.
