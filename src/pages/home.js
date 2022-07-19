import React from 'react';
import {Helmet} from "react-helmet";
// import $ from 'jquery';
// import   JquerryAccordion   from "./customPlugins/jquerryAccordion";
class Home extends React.Component {
   
    render() {
        return ( 
            <>

            <Helmet>
            <title>Blink! | Digital Wallet for Students</title>
            </Helmet>    {/* the modals container */}
            <div className="container-fluid">

{/* <!-- start page title --> */}
<div className="row">
    <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>

        </div>
    </div>
</div>
{/* <!-- end page title --> */}
<div className="row">
    <div className="col-lg-12 px-sm-30px">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-4 d-flex align-content-center">
                        <div className="dropdown d-inline-block w-100 d-flex align-items-center">
                            <button type="button" className="btn header-item waves-effect align-items-center w-100  text-left d-flex" id="blinkers-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="flex-shrink-0 me-3">
                                    <img className="rounded-circle" src="assets/images/logo-files/blink-icon2.svg" alt="Generic placeholder image" height="65"/>
                                </div>
                                
                                <div className="flex-grow-1 chat-user-box me-3">
                                    <h6 className="user-title m-0">All My Blinkers</h6>
                                    <p className="text-muted m-0 p-0">Blink Academy</p>
                                </div>
                                <i className="mdi mdi-chevron-down d-inline d-xl-inline-block me-3 font-21"></i>
                                
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
                                <div data-simplebar  style={{ maxheight: "230px" }}>
                                    <a href="javascript: void(0);" className="d-flex px-3 pb-2">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36"/>
                                        </div>
                                        <div className="flex-grow-1 chat-user-box">
                                            <p className="user-title m-0">Alex wankala</p>
                                            <p className="text-muted">St Mary's primary school</p>
                                        </div>                                                            
                                    </a>

                                    <a href="javascript: void(0);" className="d-flex px-3 pb-2">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36"/>
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

                            <ul className="list-inline user-chat-nav text-end mb-0">                                                   

                                <li className="list-inline-item pr-4">
                                    <div className="dropdown">
                                        <button className="btn nav-btn mr-4" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-start">
                                            <a className="dropdown-item" href="#"><i className="font-size-15 mdi mdi-shield-account me-3"></i>View Account</a>
                                            <a className="dropdown-item" href="#"><i className="font-size-15 mdi mdi-clipboard-text me-3"></i>Tasks</a>
                                            <a className="dropdown-item text-danger" href="#"><i className="font-size-15 mdi mdi-lock-remove me-3"></i>Block Account</a>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 align-self-center">
                        <div className="text-lg-left mt-4 mt-lg-0">
                            <div className="row">
                                <div className="col-3 col-sm-3 col-md-3">
                                    <div>
                                        <div className="avatar-xs mb-3">
                                            <span className="avatar-title rounded-circle bg-info font-size-16">
                                                    <i className="mdi mdi-account-child text-white"></i>
                                                </span>
                                        </div>
                                        <p className="text-muted text-truncate mb-2">All Blinkers</p>
                                        <h5 className="mb-0">2</h5>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3">
                                    <div>
                                        <div className="avatar-xs mb-3">
                                            <span className="avatar-title rounded-circle bg-success font-size-16">
                                                    <i className="mdi mdi-cash-multiple text-white"></i>
                                                </span>
                                        </div>
                                        <p className="text-muted text-truncate mb-2">Avg. Daily Consumption</p>
                                        <h5 className="mb-0">KES 450</h5>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3">
                                    <div>
                                        <div className="avatar-xs mb-3">
                                            <span className="avatar-title rounded-circle font-size-16">
                                                    <i className="mdi mdi-swap-horizontal text-white"></i>
                                                </span>
                                        </div>
                                        <p className="text-muted text-truncate mb-2">Avg Daily Transactions</p>
                                        <h5 className="mb-0">22</h5>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3">
                                    <div>
                                        <div className="avatar-xs mb-3">
                                            <span className="avatar-title rounded-circle bg-pink font-size-16">
                                                    <i className="mdi mdi-clipboard-edit-outline text-white"></i>
                                                </span>
                                        </div>
                                        <p className="text-muted text-truncate mb-2">Pending Tasks</p>
                                        <h5 className="mb-0">180</h5>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>
                {/* <!-- end row --> */}
            </div>
        </div>
    </div>
</div>



<div className="row">
    <div className="col-md-6 col-lg-4 col-sm-12 px-sm-30px">
        <div className="row">
            <div className="col-12 d-non ">
                <div className="card bg-primary bg-primary-blink blink-card-bg">
                    <div className="card-body blink-car">

                       <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="flex-shrink-0 align-self-center mb-3">
                                <img src="assets/images/users/avatar-1.jpg" className="avatar-md rounded-circle img-thumbnail" alt=""/>
                            
                            </div>
                            <div>
                                <img src="assets/images/logo-files/blink-white.svg" className="img" alt="" height="40px"/>
                            </div>
                       </div>

                        <div className="d-flex align-content-center align-items-center mb-3">
                           
                            <div className="flex-grow-1">
                                <p className="m-0 p-0 text-white-50">Blink Wallet Holder</p>
                                <h4 className="font-size-15 mb-0 text-white">Alex Wanjala</h4>
                                
                            </div>

                            <div className="flex-grow-1 text-right">
                                <p className="m-0 p-0 text-white-50">School</p>
                                <h5 className="font-size-15 mb-0 text-white">Blink Acadamy</h5>
                                
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <span className="badge  badge-soft-light font-size-12"> KES 50 </span> <span className="ms-2 mb-0 pb-0 text-truncate text-white">Used Today</span>

                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-end justify-content-end text-right">
                                <span className="mt-0 mb-0 text-nowrap"><span className="badge badge-soft-light font-size-11 me-2"> 0.6% <i className="mdi mdi-arrow-up"></i> </span> <span className="text-white opacity-50">From Yesterday</span></span>

                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="text-white">
                            <p className="text-white-50 text-truncate mb-0">Wallet Balance.</p>
                            <h3 className="text-white">KES 9,134.39</h3>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 d-none">
                <div className="card bg-primary bg-primary-blink">
                    <div className="card-body">
                        <div className="d-flex align-content-center align-items-center mb-3">
                            <div className="flex-shrink-0 align-self-center me-3">
                                <img src="assets/images/users/avatar-1.jpg" className="avatar-sm rounded-circle img-thumbnail" alt=""/>
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="font-size-15 mb-0 text-white">Alex Wanjala</h5>
                                <p className="m-0 p-0 text-white-50">Blink Academy</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="text-white">
                                    <p className="text-white-50 text-truncate mb-0">Wallet Balance.</p>
                                    <h4 className="text-white">KES 9,134.39</h4>
                                   
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-end justify-content-end">
                                <p className="text-right mb-0 pb-0 text-white-50">Blink ID: 1235 2659 2358</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card history-card">
                    <div className="card-header bg-white">
                        <h4 className="card-title mb-0 text-capitalize">Recent Transactions for all blinkers</h4>
                    </div>
                    <div className="card-body px-2">                                           

                        <div className="table-responsive">
                            <table className="table table-nowrap  align-middle mb-0 table-hover ">
                            <thead className="table-light">
                                <tr>
                                    
                                    <th className="" colspan="2">
                                        Transaction details
                                    </th>
                                    <th className="text-right">
                                        <span>Amount & time</span>
                                    </th>
                                </tr>
                            </thead>
                                
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs me-0">
                                                    <span className="avatar-title rounded-circle bg-danger bg-soft text-danger font-size-18">
                                                        <i className="mdi mdi-arrow-up-bold"></i>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                        </th>
                                        <td>
                                            <div className="text-truncate">
                                                Oranges (3), Mandazi
                                            </div>
                                            <p className="text-muted p-0 m-0">Alex Wanjala</p>
                                        </td>
                                        <td className="text-right">
                                            <h5 className="font-size-14 mb-1 text-danger">KES 50</h5>
                                            <div className="text-muted">20 Jan, 08:47 AM</div>
                                        </td>                                                           
                                    </tr>

                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs me-0">
                                                    <span className="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                                        <i className="mdi mdi-arrow-down-bold"></i>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                        </th>
                                        <td>
                                            <div className="text-truncate">
                                                Wallet top up from Kelvin
                                            </div>
                                            <p className="text-muted p-0 m-0">Alex Wanjala</p>
                                        </td>
                                        <td className="text-right">
                                            <h5 className="font-size-14 mb-1 text-success">KES 50</h5>
                                            <div className="text-muted">20 Jan, 08:47 AM</div>
                                        </td>                                                           
                                    </tr>

                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs me-0">
                                                    <span className="avatar-title rounded-circle bg-danger bg-soft text-danger font-size-18">
                                                        <i className="mdi mdi-arrow-up-bold"></i>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                        </th>
                                        <td>
                                            <div className="text-truncate">
                                                Oranges (3), Mandazi
                                            </div>
                                            <p className="text-muted p-0 m-0">Alex Wanjala</p>
                                        </td>
                                        <td className="text-right">
                                            <h5 className="font-size-14 mb-1 text-danger">KES 50</h5>
                                            <div className="text-muted">20 Jan, 08:47 AM</div>
                                        </td>                                                           
                                    </tr>

                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs me-0">
                                                    <span className="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                                        <i className="mdi mdi-arrow-down-bold"></i>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                        </th>
                                        <td>
                                            <div className="text-truncate">
                                                Wallet top up from Kelvin
                                            </div>
                                            <p className="text-muted p-0 m-0">Alex Wanjala</p>
                                        </td>
                                        <td className="text-right">
                                            <h5 className="font-size-14 mb-1 text-success">KES 50</h5>
                                            <div className="text-muted">20 Jan, 08:47 AM</div>
                                        </td>                                                           
                                    </tr>

                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs me-0">
                                                    <span className="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                                        <i className="mdi mdi-arrow-down-bold"></i>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                        </th>
                                        <td>
                                            <div className="text-truncate">
                                                Wallet top up from Kelvin
                                            </div>
                                            <p className="text-muted p-0 m-0">Alex Wanjala</p>
                                        </td>
                                        <td className="text-right">
                                            <h5 className="font-size-14 mb-1 text-danger">KES 50</h5>
                                            <div className="text-muted">20 Jan, 08:47 AM</div>
                                        </td>                                                           
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center mt-4"><a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-6 col-lg-8 col-sm-12 px-sm-30px">
        <div className="card expenditure-card">
            <div className="card-body">
                <h4 className="card-title mb-0">Expenditure</h4>
                <small className="mb-4 text-muted">The last 12 Months for All Blinkers</small>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="member-salary-chart" className="apex-charts" dir="ltr"></div>
                    </div>

                    <hr/>


<div className="col-lg-6 col-6 col-sm-12 mb-3">
    <div className="text-muted pt-5">
        <div className="row">
            <div className="col-auto mb-4">
                <div className="text-capitalize pe-4">
                    <p className="mb-0">Last month's Expenditure</p>
                    <h5>KES 639</h5>
                </div>
            </div>
            <div className="col-auto">
                <div className="text-capitalize">
                    <p className="mb-0">This month's Expenditure</p>
                    <h4 className="d-flex">
                        <span className="pr-2">KES 562</span>
                        <div className="font-size-12 mt-1 text-muted"><span className="badge badge-soft-success font-size-12 me-1"> + 0.2% </span> From previous period</div>
                    </h4>
                    
                </div>
                <div className="mt-3 d-none">
                    <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View Details <i className="mdi mdi-chevron-right ms-1"></i></a>
                </div>
            </div>
            

            
            
          
        </div>                                                
    </div>
</div>
<div className="col-lg-6 col-6 col-sm-12">
    <h4 className="card-title font-12px pt-5 mb-0 ">Expenditure By Other Account Types</h4>
    <p className="text-muted">Expenditure and transactions </p>
    <div>
        <div className="bg-danger bg-soft px-3 py-2 mb-3 d-flex align-items-center justify-content-between">
           
               
                <div className="d-flex align-items-center">
                    <div className="me-3">
                       
                        <img className="me-2" src="assets/images/blink-accounts/alternate/schoolFees.svg" alt="" height="40px"/>
                   </div>
                    <div>
                        <h6 className="mb-0 text-capittalize">School fees</h6>
                        <p className="mb-0 p-0">22 Transactions</p>
                    </div>
                </div>

               <div className="text-right ms-3 d-flex flex-column">
                    <small className="mb-0 pb-0">Transaction Amount</small>
                    <strong className="">KES 23,360</strong>
               </div>
               
        </div>

        <div className="bg-danger bg-soft px-3 py-2 mb-3 d-flex align-items-center justify-content-between">
           
               
            <div className="d-flex align-items-center">
                <div className="me-3">
                   
                    <img className="me-2" src="assets/images/blink-accounts/alternate/savings.svg" alt="" height="40px"/>
               </div>
                <div>
                    <h6 className="mb-0 text-capittalize">Savings Account</h6>
                    <p className="mb-0 p-0">22 Transactions</p>
                </div>
            </div>

           <div className="text-right ms-3 d-flex flex-column">
                <small className="mb-0 pb-0">Transaction Amount</small>
                <strong className="">KES 23,360</strong>
           </div>
           
        </div>

        <div className="bg-danger bg-soft px-3 py-2 mb-3 d-flex align-items-center justify-content-between">
           
               
            <div className="d-flex align-items-center">
                <div className="me-3">
                   
                    <img className="me-2" src="assets/images/blink-accounts/alternate/transport.svg" alt="" height="40px"/>
               </div>
                <div>
                    <h6 className="mb-0 text-capittalize">Transport</h6>
                    <p className="mb-0 p-0">22 Transactions</p>
                </div>
            </div>

           <div className="text-right ms-3 d-flex flex-column">
                <small className="mb-0 pb-0">Transaction Amount</small>
                <strong className="">KES 23,360</strong>
           </div>
           
        </div>
    </div>
</div>

                    
                </div>
                
            </div>
        </div>

    </div>
    

</div>
{/* <!-- end row --> */}



</div>
            </>
        );
    }

}
export default Home;