const myWBconfig = require("../webpack.dev.js");

module.exports = {
  core: { builder: "webpack5" },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    // use my loader for css not the storybook css loader
    // console.log(
    //   JSON.stringify(
    //     config.module.rules.filter((r) => r.test.source === "\\.css$"),
    //     null,
    //     2
    //   )
    // );
    // process.exit();
    config.module.rules = config.module.rules.filter(
      (r) => r.test.source !== "\\.css$"
    );
    mySassCssLoader = myWBconfig.module.rules.find(
      (r) => r.test.source === "\\.(s[ca]ss|css)$"
    );
    config.module.rules.push(mySassCssLoader);
    return config;
  }
};
