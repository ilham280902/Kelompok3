import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/sign-in",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setError("");
      navigate("/");
    } catch (error) {
      if (error.response.status === 403) {
        navigate("/");
        return;
      }
      console.error("Error submitting form:", error);
      setError(
        error.response.data.message ||
          "An error occurred while processing your request"
      );
    }
  };

  return (
    <div className="hero is-fullheight">
      <div className="hero-body is-flex-direction-column is-justify-content-center is-align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="columns is-flex is-flex-direction-column box">
            <p className="title">Sign in</p>
            <hr className="my-2" />
            {error && (
              <p className="has-text-white has-background-danger py-0 px-2">
                {error}
              </p>
            )}
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
                Sign-in
              </button>
            </div>
            <div className="has-text-centered">
              <p>
                Don't have an account yet?{" "}
                <Link to="/sign-up" className="has-text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
