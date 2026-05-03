import React from "react";

// DoctorCard - includes cancel appointment logic with localStorage
function DoctorCard({ doctor, booked, onBook, onCancel }) {

  // Cancel handler - removes appointment from state and updates localStorage
  const handleCancel = (doctor) => {
    // Get existing appointments from localStorage
    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    // Remove this appointment from localStorage
    const updated = existing.filter((id) => id !== doctor.id);
    // Update localStorage
    localStorage.setItem("appointments", JSON.stringify(updated));
    // Update component state via parent
    onCancel(doctor);
  };

  // Book handler - adds appointment to state and localStorage
  const handleBook = (doctor) => {
    // Get existing appointments from localStorage
    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    // Add new appointment to localStorage
    localStorage.setItem("appointments", JSON.stringify([...existing, doctor.id]));
    // Update component state via parent
    onBook(doctor);
  };

  return (
    <div style={{ background: "white", borderRadius: 12, padding: 20, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", border: "1px solid #f0f5f4" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 48, height: 48, background: "#e6f5f2", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
          👨‍⚕️
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: 0, color: "#0a4a40", fontSize: 15 }}>{doctor.name}</h4>
          <p style={{ margin: 0, fontSize: 13, color: "#7a9e9b" }}>{doctor.specialty}</p>
        </div>
        <span style={{
          padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600,
          background: doctor.available ? "#e6f9f0" : "#fdecea",
          color: doctor.available ? "#1db366" : "#d94f4f"
        }}>
          {doctor.available ? "Available" : "Busy"}
        </span>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 14, fontSize: 13, color: "#3d5a57" }}>
        <span>⏱ {doctor.experience}</span>
        <span>⭐ {doctor.rating}</span>
      </div>

      {/* Cancel appointment logic - removes from state and localStorage */}
      {booked ? (
        <button
          onClick={() => handleCancel(doctor)}
          style={{ width: "100%", padding: "10px", background: "#d94f4f", color: "white", border: "none", borderRadius: 20, cursor: "pointer", fontWeight: 600 }}
        >
          Cancel Appointment
        </button>
      ) : (
        <button
          onClick={() => handleBook(doctor)}
          disabled={!doctor.available}
          style={{
            width: "100%", padding: "10px",
            background: doctor.available ? "#0a6e5e" : "#ccc",
            color: "white", border: "none", borderRadius: 20,
            cursor: doctor.available ? "pointer" : "not-allowed", fontWeight: 600
          }}
        >
          {doctor.available ? "Book Appointment" : "Not Available"}
        </button>
      )}
    </div>
  );
}

export default DoctorCard;
