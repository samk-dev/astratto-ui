#!/usr/bin/env node

import { exec } from 'child_process'
import { createResolver, useLogger } from '@nuxt/kit'
import { copy } from 'fs-extra'

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

    if (stderr) logger.error('stderr: ', stderr)
    logger.success('uikit dependencies installed successfully: ', stdout)
  })
}

const copyPrefixedAssets = () => {
  const files = [
    {
      srcPath: `${uikitPath}/dist/css/`,
      srcName: 'uikit.min.css',
      destName: 'base.css',
      destPath: resolver.resolve(`../runtime/assets/styles/`)
    },
    {
      srcPath: `${uikitPath}/dist/css/`,
      srcName: 'uikit-rtl.min.css',
      destName: 'base-rtl.css',
      destPath: resolver.resolve(`../runtime/assets/styles/`)
    },
    {
      srcPath: `${uikitPath}/dist/js/`,
      srcName: 'uikit.js',
      destName: 'uikit.js',
      destPath: resolver.resolve(`../runtime/assets/js/`)
    },
    {
      srcPath: `${uikitPath}/dist/js/`,
      srcName: 'uikit-icons.js',
      destName: 'uikit-icons.js',
      destPath: resolver.resolve(`../runtime/assets/js/`)
    }
  ]

  files.forEach((file) => {
    logger.info('copying ', file.srcName)

    copy(
      `${file.srcPath}/${file.srcName}`,
      `${file.destPath}/${file.destName}`,
      { overwrite: true },
      (err) => {
        if (err) logger.error('Err copying ', file.srcName)

        logger.success(file.srcName, ' copied successfully!')
      }
    )
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
    copyPrefixedAssets()
  })
}

init()
