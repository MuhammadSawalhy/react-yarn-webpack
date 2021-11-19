module.exports = {
  locales: ["en", "ar"],
  input: "src/**/*.{js,jsx}",
  output: "src/i18n/locales/$LOCALE/$NAMESPACE.json",
  // keepRemoved: true,
  lexers: {
    js: ["JsxLexer"]
  }
};
