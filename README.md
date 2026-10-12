# auner.se

Personal site, built with [SvelteKit](https://svelte.dev/docs/kit) and prerendered with `@sveltejs/adapter-static`.

## Developing

Requires Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

## Deploying

Every push to `master` builds the site and deploys it to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
