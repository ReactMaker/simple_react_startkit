const config = require('./webpack.config.base');
const webpack = require('webpack');
// change your production config here;
config.plugins.push(new webpack.DefinePlugin({ ENV: JSON.stringify('dev') }));

module.exports = config;