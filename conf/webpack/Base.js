'use strict';
const fs = require('fs');
const path = require('path');
const npmBase = path.join(__dirname, '../../node_modules');
class WebpackBaseConfig {
  constructor() {
    this._config = {};
  }
  get includedPackages() {
    return [].map(pkg => fs.realpathSync(path.join(npmBase, pkg)));
  }
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }
  get config() {
    return this._config;
  }
  get env() {
    return 'dev';
  }
  get srcPathAbsolute() {
    return path.resolve('./src');
  }
  get testPathAbsolute() {
    return path.resolve('./test');
  }
  get defaultSettings() {
    const cssModulesQuery = {
      modules: false,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:5]'
    };
    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      entry: './index.js',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: this.srcPathAbsolute,
            use: [
              {
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-0'], "plugins": ['transform-decorators-legacy'] }
              }, {
                loader: 'eslint-loader',
                options: {
                  failOnWarning: false,
                  failOnError: false,
                }
              }
            ]
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(this.includedPackages, [this.srcPathAbsolute]),
            loaders: [{ loader: 'babel-loader' }]
          },
          {
            test: /\.(sass|scss)$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader' }
            ]
          },
          {
            test: /\.css$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'postcss-loader' },
            ]
          },
          {
            test: /\.less$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'postcss-loader' },
              { loader: 'less-loader' }
            ]
          },
          {
            test: /\.styl$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'postcss-loader' },
              { loader: 'stylus-loader' }
            ]
          }
        ]
      },
      output: {
        path: path.resolve('./dist/assets'),
        filename: 'output.[hash].bundle.js',
        publicPath: 'assets/'
      },
      plugins: [],
      resolve: {
        alias: {
          components: `${this.srcPathAbsolute}/components/`,
          config: `${this.srcPathAbsolute}/config/${this.env}.js`,
          containers: `${this.srcPathAbsolute}/containers/`,
          locale: `${this.srcPathAbsolute}/locale/`,
          redux_flow: `${this.srcPathAbsolute}/redux_flow/`,
          static: `${this.srcPathAbsolute}/static/`,
          theme: `${this.srcPathAbsolute}/theme/`,
          utils: `${this.srcPathAbsolute}/utils/`,
        },
        extensions: [
          '.js',
          '.jsx'
        ],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      },
    };
  }
}
module.exports = WebpackBaseConfig;
