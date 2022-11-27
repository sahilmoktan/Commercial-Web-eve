import React from "react";
import { Link } from "react-router-dom";
// import mainImg from "../assets/1900x700.png";
// import css from "./mainbanner.css";

function MainBanner() {
  return (
    <>
      {/* <div className={css.background}> */}
      <div className="hero-slider">
        {/* style={{ background: `url(${mainImg})` }} */}
        <div className="single-slider">
          <div className="text-inner">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <h1>
                    <span>UP TO 50% OFF </span>Exclusive Sale
                  </h1>
                  <p>
                    Maboriosam in a nesciung eget magnae <br /> dapibus disting
                    tloctio in the find it pereri <br /> odiy maboriosm.
                  </p>
                  <div className="button">
                    <Link to="/home">Shop Now!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default MainBanner;
