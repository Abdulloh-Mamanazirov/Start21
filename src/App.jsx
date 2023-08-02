import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import News from "./Pages/News";
import Register from "./Pages/Register";

function App() {

  const [show, setShow] = useState(true)

  setTimeout(()=>{
    setShow(false);
  },2100)

  useEffect(()=>{
    async function checkServer(){
      await axios.post('/register')
    }
    checkServer()
  },[])
  
  return (
    <>
      {show ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App
