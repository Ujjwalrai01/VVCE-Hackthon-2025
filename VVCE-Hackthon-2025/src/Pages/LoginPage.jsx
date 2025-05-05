import React, { useState } from 'react';
import {
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  KeyIcon,
  ShieldIcon
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleUserType = () => setIsAdmin((prev) => !prev);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 characters required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Replace with real auth logic
    alert(`Logging in as ${isAdmin ? 'Admin' : 'User'}: ${formData.email}`);
    setFormData({ email: '', password: '' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        {/* Logo & Heading */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {isAdmin ? (
              <ShieldIcon size={48} className="text-indigo-600" />
            ) : (
              <UserIcon size={48} className="text-blue-500" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {isAdmin ? 'Admin Login' : 'User Login'}
          </h2>
          <p className="text-gray-600 mt-1">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`pl-10 w-full px-4 py-2 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:outline-none focus:ring-blue-200`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <KeyIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`pl-10 w-full px-4 py-2 rounded-lg border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:outline-none focus:ring-blue-200`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
              isAdmin ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'
            } transition duration-200`}
          >
            Sign In
          </button>
        </form>

        {/* Toggle User/Admin */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={toggleUserType}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Switch to {isAdmin ? 'User' : 'Admin'} Login
          </button>
        </div>

        {/* Register Redirect */}
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
