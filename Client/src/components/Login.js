import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import rocketImg from "../assets/rocket.png";

export const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid w-100" src={rocketImg} alt="" />
        </div>
        <div className="col-md-7 my-auto">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              // console.log(values);
              const requestOption = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(values),
              };
              fetch("http://localhost:3000/register", requestOption);
            }}
          >
            {(formik) => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4">Log In</h1>

                <Form>
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="password" name="password" type="password" />
                  <button className="btn btn-dark mt-3" type="submit">
                    Log In
                  </button>
                </Form>
              </div>
            )}
          </Formik>
          <div>
            {" "}
            <br />
            <b> Forgot Password?</b>
            <p>or</p> <b> Create an Account </b>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
