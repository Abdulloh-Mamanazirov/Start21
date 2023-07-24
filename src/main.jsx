import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

// i18n
import "./i18n/i18n"

// Redux
// import { Provider } from 'react-redux';
// import store from './store';

// CSS
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

// Axios
axios.defaults.headers.common['Content-Type'] = "application/json"
axios.defaults.baseURL = "https://start21-server.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
      <ToastContainer theme='colored' />
  </BrowserRouter>
);
