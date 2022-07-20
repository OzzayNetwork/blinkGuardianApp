import React from "react";
import { Helmet } from "react-helmet";
import $ from 'jquery';
const SendMoney=()=>{
    return (
        <>
          <Helmet>
            <title>Blink! | Digital Wallet for Students</title>
          </Helmet>
          <div className="modal fade" id="walletTopUp" tabindex="-1" role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                  <div className="modal-header d-none">
                      <span className="badge badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Send Money</span>
                  
                          
                      <button type="button" className="btn btn-light position-relative p-0 avatar-xs rounded-circle close-modal" data-bs-dismiss="modal" aria-label="Close">
                          <span className="avatar-title bg-transparent text-reset font-18px">
                              <i className="bx bx-x"></i>
                          </span>
                      </button>
  
                  </div>
                  <div className="modal-body">
                      <div className="d-flex justify-content-between align-items-center">
                          <span className="badge  badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Send Money</span>
                  
                          
                      <button type="button" className="btn btn-light position-relative p-0 avatar-xs rounded-circle pull-right close-modal" data-bs-dismiss="modal" aria-label="Close">
                          <span className="avatar-title bg-transparent text-reset font-18px">
                              <i className="bx bx-x"></i>
                          </span>
                      </button>
                      </div>
  
                      <div className="payment-panel-parent">
                          <div className="recepient-account payment-panel payment-active-panel">
                              <h4 className="text-capitalize">Recepient, Blink account & Amount </h4>
                              <label className="text-capitalize text-muted">Blinker receiving the money</label>
                              
                              <div>
                                  
                                  <div className="dropdown d-inline-block w-100 d-flex align-items-center mb-4 bg-info bg-opacity-25">
                                      <button type="button" className="btn header-item waves-effect align-items-center w-100  text-left d-flex" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <div className="flex-shrink-0 me-3">
                                              <img className="rounded-circle avatar-sm" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="65"/>
                                          </div>
                                          
                                          <div className="flex-grow-1 chat-user-box me-3">
                                              <h6 className="user-title m-0">Kelvin Thuku </h6>
                                              <p className="text-muted m-0 p-0">Blink Academy</p>
                                          </div>
                                          <div className="d-flex justify-content-center align-items-center">
                                              <span className="d-flex align-items-center"><small className="text-info mr-2">Click to change</small> <i className="mdi mdi-chevron-down  d-xl-inline-block me-3 font-21"></i></span>
                                          </div>
                                          
                                      </button>
  
                                      
                                      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-start p-0 w-100">
                                          <div className="p-3">
                                              <div className="row align-items-center">
                                                  <div className="col">
                                                      <h6 className="m-0" key="t-notifications"> My Blinkers </h6>
                                                  </div>
                                                  <div className="col-auto">
                                                      <a href="notifications.html" className="small" key="t-view-all"> View All</a>
                                                  </div>
                                              </div>
                                          </div>
                                          <div data-simplebar style={{ maxheight: "230px" }}>
                                              <a href="javascript: void(0);" className="d-flex px-3 pb-2">
                                                  <div className="flex-shrink-0 me-3">
                                                      <img className="rounded-circle" src="assets/images/users/avatar-1.jpg" alt="Generic placeholder image" height="36"/>
                                                  </div>
                                                  <div className="flex-grow-1 chat-user-box">
                                                      <p className="user-title m-0">Alex wankala</p>
                                                      <p className="text-muted">St Mary's primary school</p>
                                                  </div>                                                            
                                              </a>
  
                                              <a href="javascript: void(0);" className="d-flex px-3 pb-2">
                                                  <div className="flex-shrink-0 me-3">
                                                      <img className="rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="36"/>
                                                  </div>
                                                  <div className="flex-grow-1 chat-user-box">
                                                      <p className="user-title m-0">Kelvin Thuku</p>
                                                      <p className="text-muted">Amani Primary School</p>
                                                  </div>
  
                                              </a>
  
                                              <a href="javascript: void(0);" className="d-flex px-3 pb-2">
                                                  <div className="flex-shrink-0 me-3">
                                                      <img className="rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36"/>
                                                  </div>
                                                  <div className="flex-grow-1 chat-user-box">
                                                      <p className="user-title m-0">Veronicah Wanja</p>
                                                      <p className="text-muted">Amani Primary School</p>
                                                  </div>
  
                                              </a>
                                          
                                          </div>
                                          
                                      </div>
  
                                  
                                  </div>
  
                                  <label className="text-capitalize text-muted mb-4">Account you are sending the money to</label>
                                  <div className="mb-4 acount-type" data-simplebar>
                                      <a href="javascript: void(0);" className="d-flex px-3 mb-3 pl-0 align-items-center active">
                                          <div className="flex-shrink-0 me-3">
                                              <img className="rounded-circle avatar-sm" src="assets/images/blink-accounts/wallet.svg" alt="Generic placeholder image" />
                                          </div>
                                          <div className="flex-grow-1 chat-user-box">
                                              <p className="user-title m-0 text-uppercase font-14px">Pocket Money</p>
                                          </div>                                                            
                                      </a>
  
                                      <a href="javascript: void(0);" className="d-flex px-3 mb-3 pl-0 align-items-center">
                                          <div className="flex-shrink-0 me-3">
                                              <img className="rounded-circle avatar-sm" src="assets/images/blink-accounts/school-fees.svg" alt="Generic placeholder image" />
                                          </div>
                                          <div className="flex-grow-1 chat-user-box">
                                              <p className="user-title m-0 text-uppercase font-14px">School fees</p>
                                          </div>
  
                                      </a>
  
                                      <a href="javascript: void(0);" className="d-flex px-3 mb-3 pl-0 align-items-center">
                                          <div className="flex-shrink-0 me-3">
                                              <img className="rounded-circle avatar-sm" src="assets/images/blink-accounts/transport.svg" alt="Generic placeholder image" />
                                          </div>
                                          <div className="flex-grow-1 chat-user-box">
                                              <p className="user-title m-0 text-uppercase font-14px">Transport</p>
                                          </div>
  
                                      </a>
  
                                      <a href="javascript: void(0);" className="d-flex px-3 mb-3 pl-0 align-items-center">
                                          <div className="flex-shrink-0 me-3">
                                              <img className="rounded-circle avatar-sm" src="assets/images/blink-accounts/savings.svg" alt="Generic placeholder image" />
                                          </div>
                                          <div className="flex-grow-1 chat-user-box">
                                              <p className="user-title m-0 text-uppercase font-14px">Savings</p>
                                          </div>
  
                                      </a>
                                  
                                  </div>
  
                                  <label for="" className="text-capitalize">Amount to send</label>
                                  <div className="form-floating mb-3">
                                      <input type="text" className="form-control font-21 text-info form-control-lg" id="amount-input" placeholder="Enter Name"/>
                                      <label for="floatingnameInput">KES</label>
                                  </div>
                              </div>
                              
                          </div>
                          <div className="send-method d-none payment-panel">
                              <label for="" className="mb-0 pb-0">Payment Mode</label>
                              <p><small className="text-muted">How would you like to send this money?</small></p>
  
                              <div>
                                  <div className="accordion" id="accordionExample">
                                      <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingOne">
                                              <button className="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  <div className="flex-shrink-0 me-3">
                                                      <img className="rounded-circle" src="assets/images/payment-options/mobile.svg" alt="Mobile Money" height="45"/>
                                                  </div>
                                                  <div className="d-flex flex-column">
                                                      <p className="m-0 p-0 text-uppercase">Mobile Money</p>                                                
                                                      <p className="mb-0 p-0"> <small>Eg Mpesa, Airtel Money, MTN ...</small></p>
                                                  </div>
                                              </button>
                                          </h2>
                                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                  <div>
                                                      <p>
                                                          A payment request of <strong className="text-black">KES 235</strong> plus <strong className="text-black">KES 50 as transaction</strong> fee will be sent to the MPESA number you enter below.
                                                      </p>
                                                  </div>
                                                  <div className="form-group">
                                                      <label for="">Your MPESA Phone Number</label>
                                                      <div className="form-floating mb-3">
                                                          <input type="text" className="form-control font-21 text-success form-control-lg" id="phone-input" placeholder="Enter Name"/>
                                                          <label for="floatingnameInput">Phone No.</label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingTwo">
                                              <button className="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                  <div className="flex-shrink-0 me-3">
                                                      <div className="avatar-sm">
                                                          <span className="avatar-title bg-primary bg-soft text-primary rounded-circle font-size-16">
                                                              YA
                                                          </span>
                                                      </div>
                                                  </div>
                                                  <div className="d-flex flex-column">
                                                      <p className="m-0 p-0 text-uppercase">My Guardian Wallet (Yemi Alade)</p>                                                
                                                      <p className="mb-0 p-0"> <small>My Wallet Bal: <strong>KES 25,236</strong></small></p>
  
                                                      
                                                  </div>
                                              </button>
                                          </h2>
                                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                  <div className="text-muted">
                                                      <p><strong className="text-black">KSH 250</strong> plus <strong className="text-black">KES 50 as transaction fee</strong> will be deducted from your Guardian Blink Wallet and the amount will be credited to <strong className="text-black">Alex's Blink Wallet Account.</strong></p>
                                              
                                                  </div>
                                                  <div className="form-group">
                                                      <label for="" className="text-capitalize">Enter your Account's PIN to confirm</label>
                                                      <div className="form-floating mb-3">
                                                          <input type="password" className="form-control text-success form-control-lg pb-3" id="password-input" placeholder="Enter Name"/>
                                                          <label for="floatingnameInput">Your Password</label>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="d-none transaction-summary payment-panel">
                              <label for="">Transaction Breakdown</label>
                              <div className="border p-4 rounded ">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="text-muted ">
                                              Recepient                                            
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              Alex Wanjala                                           
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6">
                                          <div className="text-muted mt-4">
                                              Blink Account                                           
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              Pocket Money Wallet                                         
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6">
                                          <div className="text-muted mt-4">
                                              Being Debited from                                           
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              MPESA                                        
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6">
                                          <div className="text-muted mt-4">
                                              Amount Being sent                                           
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              KES 250                                        
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6">
                                          <div className="text-muted mt-4">
                                              Transaction Fee                                          
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              KES 50                                        
                                          </div>
                                      </div>
                                      <div className="col-12 text-black"><hr className="mb-0 pb-0"/></div>
  
                                      <div className="col-lg-6 text-uppercase">
                                          <div className="text-muted mt-4 font-21">
                                              Total                                          
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end text-uppercase">
                                          <div className=" text-right text-black font-21 fw-bold">
                                              KES 300                                        
                                          </div>
                                      </div>
                                  </div>
  
                                  <div className="mpesa-confirmation ">
                                      <p className="text-muted mt-4">A payment request of <strong className="text-black">KES 300</strong> will be sent to your <strong className="text-black">phone number (0704549859)</strong> soon after you click the <strong className="text-black text-capitalize">Send Money</strong> button bellow. 
                                          <br/>
                                          <br/>
                                          Remember to <strong className="text-black">Check your phone</strong> to confirm payment by entering your Mpesa pin.</p>
  
                                          <button href="javascript: void(0);" className="btn btn-primary btn-flex flex-grow-1 waves-effect btn-send waves-light text-center w-100">
                                              <div className="d-flex justify-content-center align-items-center"> 
                                                  <div className="stk-timer-container d-none justify-content-center align-items-center">
                                                      <span className="mdi mdi-timer-outline font-16px"></span>
                                                      <span className="stk-timer px-2"></span>
                                                  </div>
                                                  <div className="justify-content-center align-items-center d-flex">
                                                      <span className="px-2">Send Money</span> 
                                                      <div className="flip-x"><i className="mdi mdi-reply ms-3 font-16px"></i></div>
                                                  </div>
  
                                              </div>
                                          </button>
                                  </div>
  
                                  <div className="my-wallet-confirmation d-none">
                                      <p className="text-muted mt-4 "><strong className="text-uppercase text-black">KES 300</strong> will be deducted from your guardian blink wallet and amount will be credited to <strong className="text-capitalize text-black">Alex's pocket money account</strong>.</p>
                                      <p className="text-muted">confirm transaction by clicking the <strong className="text-capitalize text-black">send money</strong> button.</p>
                                      
                                      <button href="javascript: void(0);" className="btn btn-primary btn-flex flex-grow-1 waves-effect waves-light text-center w-100">
                                          <div className="d-flex justify-content-center align-items-center"> <span className="mx-2">Send Money</span> <div className="flip-x"><i className="mdi mdi-reply flip-x ms-3 font-16px"></i></div></div>
                                      </button>
  
                                  </div>
  
                                  
                              </div>
                          </div>
                          <div className="text-center d-flex flex-column justify-content-around align-items-center sent-success d-none payment-panel">
                              <div className="success-image mb-4">
                                  <img src="assets/images/payment-confirmation-images/sent.svg" height="200" alt=""/>                                
                              </div>
                              <h4 className="text-blink-primary fw-bold">We Have A blink!</h4>
                              <p className="text-muted mb-4"><strong className="text-black">KES 300</strong> has been sent to <strong className="text-black">Tom Jerry</strong> successfully as his <strong className="text-black">pocket Money</strong>. New Balance is KES 12,306</p>
  
                              <div className="border p-4 rounded ">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="text-muted text-left">
                                              Previouse Balance                                           
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              KES 53                                        
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6">
                                          <div className="text-muted mt-4 text-left">
                                              Amount Sent                                          
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              KES 250                                        
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6">
                                          <div className="text-muted mt-4 text-left">
                                              Transaction Fee                                          
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end">
                                          <div className=" text-right text-black">
                                              KES 50                                        
                                          </div>
                                      </div>
                                      <div className="col-12 text-black"><hr className="mb-0 pb-0"/></div>
  
                                      <div className="col-lg-6 text-uppercase">
                                          <div className="text-muted mt-4 font-21 text-left fw-bold">
                                              New Balance                                          
                                          </div>
                                      </div>
  
                                      <div className="col-lg-6 align-self-end text-uppercase">
                                          <div className=" text-right text-black font-21 fw-bold">
                                              KES 303                                        
                                          </div>
                                      </div>
                                  </div>
  
                                          
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="modal-footer d-flex">
                      <button href="javascript: void(0);" disabled className="btn btn-outline-light waves-effect waves-light payment-prev"> <i className="mdi mdi-arrow-left ms-1"></i> Previouse </button>
                      <button href="javascript: void(0);" className="btn btn-primary waves-effect waves-light payment-next">Next <i className="mdi mdi-arrow-right ms-1"></i></button>
                      <button href="javascript: void(0);" className="btn btn-primary btn-flex flex-grow-1 waves-effect waves-light text-center d-none">
                      <div className="d-flex justify-content-center align-items-center"> <span>Send Money</span> <div className="flip-x"><i className="mdi mdi-reply flip-x ms-3 font-16px"></i></div></div>
                      </button>
                  </div>
              </div>
              </div>
          </div>
          
  
          
        </>
      );
}
export default SendMoney;
