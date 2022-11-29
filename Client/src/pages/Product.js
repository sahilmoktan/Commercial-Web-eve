import React from "react";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";

import ShopItems from "../components/ShopItems";
import Shopservices from "../components/Shopservices";
import Subscribe from "../components/Subscribe";
import TrendingItem from "../components/TrendingItem";

function Product() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ShopItems />
      <TrendingItem />
      <Shopservices />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Product;
