const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')

const commom = require('./webpack.commom')

module.exports = merge(commom, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          loader: 'sass-loader'
        }]
    }]
  },
  externals: {
    react: 'React',
    axios: 'axios',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/html/template.prod.html',
      favicon: './config/html/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
})
