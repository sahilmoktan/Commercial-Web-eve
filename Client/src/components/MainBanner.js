import React from "react";
import { Link } from "react-router-dom";

import "./mainbanner.css";

const MainBanner = () => {
  return (
    <>
      <div className="main-box">
        <div className="imgDiv">
          <div className="bannertext">
            <h1>
              <span> UP TO 50% OFF </span> Exclusive Sale
            </h1>
            {/* <p>
              तपाइलाइ बाजे सेल्समा स्वागत छ । तपाइकाे एकमात्र राेजाइ,
              <br /> गर्व गछाै नेपाली हुनुमा । गर्व लाग्छ बाजे सेल्समा सामान{" "}
              <br /> अर्डर गर्न ।
            </p> */}
            <div className="button">
              <Link to="/product">Shop Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
