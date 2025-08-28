# Sister's Static Site

A minimal React project built with [Vite](https://vite.dev) and configured for deployment to GitHub Pages.

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

The resulting files are placed in the `dist/` directory. To serve them via GitHub Pages, copy the contents to the `docs/` folder:

```bash
rm -rf docs && cp -r dist docs
```

## Deployment

A workflow in `.github/workflows/deploy.yml` builds the project and deploys it to GitHub Pages when changes are pushed to the `main` branch.
