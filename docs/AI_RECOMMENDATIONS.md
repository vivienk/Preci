# AI Recommendations

## Goal
Generate exactly three useful, explainable gift recommendations from the smallest relevant set of relationship signals.

## Runtime token strategy
1. Load person + occasion + budget.
2. Retrieve only relevant memories.
3. Always include relevant `avoid` signals.
4. Rank/select the strongest signals before model invocation.
5. Send compact structured data.
6. Request validated structured output.
7. Persist successful recommendations so reopening a screen does not regenerate them unnecessarily.

## Input shape
```json
{
  "occasion": "birthday",
  "budget": "$50-100",
  "signals": [
    ["liked", "ceramics", 0.9],
    ["mentioned", "needs a coffee mug", 0.8],
    ["avoid", "clutter", 1.0]
  ]
}
```

## Output shape
```json
{
  "recommendations": [
    {
      "title": "...",
      "reason": "...",
      "evidence_ids": ["..."],
      "price_band": "...",
      "confidence": 0.0
    }
  ]
}
```

## Rules
- Do not expose chain-of-thought.
- Keep stable instructions stable and dynamic person/occasion data last to support prompt caching where available.
- Use normal code for filtering, validation, sorting, dates, and deduplication.
- Do not send entire raw relationship histories by default.
