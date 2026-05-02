import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser, showNotification }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    if (showNotification) showNotification("Logged out successfully.", "info");
    navigate("/");
  };

  return (
    <nav style={{ background: "#0a6e5e", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link to="/" style={{ color: "white", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>
        ✚ StayHealthy
      </Link>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/appointments" style={{ color: "white", textDecoration: "none" }}>Appointments</Link>
        {user ? (
          <>
            <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>👤 {user.name?.split(" ")[0]}</Link>
            <button onClick={handleLogout} style={{ background: "white", color: "#0a6e5e", border: "none", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontWeight: 600 }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>Login</Link>
            <Link to="/signup" style={{ background: "white", color: "#0a6e5e", padding: "8px 18px", borderRadius: 20, textDecoration: "none", fontWeight: 700 }}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;