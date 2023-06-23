#!/usr/bin/env node

import { exec } from 'child_process'
import { createResolver, useLogger } from '@nuxt/kit'

const logger = useLogger('uikit-minion')
const resolver = createResolver(import.meta.url)

const uikitPath = resolver.resolve('../../node_modules/uikit')

logger.info('runing uikit minion')

const prefixUikit = () => {
  logger.info('prefixing uikit...')
  exec(`cd ${uikitPath} && npm run prefix -- -p au`, (err, stdout, stderr) => {
    if (err)
      logger.error(
        'There has been an error installing uikit dependencies: ',
        err
      )

    if (stderr) consola.error('stderr: ', stderr)
    logger.success('uikit dependencies installed successfully: ', stdout)
  })
}

const init = () => {
  logger.info('installing uikit dependencies...')
  exec(`cd ${uikitPath} && npm install`, (err, stdout, stderr) => {
    if (err)
      logger.error(
        'There has been an error installing uikit dependencies: ',
        err
      )

    if (stderr) logger.error('stderr: ', stderr)
    logger.success('uikit dependencies installed successfully', stdout)

    prefixUikit()
  })
}

init()
