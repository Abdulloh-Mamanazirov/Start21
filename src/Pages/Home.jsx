import React, { useRef, useState } from "react";
import { Chip, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import NewsSlider from "../Components/News";
import Teachers from "../Components/Teachers";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Home = () => {
  const { t } = useTranslation();
  let courseSelect = useRef("");

  const [data, setData] = useState({
    name: "",
    phone: "+998",
    course: "",
  });
  const [loading, setLoading] = useState(false)

  // Register
  function handleInputChange(e) {
    setData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    if (data.name === "" || data.name === " ")
      return toast(t("toastNameErr"), { type: "error" });
    if (data.phone === "" || data.phone === " " || data.phone.length <= 12)
      return toast(t("toastPhoneErr"), { type: "error" });
    if (
      data.course === "none" ||
      data.course === "" ||
      data.course === undefined
    )
      return toast(t("toastCourseErr"), { type: "error" });
    let response = await axios
      .post("/register", data)
      .catch((err) => {
        if (err) return err;
      })
      .finally(() => setLoading(false));
    if (response?.response?.status) {
      return toast(`${t("toastErr")}`, { type: "error" });
    }
    toast(`${t("toastRegistered")}`, { type: "success" });
  }

  return (
    <div className="homebg text-white pt-4">
      <Helmet>
        <title>START 21 {t("website_title")}</title>
        <meta
          name="description"
          content="Start21 o'quv markazi. START 21 Learning Center in Namangan. Build your future with us! START21 is just another level."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <div className="container w-10/12 mx-auto">
        {/* Header */}
        <header className="homeHeader py-5 flex items-center">
          <div className="headerTxt w-1/2 ">
            <Chip
              sx={{
                color: "#dcdcdc",
                fontWeight: "bolder",
                userSelect: "none",
              }}
              label={t("Years")}
              variant="outlined"
            />
            <h1 className="start21Txt text-9xl font-bold py-5 select-none">
              START <span className="text-red-600">21</span>
            </h1>
            <p className="text-4xl headerText select-none">
              Study <span className="text-red-500">Smarter</span>, Not Harder!
            </p>
            <Link
              to="/register"
              className="regbtn select-none inline-block text-xl mt-5 border-white rounded-xl p-2 "
            >
              {t("RegisterLinkBtn")}
              <i className="fa-solid fa-chevron-right pl-1 mytransition"></i>
            </Link>
          </div>
          <div className="headerImg w-1/2">
            <img className="w-full" src="/vite.svg" alt="image" />
          </div>
        </header>
        {/* Why */}
        <section>
          <h2 className="whyHeader text-center text-[50px] font-bold py-10">
            {t("WhyHeader")}
            <span className="text-red-500">{t("English")}</span>
            {t("EnglishEnding")}
          </h2>
          <p className="whyTxt text-center text-[21px] w-10/12 mx-auto">
            {t("WhyText")}
          </p>
          <div className="whyCards flex items-center justify-evenly py-16 text-xl">
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60 transition-all hover:scale-105 hover:shadow-md hover:shadow-gray-400">
              <i className="fa-2xl fa-solid fa-chalkboard-user"></i>
              {t("CreativeTeachers")}
            </span>
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60 transition-all hover:scale-105 hover:shadow-md hover:shadow-gray-400">
              <i className="fa-2xl fa-solid fa-globe"></i>
              {t("EnglishEnvironment")}
            </span>
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60 transition-all hover:scale-105 hover:shadow-md hover:shadow-gray-400">
              <i className="fa-2xl fa-solid fa-award"></i>
              {t("HighScores")}
            </span>
          </div>
        </section>
        {/* Teachers */}
        <section className="team py-7">
          <h2 className="teamHeader text-center text-[50px] font-bold py-10">
            {t("TeamText")}{" "}
            <span className="text-red-500">{t("TeamTextEnd")}</span>
          </h2>
          <Teachers />
        </section>
        {/* Top News */}
        <section className="topNews py-7">
          <h2 className="newsHeader text-center text-[50px] font-bold py-10">
            {t("NewsHeader")}{" "}
            <span className="text-red-500">{t("NewsHeaderEnd")}</span>
          </h2>
          <NewsSlider />
        </section>
        {/* Results Counter */}
        <section className="resultsCount pb-7">
          <h2 className="resultsHeader text-center text-[50px] font-bold py-10">
            {t("OurStudents")}{" "}
            <span className="text-red-500">{t("OurStudentsResults")}</span>
          </h2>
          <div className="resultsWrapper flex items-center justify-around">
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={21} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">
                {t("IeltsScore")} 8+
              </p>
            </span>
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={317} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">
                {t("IeltsScore")} 7+
              </p>
            </span>
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={270} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">
                {t("IeltsScore")} 6+
              </p>
            </span>
          </div>
        </section>
        {/* Register */}
        {/* <section className="RegisterInHome my-8">
          <h2 className="resultsHeader text-center text-[50px] font-bold py-3 pb-10">
            {t("NewsHeader") !== "So'nggi" ? (
              <>
                {t("RegisterHeader")}
                <span className="text-red-500">{t("RegisterHeaderEnd")}</span>
              </>
            ) : (
              <>
                <span className="text-red-500">{t("RegisterHeaderEnd")} </span>
                {t("RegisterHeader")}
              </>
            )}
          </h2>
          <div className="w-full flex items-center gap-10 p-3 bg-black bg-opacity-40 rounded-xl">
            <img
              className="registerImg w-1/2 rounded-xl"
              src="/registerImg.jpg"
              alt="start 21"
            />
            <form
              onSubmit={handleSubmit}
              className="registerForm w-1/2 text-black flex flex-col gap-5"
            >
              <p className="text-slate-300 text-lg">{t("RegisterText")}</p>
              <input
                className="p-3 rounded-md focus:outline-8 outline-sky-500"
                onChange={handleInputChange}
                value={data.name}
                name="name"
                type="text"
                placeholder={t("RegisterInputPlaceholder")}
              />
              <input
                className="p-3 rounded-md focus:outline-8 outline-sky-500"
                onChange={handleInputChange}
                value={data.phone}
                name="phone"
                type="phone"
              />
              <select
                onChange={handleInputChange}
                ref={courseSelect}
                name="course"
                className="p-4 rounded-md focus:outline-8 outline-sky-500"
              >
                <option className="text-zinc-500" value="none">
                  {t("RegisterSelectCourse")}
                </option>
                <option value="IELTS">IELTS (General English)</option>
                <option value="Intensive IELTS">Intensive IELTS</option>
                <option value="Kids English">English for kids</option>
                <option value="English in Russian">English in Russian</option>
                <option value="DTM">DTM</option>
              </select>
              <Button
                type="submit"
                sx={{ padding: "10px", fontSize: "17px" }}
                variant="contained"
                endIcon={loading ? "" : <SendIcon />}
              >
                {loading ? (
                  <span className="fa-solid fa-spinner fa-spin-pulse" />
                ) : (
                  t("RegisterSubmitBtn")
                )}
              </Button>
            </form>
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
