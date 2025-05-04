import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user"); // default role

  const handleLogin = (e) => {
    e.preventDefault();
    // Example navigation logic based on role
    if (role === "admin") {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md relative border border-blue-100">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 p-4 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM12 11c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2z" />
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6 mt-6">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-8">Login to your account to continue</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-600"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-600"
            />
          </div>

          {/* Role Selection */}
          <div className="flex justify-center space-x-6 text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="user"
                checked={role === "user"}
                onChange={() => setRole("user")}
                className="accent-blue-600"
              />
              User
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
                className="accent-blue-600"
              />
              Admin
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;






