const path = require('path')
module.exports = {
  entry: './client/src/app.js',
  output: {
    path: path.join(__dirname, 'client', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client', 'public'),
    proxy: {
        '/': 'http://localhost:5000'
      }
  }
}