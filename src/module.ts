import {
  addComponentsDir,
  addImportsDir,
  createResolver,
  defineNuxtModule,
  installModule
} from '@nuxt/kit'
import { name, version } from '../package.json'
import type { AuModuleOptions } from './types'

export default defineNuxtModule<AuModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'astrattoUI',
    compatibility: {
      bridge: false,
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    prefix: 'au'
  },
  async setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    installModule('@samk-dev/nuxt-uikit3')

    await addComponentsDir({
      pathPrefix: false,
      path: resolver.resolve('runtime/components', 'base'),
      prefix: `${options.prefix}`,
      pattern: '**/*.vue',
      ignore: ['**/examples/*.vue'],
      transpile: true,
      global: false
    })

    await addComponentsDir({
      pathPrefix: false,
      path: resolver.resolve('runtime/components', 'form-elements'),
      prefix: `${options.prefix}`,
      pattern: '**/*.vue',
      ignore: ['**/examples/*.vue'],
      transpile: true,
      global: false
    })

    await addComponentsDir({
      pathPrefix: false,
      path: resolver.resolve('runtime/components', 'layout'),
      prefix: `${options.prefix}`,
      pattern: '**/*.vue',
      ignore: ['**/examples/*.vue'],
      transpile: true,
      global: false
    })

    await addComponentsDir({
      pathPrefix: false,
      path: resolver.resolve('runtime/components', 'overlays'),
      prefix: `${options.prefix}`,
      pattern: '**/*.vue',
      ignore: ['**/examples/*.vue'],
      transpile: true,
      global: false
    })

    await addImportsDir(resolver.resolve('runtime/composables'))
  }
})
