import React from 'react';
import {Helmet} from "react-helmet";
// import $ from 'jquery';
// import   JquerryAccordion   from "./customPlugins/jquerryAccordion";
const Transactions =()=> {
   
    return ( 
        <>

        <Helmet>
        <title>Blink! | All Transactions</title>
        </Helmet>    {/* the modals container */}
        <div className="container-fluid">
             {/* <!-- start page title --> */}
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Blink Transactions</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                            <li className="breadcrumb-item active">Transactions</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- end page title --> */}
        </div>
        
        </>
    );
}
export default Transactions;