var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DefineEnvironment = new webpack.DefinePlugin({
  IsDevelopment: JSON.stringify(JSON.parse(process.env.DEV || 'false'))
});

module.exports = {
  entry: './lib/boot/index.js',
  output: {
    filename: './build/build.js'
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
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  eslint: {
    failOnError: true,
    configFile: '.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin("./build/build.css"),
    DefineEnvironment
  ]
};
