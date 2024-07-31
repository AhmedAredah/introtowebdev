import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LogIn from "./pages/auth/login/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/auth/login" element={<LogIn />} />
        {/* Add more routes as needed */}
        
        {/* Default route to redirect to login if no other routes match */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
