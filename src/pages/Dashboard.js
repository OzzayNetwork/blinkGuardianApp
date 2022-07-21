import $ from "jquery";
import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

import Login from "./authentication/authComponents/login.js";
import PasswordReset from "./authentication/authComponents/passwordReset.js";
import OTPVerification from "./authentication/authComponents/otpVerification.js";
import NewPassword from "./authentication/authComponents/newPassword.js";

import Loader from "./components/loader.js";
import Home from "./pages/home.js";
import Header from "./components/header.js";
import Footer from "./components/Footer.js";
import Sidebar from "./components/sidebar.js";
import SendMoney from "./components/sendMoney.js";
import AuthMainContainer from "./authentication/authMainContainer.js";
import { Helmet } from "react-helmet";
// import {Routes,Route} from "react-router-dom";
import { Route, Routes, HashRouter,Link,useMatch,useResolvedPath,useLocation,BrowserRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import axios from "axios"

// import $ from 'jquery';
const Dashboard=()=>{
  const location = useLocation();
  let currentWindow=location.pathname;

  //let currentWindow = location.pathname;
  let ourBaseURL = "/Login";
  console.log(currentWindow)

  if (currentWindow.includes(ourBaseURL)) {
    console.log("We are at the authentication pages");
  } else {
    //console.log(location.pathname)
  return (
   <>
    <main  className="d-non">        
          <div id="layout-wrapper" className="d-n">

              <Header />
              <Sidebar />
              <SendMoney />
            <div className="main-content">
              <div className="page-content">
                <Routes>
                  <Route exact path={"/"} element={<Home/>}></Route>
                </Routes>

                <div className="mx-5 px-5 d-none">
                  <button onClick={login} className="btn btn-danger pull-right mx-5">Click me to hide Navigation</button>
                </div>
              </div>
              <Footer/>
            </div>
          </div>
          {/* <Home /> */}

          
        </main>
   </>
  );
  }

  if(currentWindow==="/"){
    console.log("we are at the home page")
  }

  
}

export default Dashboard;
