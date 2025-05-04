
import { useState } from 'react'
import AppRouter from "./Route/AppRouter";
import './App.css'
import Login from './Pages/Login';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Home from "./Layouts/LandingPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App



