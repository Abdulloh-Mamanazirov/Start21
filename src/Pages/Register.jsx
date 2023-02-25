import { Button } from '@mui/material';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Register = () => {
    const [data, setData] = useState({
        name:"",
        phone:"+998"
    })
    function handleInputChange(e) {
      setData((oldData) => ({
        ...oldData,
        [e.target.name]: e.target.value,
      }));
    }

    function handleSubmit(e){
        e.preventDefault()
        if(data.name !== "" && data.name !== " ") console.log(data.name);
        else toast("Enter your name!", {type:"error"})
        if (data.phone !== "" && data.phone !== " " && data.phone.length >= 14)
          console.log(data.phone);
        else toast("Enter your phone number!", { type: "error" });
        
    }
    
  return (
    <div className="homebg text-white pt-4">
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
            <Button type='submit'
              sx={{ padding: "10px", fontSize: "17px" }}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Register
