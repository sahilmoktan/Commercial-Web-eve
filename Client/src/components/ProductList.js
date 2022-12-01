import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <>
      <br />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li>
                      <Link to="#">Fresh Meat</Link>
                    </li>
                    <li>
                      <Link to="#">Vegetables</Link>
                    </li>
                    <li>
                      <Link to="#">Fruit & Nut Gifts</Link>
                    </li>
                    <li>
                      <Link to="#">Fresh Berries</Link>
                    </li>
                    <li>
                      <Link to="#">Ocean Foods</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10"
                      data-max="540"
                    >
                      <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span
                        tabindex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                      <span
                        tabindex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  <div className="sidebar__item__color sidebar__item__color--white">
                    <label for="white">
                      White
                      <input type="radio" id="white" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--gray">
                    <label for="gray">
                      Gray
                      <input type="radio" id="gray" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--red">
                    <label for="red">
                      Red
                      <input type="radio" id="red" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--black">
                    <label for="black">
                      Black
                      <input type="radio" id="black" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--blue">
                    <label for="blue">
                      Blue
                      <input type="radio" id="blue" />
                    </label>
                  </div>
                  <div className="sidebar__item__color sidebar__item__color--green">
                    <label for="green">
                      Green
                      <input type="radio" id="green" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  <div className="sidebar__item__size">
                    <label for="large">
                      Large
                      <input type="radio" id="large" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label for="medium">
                      Medium
                      <input type="radio" id="medium" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label for="small">
                      Small
                      <input type="radio" id="small" />
                    </label>
                  </div>
                  <div className="sidebar__item__size">
                    <label for="tiny">
                      Tiny
                      <input type="radio" id="tiny" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                      <div className="latest-prdouct__slider__item">
                        <Link to="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                        <Link to="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                        <Link to="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                      </div>
                      <div className="latest-prdouct__slider__item">
                        <Link to="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                        <Link to="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                        <Link to="#" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value="0">High to Low</option>
                        <option value="0">Low to High</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/product/product-11.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <Link to="#">
                            <i className="fa fa-heart"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="#">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link to="#">Crab Pool Security</Link>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/product/product-12.jpg"
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <Link to="#">
                            <i className="fa fa-heart"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="#">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link to="#">Crab Pool Security</Link>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__pagination">
                <Link to="#">1</Link>
                <Link to="#">2</Link>
                <Link to="#">3</Link>
                <Link to="#">
                  <i className="fa fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
