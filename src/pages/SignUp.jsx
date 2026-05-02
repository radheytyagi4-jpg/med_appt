import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ setUser, showNotification }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    role: "", name: "", email: "", phone: "", password: "", confirmPassword: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: form.name, email: form.email, role: form.role, phone: form.phone });
    if (showNotification) showNotification(`Welcome, ${form.name}!`);
    navigate("/");
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto", padding: 24 }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Role</label><br/>
          <select name="role" value={form.role} onChange={handleChange} required style={{ width: "100%", padding: 8, marginBottom: 12 }}>
            <option value="">Select role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div><label>Full Name</label><br/>
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: "100%", padding: 8, marginBottom: 12 }} />
        </div>
        <div><label>Email</label><br/>
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: "100%", padding: 8, marginBottom: 12 }} />
        </div>
        <div><label>Phone</label><br/>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required style={{ width: "100%", padding: 8, marginBottom: 12 }} />
        </div>
        <div><label>Password</label><br/>
          <input type="password" name="password" value={form.password} onChange={handleChange} required style={{ width: "100%", padding: 8, marginBottom: 12 }} />
        </div>
        <div><label>Confirm Password</label><br/>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required style={{ width: "100%", padding: 8, marginBottom: 12 }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: 12, background: "#0a6e5e", color: "white", border: "none", borderRadius: 8, cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;