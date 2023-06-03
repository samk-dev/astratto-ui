import { addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
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
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'au'
  },
  async setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    await addComponentsDir({
      pathPrefix: false,
      path: resolver.resolve('runtime/components', 'form-elements'),
      prefix: `${options.prefix}-icon`,
      pattern: '**/*.vue',
      ignore: ['**/examples/*.vue'],
      transpile: true,
      global: false
    })
  }
})
