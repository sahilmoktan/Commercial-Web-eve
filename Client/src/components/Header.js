import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header shop">
        {/* <!-- Topbar --> */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                {/* <!-- Top Left --> */}
                <div className="top-left">
                  <ul className="list-main">
                    <li>
                      <i className="ti-headphone-alt"></i> +977 9863022025
                    </li>
                    <li>
                      <i className="ti-email"></i> mail@bajesales.com.np
                    </li>
                  </ul>
                </div>
                {/* <!--/ End Top Left --> */}
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                {/* <!-- Top Right --> */}
                <div className="right-content">
                  <ul className="list-main">
                    <li>
                      <i className="ti-location-pin"></i> Store location
                    </li>
                    <li>
                      <i className="ti-alarm-clock"></i>{" "}
                      <Link to="/home">Daily deal</Link>
                    </li>
                    <li>
                      <i className="ti-user"></i>{" "}
                      <Link to="/home">My account</Link>
                    </li>
                    <li>
                      <i className="ti-power-off"></i>
                      <Link to="login.html/">Logout</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Top Right --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Topbar --> */}
      </header>
    </>
  );
}

export default Header;
