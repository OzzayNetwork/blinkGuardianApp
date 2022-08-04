import $ from "jquery";
import logo from "../logo.svg";
import "../App.css";
import {useState} from 'react';

import Loader from "../components/loader.js";
import Home from "../pages/home.js";
import Header from "../components/header.js";
import Footer from "../components/Footer.js";
import Sidebar from "../components/sidebar.js";
import SendMoney from "../components/sendMoney.js";
import Transactions from "./transactions/Transactions.js";

import AuthMainContainer from "../authentication/authMainContainer.js";
import { Helmet } from "react-helmet";
import { Route, Routes, HashRouter,BrowserRouter } from "react-router-dom";
// import $ from 'jquery';
const Dashboard=()=>{
  
    //console.log(location.pathname)
  return (
   <>
    <main  className="d-non">        
          <div id="layout-wrapper" className="d-n">
            
              <Header />
              <Sidebar />
              <SendMoney />
            <div className="main-content">
              <div className="page-content padding-sm-94">
                <Routes>
                  <Route exact path={"/"} element={<Home/>}></Route>
                  <Route exact path={"/Transactions"} element={<Transactions/>}></Route>
                </Routes>

                <div className="mx-5 px-5 d-none">
                  <button  className="btn btn-danger pull-right mx-5">Click me to hide Navigation</button>
                </div>
              </div>
              <Footer/>
            </div>
          </div>
          {/* <Home /> */}

        <Helmet>
            {/* <!-- App js --> */}
            <script src="./assets/js/app.js "></script>
            <script src="./assets/js/custom.js "></script>
        </Helmet>

          
        </main>
   </>
  );
  

  
}

export default Dashboard;
