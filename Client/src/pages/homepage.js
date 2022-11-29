import React from "react";
import Featuresales from "../components/Featuresales";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Shopservices from "../components/Shopservices";
import Subscribe from "../components/Subscribe";
import TrendingItem from "../components/TrendingItem";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Featuresales />
      <TrendingItem />
      <Shopservices />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Homepage;
