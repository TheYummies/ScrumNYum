import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Scrum from "./pages/Scrum";
import Error from "./pages/Error";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/scrum" element={<Scrum />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </Router>
  );
}
export default App;
