import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>404</h1>
      <h2> UH OH! You'r Lost</h2>
      <p>The page does not exist.</p>
      <NavLink to="/home">
        <button> Go Back to Home</button>
      </NavLink>
    </>
  );
}

export default ErrorPage;
