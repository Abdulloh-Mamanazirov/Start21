import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsCard from "../Components/NewsCard";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { news } from "../constants";

const News = () => {
  const param = useParams();
  const [width, setWidth] = useState(0);
  window.addEventListener("resize", (e) => {
    setWidth(e.target.innerWidth);
  });

  const { t } = useTranslation();
  
  return (
    <div className="homebg text-white pt-4">
      <Helmet>
        <title>START 21 • News</title>
        <meta
          name="description"
          content="Start 21 o'quv markazidagi yangiliklar. Read the news about START21 learning center"
        />
        <link rel="canonical" href="/news" />
      </Helmet>
      <Navbar />
      <div className="container w-10/12 mx-auto pb-5">
        <section>
          <h2 className="resultsHeader text-center text-[50px] font-bold py-10">
            {t("NewsHeader")}{" "}
            <span className="text-red-500">{t("NewsHeaderEnd")}</span>
          </h2>
          <div>
            {news.filter(n=>Number(n.id) === Number(param.id)).map((n) => {
                return (
                  <div className="h-[470px] rounded-xl flex gap-5 pb-10 newsWrapper">
                    <span className="w-1/2">
                      <img
                        className="h-full w-full rounded-xl object-cover"
                        src={n.image}
                        alt="news"
                      />
                    </span>
                    <span className="w-1/2 my-auto">
                      <p className="opacity-70">{t("PostedDate")} 24 May</p>
                      <h2 className="text-6xl py-5 font-bold [line-height:85px] newsHeader">
                        {t(n.name)}
                      </h2>
                      <p className="text-lg opacity-80 newsText">
                        There should be the description of this news {":)"} 
                      </p>
                    </span>
                  </div>
                );
            })}
            
            <div className="flex flex-wrap justify-center gap-3">
              {news.filter(n=> n.id !=param.id).map((n, index) => {
                  return (
                    <NewsCard
                      key={index}
                      image={n.image}
                      name={t(n.name)}
                      seen={n.seen}
                      id={n.id}
                    />
                  );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default News;
