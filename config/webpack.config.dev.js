const Merge = require('webpack-merge')
const base = require('./webpack.config.base')

const webpackConfig = Merge(base, {
  mode: 'development', // 用什么模式进行优化.https://webpack.docschina.org/configuration/mode/
  devtool: 'eval-source-map' // 生成何种source map.https://webpack.docschina.org/configuration/devtoo
})

module.exports = webpackConfig
