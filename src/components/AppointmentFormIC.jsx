import React, { useState } from "react";
import "./AppointmentFormIC.css";

function AppointmentFormIC({ user, showNotification }) {
  const [form, setForm] = useState({ name: user?.name || "", phone: user?.phone || "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showNotification("Quick appointment request received! We'll call you shortly.");
  };

  if (submitted) {
    return (
      <div className="appt-success">
        <div className="as-icon">📞</div>
        <h3>We'll Call You!</h3>
        <p>Your request has been received. Our team will contact <strong>{form.phone}</strong> within 30 minutes.</p>
        <button className="btn-outline" onClick={() => setSubmitted(false)}>Book Another</button>
      </div>
    );
  }

  return (
    <div className="appt-form-ic">
      <div className="form-card">
        <div className="form-card-header">
          <span>📋</span>
          <div><h3>Quick Appointment</h3><p>We'll match you with the right doctor</p></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ic-name">Full Name</label>
            <input id="ic-name" type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="ic-phone">Phone Number</label>
            <input id="ic-phone" type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>Request Callback →</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentFormIC;
