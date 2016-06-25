'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  color: true,
  progress: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Server started at localhost:3000');
  });