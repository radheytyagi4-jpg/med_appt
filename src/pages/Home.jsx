import React from "react";
import { Link } from "react-router-dom";
import FindDoctorSearch from "../components/FindDoctorSearch";
import GiveReviews from "../components/GiveReviews";
import "./Home.css";

const features = [
  { icon: "🏥", title: "Find Doctors", desc: "Search from hundreds of certified specialists near you." },
  { icon: "📅", title: "Book Instantly", desc: "Schedule appointments with one click, 24/7." },
  { icon: "💊", title: "Prescriptions", desc: "Receive digital prescriptions directly to your device." },
  { icon: "📞", title: "Teleconsult", desc: "Video and chat consultations from the comfort of home." },
];

function Home({ user, showNotification }) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content animate-fade-up">
          <span className="hero-badge">🌍 Serving Remote Communities</span>
          <h1 className="hero-title">Quality Healthcare,<br /><em>Wherever You Are</em></h1>
          <p className="hero-subtitle">StayHealthy connects patients in remote and underserved areas with certified doctors — anytime, from anywhere.</p>
          <div className="hero-actions">
            <Link to="/appointments" className="btn-primary">Book Appointment →</Link>
            {!user && <Link to="/signup" className="btn-outline">Get Started Free</Link>}
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>50k+</strong><span>Patients</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>1,200+</strong><span>Doctors</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>98%</strong><span>Satisfaction</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hc-header">
              <div className="hc-avatar">👨‍⚕️</div>
              <div>
                <div className="hc-name">Dr. Amara Osei</div>
                <div className="hc-spec">Cardiologist • 5★</div>
              </div>
              <span className="hc-badge online">Online</span>
            </div>
            <div className="hc-slots">
              <span className="slot active">9:00 AM</span>
              <span className="slot">10:30 AM</span>
              <span className="slot">2:00 PM</span>
              <span className="slot">4:30 PM</span>
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Book Now</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Everything You Need</h2>
        <p className="section-sub">A complete healthcare platform built for accessibility and ease of use.</p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card animate-fade-up" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="search-section">
        <h2 className="section-title">Find a Doctor</h2>
        <p className="section-sub">Search by name or specialty to find the right specialist for you.</p>
        <FindDoctorSearch showNotification={showNotification} />
      </section>

      <section className="reviews-section">
        <h2 className="section-title">Share Your Experience</h2>
        <p className="section-sub">Help others make informed decisions by sharing your feedback.</p>
        <GiveReviews user={user} showNotification={showNotification} />
      </section>
    </div>
  );
}

export default Home;