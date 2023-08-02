import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "uz",
  lng: "uz",
  resources: {
    en: {
      translation: {
        website_title: "Learning Center",
        // Navbar
        Nav_Home_Link: "Home",
        Nav_About_Link: "About",
        Nav_Contact_Link: "Contact",
        Nav_News_Link: "News",
        Nav_Register_Link: "Register",
        // Home
        Years: "7 Years Complete",
        RegisterLinkBtn: "Register Now",
        // Why
        WhyHeader: `Why to learn `,
        English: "English ",
        EnglishEnding: "with us?",
        WhyText: `Our classes are fun, effective and affordable. As we employ just the most efficient teachers from all around, you will learn well and fast. With up-to-date methodology and highly qualified teachers we can help you achieve your language goals.`,
        CreativeTeachers: "Creative teachers",
        HighScores: "High IELTS scores",
        EnglishEnvironment: "Real English Environment",
        // Teachers
        TeamText: "Our ",
        TeamTextEnd: "Team",
        TeacherExperience: "years experience",
        // About
        AboutText:
          "Start21 is an English study center that was established in 2015 with the mission of providing high-quality language education to learners of all ages and levels. Since then, over 2000 students have studied at Start21 and improved their English skills in various areas such as speaking, writing, listening and reading. Start21 began with one branch in Namangan city, but due to its popularity and success, it has expanded to six branches across the city. Start21 offers a variety of courses and programs to suit the needs and goals of each student, such as general English, kids English, IELTS and CEFR  exam preparation, Russian classes and more. Start21 also has a team of qualified and experienced teachers who are passionate about teaching and helping students achieve their full potential. Start21 is more than just a study center, it is a community of learners who share a common interest in learning English and exploring new cultures and opportunities.",
        CourseHeader: "Courses",
        // News
        PostedDate: "Posted on :",
        NewsHeader: "Top",
        NewsHeaderEnd: "News",
        NewsNovdaSchool: "Novda School",
        NewsStartLeague: "Start21 league is about to begin",
        NewsBrainTrain: "The first season of Brain Train is about to begin",
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
        website_title: "O'quv Markazi",
        // Navbar
        Nav_Home_Link: "Bosh Sahifa",
        Nav_About_Link: "Biz Haqimizda",
        Nav_Contact_Link: "Bog'lanish",
        Nav_News_Link: "Yangiliklar",
        Nav_Register_Link: "Ro'yxatdan o'tish",
        // Home
        Years: "7 Yil Siz Bilan",
        RegisterLinkBtn: "Ro'yxatdan o'ting",
        // Why
        WhyHeader: `Nima uchun `,
        English: "Ingliz ",
        EnglishEnding: "tilini biz bilan o'rganishingiz kerak?",
        WhyText:
          "Darslarimiz qiziqarli, foydali va hamyonbop. Biz har tomondan eng samarali o'qituvchilarni ish bilan ta'minlaganimiz uchun, siz darslarni tez va yaxshi o'zlashtirasiz. Zamonaviy uslublar va yuqori malakali o'qituvchilar bilan biz sizga o'z maqsadlaringizga erishishingizga yordam bera olamiz.",
        CreativeTeachers: "Tajribali o'qituvchilar",
        HighScores: "Yuqori IELTS natijalar",
        EnglishEnvironment: "Haqiqiy Ingliz tili muhiti",
        // Teachers
        TeamText: "Bizning ",
        TeamTextEnd: "Jamoa",
        TeacherExperience: "yillik tajriba",
        // About
        AboutText:
          "Start21 is an English study center that was established in 2015 with the mission of providing high-quality language education to learners of all ages and levels. Since then, over 2000 students have studied at Start21 and improved their English skills in various areas such as speaking, writing, listening and reading. Start21 began with one branch in Namangan city, but due to its popularity and success, it has expanded to six branches across the city. Start21 offers a variety of courses and programs to suit the needs and goals of each student, such as general English, kids English, IELTS and CEFR  exam preparation, Russian classes and more. Start21 also has a team of qualified and experienced teachers who are passionate about teaching and helping students achieve their full potential. Start21 is more than just a study center, it is a community of learners who share a common interest in learning English and exploring new cultures and opportunities.",
        CourseHeader: "Kurslar",
        // News
        PostedDate: "Chop etilgan sana :",
        NewsHeader: "So'nggi",
        NewsHeaderEnd: "Yangiliklar",
        NewsNovdaSchool: "Novda School",
        NewsStartLeague: "Start21 liga boshlanish arafasida",
        NewsBrainTrain:
          "Brain Train musobaqasining birinchi mavsumi boshlanish arafasida",
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
          "Ma'lumotlaringizni qoldiring, biz siz bilan aloqaga chiqamiz va agarda savollaringiz bo'lsa barchasiga javob berishga harakat qilamiz. Rahmat.",
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
        website_title: "Учебный центр",
        // Navbar
        Nav_Home_Link: "Главная страница",
        Nav_About_Link: "О нас",
        Nav_Contact_Link: "Связаться с нами",
        Nav_News_Link: "Новости",
        Nav_Register_Link: "Зарегистрироваться",
        // Home
        Years: "С тобой 7 лет",
        RegisterLinkBtn: "Зарегистрироваться",
        // Why
        WhyHeader: `Почему вам стоит учить `,
        English: "Aнглийский  ",
        EnglishEnding: "с нами?",
        WhyText:
          "Наши занятия веселые, полезные и доступные. Поскольку у нас работают самые эффективные преподаватели со всего мира, вы быстро и хорошо освоите уроки. Благодаря современным методикам и высококвалифицированным преподавателям мы можем помочь вам в достижении ваших целей.",
        CreativeTeachers: "Креативные учителя",
        HighScores: "Высокие результаты IELTS",
        EnglishEnvironment: "Реальная Aнглийская среда",
        // Teachers
        TeamText: "Наша ",
        TeamTextEnd: "Команда",
        TeacherExperience: "лет опыта",
        // About
        AboutText:
          "Start21 - это центр изучения английского языка, который был основан в 2015 году с целью предоставления высококачественного языкового образования учащимся всех возрастов и уровней. С тех пор более 2000 студентов прошли обучение в Start21 и улучшили свои знания английского языка в различных областях, таких как говорение, письмо, аудирование и чтение. Start21 начинался с одного филиала в городе Наманган, но благодаря своей популярности и успеху он расширился до шести филиалов по всему городу. Start21 предлагает различные курсы и программы в соответствии с потребностями и целями каждого студента, такие как общий английский, детский английский, подготовка к экзаменам IELTS и CEFR, занятия по русскому языку и многое другое. Start21 также имеет команду квалифицированных и опытных учителей, которые увлечены преподаванием и помогают студентам полностью раскрыть свой потенциал. Start21 - это больше, чем просто учебный центр, это сообщество учащихся, которые разделяют общий интерес к изучению английского языка и изучению новых культур и возможностей.",
        CourseHeader: "Курсы",
        // News
        PostedDate: "Дата публикации:",
        NewsHeader: "Последний",
        NewsHeaderEnd: "Новости",
        NewsNovdaSchool: "Novda School",
        NewsStartLeague: "Старт лиги Start21 вот-вот начнется",
        NewsBrainTrain: "Brain Train вот-вот начнется",
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
