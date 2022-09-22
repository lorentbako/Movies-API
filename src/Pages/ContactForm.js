import React from "react";
import { Formik } from "formik";
import "./Styles/Styles.scss";

const ContactForm = () => (
  <div>
    <div className="form form__header">
      {" "}
      <h1>Sign Up Area</h1>
    </div>
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        birthday: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        const text_error = "Required";
        if (!values.fname) {
          errors.fname = text_error;
        }
        if(!/^[A-Za-z]{2,}/.test(values.fname)) {
          errors.fname = "Invalid First Name";
        }
        if (!values.lname) {
          errors.lname = text_error;
        }
        if(!/^[A-Za-z]{2,}/.test(values.lname)) {
          errors.lname = "Invalid Last Name";
        }
        if (!values.birthday) {
          errors.birthday = text_error;
        }
        if (!values.email) {
          errors.email = text_error;
        }
        if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)
        ) {
          errors.password = "Password should contain at least one number and one special character";
        }
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="form">
          <label for="fname">First Name:</label>
          <input
            placeholder="First Name"
            type="text"
            name="fname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fname}
          />
          <p className="errors">
            {errors.fname && touched.fname && errors.fname}
          </p>
          <br />
          <label for="lname">Last Name:</label>
          <input
            placeholder="Last Name"
            type="text"
            name="lname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lname}
          />
          <p className="errors">
            {errors.lname && touched.lname && errors.lname}
          </p>
          <br />
          <label for="fname">Birthday:</label>
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.birthday}
          ></input>
          <p className="errors">
            {errors.birthday && touched.birthday && errors.birthday}
          </p>
          <br />
          <label for="fname">Email:</label>
          <input
            placeholder="example@something.smth"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p className="errors">
            {errors.email && touched.email && errors.email}
          </p>
          <br />
          <label for="fname">Password: </label>
          <input
            placeholder="********"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p className="errors">
            {errors.password && touched.password && errors.password}
          </p>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
