import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../reducers/userSlice";
// import ShowHidePassword from "./ShowHidePassword";
import rocketImg from "../assets/rocket.png";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initalValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { setErrors, resetForm }) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
      
    };

    fetch("http://localhost:3000/Login", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          resetForm();
          console.log(data.userData);
          navigate("/home");
          dispatch(setCredentials(data.userData));
          // ---- login success redirect page ---------- TODO
        } else {
          setErrors(data.error);
        }
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="welcomDiv">
          <img className="img-fluid w-100" src={rocketImg} alt="" />
        </div>
        <div className="loginDiv">
          <Formik
            initialValues={initalValues}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4">Log In</h1>

                <Form>
                  <TextField label="Email" name="email" type="email" />
                  <TextField
                    label="password"
                    name="password"
                    type="password"
                    // component={ShowHidePassword}
                  />
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
            <Link to="/register">
              <b>Create an Account </b>
            </Link>
            <br />
            <>or </> <b> Forgot Password?</b>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
