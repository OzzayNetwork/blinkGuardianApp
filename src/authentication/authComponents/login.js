import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';



const Login = () => {
  //alert("we are at the login page "+theParentId)


const [username, setUsername]=useState("");
const [passWord,setPassword]=useState("");
const [errorMsg, seterrorMsg]=useState("");



  const loginStart = (event) => {
    event.preventDefault();
    let data = {
      email: username,
      password: passWord,
      userType: "Parent",
    };
    console.log(data)
    axios
      .post(
        "http://test.blink.co.ke/api/v2/admin/auth/login-with-usertype",
        data
      )
      .then((res) => {
        console.log(res);
        
        if(res.status===200){
            seterrorMsg(res.data.statusDescription)
          // $('.msg-holder').removeClass('d-none')

          //setting the local storage with some data
            localStorage.setItem("parentId", res.data.data.userId)
            localStorage.setItem("parentEmail", res.data.data.email)
            localStorage.setItem("parentPhone", res.data.data.msisdn)
            localStorage.setItem("parentUserName", res.data.data.userName)
            localStorage.setItem("parentUserFName", res.data.data.userProfile.firstName)
            localStorage.setItem("parentUserLName", res.data.data.userProfile.lastName)
            localStorage.setItem("guardianWalletBal", res.data.data.userProfile.blinkaccounts[0].currentBalance)
            localStorage.setItem("guardianBlinkers", JSON.stringify(res.data.data.associates))
            //localStorage.setItem("parentFName",res.data.userProfile.firstName);

            //setting active blinker

            localStorage.setItem("activeBlinker", JSON.stringify(res.data.data.associates[res.data.data.associates.length-1].userId))
            localStorage.setItem("activeBlinkerIndex", JSON.stringify(res.data.data.associates.length-1))


           //alert(  localStorage.setItem("parentId", res.data.data.userId))
            console.log(localStorage)
            
           // alert( localStorage.setItem("parentFName",res.data.userProfile.firstName))

            $('#login-msg').show().addClass('show').addClass('alert-success').removeClass('d-none').removeClass('alert-danger').children('i').addClass('mdi-check-all').removeClass('mdi-block-helper');
            setUsername(data.email);
           //alert(res.data.data.userId);
            window.location.reload()
            console.log(localStorage);
            //setTheParentId(res.data.data.userId);
            //alert(theParentId = {parentId})
            //alert(theParentId)
           
           
        }
      }).catch((err)=>{
        console.log(err.response.data.statusDescription);
        seterrorMsg(err.response.data.statusDescription)
        //  $('.msg-holder-err ').removeClass('d-none');
        //  $('.msg-holder-err .alert').alert('show');
        //  alert("we are not logger");
         //show
        $('#login-msg').show().addClass('show').addClass('alert-danger').removeClass('d-none').removeClass('alert-success').children('i').addClass('mdi-block-helper').removeClass('mdi-check-all');;
      })
  };

  return (
    <>
      <Helmet>
        <title>Blink! | Login to your account</title>
      </Helmet>
      <div className="my-auto">
        <div>
          <h5 className="text-primary">Welcome Back !</h5>
          <div className="msg-holder-err ">
            <div class="alert alert-danger alert-dismissible fade d-none" id="login-msg" role="alert">
                <i class="mdi mdi-block-helper me-2"></i>
                {errorMsg}
                <button type="button" class="btn-close close-alert"></button>
            </div>
          </div>

          {/* <div className="d-none msg-holder-success">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="mdi mdi-block-helper me-2"></i>
                {errorMsg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> */}

          <p className="d-none">{errorMsg}</p>
        </div>

        <div className="mt-4">
          <form onSubmit={loginStart}>
            <div className="mb-3">
              <label for="username" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter username"
                onChange={(event)=>setUsername(event.target.value)}
                required="true"
                required parsley-type="email"
              />
            </div>

            <div className="mb-3">
              <div className="float-end">
                <Link to="PasswordReset" className="text-muted">
                  Forgot password?
                </Link>
              </div>
              <label className="form-label">Password</label>
              <div className="input-group auth-pass-inputgroup">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                  onChange={(event)=>setPassword(event.target.value)}
                  required="true"
                />
                <button
                  className="btn btn-light "
                  type="button"

                  id="password-addon"
                >
                  <i className="mdi mdi-eye-outline"></i>
                </button>
              </div>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-check"
              />
              <label className="form-check-label" for="remember-check">
                Remember me
              </label>
            </div>

            <div className="mt-3 d-grid">
              <button
                className="btn btn-primary waves-effect waves-light"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-5 text-center text-capitalize font-weight-semibold fw-bold">
              <p>Have an in inactive account? <a href="auth-register-2.html" class="fw-medium text-primary"> Activate your account </a> </p>
          </div>
        </div>
      </div>

      {/* <!-- end container-fluid --> */}
    </>
  );
};

export default Login;
