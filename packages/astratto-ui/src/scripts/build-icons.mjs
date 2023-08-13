#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { createResolver, useLogger } from '@nuxt/kit'
import ora from 'ora'

const logger = useLogger('Au icon builder')
const { resolve } = createResolver(import.meta.url)

const assetsPath = resolve('../runtime/assets')

const srcIcons = path.resolve(assetsPath, 'icons')
const buildPath = path.resolve(assetsPath, 'js')

async function buildIcons() {
  try {
    const spinnerBuilder = ora('generating icons...').start()
    const files = await fs.readdir(srcIcons)
    const svgObject = {}

    for (const file of files) {
      if (file.endsWith('.svg')) {
        const svgFilePath = path.join(srcIcons, file)
        const svgName = file.replace('.svg', '')
        const svgContent = await fs.readFile(svgFilePath, 'utf8')
        svgObject[svgName] = svgContent
      }
    }

    spinnerBuilder.succeed()

    const spinnerWrite2File = ora('Writing icons...')
    const outputPath = path.join(buildPath, 'au-icons.ts')
    const outputFileContent = `export const auIcons = ${JSON.stringify(
      svgObject,
      null,
      2
    )}`
    await fs.writeFile(outputPath, outputFileContent)

    spinnerWrite2File.succeed(`Icons generated successfully @: ${outputPath}`)
  } catch (error) {
    logger.error(error)
  }
}

buildIcons()
