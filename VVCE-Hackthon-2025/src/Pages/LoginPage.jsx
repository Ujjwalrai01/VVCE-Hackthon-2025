import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { 
  FiEye, 
  FiEyeOff, 
  FiUser, 
  FiLock, 
  FiShield, 
  FiLogIn, 
  FiMail,
  FiAlertCircle 
} from 'react-icons/fi';
import { 
  FaGoogle, 
  FaApple, 
  FaFacebook 
} from 'react-icons/fa';
import { login } from '../features/auth/authActions';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Get auth state from Redux
  const authState = useSelector((state) => state.auth);

  // Redirect if already authenticated
  useEffect(() => {
    if (authState?.user?.success) {
      navigate('/dashboard');
    }
  }, [authState, navigate]);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Minimum 6 characters required')
      .required('Password is required')
  });

  // Initial form values
  const initialValues = {
    email: '',
    password: ''
  };

  // Toggle functions
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleUserType = () => setIsAdmin(prev => !prev);

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setErrorMessage(''); // Reset error message

    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await dispatch(login(data));
      if (response.success) {
        resetForm();
        navigate('/dashboard');
      } else {
        setErrorMessage(response.error?.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Decorative Area with Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-900 p-8 text-white items-center justify-center">
        <div className="max-w-md">
          <div className="flex items-center mb-6">
            <div className="bg-white p-3 rounded-full mr-3">
              {isAdmin ? 
                <FiShield className="text-indigo-600 text-2xl" /> : 
                <FiUser className="text-blue-600 text-2xl" />
              }
            </div>
            <h1 className="text-3xl font-bold">BrandName</h1>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Sign in to access your account and continue your journey with us.
          </p>
          
          <div className="bg-blue-800 bg-opacity-40 p-6 rounded-xl backdrop-blur-sm">
            <p className="text-lg mb-4">
              "The best productivity app I've ever used. It transformed how I organize my work."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                JD
              </div>
              <div className="ml-4">
                <p className="font-semibold">Jane Doe</p>
                <p className="text-blue-200 text-sm">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-slate-50">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          {/* Mobile Header - Only visible on small screens */}
          <div className="flex md:hidden items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full mr-3">
              {isAdmin ? 
                <FiShield className="text-white text-xl" /> : 
                <FiUser className="text-white text-xl" />
              }
            </div>
            <h1 className="text-2xl font-bold text-gray-800">IDverifyAI</h1>
          </div>
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {isAdmin ? 'Admin Login' : 'Sign In'}
            </h2>
            <p className="text-gray-600 mt-2">
              Access your account to get started
            </p>
          </div>
          
          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button 
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-red-500" />
              <span className="sr-only">Google</span>
            </button>
            <button 
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaApple className="text-gray-800" />
              <span className="sr-only">Apple</span>
            </button>
            <button 
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaFacebook className="text-blue-600" />
              <span className="sr-only">Facebook</span>
            </button>
          </div>
          
          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with email</span>
            </div>
          </div>
          
          {/* Login Form with Formik */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-5">
                {/* Email Input */}
                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-3.5 text-gray-400">
                      <FiMail size={18} />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      className={`pl-10 w-full p-3 rounded-lg border ${
                        errors.email && touched.email 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-blue-200'
                      } focus:ring-2 focus:border-transparent focus:outline-none`}
                      placeholder="Email address"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="flex items-center text-sm text-red-600 mt-1"
                  >
                    {msg => (
                      <>
                        <FiAlertCircle className="mr-1" />
                        {msg}
                      </>
                    )}
                  </ErrorMessage>
                </div>

                {/* Password Input */}
                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-3.5 text-gray-400">
                      <FiLock size={18} />
                    </div>
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className={`pl-10 w-full p-3 rounded-lg border ${
                        errors.password && touched.password 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-blue-200'
                      } focus:ring-2 focus:border-transparent focus:outline-none`}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="flex items-center text-sm text-red-600 mt-1"
                  >
                    {msg => (
                      <>
                        <FiAlertCircle className="mr-1" />
                        {msg}
                      </>
                    )}
                  </ErrorMessage>
                </div>

                {/* Forgot Password & Remember Me Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {/* Display any API errors */}
                {errorMessage && (
                  <div className="flex items-center text-sm text-red-600 p-3 bg-red-50 rounded-lg">
                    <FiAlertCircle className="mr-2" />
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg text-white font-semibold flex items-center justify-center ${
                    isAdmin 
                      ? 'bg-indigo-600 hover:bg-indigo-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } transition duration-200`}
                >
                  <FiLogIn className="mr-2" />
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Toggle User/Admin */}
          {/* <div className="mt-6 text-center">
            <button
              type="button"
              onClick={toggleUserType}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline flex items-center justify-center mx-auto"
            >
              {isAdmin ? <FiUser className="mr-1" /> : <FiShield className="mr-1" />}
              Switch to {isAdmin ? 'User' : 'Admin'} Login
            </button>
          </div> */}

          {/* Register Redirect */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signuppage" className="text-blue-600 font-medium hover:text-blue-800 hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;