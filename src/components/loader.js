import React from "react";
import { Helmet } from "react-helmet";
import $ from "jquery";


const Loader=()=>{
  return (
    <>
      <div id="preloader" className="">
        <div id="status" className="">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
