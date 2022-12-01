import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ProductUpload() {
  return (
    <>
      <Navbar />
      <br />
      <div className="content">
        <div className="container">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-12">
              <div className="form h-100">
                <h3>Product Details</h3>
                <div className="price">
                  <label for="" className="col-form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="Intiger Only"
                  />
                </div>
                <form
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Product ID *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Product Brand
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="product Brand"
                        id="product Brand"
                        placeholder="Your Product Id"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Product Image
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="productId"
                        id="productId"
                        placeholder="Your Product Id"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label for="budget" className="col-form-label">
                        Catagory
                      </label>
                      <select
                        className="custom-select"
                        id="budget"
                        name="budget"
                      >
                        <option selected>Choose...</option>
                        <option value="$1000 below"> Men Fashion</option>
                        <option value="$2,000 - $5,000">Women Fashion</option>
                        <option value="$5,000 - $15,000">Electronics</option>
                        <option value="$15,000 - $25,000">
                          Mobile/Laptops
                        </option>
                        <option value="$25,000 >">Furniture </option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label for="message" className="col-form-label">
                        Discription
                      </label>
                      <textarea
                        className="form-control"
                        name="discription"
                        id="discription"
                        cols="30"
                        rows="4"
                        placeholder="Write your discription"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary rounded-0 py-2 px-4"
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductUpload;
