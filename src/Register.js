import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Register.scss";

/**
 */
function Register({ register }) {
  const navigate = useNavigate();
  let initialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errorMsg, setErrorMsg] = useState([]);
  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("handling user form submit button");
    try {
      console.log("awaiting register to api");
      await register(formData);
      setFormData(initialFormData);
      navigate("/");
    } catch (error) {
      setErrorMsg(error);
    }
  }

  function renderForm() {
    return Object.keys(initialFormData).map((field) => {
      return (
        <div className="mb-3 card-body" key={field}>
          <input
            id={`Register-${field}`}
            name={field}
            type={field === "password" ? "password" : "text"}
            className="form-control"
            placeholder={field}
            onChange={handleChange}
            value={formData[field]}
            aria-label={field}
          />
        </div>
      );
    });
  }

  return (
    <div className="register-card">
      <h2>Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {renderForm()}

        <button className="btn-primary login-signup-Form-Btn">Continue</button>
      </form>
      {/* {errorMsg.map((err) => (
        <p>{err}</p>
      ))} */}
    </div>
  );
}

export default Register;
