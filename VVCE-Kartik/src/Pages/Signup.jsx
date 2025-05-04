import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const SignUp = () => {
  const [role, setRole] = useState("user"); // default role

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle form submission here
    // Send role to backend or handle based on role
    console.log(`Signing up as ${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md relative border border-purple-100">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-purple-600 p-4 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12A4 4 0 118 12a4 4 0 018 0zM12 14v6m-4-6h8" />
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6 mt-6">Create an Account</h2>
        <p className="text-center text-gray-500 mb-8">Sign up to get started with the platform</p>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-500"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-500"
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
                className="accent-purple-600"
              />
              User
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
                className="accent-purple-600"
              />
              Admin
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?
          <Link to="/" className="text-purple-600 font-semibold hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;



