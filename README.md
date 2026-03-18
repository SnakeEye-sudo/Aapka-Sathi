# Aapka-Sathi

Aapka-Sathi is the family hub for every `Sathi` app.

It exists to do three things:

1. Present the full `Sathi Family` in one place
2. Define the mandatory family standards for every new app
3. Make future expansion simple, repeatable, and GitHub Pages friendly

## Live Structure

- `Aapka-Sathi` = ecosystem hub
- `pariksha-sathi` = study planner
- `rozgar-sathi` = jobs + resume + tracker
- `Samachar-Sathi` = current affairs + analysis

Each app stays independently deployable on its own GitHub Pages URL and is also featured inside the family hub.

## Files

- `index.html` - main family hub
- `styles.css` - shared hub styling
- `app.js` - family hub behavior
- `apps/apps.json` - app registry used by the hub
- `manifest.json` - PWA manifest
- `sw.js` - service worker
- `FAMILY_STANDARD.md` - mandatory rules for every Sathi app
- `ADD_NEW_SATHI.md` - exact future onboarding workflow
- `AI_APP_BRIEF_TEMPLATE.md` - copy-paste prompt template for future AI-built apps

## Deploy

Push to `main`. GitHub Actions deploys the repo to GitHub Pages.
