import "./App.css";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Homepage } from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Signup />
    //   <LogIn />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
