const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  mode: 'development'
}