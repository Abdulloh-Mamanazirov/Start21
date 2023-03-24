import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        // Navbar
        Nav_Home_Link: "Home",
        Nav_About_Link: "Courses",
        Nav_Contact_Link: "Contact",
        Nav_News_Link: "News",
        Nav_Register_Link: "Register",
        // Home
        Years: "7 Years Complete",
        WhyHeader: `Why to learn `,
        English: "English",
        EnglishEnding: "with us?",
        WhyText: `Our classes are fun, effective and affordable. As we employ just the most efficient teachers from all around, you will learn well and fast. With up-to-date methodology and highly qualified teachers we can help you achieve your language goals.`,
        CreativeTeachers:"Creative teachers",
        HighScores:"High IELTS scores",
        EnglishEnvironment:"English Environment",
        // Teachers
        TeamText:"Our ",
        TeamTextEnd:"Team",
        TeacherExperience: "years experience",
        // Courses
        CourseHeader:"Courses",
        // News
        PostedDate:"Posted on :",
        NewsHeader:"Top",
        NewsHeaderEnd:"News",
        NewsText:"Opening ceremony of a new branch",
        NewsText2:"Start21 league is about to begin",
        NewsLink:"Read more",
        // Results
        OurStudents:"Our Students' ",
        OurStudentsResults:"Results",
        IeltsScore:"IELTS score ",
        // Contact
        locations:"Locations ",
        seeMaps:"See in Maps",
        contactText:"Contact",
        contactTextEnd:"Info",
        // Register
        RegisterHeader:"Register to our ",
        RegisterHeaderEnd:"Courses",
        RegisterText:"Fill the required fields below. We will contact you as soon as possible and answer your questions. Thank you."
      },
    },
    uz: {
      translation: {
        // Navbar
        Nav_Home_Link: "Bosh Sahifa",
        Nav_About_Link: "Kurslar",
        Nav_Contact_Link: "Bog'lanish",
        Nav_News_Link: "Yangiliklar",
        Nav_Register_Link: "Ro'yxatdan o'tish",
        // Home
        Years: "7 Yil Siz Bilan",
        WhyHeader: `Nima uchun `,
        English: "Ingliz",
        EnglishEnding: "tilini biz bilan o'rganishingiz kerak?",
        WhyText:
          "Darslarimiz qiziqarli, foydali va hamyonbop. Biz har tomondan eng samarali o'qituvchilarni ish bilan ta'minlaganimiz uchun, siz darslarni tez va yaxshi o'zlashtirasiz. Zamonaviy uslublar va yuqori malakali o'qituvchilar bilan biz sizga o'z maqsadlaringizga erishishingizga yordam bera olamiz.",
        CreativeTeachers:"Yaratuvchan o'qituvchilar",  
        HighScores:"Yuqori IELTS natijalar",
        EnglishEnvironment:"Ingliz tilidagi muhit",
        // Teachers
        TeamText:"Bizning ",
        TeamTextEnd:"Jamoa",
        TeacherExperience: "yillik tajriba",
        // Courses
        CourseHeader:"Kurslar",
        // News
        PostedDate:"Chop etilgan sana :",
        NewsHeader:"So'nggi",
        NewsHeaderEnd:"Yangiliklar",
        NewsText:"Yangi filialimizning ochilish marosimi",
        NewsText2:"Start21 liga boshlanish arafasida",
        NewsLink:"Batafsil",
        // Results
        OurStudents:"O'quvchilarimizning ",
        OurStudentsResults:"Natijalari",
        IeltsScore:"IELTS natijalar ",
        // Contact
        locations:"Manzillarimiz ",
        seeMaps:"Xaritada ko'rish",
        contactText:"Bog'lanish",
        contactTextEnd:"Usullari",
        // Register
        RegisterHeader:"ro'yxatdan o'ting",
        RegisterHeaderEnd:"Kurslarimizga",
        RegisterText:"Telefon raqamingizni qoldiring, biz sizga qo'ng'iroq qilamiz va birorta ham savolingizni javobsiz qoldirmaslikga harakat qilamiz."
      },
    },
  },
});

export default i18n;
