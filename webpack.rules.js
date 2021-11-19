const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ isDev = true } = {}) => ({
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
      // See https://github.com/facebook/create-react-app/issues/6846
      // for context on why cacheCompression is disabled
      cacheCompression: false,
      compact: !isDev
    }
  },
  sassCss: {
    test: /\.(s[ca]ss|css)$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 3. Extract css into files
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            localIdentName: "[local]-[hash:base64:6]"
          }
        }
      }, // 2. Turns css into commonjs
      "sass-loader" //1. Turns sass into css
    ]
  },
  files: {
    test: /\.(png|jpg|gif)$/,
    type: "asset/resource"
  },
  svg: {
    test: /\.svg$/,
    use: [
      "babel-loader",
      {
        loader: "react-svg-loader",
        options: { jsx: true }
      }
    ]
  }
});
