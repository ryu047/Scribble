var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './js/app.js' // Appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.less/, loader: 'style!css-loader!less-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
