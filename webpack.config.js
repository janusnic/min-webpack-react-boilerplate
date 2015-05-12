var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    build: './lib/boot/',
    tests: './test/tests.js'
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /build/
        ],
        loader: "eslint-loader"
      },
      {
        test:   /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!cssnext-loader")
      },
      {
        test: /\.test\/tests.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'mocha-loader']
      },
    ]
  },
  eslint: {
    failOnError: true,
    configFile: '.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
