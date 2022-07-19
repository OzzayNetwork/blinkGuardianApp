import $ from "jquery";
import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

import Login from "./authentication/authComponents/login.js";
import PasswordReset from "./authentication/authComponents/passwordReset.js";
import OTPVerification from "./authentication/authComponents/otpVerification.js";
import NewPassword from "./authentication/authComponents/newPassword.js";


import Home from "./pages/home.js";
import Header from "./components/header.js";
import Sidebar from "./components/sidebar.js";
import SendMoney from "./components/sendMoney.js";
import AuthMainContainer from "./authentication/authMainContainer.js";
import { Helmet } from "react-helmet";
// import {Routes,Route} from "react-router-dom";
import { Route, Routes, HashRouter,Link,useMatch,useResolvedPath,useLocation,BrowserRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";



function App() {
  // return <Home / > ;

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    event.currentTarget.classList.toggle('bg-salmon');
    alert("it will be unmounted")
    // unmountComponentAtNode(document.getElementById('layout-wrapper'))
    

  };
 

  

  return (
    <>
    <BrowserRouter></BrowserRouter>
      <HashRouter>

     
          <Routes>
            <Route exact path={"/Login"} element={<AuthMainContainer />}>
              <Route exact path={"PasswordReset"} element={<PasswordReset/>}></Route>
              <Route exact path={"OTPVerification"} element={<OTPVerification/>}></Route>
              <Route exact path={"NewPassword"} element={<NewPassword/>}></Route>
            </Route> 
          </Routes>
         <div className="mx-5 px-5">
         <button onClick className="btn btn-danger pull-right mx-5">Click me to hide Navigation</button>
         </div>
          
          
        <main className="">
          <div id="layout-wrapper" className="d-n">
              <Header />
              <Sidebar />
              <SendMoney />
            <div className="main-content">
              <div className="page-content">
                <Routes>
                  <Route exact path={"/"} element={<Home/>}></Route>
                </Routes>
              </div>
              <footer className="footer ">
                <div className="container-fluid ">
                  <div className="row ">
                    <div className="col-sm-6 ">
                      <span className="this-year"></span> © Blink!
                      {/* <span>{this.props.params.id}</span> */}
                    </div>
                    <div className="col-sm-6 ">
                      <div className="text-sm-end d-sm-block ">
                        Digital Wallet for Students
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          {/* <Home /> */}

          
        </main>
      </HashRouter>
      <Helmet>
        {/* <!-- App js --> */}
        <script src="./assets/js/app.js "></script>
        <script src="./assets/js/custom.js "></script>
      </Helmet>
    </>
  )
}

export default App;

