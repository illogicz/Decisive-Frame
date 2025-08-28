# Sister's Static Site

A simple React/Vite recreation of [Merel Schoneveld's](https://www.merelschoneveld.nl/) homepage. The project is configured for GitHub Pages deployment.

## Development

```bash
npm install
npm run dev
```

## Build

Generate a static production build:

```bash
npm run build
```

## Deployment

A workflow in `.github/workflows/deploy.yml` builds the project and deploys it to GitHub Pages when changes are pushed to the `main` branch.
