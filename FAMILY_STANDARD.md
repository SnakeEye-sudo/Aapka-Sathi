# Aapka-Sathi Family Standard

Every `Sathi` app must satisfy these defaults.

## Mandatory Defaults

1. Shared login
   All family apps must use the same Firebase project so one Google login works across the whole family.

2. PWA installability
   Every app must ship a `manifest.json`, service worker, install prompt, app icons, and a user-facing install popup when the app is not yet installed.

3. Day/Night theme
   Every app must support both light and dark mode, follow system day/night automatically by default, and sync the chosen family theme across apps with the shared storage keys:
   - `sathi-family-theme`
   - `sathi-family-theme-mode`

4. Hindi/English language toggle
   Every app must provide a visible Hindi/English toggle so users can switch language without leaving the current page.

5. Top-right hamburger menu
   Every app with extra links or supporting HTML pages must place them inside a visible three-line hamburger menu in the top-right area.
   The footer should not be used as the primary place for About, Resources, Contact, Privacy, or Terms links.

6. Mandatory pages
   Every app must provide:
   - `About`
   - `Resources`
   - `Contact`
   - `Privacy Policy`
   - `Terms & Conditions`

7. Daily reminder
   Every app must offer a user-facing notification setting, show the reminder opt-in prompt after install or first meaningful launch, and attempt one reminder every 24 hours about its core utility.

8. Install center compatibility
   Every app must expose a normal PWA install flow and also work with the family `Install All` guided flow.
   Browsers may still confirm installs one app at a time, so each app should gracefully open its own install prompt when launched from the hub.

9. Feedback entry point
   Every app must expose an easy feedback action from the UI.

10. Founder credit in footer
   Every app must show a clear footer credit for the creator:
   `Crafted and developed by Er. Sangam Krishna`

## Family UX Requirements

- Show `Part of Aapka-Sathi Family` visibly in header, footer, or hero
- Provide a link back to the central hub
- Provide sibling app links
- Keep the primary navigation simple and move secondary/legal pages into the top-right hamburger
- Show the founder credit cleanly in the footer, not hidden or tiny
- Keep branding family-consistent while preserving each app's personality

## Technical Baseline

- GitHub Pages deployable
- Mobile responsive
- Shared Firebase auth config
- Visible signed-in user state
- Shared family theme keys with system auto-follow by default
- Hindi/English toggle
- PWA manifest + service worker
- Notification preference stored locally
- Feedback entry available in UI
