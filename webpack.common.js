/**
 * details:
 * 1. CssExtractPlugin is seperated due to contenthash in the name
 * 2. Here is the Html Plugin, names are the same in both stages
 */
const path = require('path');
// minification will be set at webpack.prod.config;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['app'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
};

let htmlMinifyOption = {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true,
};

process.env.NODE_ENV === 'production' &&
  (exports.plugins[0].minify = htmlMinifyOption);

