# Astratto UI

⚠️ Library still under development ⚠️

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Yes, yet another UI library. Built on top of UIkit 3, it's exclusive to Nuxt.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->

<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/astratto-ui?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Built on top of UIkit 3
- Very light weight && elegant
- Modular, use what only what's needed

## Quick Setup

1. Add `astratto-ui` dependency to your project

```bash
# Using pnpm
pnpm add -D @samk-dev/astratto-ui

# Using yarn
yarn add --dev @samk-dev/astratto-ui

# Using npm
npm install --save-dev @samk-dev/astratto-ui
```

2. Add `@samk-dev/astratto-ui` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@samk-dev/astratto-ui']
})
```

That's it! You can now use Astratto UI in your Nuxt app ✨

## Development

### Available Commands

| Command                | Action                                                   |
| :--------------------- | :------------------------------------------------------- |
| `pnpm prepare`         | Husky Install                                            |
| `pnpm install`         | Installs dependencies                                    |
| `pnpm dev`             | Playground @ `localhost:4666` && Docs @ `loadlhost:4667` |
| `pnpm dev:ui`          | Playground @ `localhost:4666`                            |
| `pnpm dev:docs`        | Docs @ `loadlhost:4667`                                  |
| `pnpm run dev:prepare` | Generate stubs                                           |
| `pnpm run lint`        | Run eslint                                               |
| `pnpm run format`      | Run prettier                                             |

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/astratto-ui/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/astratto-ui
[npm-downloads-src]: https://img.shields.io/npm/dm/astratto-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/astratto-ui
[license-src]: https://img.shields.io/npm/l/astratto-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/astratto-ui
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
