// // import React, { useState } from 'react';
// // import {
// //   EyeIcon,
// //   EyeOffIcon,
// //   UserIcon,
// //   KeyIcon,
// //   ShieldIcon,
// //   MailIcon,
// //   UserPlusIcon,
// // } from 'lucide-react';

// // const SignupPage = () => {
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     agreeToTerms: false,
// //   });
// //   const [errors, setErrors] = useState({});

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
// //     if (errors[name]) setErrors({ ...errors, [name]: '' });
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
// //     if (!formData.email) newErrors.email = 'Email is required';
// //     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
// //     if (!formData.password) newErrors.password = 'Password is required';
// //     else if (formData.password.length < 6) newErrors.password = 'At least 6 characters';
// //     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
// //     if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       alert(`Account created as ${isAdmin ? 'Admin' : 'User'}!`);
// //       setFormData({
// //         fullName: '',
// //         email: '',
// //         password: '',
// //         confirmPassword: '',
// //         agreeToTerms: false,
// //       });
// //       setErrors({});
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //         {/* Header */}
// //         <div className="text-center mb-6">
// //           {isAdmin ? (
// //             <ShieldIcon size={48} className="text-indigo-600 mx-auto" />
// //           ) : (
// //             <UserPlusIcon size={48} className="text-blue-500 mx-auto" />
// //           )}
// //           <h2 className="text-2xl font-bold text-gray-800 mt-4">
// //             {isAdmin ? 'Admin Registration' : 'User Registration'}
// //           </h2>
// //           <p className="text-gray-600">Create your {isAdmin ? 'admin' : 'user'} account</p>
// //         </div>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           {/* Full Name */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Full Name</label>
// //             <div className="relative">
// //               <UserIcon size={18} className="absolute left-3 top-3 text-gray-400" />
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 value={formData.fullName}
// //                 onChange={handleInputChange}
// //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
// //                   errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// //                 }`}
// //                 placeholder="John Doe"
// //               />
// //             </div>
// //             {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
// //           </div>

// //           {/* Email */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Email Address</label>
// //             <div className="relative">
// //               <MailIcon size={18} className="absolute left-3 top-3 text-gray-400" />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
// //                   errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// //                 }`}
// //                 placeholder="you@example.com"
// //               />
// //             </div>
// //             {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
// //           </div>

// //           {/* Password */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Password</label>
// //             <div className="relative">
// //               <KeyIcon size={18} className="absolute left-3 top-3 text-gray-400" />
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleInputChange}
// //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
// //                   errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// //                 }`}
// //                 placeholder="••••••••"
// //               />
// //               <button
// //                 type="button"
// //                 onClick={() => setShowPassword(!showPassword)}
// //                 className="absolute right-3 top-3 text-gray-400"
// //               >
// //                 {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
// //               </button>
// //             </div>
// //             {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
// //           </div>

// //           {/* Confirm Password */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
// //             <div className="relative">
// //               <KeyIcon size={18} className="absolute left-3 top-3 text-gray-400" />
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 value={formData.confirmPassword}
// //                 onChange={handleInputChange}
// //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
// //                   errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// //                 }`}
// //                 placeholder="••••••••"
// //               />
// //             </div>
// //             {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>}
// //           </div>

// //           {/* Terms and Conditions */}
// //           <div className="flex items-start">
// //             <input
// //               type="checkbox"
// //               name="agreeToTerms"
// //               checked={formData.agreeToTerms}
// //               onChange={handleInputChange}
// //               className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// //             />
// //             <label className="ml-2 text-sm text-gray-700">
// //               I agree to the{' '}
// //               <a href="#" className="text-blue-600 hover:underline">
// //                 Terms and Conditions
// //               </a>
// //             </label>
// //           </div>
// //           {errors.agreeToTerms && <p className="text-sm text-red-600 mt-1">{errors.agreeToTerms}</p>}

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
// //               isAdmin ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'
// //             }`}
// //           >
// //             Sign Up as {isAdmin ? 'Admin' : 'User'}
// //           </button>
// //         </form>

// //         {/* Toggle Mode */}
// //         <div className="text-center mt-4">
// //           <button
// //             onClick={() => setIsAdmin(!isAdmin)}
// //             className="text-sm text-gray-600 hover:underline"
// //           >
// //             Switch to {isAdmin ? 'User' : 'Admin'} Registration
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupPage;

















