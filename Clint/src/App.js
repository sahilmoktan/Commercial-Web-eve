import { useState } from "react";
// import "./App.css";
// import Button from './Button'
import Products from "./products";
const App = () => {
  const [name, setName] = useState(" ");
  const [lotteryNo, setlotteryNo] = useState(" ");
  const checkInDatabase = () => {
    fetch(`https://127.0.0.1:3000/users/${name}`);
  };

  return (
    <>
      <Products />
      {/* <div>
        <input
          id="name"
          placeholder="Name"
          onKeyUp={(e) => {
            setName(e.target.value);
          }}
        ></input>{" "}
        <br />
        <input
          id="lotteryNo"
          placeholder="LotteryNo"
          onKeyUp={(e) => {
            setlotteryNo(e.target.value);
          }}
        ></input>{" "}
        <br />
        <button onClick={() => checkInDatabase()}>check</button>
      </div> */}
    </>
  );
};
export default App;
