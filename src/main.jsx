import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToastContainer } from 'react-toastify';
import axios, { Axios } from 'axios';

// i18n
import "./i18n/i18n"

// Redux
import { Provider } from 'react-redux';
import store from './store';

// CSS
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

// Axios
axios.defaults.headers.common['Content-Type'] = "application/json"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer theme='colored' />
    </Provider>
  </BrowserRouter>
);
