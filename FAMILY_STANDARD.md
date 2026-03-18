# Aapka-Sathi Family Standard

Every `Sathi` app must satisfy these defaults.

## Mandatory Defaults

1. Shared login
   All family apps must use the same Firebase project so one Google login works across the whole family.

2. PWA installability
   Every app must ship a `manifest.json`, service worker, install prompt, and app icons.

3. Day/Night theme
   Every app must support both light and dark mode with a visible theme toggle.

4. Mandatory pages
   Every app must provide:
   - `About`
   - `Resources`
   - `Contact`
   - `Privacy Policy`
   - `Terms & Conditions`

5. Daily reminder
   Every app must offer a user-facing notification setting and attempt one reminder every 24 hours about its core utility.

6. Feedback entry point
   Every app must expose an easy feedback action from the UI.

## Family UX Requirements

- Show `Part of Aapka-Sathi Family` visibly in header, footer, or hero
- Provide a link back to the central hub
- Provide sibling app links
- Keep branding family-consistent while preserving each app's personality

## Technical Baseline

- GitHub Pages deployable
- Mobile responsive
- Shared Firebase auth config
- PWA manifest + service worker
- Notification preference stored locally
- Feedback entry available in UI
