import React from "react";
import { Chip } from "@mui/material";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import NewsSlider from "../Components/News";
import Teachers from "../Components/Teachers";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t,i18n} = useTranslation()

  function handleChangleLang(e) {
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <div className="homebg text-white pt-4">
      <Navbar />
      <select className="navSelect text-white border rounded-full p-1 text-[17px] border-white bg-transparent" onChange={handleChangleLang}>
              <option className="text-black" value="en">English</option>
              <option className="text-black" value="uz">O'zbek</option>
              <option className="text-black" value="">Pусский</option>
            </select>
      <div className="container w-10/12 mx-auto">
        <header className=" py-5 flex items-center">
          <div className="headerTxt w-1/2 ">
            <Chip
              sx={{ color: "#dcdcdc", fontWeight: "bolder" }}
              label={t("Years")}
              variant="outlined"
            />
            <h1 className="start21Txt text-9xl font-bold py-5">
              START <span className="text-red-600">21</span>
            </h1>
            <p className="text-4xl headerText">
              Study <span className="text-red-500">Smarter</span>, Not Harder!
            </p>
          </div>
          <div className="headerImg w-1/2">
            <img className="w-full" src="/vite.svg" alt="image" />
          </div>
        </header>
        <section>
          <h2 className="whyHeader text-center text-[50px] font-bold py-10">
            {t("WhyHeader")}<span className="text-red-500">{t("English ")}</span>{t("EnglishEnding")}
          </h2>
          <p className="whyTxt text-center text-[21px] w-10/12 mx-auto">
            {t("WhyText")}
          </p>
          <div className="whyCards flex items-center justify-evenly py-16 text-xl">
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60">
              <i className="fa-2xl fa-solid fa-chalkboard-user"></i>
              {t("CreativeTeachers")}
            </span>
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60">
              <i className="fa-2xl fa-solid fa-award"></i>
              {t("HighScores")}
            </span>
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60">
              <i className="fa-2xl fa-solid fa-globe"></i>
              {t("EnglishEnvironment")}
            </span>
          </div>
        </section>
        <section className="team py-7">
          <h2 className="teamHeader text-center text-[50px] font-bold py-10">
            {t("TeamText")} <span className="text-red-500">{t("TeamTextEnd")}</span>
          </h2>
          <Teachers />
        </section>
        <section className="topNews py-7">
          <h2 className="newsHeader text-center text-[50px] font-bold py-10">
            {t("NewsHeader")} <span className="text-red-500">{t("NewsHeaderEnd")}</span>
          </h2>
          <NewsSlider />
        </section>
        <section className="resultsCount pb-7">
          <h2 className="resultsHeader text-center text-[50px] font-bold py-10">
            {t("OurStudents")} <span className="text-red-500">{t("OurStudentsResults")}</span>
          </h2>
          <div className="resultsWrapper flex items-center justify-around">
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={21} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">{t("IeltsScore")} 8+</p>
            </span>
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={117} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">{t("IeltsScore")} 7+</p>
            </span>
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={220} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">{t("IeltsScore")} 6+</p>
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
