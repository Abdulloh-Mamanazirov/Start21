import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const {t}=useTranslation()
  return (
    <div className="footer">
      <div className="footerWrap container w-11/12 mx-auto flex  justify-between py-4">
        <div className="w-1/3 footerWidth">
          <span className=" flex items-end gap-5">
            <h2 className="footerHeader text-5xl font-[700]">
              START <span className="text-red-500">21</span>
            </h2>
          </span>
          {/* <p>Language is the road map of a culture.</p> */}
          <div className="flex items-center gap-8 py-3 pt-6">
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="https://t.me/effortless_education"
            >
              <i className="fa-2xl fa-brands fa-telegram"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="https://www.instagram.com/effortlesseducation/?hl=en"
            >
              <i className="fa-2xl fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="https://facebook.com/Start21.lc"
            >
              <i className="fa-2xl fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="https://www.youtube.com/@Start21"
            >
              <i className="fa-2xl fa-brands fa-youtube"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="https://tiktok.com/@effortlesseducation"
            >
              <i className="fa-2xl fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="w-1/3 footerWidth">
          <h2 className="contactsHeading text-xl font-[700] pb-3">{t("Nav_Contact_Link")}</h2>
          <ul className="footerContacts flex flex-col gap-1">
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:text-sky-500 hover:underline"
                href="tel:+998972163333"
              >
                +998 97 216 33 33
              </a>
            </li>
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:text-sky-500 hover:underline"
                href="tel:+998972596666"
              >
                +998 97 259 66 66
              </a>
            </li>
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:text-sky-500 hover:underline"
                href="https://t.me/Educator_Ibrohim"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container w-11/12 mx-auto py-4">
        <span className="w-3/6 footerWidth flex flex-wrap items-center justify-between text-lg">
          <Link className="opacity-75 hover:opacity-100" to="/">
            {t("Nav_Home_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/about">
            {t("Nav_About_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/contact">
            {t("Nav_Contact_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/news/3">
            {t("Nav_News_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/register">
            {t("Nav_Register_Link")}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
