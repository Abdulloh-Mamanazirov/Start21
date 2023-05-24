import { Button } from '@mui/material';
import { t } from 'i18next';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const About = () => {
  let [hideButton,setHideButton] = useState(true);
  let englishBtn = useRef();
  let ieltsBtn = useRef();
  let intensiveBtn = useRef();
  let kidsBtn = useRef();
  let cefrBtn = useRef();
  let dtmBtn = useRef();

  const {t} = useTranslation()
  return (
    <div className="homebg text-white pt-4">
      <Helmet>
        <title>START 21 • Courses</title>
        <meta
          name="description"
          content="Start 21 o'quv markazidagi kurslar. Get to know the courses that are taught at START21"
        />
        <link rel="canonical" href="/about"/>
      </Helmet>
      <Navbar />
      <div className="container w-10/12 mx-auto">
        <section>
          <div className="aboutImg w-1/2 mx-auto overflow-hidden rounded-lg">
            <img
              className="rounded-lg transition-all hover:scale-[1.05]"
              src="/start_21.jpg"
              alt="start21"
            />
          </div>
          <p className="aboutTxt w-2/3 mx-auto py-4 text-center text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            reprehenderit nisi excepturi illo error. Iure est fugiat
            perspiciatis, fuga praesentium aliquid obcaecati placeat minus,
            suscipit maiores nulla, veritatis dolore ut sint sunt dolorem alias
            delectus vel non? Suscipit temporibus consequatur maiores sed quos
            ratione nobis, reiciendis, itaque dicta iure cum? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Obcaecati velit est incidunt
            earum perspiciatis. Distinctio tempora sequi possimus ducimus illo
            excepturi enim expedita facere voluptates mollitia! Est similique
            debitis quidem!
          </p>
        </section>
        <section className="pb-5">
          <h2 className="whyHeader text-center text-[50px] font-bold py-10">
            {t("CourseHeader")} :
          </h2>
          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 grid-rows-2 max-[900px]:grid-rows-3 max-[650px]:grid-rows-6 gap-5  font-serif">
            <div
              onMouseEnter={() => (englishBtn.current.hidden = false)}
              onMouseLeave={() => (englishBtn.current.hidden = true)}
              className="bg-white rounded-xl text-center flex flex-col justify-between relative transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-300 "
            >
              <Link
                to="/register"
                ref={englishBtn}
                hidden={true}
                className="absolute right-2 top-2"
              >
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 0.7,
                    paddingX: 1.5,
                    borderRadius: 2.5,
                    textTransform: "capitalize",
                  }}
                >
                  Register
                </Button>
              </Link>
              <img
                className="rounded-xl mx-auto mt-5"
                width={400}
                src="/english-card.webp"
                alt="start 21 english"
              />
              <div className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-transparent to-black opacity-80 text-3xl text-black pb-5">
                General English
              </div>
            </div>
            <div
              onMouseEnter={() => (ieltsBtn.current.hidden = false)}
              onMouseLeave={() => (ieltsBtn.current.hidden = true)}
              className="bg-[#E31738] rounded-xl text-center flex flex-col justify-between relative transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500"
            >
              <Link
                to="/register"
                ref={ieltsBtn}
                hidden={true}
                className="absolute right-2 top-2"
              >
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 0.7,
                    paddingX: 1.5,
                    borderRadius: 2.5,
                    textTransform: "capitalize",
                  }}
                >
                  Register
                </Button>
              </Link>
              <img
                className="rounded-xl mx-auto"
                width={400}
                src="/IELTS-card.jpg"
                alt="start 21 ielts"
              />
              <div className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-transparent to-black opacity-80 text-3xl pb-5">
                IELTS
              </div>
            </div>
            <div
              onMouseEnter={() => (intensiveBtn.current.hidden = false)}
              onMouseLeave={() => (intensiveBtn.current.hidden = true)}
              className="bg-red-200 rounded-xl text-center flex flex-col justify-between relative transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-red-200"
            >
              <Link
                to="/register"
                ref={intensiveBtn}
                hidden={true}
                className="absolute right-2 top-2"
              >
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 0.7,
                    paddingX: 1.5,
                    borderRadius: 2.5,
                    textTransform: "capitalize",
                  }}
                >
                  Register
                </Button>
              </Link>
              <img
                className="rounded-xl mx-auto mt-10"
                width={400}
                src="/intensive_Ielts.png"
                alt="start 21 intensive ielts"
              />
              <div className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-transparent to-black opacity-80 text-3xl text-black pb-5">
                Intensive IELTS
              </div>
            </div>
            <div
              onMouseEnter={() => (kidsBtn.current.hidden = false)}
              onMouseLeave={() => (kidsBtn.current.hidden = true)}
              className="bg-green-500 rounded-xl text-center flex flex-col justify-between relative transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500"
            >
              <Link
                to="/register"
                ref={kidsBtn}
                hidden={true}
                className="absolute right-2 top-2"
              >
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 0.7,
                    paddingX: 1.5,
                    borderRadius: 2.5,
                    textTransform: "capitalize",
                  }}
                >
                  Register
                </Button>
              </Link>
              <img
                className="rounded-xl mx-auto mt-8"
                width={400}
                src="/kids_english.png"
                alt="start 21 kids english"
              />
              <div className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-transparent to-black opacity-80 text-3xl pb-5">
                Kids English
              </div>
            </div>
            <div
              onMouseEnter={() => (cefrBtn.current.hidden = false)}
              onMouseLeave={() => (cefrBtn.current.hidden = true)}
              className="bg-blue-400 rounded-xl text-center flex flex-col justify-between relative transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-400"
            >
              <Link
                to="/register"
                ref={cefrBtn}
                hidden={true}
                className="absolute right-2 top-2"
              >
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 0.7,
                    paddingX: 1.5,
                    borderRadius: 2.5,
                    textTransform: "capitalize",
                  }}
                >
                  Register
                </Button>
              </Link>
              <img
                className="rounded-xl mx-auto mt-5"
                width={400}
                src="/cefr-card.png"
                alt="start 21 cefr"
              />
              <div className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-transparent to-black opacity-80 text-3xl pb-5">
                CEFR
              </div>
            </div>
            <div
              onMouseEnter={() => (dtmBtn.current.hidden = false)}
              onMouseLeave={() => (dtmBtn.current.hidden = true)}
              className="bg-white rounded-xl text-center flex flex-col justify-between relative transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-300"
            >
              <Link
                to="/register"
                ref={dtmBtn}
                hidden={true}
                className="absolute right-2 top-2"
              >
                <Button
                  variant="contained"
                  sx={{
                    paddingY: 0.7,
                    paddingX: 1.5,
                    borderRadius: 2.5,
                    textTransform: "capitalize",
                  }}
                >
                  Register
                </Button>
              </Link>
              <img
                className="rounded-xl mx-auto"
                width={300}
                src="/dtm-card.jpg"
                alt="start 21 dtm"
              />
              <div className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-transparent to-black opacity-80 text-3xl text-black pb-5">
                DTM
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About
