import React from "react";
import { Chip } from "@mui/material";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import NewsSlider from "../Components/News";
import Teachers from "../Components/Teachers";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="homebg text-white pt-4">
      <Navbar />
      <div className="container w-10/12 mx-auto">
        <header className=" py-5 flex items-center">
          <div className="headerTxt w-1/2 ">
            <Chip
              sx={{ color: "#dcdcdc", fontWeight: "bolder" }}
              label="7 Years Complete"
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
            Why to learn <span className="text-red-500">English</span> with us?
          </h2>
          <p className="whyTxt text-center text-[21px] w-10/12 mx-auto">
            Our classes are fun, effective and affordable. As we employ just the
            most efficient teachers from all around. With up-to-date methodology
            and highly qualified teachers we can help you achieve your language
            goals.
          </p>
          <div className="whyCards flex items-center justify-evenly py-16 text-xl">
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60">
              <i className="fa-2xl fa-solid fa-chalkboard-user"></i>
              Lorem, ipsum.
            </span>
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60">
              <i className="fa-2xl fa-solid fa-award"></i>
              Lorem, ipsum dolor.
            </span>
            <span className="flex flex-col items-center gap-8 p-4 pt-9 rounded-lg bg-gray-500 bg-opacity-60">
              <i className="fa-2xl fa-solid fa-graduation-cap"></i>
              Lorem, ipsum.
            </span>
          </div>
        </section>
        <section className="team py-7">
          <h2 className="teamHeader text-center text-[50px] font-bold py-10">
            Our <span className="text-red-500">Team</span>
          </h2>
          <Teachers />
        </section>
        <section className="topNews py-7">
          <h2 className="newsHeader text-center text-[50px] font-bold py-10">
            Top <span className="text-red-500">News</span>
          </h2>
          <NewsSlider />
        </section>
        <section className="resultsCount pb-7">
          <h2 className="resultsHeader text-center text-[50px] font-bold py-10">
            Our Students' <span className="text-red-500">Results</span>
          </h2>
          <div className="resultsWrapper flex items-center justify-around">
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={21} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">IELTS score 8+</p>
            </span>
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={117} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">IELTS score 7+</p>
            </span>
            <span className="flex flex-col items-center gap-4 ">
              <CountUp enableScrollSpy end={220} className="scoree text-6xl" />
              <p className="text-xl font-bold opacity-70 scoreTxt">IELTS score 6+</p>
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
