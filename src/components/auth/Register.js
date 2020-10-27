import React, { useState, useContext } from "react";
import "./authStyle.css";
import { globalContext } from "../context/globalContext";

export default function Register() {
  const { registerUser } = useContext(globalContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return console.log("password do not match");
    }
    const form = {
      name: name,
      email: email,
      password: password,
    };
    registerUser(form);
    console.log(form);
    setFormData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1>Register</h1>
        <form onSubmit={handleOnSubmit} className="form-register">
          <input
            className="register-input"
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={handleOnChange}
          />
          <input
            className="register-input"
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input
            className="register-input"
            type="password"
            value={password}
            onChange={handleOnChange}
            name="password"
            placeholder="Password"
          />
          <input
            className="register-input"
            type="password"
            value={password2}
            name="password2"
            placeholder="Confirm Passoword"
            onChange={handleOnChange}
          />

          <button type="submit" className="btn-register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
