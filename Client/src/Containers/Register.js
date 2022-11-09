// import React from "react";
// import { useState } from "react";

// const Register = () => {
//   const [name, setName] = useState(" ");
//   const [email, setEmail] = useState(" ");
//   const [password, setPassword] = useState(" ");

//   const registerUser = async () => {
//     const requestOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({ name: name, email: email, password: password }),
//     };
//     fetch("http://localhost:3000/register", requestOption);
//   };

//   const loginUser = async () => {
//     const requestOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({ email: email, password: password }),
//     };
//     fetch("http://localhost:3000/login", requestOption).then((data) => {
//       if (data.token) {
//         localStorage.setItem("token", data.token);

//         // navigate("/Register");
//       }
//     });
//   };

//   return (
//     <>
//       <div>
//         <input
//           id="username"
//           placeholder="Name"
//           onKeyUp={(e) => {
//             setName(e.target.value);
//           }}
//         ></input>{" "}
//         <br />
//         <input
//           id="email"
//           placeholder="Your E-mail"
//           onKeyUp={(e) => {
//             setEmail(e.target.value);
//           }}
//         ></input>{" "}
//         <br />
//         <input
//           id="password"
//           placeholder="Your Password"
//           onKeyUp={(e) => {
//             setPassword(e.target.value);
//           }}
//         ></input>{" "}
//         <br />
//         <button onClick={() => registerUser()}>Sign up</button>
//         <button onClick={() => loginUser()}>Log In</button>
//       </div>
//     </>
//   );
// };
// export default Register;

// ===============================

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const Register = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "name",
        lastName: "lastname",
        email: "mail",
      }}
      Register={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Register;
