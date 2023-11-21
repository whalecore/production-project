import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const {
    paths: { build, entry },
    mode,
    isDev
  } = options

  return {
    mode,
    entry,

    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true
    },
    plugins: buildPlugins(options),
    // конфигурируем загрузчики, которые работают с не-js файлами
    module: {
      rules: buildLoaders(options)
    },
    // расширения, которые не нужно указывать при импорте
    // т.е. вместо import Component from './component.js'
    // будет import Component from './component'
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
