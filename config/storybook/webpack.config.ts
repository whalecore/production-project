import path from 'path'
import webpack from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildCssLoaders(true))

  config.plugins = [
  // @ts-ignore
    ...config.plugins.filter(plugin => plugin.constructor.name !== 'IgnorePlugin'),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-dom\/client$/,
      contextRegExp: /(app\/react|app\\react|@storybook\/react|@storybook\\react)/
    })
  ]

  return config
}
