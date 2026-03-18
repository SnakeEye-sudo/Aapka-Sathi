# AI Prompt Template For New Sathi Apps

Build a production-ready app called `[APP_NAME]` for the `Aapka-Sathi` family.

Purpose:
`[WHAT THE APP DOES]`

Target users:
`[WHO WILL USE IT]`

Core user outcome:
`[MAIN VALUE]`

Technical constraints:

- Must be deployable on GitHub Pages
- Must support mobile and desktop
- Must include both light and dark theme
- Must follow system day/night automatically by default and sync family theme using `sathi-family-theme` and `sathi-family-theme-mode`
- Must include a visible Hindi/English language toggle
- Must include PWA install support and show an install popup when the app is not installed
- Must be compatible with the family `Install All` guided flow from the hub
- Must use the shared Firebase project pattern so Google login works across the entire Sathi family
- Must visibly show which family user is signed in when shared login is enabled
- For future apps, default to TypeScript-first implementation and use the strongest suitable modern stack for the product
- The app should have its own premium visual identity and should not feel like a reused plain JavaScript shell
- Must include local reminder support for the app's core job once every 24 hours and ask for reminder permission after install or first meaningful launch
- Must include a visible feedback action
- Must include a visible top-right three-line hamburger menu for extra pages, settings, and legal links
- Must include these pages:
  - About
  - Resources
  - Contact
  - Privacy Policy
  - Terms & Conditions
- These pages should be linked from the hamburger menu, not from a crowded footer
- Must include `Part of Aapka-Sathi Family` branding and a link back to the central hub
- Must show a clear footer credit: `Crafted and developed by Er. Sangam Krishna`

Also produce:

- complete app code
- Pages-ready config
- setup notes
- final checklist showing the family defaults are satisfied
