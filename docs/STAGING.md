# Preci staging

The app has three EAS build profiles: `development`, `staging`, and `production`. Development and staging use the EAS **preview** environment; production uses **production**. The staging app installs beside production because its iOS bundle ID is `com.vivienkong.preci.staging`; production uses `com.vivienkong.preci`.

## What is ready

- Expo app source and dynamic app configuration.
- The `staging` profile is an internally distributed iOS build with a visible STAGING BUILD marker.
- The `production` profile uses the public app identifier and hides the marker.
- Local `.env` files are ignored. `.env.example` lists the client-side variables to configure.

## Provisioning to finish after Apple enrollment activates

1. Connect this repository to **your personal** Expo account/project with `npx eas-cli init`. Do not connect it to the TomoCredit Apple team.
2. Register the explicit IDs `com.vivienkong.preci` and `com.vivienkong.preci.staging` under your personal Apple Developer team. These names are targets until Apple confirms availability.
3. Create separate Supabase projects for staging and production. Give each its own URL and public anon/publishable key; set up schema, auth, and RLS independently. Never point a staging build at production data.
4. Create separate staging and production backend deployments for the Python recommendation service. Keep model API keys server-side. Enter their different public API URLs in the corresponding EAS environments.
5. Set `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`, `EXPO_PUBLIC_API_URL`, and `EXPO_PUBLIC_REVENUECAT_IOS_KEY` in the EAS **preview** and **production** environments with the matching values. The RevenueCat key is the public app SDK key, not a secret API key. All `EXPO_PUBLIC_` values are readable in the installed app.
6. Configure RevenueCat's staging app with the staging bundle ID. For production purchases use the production bundle ID and its own Store product configuration. Real iOS purchase testing requires native development/sandbox or TestFlight builds; an Expo Go mock is insufficient.
7. Install dependencies with `npm install`, then run `npx expo start`. For a signed staging build, run `npx eas-cli build --profile staging --platform ios` after Apple access is active. If using EAS Update later, keep staging and production update channels separate before publishing any OTA updates.

No live Supabase, backend, RevenueCat, EAS project, or Apple account has been provisioned by this commit. The landing screen is a boot smoke test, not the full product loop.
The Expo template icon is intentionally omitted; add Preci's actual icon before App Store submission.
