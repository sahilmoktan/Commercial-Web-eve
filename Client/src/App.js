import "./App.css";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Signup />
    //   <LogIn />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        {/* <Route path="/home" element={<Homepage />} />
        <Route path="/restaurant" element={<RestaurantForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
