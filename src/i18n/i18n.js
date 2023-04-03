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
        // Why
        WhyHeader: `Why to learn `,
        English: "English ",
        EnglishEnding: "with us?",
        RegisterLinkBtn: "Register Now",
        WhyText: `Our classes are fun, effective and affordable. As we employ just the most efficient teachers from all around, you will learn well and fast. With up-to-date methodology and highly qualified teachers we can help you achieve your language goals.`,
        CreativeTeachers: "Creative teachers",
        HighScores: "High IELTS scores",
        EnglishEnvironment: "Real English Environment",
        // Teachers
        TeamText: "Our ",
        TeamTextEnd: "Team",
        TeacherExperience: "years experience",
        // Courses
        CourseHeader: "Courses",
        // News
        PostedDate: "Posted on :",
        NewsHeader: "Top",
        NewsHeaderEnd: "News",
        NewsText: "Opening ceremony of a new branch",
        NewsText2: "Start21 league is about to begin",
        NewsLink: "Read more",
        // Results
        OurStudents: "Our Students' ",
        OurStudentsResults: "Results",
        IeltsScore: "IELTS score ",
        // Contact
        locations: "Locations:",
        seeMaps: "See in Maps",
        contactText: "Contact",
        contactTextEnd: "Us:",
        // Register
        RegisterHeader: "Register to our ",
        RegisterHeaderEnd: "Courses",
        RegisterText:
          "Fill the required fields below. We will contact you as soon as possible and answer your questions. Thank you.",
        RegisterInputPlaceholder: "Full Name",
        RegisterSelectCourse: "Select a course",
        RegisterSubmitBtn: "Submit",
        // Toast
        toastNameErr: "Please, enter your name!",
        toastPhoneErr: "Please, enter your phone number correctly!",
        toastCourseErr: "Please, select a course!",
        toastRegistered: "Registered Successfully! We will contact you soon.",
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
        // Why
        WhyHeader: `Nima uchun `,
        English: "Ingliz ",
        EnglishEnding: "tilini biz bilan o'rganishingiz kerak?",
        RegisterLinkBtn: "Ro'yxatdan o'ting",
        WhyText:
          "Darslarimiz qiziqarli, foydali va hamyonbop. Biz har tomondan eng samarali o'qituvchilarni ish bilan ta'minlaganimiz uchun, siz darslarni tez va yaxshi o'zlashtirasiz. Zamonaviy uslublar va yuqori malakali o'qituvchilar bilan biz sizga o'z maqsadlaringizga erishishingizga yordam bera olamiz.",
        CreativeTeachers: "Yaratuvchan o'qituvchilar",
        HighScores: "Yuqori IELTS natijalar",
        EnglishEnvironment: "Haqiqiy Ingliz tili muhiti",
        // Teachers
        TeamText: "Bizning ",
        TeamTextEnd: "Jamoa",
        TeacherExperience: "yillik tajriba",
        // Courses
        CourseHeader: "Kurslar",
        // News
        PostedDate: "Chop etilgan sana :",
        NewsHeader: "So'nggi",
        NewsHeaderEnd: "Yangiliklar",
        NewsText: "Yangi filialimizning ochilish marosimi",
        NewsText2: "Start21 liga boshlanish arafasida",
        NewsLink: "Batafsil",
        // Results
        OurStudents: "O'quvchilarimizning ",
        OurStudentsResults: "Natijalari",
        IeltsScore: "IELTS natijalar ",
        // Contact
        locations: "Manzillarimiz:",
        seeMaps: "Xaritada ko'rish",
        contactText: "Biz bilan",
        contactTextEnd: "bog'laning :",
        // Register
        RegisterHeader: "Ro'yxatdan O'ting",
        RegisterHeaderEnd: "Kurslarimizga",
        RegisterText:
          "Ma'lumotlaringizni qoldiring, biz bilan aloqaga chiqamiz va agarda savollaringiz bo'lsa barchasiga javob berishga harakat qilamiz. Rahmat.",
        RegisterInputPlaceholder: "To'liq Ismingiz",
        RegisterSelectCourse: "Kurs tanlang",
        RegisterSubmitBtn: "Yuborish",
        // Toast
        toastNameErr: "Iltimos, ismingizni kiriting!",
        toastPhoneErr: "Iltimos, telefon raqamingizni tekshiring!",
        toastCourseErr: "Iltimos, kurs tanlang!",
        toastRegistered:
          "Muvaffaqqiyatli ro'yxatdan o'tildi! Tez orada siz bilan aloqaga chiqamiz.",
      },
    },
    ru: {
      translation: {
        // Navbar
        Nav_Home_Link: "Главная страница",
        Nav_About_Link: "Курсы",
        Nav_Contact_Link: "Связаться с нами",
        Nav_News_Link: "Новости",
        Nav_Register_Link: "Зарегистрироваться",
        // Home
        Years: "С тобой 7 лет",
        // Why
        WhyHeader: `Почему вам стоит учить `,
        English: "Aнглийский  ",
        EnglishEnding: "с нами?",
        RegisterLinkBtn: "Зарегистрироваться сейчас",
        WhyText:
          "Наши занятия веселые, полезные и доступные. Поскольку у нас работают самые эффективные преподаватели со всего мира, вы быстро и хорошо освоите уроки. Благодаря современным методикам и высококвалифицированным преподавателям мы можем помочь вам в достижении ваших целей.",
        CreativeTeachers: "Креативные учителя",
        HighScores: "Высокие результаты IELTS",
        EnglishEnvironment: "Реальная Aнглийская среда",
        // Teachers
        TeamText: "Наша ",
        TeamTextEnd: "Команда",
        TeacherExperience: "лет опыта",
        // Courses
        CourseHeader: "Курсы",
        // News
        PostedDate: "Дата публикации:",
        NewsHeader: "Последний",
        NewsHeaderEnd: "Новости",
        NewsText: "Торжественное открытие нашего нового филиала",
        NewsText2: "Старт лиги Start21 вот-вот начнется",
        NewsLink: "Читать далее",
        // Results
        OurStudents: "Результаты ",
        OurStudentsResults: "Hаших учеников",
        IeltsScore: "Pезультатов IELTS ",
        // Contact
        locations: "Наши адреса:",
        seeMaps: "Посмотреть на карте",
        contactText: "Связаться ",
        contactTextEnd: "с нами :",
        // Register
        RegisterHeader: "Зарегистрируйтесь ",
        RegisterHeaderEnd: "на наши курсы",
        RegisterText:
          "Оставьте свои данные, мы свяжемся с вами и если у вас возникнут вопросы, постараемся на них ответить. Спасибо.",
        RegisterInputPlaceholder: "Ваше полное имя",
        RegisterSelectCourse: "Выбрать курс",
        RegisterSubmitBtn: "Отправлять",
        // Toast
        toastNameErr: "Пожалуйста, введите Ваше имя!",
        toastPhoneErr: "Пожалуйста, проверьте свой номер телефона!",
        toastCourseErr: "Пожалуйста, выберите курс!",
        toastRegistered:
          "Успешно зарегистрирован! Мы свяжемся с вами в ближайшее время.",
      },
    },
  },
});

export default i18n;
