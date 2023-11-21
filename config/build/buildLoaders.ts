import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
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

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

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
