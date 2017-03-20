require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];
module.exports = Object.assign({
  version: require('../package.json').version,
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  api: {
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT,
  },
  desc: process.env.DESCRIPTION,
  app: {
    title: 'WiIVM',
    description: 'WiIVM',
    head: {
      titleTemplate: 'WiIVM',
      meta: [
        { name: 'description', content: 'WiIVM' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'WiIVM' },
        { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'WiIVM' },
        { property: 'og:description', content: 'WiIVM' },
        { property: 'og:card', content: '' },
        { property: 'og:site', content: '' },
        { property: 'og:creator', content: '' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },
}, environment);
