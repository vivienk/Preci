# Preci Agent Map

Use context sparingly. Read only what the current task requires.

## Start here
1. `PROJECT_STATE.md` — current working state, blockers, next action.
2. `feature_status.json` — canonical implementation checklist.
3. This file — repository map and working rules.

## Project docs
- Product: `docs/PRODUCT.md`
- Architecture: `docs/ARCHITECTURE.md`
- Data model: `docs/DATA_MODEL.md`
- AI recommendations: `docs/AI_RECOMMENDATIONS.md`
- RevenueCat: `docs/REVENUECAT.md`
- Shipaton: `docs/SHIPATON.md`

## Token-efficient workflow
- Search before reading files.
- Read only relevant files/ranges.
- Prefer minimal diffs over rewrites.
- Reuse existing components, types, styles, and dependencies.
- Work one vertical outcome at a time.
- Define acceptance criteria before substantial edits.
- Run the narrowest useful test first.
- Do not repeat failed commands without changing the hypothesis or implementation.
- Keep logs and summaries concise.
- Update `PROJECT_STATE.md` and `feature_status.json` only at meaningful checkpoints.
- Compact/reset context after completed feature boundaries.

## Product priority
App boots reliably → navigation/core UI → persistence → people → memories → occasions → recommendations → saved gifts/planning → RevenueCat → end-to-end testing → App Store/Shipaton readiness.

## Completion format
When reporting a completed task, keep it short:

DONE: <one sentence>
CHANGED: <paths>
VERIFIED: <tests/checks>
STATE: <next blocker or ready for next feature>
