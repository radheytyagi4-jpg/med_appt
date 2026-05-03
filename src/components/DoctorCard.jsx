import React from "react";
import "./DoctorCard.css";

const avatarColors = ["#e6f5f2","#fef3e2","#f0e6ff","#e2f0fe","#fde6e6","#e6fee6"];
const avatarEmojis = ["👨‍⚕️","👩‍⚕️","🧑‍⚕️","👨‍⚕️","👩‍⚕️","🧑‍⚕️"];

function DoctorCard({ doctor, booked, onBook, onCancel }) {
  const idx = doctor.id % avatarEmojis.length;
  return (
    <div className="doctor-card">
      <div className="dc-header">
        <div className="dc-avatar" style={{ background: avatarColors[idx] }}>{avatarEmojis[idx]}</div>
        <div className="dc-info">
          <h3 className="dc-name">{doctor.name}</h3>
          <p className="dc-spec">{doctor.specialty}</p>
        </div>
        <span className={`dc-status ${doctor.available ? "available" : "busy"}`}>
          {doctor.available ? "Available" : "Busy"}
        </span>
      </div>
      <div className="dc-meta">
        <span>⏱ {doctor.experience}</span>
        <span>⭐ {doctor.rating}</span>
      </div>
      <div className="dc-actions">
        {booked ? (
          <button className="btn-danger" onClick={() => onCancel(doctor)} style={{ width: "100%" }}>Cancel Appointment</button>
        ) : (
          <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={!doctor.available} onClick={() => onBook(doctor)}>
            {doctor.available ? "Book Appointment" : "Not Available"}
          </button>
        )}
      </div>
    </div>
  );
}

export default DoctorCard;
