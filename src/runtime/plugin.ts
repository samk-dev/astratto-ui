import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const UIkit = await import('./assets/js/uikit.js')
    .then((r) => r.default || r)
    .catch((err) => console.error('Failed to load UIkit: ', err))

  nuxtApp.provide('aukit', UIkit)

  await import('./assets/js/uikit-icons.js')
    .then((r) => r.default || r)
    .catch((err) => console.error('Failed to load UIkit Icons: ', err))
})
