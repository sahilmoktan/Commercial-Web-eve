import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
        <div className="middle-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">
                {/* <!-- Logo --> */}
                <div className="logo">
                  <Link to="index.html">
                    <img src="assets/images/logo.png" alt="logo" />
                  </Link>
                </div>
                {/* <!--/ End Logo --> */}
                {/* <!-- Search Form --> */}
                <div className="search-top">
                  <div className="top-search">
                    <Link to="/0">
                      <i className="ti-search"></i>
                    </Link>
                  </div>
                  {/* <!-- Search Form --> */}
                  <div className="search-top">
                    <form className="search-form">
                      <input
                        type="text"
                        placeholder="Search here..."
                        name="search"
                      />
                      <button value="search" type="submit">
                        <i className="ti-search"></i>
                      </button>
                    </form>
                  </div>
                  {/* <!--/ End Search Form --> */}
                </div>
                {/* <!--/ End Search Form --> */}
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                  <div className="search-bar">
                    <select>
                      <option selected="selected">All Category</option>
                      <option>watch</option>
                      <option>mobile</option>
                      <option>kids item</option>
                    </select>
                    <form>
                      <input
                        name="search"
                        placeholder="Search Products Here....."
                        type="search"
                      />
                      <button className="btnn">
                        <i className="ti-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                  {/* <!-- Search Form --> */}
                  <div className="sinlge-bar">
                    <Link to="/home" className="single-icon">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </Link>
                  </div>
                  <div className="sinlge-bar">
                    <Link to="/home" className="single-icon">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </Link>
                  </div>
                  <div className="sinlge-bar shopping">
                    <Link to="/home" className="single-icon">
                      <i className="ti-bag"></i>{" "}
                      <span className="total-count">2</span>
                    </Link>
                    {/* <!-- Shopping Item --> */}
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>2 Items</span>
                        <Link to="/home">View Cart</Link>
                      </div>
                      <ul className="shopping-list">
                        <li>
                          <Link
                            to="/home"
                            className="remove"
                            title="Remove this item"
                          >
                            <i className="fa fa-remove"></i>
                          </Link>
                          <Link className="cart-img" to="/home">
                            <img
                              src="https://via.placeholder.com/70x70"
                              alt="/home"
                            />
                          </Link>
                          <h4>
                            <Link to="/home">Woman Ring</Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">$99.00</span>
                          </p>
                        </li>
                        <li>
                          <Link
                            to="/home"
                            className="remove"
                            title="Remove this item"
                          >
                            <i className="fa fa-remove"></i>
                          </Link>
                          <Link className="cart-img" to="/home">
                            <img
                              src="https://via.placeholder.com/70x70"
                              alt="/home"
                            />
                          </Link>
                          <h4>
                            <Link to="/home">Woman Necklace</Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">$35.00</span>
                          </p>
                        </li>
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">$134.00</span>
                        </div>
                        <Link to="checkout.html" className="btn animate">
                          Checkout
                        </Link>
                      </div>
                    </div>
                    {/* <!--/ End Shopping Item --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header Inner --> */}
        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-12">
                  <div className="menu-area">
                    {/* <!-- Main Menu --> */}
                    <nav className="navbar navbar-expand-lg">
                      <div className="navbar-collapse">
                        <div className="nav-inner">
                          <ul className="nav main-menu menu navbar-nav">
                            <li className="active">
                              <Link to="/home">Home</Link>
                            </li>
                            <li>
                              <Link to="/home">Product</Link>
                            </li>
                            <li>
                              <Link to="/home">Service</Link>
                            </li>
                            <li>
                              <Link to="/home">
                                Shop<i className="ti-angle-down"></i>
                                <span className="new">New</span>
                              </Link>
                              <ul className="dropdown">
                                <li>
                                  <Link to="cart.html">Cart</Link>
                                </li>
                                <li>
                                  <Link to="checkout.html">Checkout</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/home">Pages</Link>
                            </li>
                            <li>
                              <Link to="/home">
                                Blog<i className="ti-angle-down"></i>
                              </Link>
                              <ul className="dropdown">
                                <li>
                                  <Link to="blog-single-sidebar.html">
                                    Blog Single Sidebar
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="contact.html">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                    {/* <!--/ End Main Menu -->	 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Header Inner --> */}
      </header>
    </>
  );
}

export default Navbar;
