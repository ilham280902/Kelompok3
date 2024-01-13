import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.password) {
      setMessage({ success: "", error: "Please fill in all required fields" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/sign-up",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage({ success: response.data.message, error: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        success: "",
        error:
          error.response.data.message ||
          "An error occurred while processing your request",
      });
    }
  };

  return (
    <div className="hero is-fullheight">
      <div className="hero-body is-flex-direction-column is-justify-content-center is-align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="columns is-flex is-flex-direction-column box">
            <p className="title">Sign Up</p>
            <hr className="my-2" />
            {message.error && (
              <p className="has-text-white has-background-danger py-0 px-2">
                {message.error}
              </p>
            )}
            {message.success && (
              <p className="has-text-white has-background-success py-0 px-2">
                {message.success}, please{" "}
                <u>
                  <Link to="/sign-in" className="has-text-white">
                    log in
                  </Link>
                </u>
              </p>
            )}
            <div className="column">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                className="input is-primary"
                type="text"
                placeholder="Enter Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="input is-primary"
                type="text"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="input is-primary"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <button className="button is-primary is-fullwidth" type="submit">
                Create an account
              </button>
            </div>
            <div className="has-text-centered">
              <p>
                Already have an account?{" "}
                <Link to="/sign-in" className="has-text-primary">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
