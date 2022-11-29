import React from "react";
import { Link } from "react-router-dom";

function Featuresales() {
  return (
    <>
      <section className="small-banner section">
        <div class="section-title">
          <h2>Our Feature Product</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="/home" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br /> collection
                  </h3>
                  <Link to="/home">Discover Now</Link>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  -->
            <!-- Single Banner  --> */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="/home" />
                <div className="content">
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br /> 2020
                  </h3>
                  <Link to="/home">Shop Now</Link>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="/home" />
                <div className="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br /> Up to <span>40%</span> Off
                  </h3>
                  <Link to="/home">Discover Now</Link>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Featuresales;
