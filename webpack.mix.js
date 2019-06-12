const path = require('path')
const mix = require('laravel-mix')

mix
  .js('src/index.js', 'public/build')
    .disableNotifications()

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': path.join(__dirname, './src')
    }
  },
})

