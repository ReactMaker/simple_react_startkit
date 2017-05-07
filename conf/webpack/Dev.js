'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://0.0.0.0:8000/',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './client.js'
      ],
      devServer: {
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8000,
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html',
        }),
      ]
    };
    this.config.output.publicPath = './';
  }
}

module.exports = WebpackDevConfig;
