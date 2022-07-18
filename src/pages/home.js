import React from 'react';
import {Helmet} from "react-helmet";
// import $ from 'jquery';
import   JquerryAccordion   from "./customPlugins/jquerryAccordion";
class Home extends React.Component {
   
    render() {
        return ( 
            <>

            <Helmet>
            <title>Blink! | Digital Wallet for Students</title>
            </Helmet>    {/* the modals container */}
                <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h4>Action Center</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>You have <strong className="text-danger">32</strong> tasks that need your immediate attention.</p>
                                <div className="mt-4">
                                    <div className="card border shadow-none mb-2">
                                        <a href="action-landlord-payments.html" className="text-body">
                                            <div className="p-2">
                                                <div className="d-flex">
                                                    <div className="avatar-xs align-self-center me-2">
                                                        <div className="avatar-title rounded bg-transparent text-success font-size-20">
                                                            <i className="mdi mdi-account-cash"></i>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-hidden me-auto">
                                                        <h5 className="font-size-13 text-truncate mb-1">Landlord Remunerations</h5>
                                                        <p className="text-muted text-truncate mb-0">KES 236,659</p>
                                                    </div>

                                                    <div className="ms-2">
                                                        <p className="text-muted">22 Landlords</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="card border shadow-none mb-2">
                                        <a href="action-payments.html" className="text-body">
                                            <div className="p-2">
                                                <div className="d-flex">
                                                    <div className="avatar-xs align-self-center me-2">
                                                        <div className="avatar-title rounded bg-transparent text-danger font-size-20">
                                                            <i className="mdi mdi-cash-remove"></i>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-hidden me-auto">
                                                        <h5 className="font-size-13 text-truncate mb-1">Flagged Payments</h5>
                                                        <p className="text-muted text-truncate mb-0">KES 23,500</p>
                                                    </div>

                                                    <div className="ms-2">
                                                        <p className="text-muted">22 Transactions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="card border shadow-none mb-2">
                                        <a href="action-agreements.html" className="text-body">
                                            <div className="p-2">
                                                <div className="d-flex">
                                                    <div className="avatar-xs align-self-center me-2">
                                                        <div className="avatar-title rounded bg-transparent text-info font-size-20">
                                                            <i className="mdi mdi-file-document-edit"></i>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-hidden me-auto">
                                                        <h5 className="font-size-13 text-truncate mb-1">Tenancy Agreements</h5>
                                                        <p className="text-muted text-truncate mb-0">22 Units</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="card border shadow-none mb-2">
                                        <a href="action-notice.html" className="text-body">
                                            <div className="p-2">
                                                <div className="d-flex">
                                                    <div className="avatar-xs align-self-center me-2">
                                                        <div className="avatar-title rounded bg-transparent text-warning font-size-20">
                                                            <i className="mdi mdi-alert  "></i>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-hidden me-auto">
                                                        <h5 className="font-size-13 text-truncate mb-1">Tenant Notices</h5>
                                                        <p className="text-muted text-truncate mb-0">21 Tenants</p>
                                                    </div>

                                                    <div className="ms-2">
                                                        <p className="text-muted">2 Premises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="card border shadow-none d-none">
                                        <a href="tenant-distress.html" className="text-body">
                                            <div className="p-2">
                                                <div className="d-flex">
                                                    <div className="avatar-xs align-self-center me-2">
                                                        <div className="avatar-title rounded bg-transparent text-warning font-size-20">
                                                            <i className="mdi mdi-lock "></i>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-hidden me-auto">
                                                        <h5 className="font-size-13 text-truncate mb-1">Distress Update</h5>
                                                        <p className="text-muted text-truncate mb-0">20 Tenants</p>
                                                    </div>

                                                    <div className="ms-2">
                                                        <p className="text-muted"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
export default Home;