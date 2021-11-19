import { init } from "../src/i18n";

const i18n = init((options) => ({
  ...options,
  react: { useSuspense: false }
}));

export default i18n;
