# RevenueCat

RevenueCat is the source of truth for premium entitlements.

## Planned products
- Occasion Pass — $2.99 one-time
- Preci+ — $4.99/month
- Preci+ — $29.99/year

## Implementation rules
- Centralize purchase and entitlement logic.
- Use entitlements for premium access rather than scattering product-ID checks across UI components.
- Establish one working purchase/entitlement path before expanding monetization complexity.
- Verify purchase, cancellation/expiration state, restore, active entitlement, inactive entitlement, and relaunch behavior.
- Real native purchase verification requires an appropriate native development/TestFlight/App Store build; Expo Go behavior is not proof that native purchasing works.

## Before shipping
Re-check current RevenueCat Expo/React Native installation docs and current App Store product configuration rather than relying on remembered API syntax.
