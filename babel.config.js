module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        shippedProposals: true
      }
    ],
    "@babel/react"
  ],
  plugins: ["@babel/syntax-dynamic-import", "react-hot-loader/babel"]
};
