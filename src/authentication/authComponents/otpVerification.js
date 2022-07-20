import React from "react";
import { Helmet } from "react-helmet";
// import $ from 'jquery';
const OTPVerification=()=>{
    return (
        <>
          <Helmet>
            <title>Blink! | OTP verification</title>
              {/* <!-- auth-2-carousel init --> */}
              <script src="assets/js/pages/auth-2-carousel.init.js"></script>
  
              {/* <!-- two-step-verification js --> */}
              <script src="assets/js/pages/two-step-verification.init.js"></script>
          </Helmet>
          <div className="my-auto">
              <div className="text-center">
  
                  <div className="avatar-md mx-auto">
                      <div className="avatar-title rounded-circle bg-light">
                          <i className="bx bxs-envelope h1 mb-0 text-primary"></i>
                      </div>
                  </div>
                  <div className="p-2 mt-4">
  
                      <h4>Verify your email</h4>
                      <p className="mb-5">Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
  
                      <form>
                          <div className="row">
                              <div className="col-3">
                                  <div className="mb-3">
                                      <label for="digit1-input" className="visually-hidden">Dight 1</label>
                                      <input type="text" className="form-control form-control-lg text-center two-step" maxLength="1" data-value="1" id="digit1-input"/>
                                  </div>
                              </div>
  
                              <div className="col-3">
                                  <div className="mb-3">
                                      <label for="digit2-input" className="visually-hidden">Dight 2</label>
                                      <input type="text" className="form-control form-control-lg text-center two-step" maxLength="1" data-value="2" id="digit2-input"/>
                                  </div>
                              </div>
  
                              <div className="col-3">
                                  <div className="mb-3">
                                      <label for="digit3-input" className="visually-hidden">Dight 3</label>
                                      <input type="text" className="form-control form-control-lg text-center two-step" maxLength="1" data-value="3" id="digit3-input"/>
                                  </div>
                              </div>
  
                              <div className="col-3">
                                  <div className="mb-3">
                                      <label for="digit4-input" className="visually-hidden">Dight 4</label>
                                      <input type="text" className="form-control form-control-lg text-center two-step" maxLength="1" data-value="4" id="digit4-input"/>
                                  </div>
                              </div>
                          </div>
                      </form>
  
                      <div className="mt-4">
                          <a href="auth-password-confirmation.html" className="btn btn-success w-md">Next</a>
                      </div>
                  </div>
  
              </div>
          </div>
  
          
      {/* <!-- end container-fluid --> */}
  
        </>
      );
}

export default OTPVerification;
