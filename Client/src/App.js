import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Homepage } from "./pages/homepage";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
// import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
