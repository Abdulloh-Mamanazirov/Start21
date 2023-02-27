import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        Nav_Home_Link: "Home",
      },
    },
    uz: {
      translation: {
        Nav_Home_Link: "Bosh Sahifa",
      },
    },
  },
});

export default i18n