const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'webpack.css' }),
    new Visualizer({
      filename: './webpack.html'
    })
  ],
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  }
};
