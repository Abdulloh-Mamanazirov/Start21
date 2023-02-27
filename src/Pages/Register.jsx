import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { addUser } from "../store/slices/user";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((e) => e.user);

  const [data, setData] = useState({
    name: "",
    phone: "+998",
  });
  function handleInputChange(e) {
    setData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      data.name !== "" &&
      data.name !== " " &&
      data.phone !== "" &&
      data.phone !== " " &&
      data.phone.length >= 14
    ) {
      toast("Registered Successfully", { type: "success" });
      navigate("/");
    } else toast("Please fill out the fields!", { type: "error" });

    dispatch(addUser(data));
  }
  // console.log(user);

  return (
    <div className="homebg text-white pt-4 min-h-screen flex flex-col justify-between">
      <Navbar />
      <section className="container w-10/12 mx-auto py-5">
        <h2 className="resultsHeader text-center text-[50px] font-bold py-3 pb-10">
          Register to our <span className="text-red-500">Courses</span>
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
            <input
              className="p-3 rounded-md focus:outline-8 outline-sky-500"
              onChange={handleInputChange}
              value={data.name}
              name="name"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="p-3 rounded-md focus:outline-8 outline-sky-500"
              onChange={handleInputChange}
              value={data.phone}
              name="phone"
              type="phone"
            />
            <Button
              type="submit"
              sx={{ padding: "10px", fontSize: "17px" }}
              variant="contained"
            >
              Submit
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
