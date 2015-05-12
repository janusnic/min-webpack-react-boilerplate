module.exports = {
  entry: './test/test.js',
  output: {
    filename: './test/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.test\/test.js$/,
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
  }
};
