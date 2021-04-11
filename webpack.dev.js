const webpack = require("webpack");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/"
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
