import React from "react";
import { Helmet } from "react-helmet";
import {Link,useLocation,matchRoutes} from "react-router-dom"

// import $ from 'jquery';
const Header=()=>{

  // loged in parent details
  const parentId=localStorage.getItem("parentId")
  const parentEmail= localStorage.getItem("parentEmail")
  const parentUserName= localStorage.getItem("parentUserName")
  const parentFName=localStorage.getItem("parentUserFName")
  const parentLName=localStorage.getItem("parentUserLName")
  // console.log(localStorage)


  const logout=()=>{
    localStorage.clear();
    window.location.reload();
  }
  const location = useLocation();
  let currentWindow=location.pathname;

  //let currentWindow = location.pathname;
  let ourBaseURL = "/Login";
  //console.log(currentWindow)

  if (currentWindow.includes(ourBaseURL)) {
    console.log("We are at the authentication pages");
  } else {
    //console.log(location.pathname)
  return (
    <>
      <header id="page-topbar" className="">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-files/favicon.png"
                    alt=""
                    height="22"
                  />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-files/blink-icon.svg"
                    alt=""
                    height="40"
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-files/blink-orange.svg"
                    alt=""
                    height="50"
                  />
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-magnify"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen"></i>
              </button>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxheight: "230px" }}>
                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-warning rounded-circle font-size-16">
                          <i className="mdi mdi-file-document-edit-outline  "></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-shipped">
                          Tenancy Agreement Renewal
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            Aex Wanjala's agreement due in days
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-warning rounded-circle font-size-16">
                          <i className="mdi mdi-file-document-edit-outline  "></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-shipped">
                          Tenancy Agreement Renewal
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            Aex Wanjala's agreement due in days
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-danger rounded-circle font-size-16">
                          <i className="mdi mdi-home-export-outline  "></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-shipped">
                          Tenant on Notice
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            Kibor will be moving out in the next 7 Days
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="javascript:void(0)"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect d-flex justify-content-center align-items-center"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user d-none"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <div className="avatar-sm mx-auto ">
                    <span className="avatar-title rounded-circle bg-primary-blink font-size-16 profile-abriv">
                        {parentFName.charAt(0)+parentLName.charAt(0)}
                    </span>
                </div>
                <span className="d-none d-xl-inline-block ms-1 prof-name" key="t-henry">
                  {parentFName+" "+parentLName}
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* <!-- item--> */}
                <a className="dropdown-item" href="myprofile.html">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">My Profile</span>
                </a>
                <a className="dropdown-item" href="my-logs.html">
                  <i className="bx bx-time font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">My Logs</span>
                </a>
                <a className="dropdown-item" href="auth-lock-screen.html">
                  <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div className="dropdown-divider"></div>
                <a
                href="#"
                onClick={logout}
                  className="dropdown-item text-danger"
                  
                >
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
  }

  if(currentWindow==="/"){
    console.log("we are at the home page")
  }

  
}

export default Header;
