import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NewsCard from '../Components/NewsCard';
import { useTranslation } from 'react-i18next';

const News = () => {
  const [width, setWidth] = useState(0)
  window.addEventListener('resize', e =>{
    setWidth(e.target.innerWidth);
  })

  const {t} = useTranslation()
  
  return (
    <div className="homebg text-white pt-4">
      <Navbar />
      <div className="container w-10/12 mx-auto pb-5">
        <section>
          <h2 className="resultsHeader text-center text-[50px] font-bold py-10">
            {t("NewsHeader")} <span className="text-red-500">{t("NewsHeaderEnd")}</span>
          </h2>
          <div>
            <div className="h-[470px] rounded-xl flex gap-5 pb-10 newsWrapper">
              <span className="w-1/2">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src="/start21.jpg"
                  alt="news"
                />
              </span>
              <span className="w-1/2 my-auto">
                <p className="opacity-70">{t("PostedDate")} 24 May</p>
                <h2 className="text-6xl py-5 font-bold [line-height:85px] newsHeader">
                  {t("NewsText")}
                </h2>
                <p className="text-lg opacity-80 newsText">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam, eius vitae! Reprehenderit, alias? Id quia, aperiam,
                  quisquam aut delectus, nemo veritatis tempore iure eaque
                  aliquam laborum nostrum eum maxime minima repellat! Nostrum
                  odit vitae corrupti? Sint, officiis.
                </p>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {Array(width > 1000 ? 4 : 2)
                .fill(0)
                .map((card,index) => {
                  return (
                    <NewsCard key={index}
                      image="/start_21.jpg"
                      name="Lorem ipsum"
                      seen={Math.round(Math.random() * 100)}
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
}

export default News
