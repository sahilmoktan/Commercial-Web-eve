import React from "react";
import { Link } from "react-router-dom";

import "./mainbanner.css";

function MainBanner() {
  return (
    <>
      <div className="main-box">
        <div className="imgDiv">
          <div className="bannertext">
            <h1>
              <span>UP TO 50% OFF </span>Exclusive Sale
            </h1>
            <p>
              Maboriosam in a nesciung eget magnae <br /> dapibus disting
              tloctio in the find it pereri <br /> odiy maboriosm.
            </p>
            <div className="button">
              <Link to="/product">Shop Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
