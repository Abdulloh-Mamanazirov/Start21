import { Route, Routes } from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import News from "./Pages/News";
import Register from "./Pages/Register";

function App() {

  return (
    <Routes>
      {/* <Loading/> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  );
}

export default App
