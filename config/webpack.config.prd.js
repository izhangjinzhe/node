import TerserJSPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import {merge} from 'webpack-merge'
import baseConfig from './webpack.config.base.js'

// const base = require('./webpack.config.base')

const prdConfig = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin(), // 代码压缩
      new CssMinimizerPlugin() // css压缩
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

export default prdConfig
