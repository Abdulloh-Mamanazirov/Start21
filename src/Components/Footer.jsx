import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
          <h2 className="contactsHeading text-xl font-[700] pb-3">Contacts</h2>
          <ul className="footerContacts flex flex-col gap-1">
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:text-sky-500 hover:underline"
                href="tel:+998123456789"
              >
                +998 12 345 67 89
              </a>
            </li>
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:text-sky-500 hover:underline"
                href="tel:+998123456789"
              >
                +998 98 765 43 21
              </a>
            </li>
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:text-sky-500 hover:underline"
                href="https://t.me/Mr_Abdulloh"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container w-11/12 mx-auto py-4">
        <span className="w-2/5 footerWidth flex items-center justify-between text-lg">
          <Link className="opacity-75 hover:opacity-100" to="/">
            Home
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/about">
            About
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/contact">
            Contact
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/news">
            News
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/register">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
