import React from "react";
import { Helmet } from "react-helmet";
import $ from "jquery";
class Loader extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Blink! | Digital Wallet for Students</title>
        </Helmet>
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
}
export default Loader;
