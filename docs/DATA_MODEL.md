# Data Model

Keep the first schema small and migration-friendly.

## Core entities

### User
Owns private relationship data and entitlements.

### Person
- id
- user_id
- name
- relationship_label
- optional notes/avatar reference
- created_at / updated_at

### Memory
- id
- person_id
- type: mentioned | liked | needed | avoid
- text
- optional normalized topic/tag
- optional strength/confidence
- created_at

### Occasion
- id
- person_id
- type/name
- date
- optional budget_min / budget_max
- optional notes

### Recommendation
- id
- person_id
- occasion_id
- title
- reason
- price_band
- confidence
- evidence_memory_ids[]
- generated_at

### SavedGift
- id
- person_id
- occasion_id
- recommendation_id optional
- title
- status
- optional target_date / notes

## Rules
- User-owned data must be scoped to the authenticated user.
- `avoid` memories must remain available to recommendation filtering.
- Recommendation evidence should reference memory IDs rather than duplicate long source text where possible.
- Do not add tables until a real feature requires them.
