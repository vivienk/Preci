# Project State

## Current working state
- GitHub repository initialized.
- Token-efficient agent/context structure is established and validated.
- Existing repository currently has no application source code yet.

## Recent decisions
- Product name: Preci.
- Mobile direction: Expo + React Native, iOS first.
- Backend/data: Supabase for auth and persistence; Python/FastAPI only where AI/backend logic genuinely needs it.
- Monetization: RevenueCat.
- AI recommendations should use structured relationship signals rather than full raw history.

## Known blockers
- App source code still needs to be added to this repository.
- Native bundle/App Store/RevenueCat configuration will need verification once the Expo project is present.

## Next highest-priority action
Add or initialize the Expo app source, then verify the app boots locally before implementing feature slices.

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
