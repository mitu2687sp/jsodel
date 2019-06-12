module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/index.js'], // polyfill はIE11などで必要
  output: {
    path: `${__dirname}`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};