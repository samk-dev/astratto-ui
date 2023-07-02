#!/usr/bin/env node

import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import { createResolver, useLogger } from '@nuxt/kit'
import { copy, pathExists, remove } from 'fs-extra'
import ora from 'ora'

const execAsync = promisify(exec)
const copyAsync = promisify(copy)

const logger = useLogger('uikit-builder')
const resolver = createResolver(import.meta.url)

const buildPath = resolver.resolve('../../../../uikit-build')
const uikitPath = path.join(buildPath, 'uikit')

logger.info(`build dir: ${uikitPath}`)

async function setupUIkit() {
  try {
    const spinner = ora('Checking existing UIkit directory').start()
    const uikitExists = await pathExists(uikitPath)
    if (uikitExists) {
      await remove(uikitPath)
      spinner.succeed('Existing UIkit directory removed!')
    } else {
      spinner.succeed('No existing UIkit directory found!')
    }

    const cloneSpinner = ora('Cloning UIkit repository').start()
    const cloneCommand = `cd ${buildPath} && git clone https://github.com/uikit/uikit.git`
    await execAsync(cloneCommand)
    cloneSpinner.succeed('UIkit repository cloned successfully!')

    const installSpinner = ora('Installing UIkit').start()
    const installCommand = `cd ${uikitPath} && rm pnpm-lock.yaml && npm install`
    await execAsync(installCommand)
    installSpinner.succeed('UIkit installation completed successfully!')

    const prefixSpinner = ora('Prefixing and copying files').start()
    const prefixCommand = `cd ${uikitPath} && npm run prefix -- -p au`
    await execAsync(prefixCommand)
    prefixSpinner.succeed('Prefixing and copying completed successfully!')

    const cssSpinner = ora('Copying CSS files').start()
    await copyAsync(
      path.join(uikitPath, 'dist/css'),
      resolver.resolve('../runtime/assets/css'),
      { overwrite: true }
    )
    cssSpinner.succeed('CSS files copied successfully!')

    const jsSpinner = ora('Copying JS files').start()
    await copyAsync(
      path.join(uikitPath, 'dist/js'),
      resolver.resolve('../runtime/assets/js'),
      { overwrite: true }
    )
    jsSpinner.succeed('JS files copied successfully!')
  } catch (err) {
    logger.error(err)
  }
}

setupUIkit()
