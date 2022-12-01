import React from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

// import ShopItems from "../components/ShopItems";
import Shopservices from "../components/Shopservices";
import Subscribe from "../components/Subscribe";
import TrendingItem from "../components/TrendingItem";

function Product() {
  return (
    <>
      <Navbar />
      <ProductList />
      {/* <ShopItems /> */}
      <TrendingItem />
      <Shopservices />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Product;
