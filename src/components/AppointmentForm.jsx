import React, { useState } from "react";
import "./AppointmentFormIC.css";

function AppointmentForm({ user, showNotification }) {
  const [form, setForm] = useState({ name: user?.name || "", phone: user?.phone || "", date: "", time: "", doctor: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showNotification(`Appointment booked for ${form.date} at ${form.time}!`);
  };

  if (submitted) {
    return (
      <div className="appt-success">
        <div className="as-icon">✅</div>
        <h3>Appointment Confirmed!</h3>
        <p>Your appointment is scheduled for <strong>{form.date}</strong> at <strong>{form.time}</strong>.</p>
        <button className="btn-outline" onClick={() => setSubmitted(false)}>Book Another</button>
      </div>
    );
  }

  return (
    <div className="appt-form-ic">
      <div className="form-card">
        <div className="form-card-header">
          <span>📅</span>
          <div><h3>Full Appointment</h3><p>Fill in all details for your visit</p></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} required />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" name="time" value={form.time} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Preferred Doctor (optional)</label>
            <input type="text" name="doctor" placeholder="e.g. Dr. Osei" value={form.doctor} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Reason for Visit</label>
            <textarea name="reason" rows={3} placeholder="Brief description..." value={form.reason} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>Confirm Appointment →</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
