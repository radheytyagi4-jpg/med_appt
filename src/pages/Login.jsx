import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login({ setUser, showNotification }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    const userName = form.email.split("@")[0].replace(/[._]/g, " ");
    const name = userName.charAt(0).toUpperCase() + userName.slice(1);
    setUser({ name, email: form.email, role: "patient" });
    showNotification(`Welcome back, ${name}! 👋`);
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <span className="auth-brand-icon">✚</span>
          <h1>Welcome Back</h1>
          <p>Log in to your StayHealthy account to manage appointments and connect with your doctors.</p>
        </div>
        <ul className="auth-perks">
          <li>✓ View upcoming appointments</li>
          <li>✓ Chat with your doctor</li>
          <li>✓ Access prescriptions</li>
          <li>✓ Your data, always secure</li>
        </ul>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Log In</h2>
          <p className="auth-sub">Enter your credentials to continue</p>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? <span className="spinner" /> : "Log In →"}
            </button>
          </form>
          <p className="auth-switch">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;