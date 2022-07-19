import React from "react";
import { Helmet } from "react-helmet";
// import $ from 'jquery';
class Login extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Blink! | Login to your account</title>
        </Helmet>
        <div className="my-auto">

                                <div>
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p className="text-muted">Sign in to continue Using <strong>Blink!</strong></p>
                                </div>

                                <div className="mt-4">
                                    <form action="index.html">

                                        <div className="mb-3">
                                            <label for="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                                        </div>

                                        <div className="mb-3">
                                            <div className="float-end">
                                                <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a>
                                            </div>
                                            <label className="form-label">Password</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon"/>
                                                <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                            </div>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="remember-check"/>
                                            <label className="form-check-label" for="remember-check">
                                                    Remember me
                                                </label>
                                        </div>

                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                        </div>




                                    </form>
                                </div>
                            </div>

        
    {/* <!-- end container-fluid --> */}

      </>
    );
  }
}
export default Login;
