import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const { t, i18n } = useTranslation();

  const getTranslatedLanguage = useCallback((lng) => {
    if (lng === "ar") return t("ar");
    if (lng === "en") return t("en");
  }, []);

  return (
    <h3 style={{ direction: i18n.dir() }}>
      {t("The language is")}: {getTranslatedLanguage(i18n.language)}
      <button
        disabled={i18n.language === "ar"}
        style={{ marginInline: "0.5em" }}
        onClick={() => i18n.changeLanguage("ar")}
      >
        Ar
      </button>
      <button
        disabled={i18n.language === "en"}
        onClick={() => i18n.changeLanguage("en")}
      >
        En
      </button>
    </h3>
  );
}

export default Language;
