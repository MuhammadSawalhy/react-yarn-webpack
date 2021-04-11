module.exports = {
  presets: [["@babel/env", { modules: false }], "@babel/react"],
  plugins: [
    "@babel/syntax-dynamic-import",
    "@babel/proposal-class-properties",
    "react-hot-loader/babel"
  ]
};
