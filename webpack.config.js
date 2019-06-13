const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/index.js'], // polyfill はIE11などで必要
  output: {
    path: `${__dirname}`,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'jsodel',
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
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  externals: [
    {
      axios : true,
    }
  ]
};