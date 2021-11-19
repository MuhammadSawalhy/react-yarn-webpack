import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import localeData from "dayjs/plugin/localeData";
import dayjs from "dayjs";
import "dayjs/locale/ar";
import "dayjs/locale/en";

import { initReactI18next } from "react-i18next";
import ar from "./locales/ar/translation.json";

dayjs.extend(localeData);

i18next.use(LanguageDetector).use(initReactI18next);

const arnums = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
function arabicNumbers(text) {
  return text.replace(/\d/g, (num) => arnums[num]);
}

export function init(extendOptions) {
  // for all options read: https://www.i18next.com/overview/configuration-options
  let options = {
    fallbackLng: "en",
    debug: false,
    locales: ["ar", "en"],
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      alwaysFormat: true,
      format: (value, format, lng) => {
        if (value instanceof Date) {
          const f = dayjs.localeData().longDateFormat(format ?? "LL");
          const formatedDate = dayjs(value).format(f);
          return lng === "ar" ? arabicNumbers(formatedDate) : formatedDate;
        }
        return value;
      }
    }
  };

  if (extendOptions) options = extendOptions(options);
  i18next.init(options);
  // i18next.addResourceBundle("en", "translation", en, true, true);
  i18next.addResourceBundle("ar", "translation", ar, true, true);
  i18next.on("languageChanged", function (lng) {
    dayjs.locale(lng);
  });
  return i18next;
}

export default i18next;
