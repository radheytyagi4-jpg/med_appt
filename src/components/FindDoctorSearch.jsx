import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import "./FindDoctorSearch.css";

const DOCTORS = [
  { id: 1, name: "Dr. Amara Osei", specialty: "Cardiologist", experience: "12 yrs", rating: 4.9, available: true },
  { id: 2, name: "Dr. Priya Sharma", specialty: "Pediatrician", experience: "8 yrs", rating: 4.8, available: true },
  { id: 3, name: "Dr. James Mwangi", specialty: "General Practitioner", experience: "15 yrs", rating: 4.7, available: false },
  { id: 4, name: "Dr. Sofia Martinez", specialty: "Dermatologist", experience: "10 yrs", rating: 4.9, available: true },
  { id: 5, name: "Dr. Kwame Asante", specialty: "Neurologist", experience: "18 yrs", rating: 4.6, available: true },
  { id: 6, name: "Dr. Lena Fischer", specialty: "Psychiatrist", experience: "9 yrs", rating: 4.8, available: false },
];

function FindDoctorSearch({ showNotification }) {
  const [query, setQuery] = useState("");
  const [appointments, setAppointments] = useState([]);

  const filtered = DOCTORS.filter(
    (d) => d.name.toLowerCase().includes(query.toLowerCase()) || d.specialty.toLowerCase().includes(query.toLowerCase())
  );

  const handleBook = (doctor) => {
    setAppointments([...appointments, doctor.id]);
    showNotification(`Appointment requested with ${doctor.name}!`);
  };
  const handleCancel = (doctor) => {
    setAppointments(appointments.filter((id) => id !== doctor.id));
    showNotification(`Appointment with ${doctor.name} cancelled.`, "info");
  };

  return (
    <div className="find-doctor">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search by doctor name or specialty..." value={query} onChange={(e) => setQuery(e.target.value)} className="search-input" />
        {query && <button className="clear-btn" onClick={() => setQuery("")}>✕</button>}
      </div>
      {filtered.length === 0 ? (
        <div className="no-results"><span>🔎</span><p>No doctors found for "<strong>{query}</strong>"</p></div>
      ) : (
        <div className="doctors-grid">
          {filtered.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} booked={appointments.includes(doc.id)} onBook={handleBook} onCancel={handleCancel} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FindDoctorSearch;
