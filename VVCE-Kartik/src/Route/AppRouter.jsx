import {Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import Contact from "../Layouts/Contact";
import Home from "../Layouts/Home";
import LandingPage from "../Layouts/LandingPage";
import AdminDashboard from "../Pages/AdminDashboard";


export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />

      </Routes>
   
  );
}





