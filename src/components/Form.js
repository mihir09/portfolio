import React from "react";
import "./FormStyles.css";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      message: "",
      email: ""
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: function (values, { resetForm }) {
      emailjs
        .send(
          "service_fsgypwv",
          "template_gwe58sl",
          values,
          "Yn9mkzmWPIWcXTcq2"
        )
        .then(
          (result) => {
            alert("message sent successfully...");
            navigate("/", { replace: true });
          },
          (error) => {
            alert("Something's wrong. Please try again.");
          }
        );
    }
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here!"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
