import type { UIkitPlugin } from '../../types/module'
import { auIcons } from '../assets/js/au-icons'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const UIkit = (await import('uikit').then(
    (r) => r.default || r
  )) as UIkitPlugin['$uikit']

  UIkit.icon.add(auIcons)

  nuxtApp.provide('uikit', UIkit)
})
