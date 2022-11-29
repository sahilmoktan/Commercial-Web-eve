import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* <!-- Footer Top --> */}
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className="single-footer about">
                  <div className="logo">
                    <Link to="index.html">
                      <img src="assets/images/logo2.png" alt="/" />
                    </Link>
                  </div>
                  <p className="text">
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                    luctus, metus.
                  </p>
                  <p className="call">
                    Got Question? Call us 24/7
                    <span>
                      <Link to="tel:123456789">+0123 456 789</Link>
                    </span>
                  </p>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className="single-footer links">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Faq</Link>
                    </li>
                    <li>
                      <Link to="/">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Help</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className="single-footer links">
                  <h4>Customer Service</h4>
                  <ul>
                    <li>
                      <Link to="/">Payment Methods</Link>
                    </li>
                    <li>
                      <Link to="/">Money-back</Link>
                    </li>
                    <li>
                      <Link to="/">Returns</Link>
                    </li>
                    <li>
                      <Link to="/">Shipping</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className="single-footer social">
                  <h4>Get In Tuch</h4>
                  {/* <!-- Single Widget --> */}
                  <div className="contact">
                    <ul>
                      <li>NO. 342 - London Oxford Street.</li>
                      <li>012 United Kingdom.</li>
                      <li>info@eshop.com</li>
                      <li>+032 3456 7890</li>
                    </ul>
                  </div>
                  {/* <!-- End Single Widget --> */}
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="ti-flickr"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer Top --> */}
        <div className="copyright">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="left">
                    <p>
                      Copyright © 2020{" "}
                      <Link to="http://www.wpthemesgrid.com" target="_blank">
                        Wpthemesgrid
                      </Link>{" "}
                      - All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="right">
                    <img src="assets/images/payments.png" alt="/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
