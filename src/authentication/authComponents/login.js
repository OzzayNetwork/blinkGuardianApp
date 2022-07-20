import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// import $ from 'jquery';
const Login = () => {

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
         
            localStorage.setItem("parentId", res.data.data.userId)
        }
      }).catch((err)=>{
        console.log(err.response.data.statusDescription);
        seterrorMsg(err.response.data.statusDescription)
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
          <p className="text-muted">
            Sign in to continue Using <strong>Blink!</strong>
          </p>
          <p>{errorMsg}</p>
        </div>

        <div className="mt-4">
          <form onSubmit={loginStart}>
            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                onChange={(event)=>setUsername(event.target.value)}
                required="true"
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
                  type="submit"

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
        </div>
      </div>

      {/* <!-- end container-fluid --> */}
    </>
  );
};

export default Login;
