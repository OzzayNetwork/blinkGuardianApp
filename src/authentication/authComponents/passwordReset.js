import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, HashRouter } from "react-router-dom";
import {Link} from "react-router-dom"
// import $ from 'jquery';
class PasswordReset extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Blink! | Reset your Password</title>
        </Helmet>
        <div className="my-auto">

    <div>
        <h5 className="text-primary"> Reset Password</h5>
        <p className="text-muted">Reset Your Password with <strong>Blink!</strong></p>
    </div>

    <div className="mt-4">
        <div className="alert alert-success text-center mb-4" role="alert">
            Enter your Email and instructions will be sent to you!
        </div>
        <form action="auth-email-verification.html">

            <div className=" mb-3 ">
                <label for="useremail " className="form-label ">Email</label>
                <input type="email " className="form-control " id="useremail " placeholder="Enter email "/>
            </div>

            <div className="text-end ">
                <button className="btn btn-primary w-md waves-effect waves-light " type="submit ">Reset</button>
            </div>

        </form>
        <div className="mt-5 text-center ">
            <p>Remember It ? <Link to="/Login" className="fw-medium text-primary "> Sign In here</Link> </p>
        </div>
    </div>
</div>

        
    {/* <!-- end container-fluid --> */}

      </>
    );
  }
}
export default PasswordReset;
