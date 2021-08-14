# react-yarn-webpack

A template to get start coding quickly. Use react front-end framework with the very powerful yet difficult to configure bundler, webpack. Yarn@berry is more powerful than npm, because of the cache system and meaningful colored logs.

## Scripts

```bash
> yarn dev        # start webpack server
> yarn prod       # build in production mode
> yarn storybook  # start-storybook
```

## Notes

### CSS modules

We are using webpack@5 as the bundler for this project, the SCSS-CSS loader is by default enables what so called ***CSS modules***. For example I use a CSS module for the [Button component](https://github.com/scicave/ta3alom-frontend/tree/main/src/components/Button). The reason to notice this type of CSS file, the CSS modules, is to make the somponent classes scoped only to the Button and not to the global scope (the whole page). This reduces the unexpected errors and *"Why it is not working?!"*. The second reason is that it is cool ✨️.

The SCSS-CSS loader is use for storybook as well to make the system coherent.

### Git hooks

One of the reason to use git hooks in this project is that we are using hooks in React as well :D

Git hooks are hooked using *husky*. When you `git commit`, the *pre-commit* hook will start its job to *prettier* the stuff you made, *eslint* them as well, using *lint-staged*.

~~~
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
~~~~

## License

MIT
