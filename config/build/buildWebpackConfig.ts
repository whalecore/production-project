import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const {
    paths: { build, entry, html },
    mode,
    isDev,
  } = options;

  return {
    mode,
    entry: entry,

    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true,
    },
    plugins: buildPlugins(html),
    // конфигурируем загрузчики, которые работают с не-js файлами
    module: {
      rules: buildLoaders(options),
    },
    // расширения, которые не нужно указывать при импорте
    // т.е. вместо import Component from './component.js'
    // будет import Component from './component'
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
