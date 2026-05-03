import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

function ProfileCard({ user, setUser, showNotification }) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user?.name || "", email: user?.email || "", phone: user?.phone || "", role: user?.role || "", bio: user?.bio || "" });

  if (!user) {
    return (
      <div className="page-wrapper profile-page">
        <div className="not-logged-in">
          <span>🔒</span><h2>Please Log In</h2>
          <p>You need to be logged in to view your profile.</p>
          <button className="btn-primary" onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...user, ...form });
    setEditing(false);
    showNotification("Profile updated successfully! ✓");
  };

  return (
    <div className="page-wrapper profile-page">
      <h1 className="page-title">My Profile</h1>
      <div className="profile-layout">
        <div className="profile-card">
          <div className="pc-avatar">{user.name?.[0]?.toUpperCase() || "U"}</div>
          <h2 className="pc-name">{user.name}</h2>
          <p className="pc-role">{user.role || "Patient"}</p>
          <p className="pc-email">✉️ {user.email}</p>
          {user.phone && <p className="pc-phone">📞 {user.phone}</p>}
          {user.bio && <p className="pc-bio">{user.bio}</p>}
          <button className="btn-outline" style={{ marginTop: "20px", width: "100%", justifyContent: "center" }} onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
        {editing && (
          <div className="edit-form-card">
            <h3>Edit Your Information</h3>
            <form onSubmit={handleSave}>
              <div className="form-group"><label>Full Name</label><input type="text" name="name" value={form.name} onChange={handleChange} required /></div>
              <div className="form-group"><label>Email</label><input type="email" name="email" value={form.email} onChange={handleChange} required /></div>
              <div className="form-group"><label>Phone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} /></div>
              <div className="form-group">
                <label>Role</label>
                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="form-group"><label>Bio</label><textarea name="bio" rows={3} placeholder="Tell us about yourself..." value={form.bio} onChange={handleChange} /></div>
              <div className="edit-actions">
                <button type="submit" className="btn-primary">Save Changes</button>
                <button type="button" className="btn-outline" onClick={() => setEditing(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
