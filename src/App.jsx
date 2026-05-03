import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

// Testing imports one by one
import Notification from "./components/Notification";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Appointments from "./pages/Appointments";
// import ProfileCard from "./components/ProfileCard";

function App() {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  return (
    <Router>
      <div>
        <Navbar user={user} setUser={setUser} showNotification={showNotification} />
        {notification && <Notification message={notification.message} type={notification.type} />}
        <Routes>
          <Route path="/" element={<Home user={user} showNotification={showNotification} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
