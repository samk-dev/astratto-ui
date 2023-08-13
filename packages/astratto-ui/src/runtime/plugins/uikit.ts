import { defineNuxtPlugin } from '#app'
import type { UIkitPlugin } from '../../types/module'
import { auIcons } from '../assets/js/au-icons'

export default defineNuxtPlugin(async (nuxtApp) => {
  const UIkit = (await import('uikit').then(
    (r) => r.default || r
  )) as UIkitPlugin['$uikit']

  UIkit.icon.add(auIcons)

  nuxtApp.provide('uikit', UIkit)
})
