# Architecture

## Client
Expo + React Native, iOS first.

## Data/auth
Supabase is the default source for authentication and persistent product data.

## Backend
Prefer direct app/backend primitives already in the stack. Add Python/FastAPI only for logic that clearly benefits from a dedicated backend or AI service.

## AI boundary
The recommendation system consumes compact structured signals, not an unbounded chat transcript or full relationship history.

## Engineering rules
- Keep purchase logic centralized.
- Keep deterministic logic deterministic: filtering, sorting, dates, entitlement checks, budget validation, deduplication, and schema validation should not require an LLM.
- Prefer existing dependencies over adding new ones.
- Favor feature-local changes and minimal diffs.
- Persist durable state outside model conversation history.

## Expected source layout
Finalize this after the Expo app is present. Do not invent abstractions before the real project structure exists.
