import Axios from "axios";
import React, { useState, useContext} from "react";
import { globalContext } from "../context/globalContext";
import "./authStyle.css";

export default function Login(props) {
  const { loginUser} = useContext(globalContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = {
      email: email,
      password: password,
    };
    loginUser(form); 
    props.history.push("/")
    console.log(form);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-h1">Login page</h1>
        <form onSubmit={handleOnSubmit} className="form-login">
          <input
            className="login-input"
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input
            className="login-input"
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
          <button className="btn-login" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
