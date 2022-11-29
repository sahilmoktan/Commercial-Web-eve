import React from "react";

function Shopservices() {
  return (
    <>
      <section className="shop-services section home">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-rocket"></i>
                <h4>Free shiping</h4>
                <p>Orders over $100</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-reload"></i>
                <h4>Free Return</h4>
                <p>Within 30 days returns</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-lock"></i>
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-tag"></i>
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shopservices;
