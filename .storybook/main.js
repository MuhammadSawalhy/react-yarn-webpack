const path = require("path");
const myRules = require("../webpack.rules.js")();

module.exports = {
  core: { builder: "webpack5" },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-react-i18next"
  ],
  webpackFinal: (config) => {
    function removeDefaultLoaders() {
      config.module.rules = config.module.rules.map((rule) => {
        // remove svg from existing rule
        if (rule.test.test("name.svg"))
          return {
            ...rule,
            test: new RegExp(
              rule.test.source
                .replace("(svg|", "(")
                .replace("|svg)", ")")
                .replace("|svg|", "|")
            )
          };
        else if (rule.test.source === "\\.css$") return myRules.sassCss;

        return rule;
      });
    }

    const aliases = require("../jsconfig.json").compilerOptions.paths;
    const resolverAliases = Object.entries(aliases).reduce(
      (aliasesAcc, jsConfigAlias) => {
        const alias = jsConfigAlias[0].slice(0, -2); // remove "/*" at the end
        const value = jsConfigAlias[1][0].slice(0, -2);
        aliasesAcc[alias] = path.resolve(__dirname, "../", value);
        return aliasesAcc;
      },
      {}
    );

    removeDefaultLoaders();
    config.module.rules.push(myRules.svg);
    // use the site theme in "storybook"
    // config.entry.push(path.resolve(__dirname, "../src/style/theme-root.scss"));
    config.resolve = config.resolve || {};
    config.resolve.alias = resolverAliases;
    return config;
  }
};
