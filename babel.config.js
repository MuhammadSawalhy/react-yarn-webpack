// `=== "development"` not `!== "production"`
// because when testing we don't need the dev stuff
// it has to be set explicitly to "development"
// const isDev = process.env.BABLE_ENV === "development";

function getPathResolverConfig() {
  const config = require("./jsconfig.json").compilerOptions;
  const alias = Object.entries(config.paths).reduce((acc, [key, value]) => {
    acc[key.slice(0, -2)] = value[0].slice(0, -2);
    return acc;
  }, {});
  return { alias, root: config.baseUrl };
}

module.exports = {
  presets: [
    // prettier-ignore
    ["@babel/env", {
        modules: false,
        shippedProposals: true,
        loose: true
    }],
    "@babel/react"
  ],
  plugins: [
    "@babel/syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    "react-hot-loader/babel",
    ["babel-plugin-module-resolver", getPathResolverConfig()]
  ].filter(Boolean)
};
