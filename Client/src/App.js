import { useState } from "react";
import "./App.css";
// import Button from './Button'
// import Product from "./component/Product";

const App = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  // const checkInDatabase = () => {
  //   fetch(`https://127.0.0.1:3000/users/${name}`);
  //   fetch(`https://127.0.0.1:3000/users/${email}`);
  //   fetch(`https://127.0.0.1:3000/users/${password}`);
  // };

  const registerUser = async () => {
    const requestOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: name, email: email, password: password }),
    };
    fetch("http://localhost:3000/register", requestOption);
  };

  const loginUser = async () => {
    const requestOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch("http://localhost:3000/login", requestOption);
  };

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
      {/* <Product /> */}
      <br />
      <div>
        <input
          id="username"
          placeholder="Name"
          onKeyUp={(e) => {
            setName(e.target.value);
          }}
        ></input>{" "}
        <br />
        <input
          id="email"
          placeholder="Your E-mail"
          onKeyUp={(e) => {
            setEmail(e.target.value);
          }}
        ></input>{" "}
        <br />
        <input
          id="password"
          placeholder="Your Password"
          onKeyUp={(e) => {
            setPassword(e.target.value);
          }}
        ></input>{" "}
        <br />
        <button onClick={() => registerUser()}>Sign up</button>
        <button onClick={() => loginUser()}>Log In</button>
      </div>
    </>
  );
};
export default App;
