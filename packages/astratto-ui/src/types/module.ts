import type UIkit from 'uikit'

export interface UIkitPlugin {
  $uikit: typeof UIkit
}

declare module '#app' {
  interface NuxtApp {
    $uikit: typeof UIkit
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $uikit: typeof UIkit
  }
}

export interface AuModuleOptions {
  /**
   * @description sets a custom prefix for components/composables
   *
   * @default 'au'
   * */
  prefix: string
}
