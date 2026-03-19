# How To Add A New Sathi App

## 1. Create the app repo

Recommended naming:

- `xyz-sathi`
- `Something-Sathi`

Keep the app independently deployable on GitHub Pages.

## 2. Build with the family defaults from day one

Before you accept an app as complete, confirm:

- shared Firebase login
- PWA install
- day/night theme
- About page
- Resources page
- Contact page
- Privacy Policy page
- Terms & Conditions page
- daily reminder setting
- feedback option
- `Part of Aapka-Sathi Family` link

## 3. Add it to the family hub

Open `apps/apps.json` in `Aapka-Sathi` and add one new record with:

- `id`
- `name`
- `tagline`
- `description`
- `url`
- `pwa`
- `theme`
- `sharedLogin`
- `notification`
- `feedback`
- `status`

## 4. Future AI workflow

1. copy `AI_APP_BRIEF_TEMPLATE.md`
2. fill app purpose
3. paste into any AI tool
4. verify result against `FAMILY_STANDARD.md`
