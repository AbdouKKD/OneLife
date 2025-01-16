import React, { useState } from "react";
import axios from "axios";
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and login
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form (sign up or login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const url = isSignUp
        ? "http://localhost:5000/api/auth/signup"
        : "http://localhost:5000/api/auth/login";

      const response = await axios.post(url, formData);
      setMessage(response.data.message);
      if (!isSignUp) {
        // Handle login success (e.g., redirect or store token)
        console.log("Login successful:", response.data);
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="toggle-container">
          <button
            className={isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={!isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </button>
        </div>

        <h2>{isSignUp ? "Create an Account" : "Welcome Back"}</h2>
        <p>{isSignUp ? "Sign up to start using our services" : "Log in to continue"}</p>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <button type="submit" className="auth-button">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}
        {message && <div className="success">{message}</div>}
      </div>
    </div>
  );
};

export default AuthPage;
