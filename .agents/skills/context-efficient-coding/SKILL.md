---
name: context-efficient-coding
description: Use for coding work in this repository when minimizing total tokens and rework matters. Enforces progressive disclosure, search-first retrieval, minimal diffs, narrow testing, and compact project-state checkpoints.
---

# Context-Efficient Coding

Optimize for verified feature shipped per total tokens consumed.

## Start
Read only:
1. `AGENTS.md`
2. `PROJECT_STATE.md`
3. `feature_status.json`
4. the active task

Then search for the exact files/symbols relevant to that task.

## Retrieval
SEARCH → IDENTIFY → READ RELEVANT RANGE → EDIT.

Do not read the whole repository by default. Expand context only when a discovered dependency requires it.

## Editing
- Prefer minimal patches.
- Reuse existing components, types, styles, and dependencies.
- Avoid unrelated refactors.
- Do not add dependencies unless they materially simplify the required feature.

## Execution
For substantial work, internally define goal, likely affected files, acceptance criteria, and smallest useful test. Keep planning concise and begin implementation when the path is clear.

Work one vertical outcome at a time.

## Testing
Use the narrowest test capable of disproving the change first. Broaden only when justified. Inspect failures before rerunning commands. Keep only relevant error context.

## Context hygiene
At meaningful feature boundaries:
- verify the result;
- update `feature_status.json`;
- replace stale content in `PROJECT_STATE.md`;
- preserve decisions, changed files, test status, blockers, and next action;
- discard old searches, successful logs, superseded plans, and dead-end hypotheses.

## Runtime AI
For Preci recommendations, retrieve only the strongest relevant structured memories, always include relevant avoid signals, request exactly three structured recommendations, persist successful results, and use deterministic code for deterministic work.

## Reporting
DONE: <one sentence>
CHANGED: <paths only>
VERIFIED: <checks>
STATE: <blocker or ready for next feature>
