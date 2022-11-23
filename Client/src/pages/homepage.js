import React from "react";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Footer />
    </>
  );
};

export default Homepage;
