# Zalaryx Landing Page

Jekyll-based landing page for the Zalaryx iOS app — a salary and tax calculator for employees and freelancers across 9 countries.

## Development

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000

## Structure

- `_config.yml` — site config, update `appstore_link` and `ios_app_id` when live on the App Store
- `_includes/features.html` — feature cards on the homepage
- `_pages/` — Privacy Policy and Terms pages
- `assets/css/_sass/` — SCSS styles (green color scheme)
- `assets/images/icon.png` — app icon
