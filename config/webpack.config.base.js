// const webpack = require('webpack')
import webpack from 'webpack'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import * as path from 'path'
import externals from 'webpack-node-externals'

const __dirname = path.resolve()
console.log(path.resolve( __dirname, './src/index.js' ))

const baseConfig = {
  target: 'node', // 将在node环境编译不加载fs,path等内置模块.https://webpack.docschina.org/concepts/targets/
  externals: [ externals() ], // 排除node_modules里的模块.https://webpack.docschina.org/configuration/externals/
  // mode: 'development', // 用什么模式进行优化.https://webpack.docschina.org/configuration/mode/
  // devtool: 'eval-source-map', // 生成何种source map.https://webpack.docschina.org/configuration/devtool
  entry: {
    server: path.resolve( __dirname, './src/index.js' )
  },
  output: {
    filename: '[name].js',
    path: path.resolve( __dirname, './dist' )
  },
  module: {
    rules: [
      {
        test: /\.(js | jsx)$/,
        use: [ 'babel-loader' ],
        exclude: [ path.resolve( __dirname, '../node_modules' ) ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production' ? 'production' : 'development')
    })
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  node: { // 这些选项可以配置是否 polyfill 或 mock 某些 Node.js 全局变量.https://webpack.docschina.org/configuration/node/#root
    // console: true,
    global: true,
    __filename: true,
    __dirname: true
    // setImmediate: true,
    // path: true
  }
}

export default baseConfig
