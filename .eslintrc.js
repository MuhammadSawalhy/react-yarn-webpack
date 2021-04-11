module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended"],
  rules: {},
  overrides: [
    {
      files: ["./src/**/*.js"],
      extends: ["eslint:recommended", "plugin:react/recommended"],
      plugins: ["react"],
      env: {
        browser: true,
        es2021: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
      }
    }
  ]
};
