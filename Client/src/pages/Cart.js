import React from "react";
import CartSection from "../components/CartSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Shopservices from "../components/Shopservices";
import Subscribe from "../components/Subscribe";

function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <Shopservices />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Cart;
