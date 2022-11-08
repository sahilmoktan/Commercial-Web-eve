import React from "react";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

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
    fetch("http://localhost:3000/login", requestOption).then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);

        // navigate("/Register");
      }
    });
  };

  return (
    <>
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
export default Register;
