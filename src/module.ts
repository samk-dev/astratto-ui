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
  defaults: {
    prefix: 'au'
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.css ||= []
    nuxt.options.css.push(resolver.resolve('./runtime/assets/styles/base.css'))

    nuxt.options.build.transpile ||= []
    nuxt.options.build.transpile.push(
      resolver.resolve('./runtime/assets/js/uikit')
    )
    nuxt.options.build.transpile.push(
      resolver.resolve('./runtime/assets/js/uikit-icons')
    )

    nuxt.options.app.head.script ||= []
    nuxt.options.app.head.script.push(
      resolver.resolve('./runtime/assets/js/uikit.js')
    )
    nuxt.options.app.head.script.push(
      resolver.resolve('./runtime/assets/js/uikit-icons.js')
    )

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
  }
})
