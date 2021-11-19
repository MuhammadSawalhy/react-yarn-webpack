# react-yarn-webpack

A template to get start coding quickly. Use react front-end framework with the very powerful yet difficult to configure bundler, webpack. Yarn@berry is more powerful than npm, because of the cache system and meaningful colored logs.

## Features

1. 🚀 Ready to use with the boring stuff setup for you
2. 📦 Minimal **webpack** configuration
3. 📖 Storybook
4. 🌐 Internationalization with **react-i18next**
5. 🔍 Linting with **eslint** and **stylelint**
6. ✨️ Formatting with **prettier**
7. 🎣 Git hooks to run 4 and 5 features in each commit
8. 🏗️ Github action to run feature 4
9. 😁 Easy import with `import Button from "_components/Button"` instead of `import Button from "../../../components/Button"`

## Scripts

| command          | description                                                |
| ---------------- | ---------------------------------------------------------- |
| `yarn dev`       | start webpack server                                       |
| `yarn prod`      | build in production mode                                   |
| `yarn analyze`   | analyze your production bundle and get packages statistics |
| `yarn lint`      | eslint                                                     |
| `yarn slint`     | stylelint                                                  |
| `yarn format`    | prettier                                                   |
| `yarn storybook` | start-storybook                                            |

## CSS modules

We are using webpack@5 as the bundler for this project, the SCSS-CSS loader is by default enables what so called **_CSS modules_**. For example I use a CSS module for the [Button component](https://github.com/scicave/ta3alom-frontend/tree/main/src/components/Button). The reason to notice this type of CSS file, the CSS modules, is to make the somponent classes scoped only to the Button and not to the global scope (the whole page). This reduces the unexpected errors and _"Why it is not working?!"_. The second reason is that it is cool ✨️.

## Git hooks

One of the reason to use git hooks in this project is that we are using hooks in React as well :D

Git hooks are hooked using _husky_. When you `git commit`, the _pre-commit_ hook will start its job to _prettier_ the stuff you made, _eslint_ them as well, using _lint-staged_.

```
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
```

## Storybook 📖

In order to make all these gears engage together

1. some customized **webpack** configs are used for **storybook**, e.g., SCSS-CSS loader.
2. I am using the same **i18next** config for **storybook**.

## Use me as a subdirectory in a repo

### git hooks

You need to customize git hooks config to match your desires.

1. your `./git-hooks/pre-commit`

```bash
#!/bin/sh
cd path/to/frontend
# ...
```

2. postintall script

```bash
"postintall": "git config --local core.hooksPath path/to/frontend/.git-hooks || echo \"failed to hook the git hooks\"",
```

## License

MIT
