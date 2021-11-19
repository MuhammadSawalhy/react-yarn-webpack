import i18n from "./i18next.js";
import { useTranslation } from "react-i18next";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  i18n,
  defaultLocal: "en",
  locales: {
    en: { title: "English", left: "🇺🇸" },
    ar: { title: "Arabic", left: "🇸🇦" }
  }
};

export const decorators = [
  (Story) => {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();
    return <Story />;
  }
];