import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiEye, 
  FiEyeOff, 
  FiUser, 
  FiLock, 
  FiShield, 
  FiMail,
  FiAlertCircle,
  FiUserPlus,
  FiCheckCircle 
} from 'react-icons/fi';
import { 
  FaGoogle, 
  FaApple, 
  FaFacebook 
} from 'react-icons/fa';

const RedesignedSignupPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all fields as touched for validation feedback
    const allFieldsTouched = {};
    Object.keys(formData).forEach(key => {
      allFieldsTouched[key] = true;
    });
    setTouchedFields(allFieldsTouched);
    
    if (validateForm()) {
      alert(`Account created as ${isAdmin ? 'Admin' : 'User'}!`);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      });
      setErrors({});
      setTouchedFields({});
    }
  };

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);
  const toggleUserType = () => setIsAdmin(prev => !prev);

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
            <h1 className="text-3xl font-bold">IDVerifyAI</h1>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">Join Our Community!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Create your account and unlock the full potential of our platform.
          </p>
          
          <div className="bg-blue-800 bg-opacity-40 p-6 rounded-xl backdrop-blur-sm">
            <p className="text-lg mb-4">
              "Setting up my account was quick and easy. The features available have completely changed how I manage my workflow."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                AS
              </div>
              <div className="ml-4">
                <p className="font-semibold">Alex Smith</p>
                <p className="text-blue-200 text-sm">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-slate-50">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          {/* Mobile Header - Only visible on small screens */}
          <div className="flex md:hidden items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full mr-3">
              {isAdmin ? 
                <FiShield className="text-white text-xl" /> : 
                <FiUserPlus className="text-white text-xl" />
              }
            </div>
            <h1 className="text-2xl font-bold text-gray-800">BrandName</h1>
          </div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {isAdmin ? 'Admin Registration' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-1">
              Join as a {isAdmin ? 'administrator' : 'user'} to get started
            </p>
          </div>
          
          {/* Social Signup Buttons */}
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
              <span className="px-2 bg-white text-gray-500">or register with email</span>
            </div>
          </div>
          
          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FiUser size={18} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`pl-10 w-full p-3 rounded-lg border ${
                    errors.fullName && touchedFields.fullName 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  } focus:ring-2 focus:border-transparent focus:outline-none`}
                  placeholder="Full Name"
                />
              </div>
              {errors.fullName && touchedFields.fullName && (
                <div className="flex items-center text-sm text-red-600 mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.fullName}
                </div>
              )}
            </div>

            {/* Email Input */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`pl-10 w-full p-3 rounded-lg border ${
                    errors.email && touchedFields.email 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  } focus:ring-2 focus:border-transparent focus:outline-none`}
                  placeholder="Email Address"
                />
              </div>
              {errors.email && touchedFields.email && (
                <div className="flex items-center text-sm text-red-600 mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FiLock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`pl-10 w-full p-3 rounded-lg border ${
                    errors.password && touchedFields.password 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  } focus:ring-2 focus:border-transparent focus:outline-none`}
                  placeholder="Password (min. 6 characters)"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              {errors.password && touchedFields.password && (
                <div className="flex items-center text-sm text-red-600 mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FiLock size={18} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`pl-10 w-full p-3 rounded-lg border ${
                    errors.confirmPassword && touchedFields.confirmPassword 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  } focus:ring-2 focus:border-transparent focus:outline-none`}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && touchedFields.confirmPassword && (
                <div className="flex items-center text-sm text-red-600 mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="mt-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              {errors.agreeToTerms && touchedFields.agreeToTerms && (
                <div className="flex items-center text-sm text-red-600 mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.agreeToTerms}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full p-3 mt-4 rounded-lg text-white font-semibold flex items-center justify-center ${
                isAdmin 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } transition duration-200`}
            >
              <FiUserPlus className="mr-2" />
              Create {isAdmin ? 'Admin' : 'User'} Account
            </button>
          </form>

          {/* Toggle User/Admin */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={toggleUserType}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline flex items-center justify-center mx-auto"
            >
              {isAdmin ? <FiUser className="mr-1" /> : <FiShield className="mr-1" />}
              Switch to {isAdmin ? 'User' : 'Admin'} Registration
            </button>
          </div>

          {/* Login Redirect */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-medium hover:text-blue-800 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesignedSignupPage;











// import React, { useState } from 'react';
// import { 
//   FiEye, 
//   FiEyeOff, 
//   FiUser, 
//   FiLock, 
//   FiMail,
//   FiAlertCircle
// } from 'react-icons/fi';

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [touchedFields, setTouchedFields] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) setErrors({ ...errors, [name]: '' });
//     setTouchedFields({ ...touchedFields, [name]: true });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.username.trim()) newErrors.username = 'Username is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters required';
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const allFieldsTouched = {};
//     Object.keys(formData).forEach(key => {
//       allFieldsTouched[key] = true;
//     });
//     setTouchedFields(allFieldsTouched);
    
//     if (validateForm()) {
//       // Handle successful signup
//       alert('Account created successfully!');
//     }
//   };

//   const togglePasswordVisibility = () => setShowPassword(prev => !prev);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

//   return (
//     <div className="flex h-screen bg-gray-900">
//       {/* Left Side - Form */}
//       <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
//         <div className="max-w-md mx-auto w-full">
//           <h1 className="text-4xl font-bold text-white mb-2">Sign up</h1>
//           <p className="text-gray-400 mb-8">Create your student account</p>
          
//           <div className="space-y-4">
//             {/* Username Input */}
//             <div>
//               <label className="block text-gray-400 text-sm mb-1">Username</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   className={`w-full p-3 bg-gray-800 rounded-lg border ${
//                     errors.username && touchedFields.username 
//                       ? 'border-red-500' 
//                       : 'border-gray-700'
//                   } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                   placeholder="Enter your username"
//                 />
//                 <div className="absolute right-3 top-3.5 text-gray-400">
//                   <FiUser size={18} />
//                 </div>
//               </div>
//               {errors.username && touchedFields.username && (
//                 <div className="flex items-center text-sm text-red-500 mt-1">
//                   <FiAlertCircle className="mr-1" />
//                   {errors.username}
//                 </div>
//               )}
//             </div>

//             {/* Email Input */}
//             <div>
//               <label className="block text-gray-400 text-sm mb-1">Email</label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full p-3 bg-gray-800 rounded-lg border ${
//                     errors.email && touchedFields.email 
//                       ? 'border-red-500' 
//                       : 'border-gray-700'
//                   } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                   placeholder="Enter your email"
//                 />
//                 <div className="absolute right-3 top-3.5 text-gray-400">
//                   <FiMail size={18} />
//                 </div>
//               </div>
//               {errors.email && touchedFields.email && (
//                 <div className="flex items-center text-sm text-red-500 mt-1">
//                   <FiAlertCircle className="mr-1" />
//                   {errors.email}
//                 </div>
//               )}
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-gray-400 text-sm mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`w-full p-3 bg-gray-800 rounded-lg border ${
//                     errors.password && touchedFields.password 
//                       ? 'border-red-500' 
//                       : 'border-gray-700'
//                   } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
//                 >
//                   {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
//                 </button>
//               </div>
//               {errors.password && touchedFields.password && (
//                 <div className="flex items-center text-sm text-red-500 mt-1">
//                   <FiAlertCircle className="mr-1" />
//                   {errors.password}
//                 </div>
//               )}
//             </div>

//             {/* Confirm Password Input */}
//             <div>
//               <label className="block text-gray-400 text-sm mb-1">Confirm Password</label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full p-3 bg-gray-800 rounded-lg border ${
//                     errors.confirmPassword && touchedFields.confirmPassword 
//                       ? 'border-red-500' 
//                       : 'border-gray-700'
//                   } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                   placeholder="Confirm your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={toggleConfirmPasswordVisibility}
//                   className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
//                 >
//                   {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
//                 </button>
//               </div>
//               {errors.confirmPassword && touchedFields.confirmPassword && (
//                 <div className="flex items-center text-sm text-red-500 mt-1">
//                   <FiAlertCircle className="mr-1" />
//                   {errors.confirmPassword}
//                 </div>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               className="w-full p-3 mt-6 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition duration-200"
//             >
//               Sign up
//             </button>
//           </div>

//           {/* Login Redirect */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-400">
//               Already have an account?{' '}
//               <a href="#" className="text-purple-400 hover:text-purple-300">
//                 Login
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* Right Side - Illustration */}
//       <div className="hidden md:block md:w-3/5 bg-purple-500 p-8 relative overflow-hidden">
//         <div className="absolute inset-0 bg-purple-600 opacity-30"></div>
        
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
//           <h1 className="text-5xl font-bold mb-2">Welcome to</h1>
//           <h2 className="text-6xl font-bold mb-4">student portal</h2>
//           <p className="text-xl text-purple-100 mb-12">Sign up to access your account</p>
          
//           <div className="w-full max-w-lg">
//             <img 
//               src="/api/placeholder/600/400" 
//               alt="Student illustration" 
//               className="mx-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;