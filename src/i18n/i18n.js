import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        Nav_Home_Link: "Home",
        Nav_About_Link: "About",
        Nav_Contact_Link: "Contact",
        Nav_News_Link: "News",
        Nav_Register_Link: "Register",
        Years: "7 Years Complete",
        WhyHeader: `Why to learn <span className="text-red-500">English</span> with us?`,
        WhyText: `Our classes are fun, effective and affordable. As we employ just the most efficient teachers from all around, you will learn well and fast. With up-to-date methodology and highly qualified teachers we can help you achieve your language goals.`,
      TeacherExperience:"years experience",
      },
    },
    uz: {
      translation: {
        Nav_Home_Link: "Bosh Sahifa",
        Nav_About_Link: "Biz Haqimizda",
        Nav_Contact_Link: "Bizga Bog'laning",
        Nav_News_Link: "Yangiliklar",
        Nav_Register_Link: "Ro'yxatdan o'tish",
        Years: "7 yil siz bilan",
        WhyHeader: `Nima uchun Ingliz tilini biz bilan o'rganishingiz kerak`,
        WhyText:
          "Darslarimiz qiziqarli, foydali va hamyonbop. Biz har tomondan eng samarali o'qituvchilarni ish bilan ta'minlaganimiz uchun, siz darslarni tez va yaxshi o'zlashtirasiz. Zamonaviy uslublar va yuqori malakali o'qituvchilar bilan biz sizga o'z maqsadlaringizga erishishingizga yordam bera olamiz.",
        TeacherExperience:"yillik tajriba",
      },
    },
  },
});

export default i18n;
