# Astratto UI

⚠️ Library still under heavy development development ⚠️

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Yes, yet another UI library - Design System. Built on top of UIkit Framework, && it's exclusive to Nuxt.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->

<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/astratto-ui?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Built on top of UIkit Framework
- Very light weight && elegant
- Modular
- Plays nice with Css utility frameworks like Tailwindcss

## Limitations

- Can't prefix scss/less builds. If used a long side another instance of UIkit there will be style clashes here and there. But it can be used with another prefixed instance of UIkit. [Avoiding conflicts Docs](https://getuikit.com/docs/avoiding-conflicts)

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

## ⚒️ Todos

- [] Storybook documentation?? || Nuxt content??
- [] Components unit tests

## Development

```bash
# Install dependencies
pnpm install
```

### Available Commands

| Command                  | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `pnpm install`           | Installs dependencies                            |
| `pnpm dev:ui`            | Starts local dev server at `localhost:4666`      |
| `dev:prepare:ui`         | Generate stubs                                   |
| `pnpm dev:docs`          | Starts Docs local dev server at `localhost:4667` |
| `pnpm playground:build`   | build the playground                             |
| `pnpm playground:preview` | Preview the playground                           |

### Credits

This project is build on top of the shoulders of giants

- YooThemes - UIkit
- Nuxt Labs - Nuxt
- Sébastien Chopin - Nuxt Color Mode
- Anthony Fu - VueUse

**`astratto ui is not endorsed or certified by Nuxt, UIkit or any person mentioned 👆`**

Assets:

- Photo by Nada Ghannam: <https://www.pexels.com/photo/old-in-damascus-11233594/>
- Photo by Martijn Adegeest: <https://www.pexels.com/photo/moulin-pouge-shop-facade-587840/>
- Photo by mark gorman: <https://www.pexels.com/photo/grand-canal-venice-623843/>
- Photo by Mati Angulo: <https://www.pexels.com/photo/people-gathering-near-plaza-930595/>
- Photo by Sonny Vermeer: <https://www.pexels.com/photo/farol-de-leca-lighthouse-on-the-coast-of-porto-portugal-17445970/>
- Video by Nicky: <https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=166720>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/astratto-ui/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/astratto-ui
[npm-downloads-src]: https://img.shields.io/npm/dm/astratto-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/astratto-ui
[license-src]: https://img.shields.io/npm/l/astratto-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/astratto-ui
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
