import React from "react";
import { Helmet } from "react-helmet";
// import $ from 'jquery';
class NewPassword extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Blink! | Set your new password</title>
            {/* <!-- validation init --> */}
            <script src="assets/js/pages/validation.init.js"></script>

            {/* <!-- auth-2-carousel init --> */}
            <script src="assets/js/pages/auth-2-carousel.init.js"></script>
        </Helmet>
        <div className="my-auto">

<div>
    <h5 className="text-primary">Create password</h5>
    <p className="text-muted">Enter and confirm your new password</p>
</div>

<div className="mt-4">
    <form className="needs-validation" novalidate action="index.html">


        <div className="mb-3">
            <label for="userpassword" className="form-label">New Password</label>
            <input type="password" className="form-control" id="userpassword" placeholder="Enter your new password" required/>
            <div className="invalid-feedback">
                Enter your new password
            </div>
        </div>

        <div className="mb-3">
            <label for="userpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm your new password" required/>
            <div className="invalid-feedback">
                Password mismatch
            </div>
        </div>

        <div>
            <p className="mb-0">By registering you agree to the Early Bird <a href="#" className="text-primary">Terms of Use</a></p>
        </div>

        <div className="mt-4 d-grid">
            <button className="btn btn-primary waves-effect waves-light" type="submit">Finish</button>
        </div>

        <div className="mt-4 text-center d-none">
            <h5 className="font-size-14 mb-3">Sign up using</h5>

            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="javascript::void()" className="social-list-item bg-primary text-white border-primary">
                        <i className="mdi mdi-facebook"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="javascript::void()" className="social-list-item bg-info text-white border-info">
                        <i className="mdi mdi-twitter"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="javascript::void()" className="social-list-item bg-danger text-white border-danger">
                        <i className="mdi mdi-google"></i>
                    </a>
                </li>
            </ul>

        </div>

    </form>

    <div className="mt-5 text-center">
        <p>Already have an account ? <a href="auth-login.html" className="fw-medium text-primary"> Login</a> </p>
    </div>

</div>
</div>
        
    {/* <!-- end container-fluid --> */}

      </>
    );
  }
}
export default NewPassword;
