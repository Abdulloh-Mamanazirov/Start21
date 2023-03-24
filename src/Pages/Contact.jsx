import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {useTranslation} from "react-i18next"

const Contact = () => {
  const {t} = useTranslation()
  return (
    <div className="homebg text-white pt-4">
      <Navbar />
      <div className="container w-10/12 mx-auto pb-5">
        <div className="contactWrapper flex items-center gap-14">
          <img className="w-1/2" src="/location.png" alt="location" />
          <span className="w-80">
            <h2 className="locationHeader text-center text-[55px] font-bold py-10">
              {t("locations")}:
            </h2>
            <ul>
              <li className="text-xl font-semibold pb-3 flex items-center justify-between">
                Chorsu ( Korzinka )
                <a
                  href="https://goo.gl/maps/w62JjCj8DcbaYyLu7"
                  target="_blank"
                  className="opacity-80 text-sm hover:text-sky-500 font-light"
                >
                  {t("seeMaps")} <i className="fa-solid fa-link"></i>
                </a>
              </li>
              <li className="text-xl font-semibold pb-3 flex items-center justify-between">
                Chorsu
                <a
                  href="https://goo.gl/maps/PrLxt6ayH5g9UY3q7"
                  target="_blank"
                  className="opacity-80 text-sm hover:text-sky-500 font-light"
                >
                  {t("seeMaps")} <i className="fa-solid fa-link"></i>
                </a>
              </li>
              <li className="text-xl font-semibold pb-3 flex items-center justify-between">
                Oybek Fayz
                <a
                  href="https://goo.gl/maps/5naTbVbWtb5aLkAQA"
                  target="_blank"
                  className="opacity-80 text-sm hover:text-sky-500 font-light"
                >
                  {t("seeMaps")} <i className="fa-solid fa-link"></i>
                </a>
              </li>
              <li className="text-xl font-semibold pb-3 flex items-center justify-between">
                Do'stlik
                <a
                  href="https://goo.gl/maps/v6GTkTqVDaMaDBvw5"
                  target="_blank"
                  className="opacity-80 text-sm hover:text-sky-500 font-light"
                >
                  {t("seeMaps")} <i className="fa-solid fa-link"></i>
                </a>
              </li>
              <li className="text-xl font-semibold pb-3 flex items-center justify-between">
                Lola
                <a
                  href="https://goo.gl/maps/sTUtAhspnQStBqkr7"
                  target="_blank"
                  className="opacity-80 text-sm hover:text-sky-500 font-light"
                >
                  {t("seeMaps")} <i className="fa-solid fa-link"></i>
                </a>
              </li>
              <li className="text-xl font-semibold pb-3 flex items-center justify-between">
                Toshbuloq
                <a
                  href="#"
                  target="_blank"
                  className="opacity-80 text-sm hover:text-sky-500 font-light"
                >
                  {t("seeMaps")} <i className="fa-solid fa-link"></i>
                </a>
              </li>
            </ul>
          </span>
        </div>
        <div>
          <h2 className="contactInfoHeader text-center text-[55px] font-bold pt-10">
            {t("contactText")} <span className="text-red-500">{t("contactTextEnd")}</span>
          </h2>
          <div>
            <span className="telNum w-full flex justify-around flex-wrap text-xl pt-3">
              <a href="tel:">+998 91 234 56 78</a>
              <a href="tel:">+998 12 345 67 89</a>
              <a href="tel:">+998 89 654 68 89</a>
            </span>
            <span className="flex-wrap flex items-center justify-evenly py-5">
              <a className="hover:bg-opacity-90 p-4 my-2 text-black bg-slate-100 bg-opacity-70 rounded-lg" href="https://t.me/effortless_education">
                <i className="fa-2xl pr-3 fa-brands fa-telegram text-sky-600"></i>
                Telegram
              </a>
              <a className="hover:bg-opacity-90 p-4 my-2 text-black bg-slate-100 bg-opacity-70 rounded-lg" href="https://www.instagram.com/effortlesseducation/?hl=en">
                <i className="fa-2xl pr-3 fa-brands fa-instagram text-pink-500"></i>
                Instagram
              </a>
              <a className="hover:bg-opacity-90 p-4 my-2 text-black bg-slate-100 bg-opacity-70 rounded-lg" href="https://facebook.com/Start21.lc">
                <i className="fa-2xl pr-3 fa-brands fa-facebook text-blue-600"></i>
                Facebook
              </a>
              <a className="hover:bg-opacity-90 p-4 my-2 text-black bg-slate-100 bg-opacity-70 rounded-lg" href="https://www.youtube.com/@Start21">
                <i className="fa-2xl pr-3 fa-brands fa-youtube text-red-600"></i>
                YouTube
              </a>
              <a className="hover:bg-opacity-90 p-4 my-2 text-black bg-slate-100 bg-opacity-70 rounded-lg" href="https://tiktok.com/@effortlesseducation">
                <i className="fa-2xl pr-3 fa-brands fa-tiktok text-black"></i>
                TikTok
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
