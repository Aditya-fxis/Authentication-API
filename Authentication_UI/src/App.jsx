import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
function App() {


  return (
   <>
    <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
   </>
  );
}

export default App;
