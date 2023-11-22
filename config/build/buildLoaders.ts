import type webpack from 'webpack'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // если не используем typescript, то нужен babel-loader
  const typescriptLoaders = {
    // расширение, по которому мы определяем нужный нам файл
    test: /\.tsx?$/,
    // загрузчик, который позволяет работать с ts файлами
    // умеет работать с tsx
    use: 'ts-loader',
    // исключаем папку
    exclude: /node_modules/
  }

  const cssLoaders = buildCssLoaders(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: 'file-loader'
  }

  const babelLoader: webpack.RuleSetRule = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  // babel-loader must be before typescript loader
  return [fileLoader, svgLoader, babelLoader, typescriptLoaders, cssLoaders]
}
