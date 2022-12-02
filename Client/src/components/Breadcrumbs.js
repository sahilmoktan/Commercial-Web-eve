import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
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
                    <Link to="/Product">Product</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
    </>
  );
}

export default Breadcrumbs;
