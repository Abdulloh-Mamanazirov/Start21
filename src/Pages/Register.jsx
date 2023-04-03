import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Register = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const button = useRef("")

  const [data, setData] = useState({
    name: "",
    phone: "+998",
    course: ""
  });
  
  function handleInputChange(e) {
    setData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
    await axios.post("/register", data);
    toast(`${t("toastRegistered")}`, { type: "success" });
  }

  return (
    <div className="homebg text-white pt-4 min-h-screen flex flex-col justify-between">
      <Navbar />
      <section className="container w-10/12 mx-auto py-5">
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
            alt="start21"
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
            ref={button}
              type="submit"
              sx={{ padding: "10px", fontSize: "17px" }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              {t("RegisterSubmitBtn")}
            </Button>
          </form>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
