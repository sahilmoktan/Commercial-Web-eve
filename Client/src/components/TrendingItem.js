import React from "react";
import { Link } from "react-router-dom";

function TrendingItem() {
  return (
    <>
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">
                  {/* <!-- Tab Nav --> */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-toggle="tab"
                        to="#man"
                        role="tab"
                      >
                        Man
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#women"
                        role="tab"
                      >
                        Woman
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#kids"
                        role="tab"
                      >
                        Kids
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#accessories"
                        role="tab"
                      >
                        Accessories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#essential"
                        role="tab"
                      >
                        Essential
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#prices"
                        role="tab"
                      >
                        Prices
                      </Link>
                    </li>
                  </ul>
                  {/* <!--/ End Tab Nav --> */}
                </div>
                <div className="tab-content" id="myTabContent">
                  {/* <!-- Start Single Tab --> */}
                  <div
                    className="tab-pane fade show active"
                    id="man"
                    role="tabpanel"
                  >
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Women Hot Collection
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Awesome Pink Show
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Awesome Bags Collection
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="new">New</span>
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Women Pant Collectons
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Awesome Bags Collection
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="price-dec">30% Off</span>
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Awesome Cap For Women
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Polo Dress For Women
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <Link to="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="out-of-stock">Hot</span>
                              </Link>
                              <div className="button-head">
                                <div className="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div className="product-action-2">
                                  <Link title="Add to cart" to="#">
                                    Add to cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <Link to="product-details.html">
                                  Black Sunglass For Women
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingItem;
