const TerserJSPlugin = require( 'terser-webpack-plugin' )
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' )

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')

const webpackConfig = merge(base, {
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

module.exports = webpackConfig
