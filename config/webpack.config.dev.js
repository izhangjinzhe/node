const {merge} = require('webpack-merge')
const base = require('./webpack.config.base')
const NodemonPlugin = require('nodemon-webpack-plugin')

const webpackConfig = merge(base, {
  mode: 'development', // 用什么模式进行优化.https://webpack.docschina.org/configuration/mode/
  devtool: 'eval-source-map', // 生成何种source map.https://webpack.docschina.org/configuration/devtoo
  plugins: [
    new NodemonPlugin() // Dong
  ]
})

module.exports = webpackConfig
