// import { useState } from "react";
import "./App.css";
// import Button from './Button'
import Register from "./Containers/Register";

const App = () => {
  // const checkInDatabase = () => {
  //   fetch(`https://127.0.0.1:3000/users/${name}`);
  //   fetch(`https://127.0.0.1:3000/users/${email}`);
  //   fetch(`https://127.0.0.1:3000/users/${password}`);
  // };

  // const getUsers = async () => {
  //   const res = await fetch("http://localhost:3000/users");
  //   const data = await res.json();
  //   // setusersList(data.users);
  //   console.log(data.users);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <>
      <Register />
      <br />
    </>
  );
};
export default App;
