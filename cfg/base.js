'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
let npmBase = path.join(__dirname, '../node_modules');
let additionalPaths = [ path.join(npmBase, 'rctui') ];
// let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api1': {
        target: 'http://10.2.114.30:6000/',
        pathRewrite: { '^/api': '' },
        secure: false
      }
    },
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      libs: `${defaultSettings.srcPath}/libs/`,
      sources: `${defaultSettings.srcPath}/sources/`,
     'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};
