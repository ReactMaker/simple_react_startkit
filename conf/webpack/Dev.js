'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
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
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"',
          'process.env.APIHOST': '"localhost"',
          'process.env.APIPORT': '"8080"',
        })
      ]
    };
  }
}

module.exports = WebpackDevConfig;
