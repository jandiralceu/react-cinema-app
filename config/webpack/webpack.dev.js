const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const commom = require('./webpack.commom')

module.exports = merge(commom, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/html/template.dev.html'
    })
  ]
})
