import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
function App() {


  return (
   <>
    <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/send-reset-email" element={<ForgotPassword/>} />
          <Route path="/api/user/reset-password/:userId/:token" element={<ResetPassword />} />
        </Routes>
    </Router>
   </>
  );
}

export default App;
