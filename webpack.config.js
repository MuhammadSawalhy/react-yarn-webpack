const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const getModuleRules = require("./webpack.rules.js");

require("dotenv").config();

process.env.NODE_ENV =
  process.env.NODE_ENV ||
  process.argv.find((_, index) => process.argv[index - 1] === "--mode") ||
  "development";
process.env.BABEL_ENV = process.env.NODE_ENV;
process.env.PUBLIC_URL = process.env.PUBLIC_URL || "/";
process.env.BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV !== "production";
const contenthash = isProd ? ".[contenthash]" : "";
const rules = Object.values(getModuleRules({ isDev }));

const env = {
  NODE_ENV: process.env.NODE_ENV,
  PUBLIC_URL: process.env.PUBLIC_URL.slice(0, -1),
  BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8000"
};

const jsConfigAliases = require("./jsconfig.json").compilerOptions.paths;
const resolverAliases = Object.entries(jsConfigAliases).reduce(
  (aliases, jsConfigAlias) => {
    const alias = jsConfigAlias[0].slice(0, -2); // remove "/*" at the end
    const value = jsConfigAlias[1][0].slice(0, -2);
    aliases[alias] = path.resolve(__dirname, value);
    return aliases;
  },
  {}
);

module.exports = {
  devtool: !isProd && "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: process.env.PUBLIC_URL,
    filename: `[name]${contenthash}.bundle.js`,
    clean: { keep: /fonts/ }
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: process.env.PUBLIC_URL,
      templateParameters: env,
      minify: isProd && {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.EnvironmentPlugin(Object.keys(env)),
    isProd &&
      new MiniCssExtractPlugin({ filename: `[name]${contenthash}.css` }),
    isProd &&
      new CopyPlugin({
        patterns: [{ from: "public", filter: (f) => !/index\.html$/.test(f) }]
      })
  ].filter(Boolean),
  resolve: {
    alias: {
      ...resolverAliases,
      "react-dom": isDev ? "@hot-loader/react-dom" : "react-dom"
    }
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin()
    ]
  }
};
