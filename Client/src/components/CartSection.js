import React from "react";
import { Link } from "react-router-dom";

function CartSection() {
  return (
    <>
      {/* Breadcrumbs */}
      <div class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="bread-inner">
                <ul class="bread-list">
                  <li>
                    <Link to="index1.html">
                      Home<i class="ti-arrow-right"></i>
                    </Link>
                  </li>
                  <li class="active">
                    <Link to="/Cart">Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/* Shopping Cart */}
      <div className="shopping-cart section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Shopping Summery --> */}
              <table className="table shopping-summery">
                <thead>
                  <tr className="main-hading">
                    <th>PRODUCT</th>
                    <th>NAME</th>
                    <th className="text-center">UNIT PRICE</th>
                    <th className="text-center">QUANTITY</th>
                    <th className="text-center">TOTAL</th>
                    <th className="text-center">
                      <i className="ti-trash remove-icon"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="image" data-title="No">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                    </td>
                    <td className="product-des" data-title="Description">
                      <p className="product-name">
                        <Link to="#">Women Dress</Link>
                      </p>
                      <p className="product-des">
                        Maboriosam in a tonto nesciung eget distingy
                        magndapibus.
                      </p>
                    </td>
                    <td className="price" data-title="Price">
                      <span>$110.00 </span>
                    </td>
                    <td className="qty" data-title="Qty">
                      {/* <!-- Input Order --> */}
                      <div className="input-group">
                        <div className="button minus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                          >
                            <i className="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          className="input-number"
                          data-min="1"
                          data-max="100"
                          value="1"
                        />
                        <div className="button plus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                          >
                            <i className="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                      {/* <!--/ End Input Order --> */}
                    </td>
                    <td className="total-amount" data-title="Total">
                      <span>$220.88</span>
                    </td>
                    <td className="action" data-title="Remove">
                      <Link to="#">
                        <i className="ti-trash remove-icon"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="image" data-title="No">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                    </td>
                    <td className="product-des" data-title="Description">
                      <p className="product-name">
                        <Link to="#">Women Dress</Link>
                      </p>
                      <p className="product-des">
                        Maboriosam in a tonto nesciung eget distingy
                        magndapibus.
                      </p>
                    </td>
                    <td className="price" data-title="Price">
                      <span>$110.00 </span>
                    </td>
                    <td className="qty" data-title="Qty">
                      {/* <!-- Input Order --> */}
                      <div className="input-group">
                        <div className="button minus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[2]"
                          >
                            <i className="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[2]"
                          className="input-number"
                          data-min="1"
                          data-max="100"
                          value="2"
                        />
                        <div className="button plus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[2]"
                          >
                            <i className="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                      {/* <!--/ End Input Order --> */}
                    </td>
                    <td className="total-amount" data-title="Total">
                      <span>$220.88</span>
                    </td>
                    <td className="action" data-title="Remove">
                      <Link to="#">
                        <i className="ti-trash remove-icon"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="image" data-title="No">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                    </td>
                    <td className="product-des" data-title="Description">
                      <p className="product-name">
                        <Link to="#">Women Dress</Link>
                      </p>
                      <p className="product-des">
                        Maboriosam in a tonto nesciung eget distingy
                        magndapibus.
                      </p>
                    </td>
                    <td className="price" data-title="Price">
                      <span>$110.00 </span>
                    </td>
                    <td className="qty" data-title="Qty">
                      {/* <!-- Input Order --> */}
                      <div className="input-group">
                        <div className="button minus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[3]"
                          >
                            <i className="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[3]"
                          className="input-number"
                          data-min="1"
                          data-max="100"
                          value="3"
                        />
                        <div className="button plus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[3]"
                          >
                            <i className="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                      {/* <!--/ End Input Order --> */}
                    </td>
                    <td className="total-amount" data-title="Total">
                      <span>$220.88</span>
                    </td>
                    <td className="action" data-title="Remove">
                      <Link to="#">
                        <i className="ti-trash remove-icon"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!--/ End Shopping Summery --> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <!-- Total Amount --> */}
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-5 col-12">
                    <div className="left">
                      <div className="coupon">
                        <form action="#" target="_blank">
                          <input
                            name="Coupon"
                            placeholder="Enter Your Coupon"
                          />
                          <button className="btn">Apply</button>
                        </form>
                      </div>
                      <div className="checkbox">
                        <label className="checkbox-inline" for="2">
                          <input name="news" id="2" type="checkbox" /> Shipping
                          (+10$)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7 col-12">
                    <div className="right">
                      <ul>
                        <li>
                          Cart Subtotal<span>$330.00</span>
                        </li>
                        <li>
                          Shipping<span>Free</span>
                        </li>
                        <li>
                          You Save<span>$20.00</span>
                        </li>
                        <li className="last">
                          You Pay<span>$310.00</span>
                        </li>
                      </ul>
                      <div className="button5">
                        <Link to="/Cart" className="btn">
                          Cart
                        </Link>
                        <Link to="#" className="btn">
                          Continue shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ End Total Amount --> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Shopping Cart */}
    </>
  );
}

export default CartSection;
