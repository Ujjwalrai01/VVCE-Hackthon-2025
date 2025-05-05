// // // import React, { useState } from 'react';
// // // import { EyeIcon, EyeOffIcon, UserIcon, KeyIcon, ShieldIcon, MailIcon, UserPlusIcon } from 'lucide-react';

// // // const SignupPage = () => {
// // //   const [isAdmin, setIsAdmin] = useState(false);
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     fullName: '',
// // //     email: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //     agreeToTerms: false
// // //   });
// // //   const [errors, setErrors] = useState({});

// // //   const handleInputChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: type === 'checkbox' ? checked : value,
// // //     });
// // //     // Clear errors when user types
// // //     if (errors[name]) {
// // //       setErrors({
// // //         ...errors,
// // //         [name]: '',
// // //       });
// // //     }
// // //   };

// // //   const togglePasswordVisibility = () => {
// // //     setShowPassword(!showPassword);
// // //   };

// // //   const toggleConfirmPasswordVisibility = () => {
// // //     setShowConfirmPassword(!showConfirmPassword);
// // //   };

// // //   const toggleUserType = () => {
// // //     setIsAdmin(!isAdmin);
// // //   };

// // //   const validateForm = () => {
// // //     const newErrors = {};
    
// // //     if (!formData.fullName.trim()) {
// // //       newErrors.fullName = 'Full name is required';
// // //     }

// // //     if (!formData.email) {
// // //       newErrors.email = 'Email is required';
// // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //       newErrors.email = 'Email is invalid';
// // //     }

// // //     if (!formData.password) {
// // //       newErrors.password = 'Password is required';
// // //     } else if (formData.password.length < 6) {
// // //       newErrors.password = 'Password must be at least 6 characters';
// // //     }

// // //     if (formData.password !== formData.confirmPassword) {
// // //       newErrors.confirmPassword = 'Passwords do not match';
// // //     }

// // //     if (!formData.agreeToTerms) {
// // //       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
// // //     }

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
    
// // //     if (validateForm()) {
// // //       // Here you would typically handle the signup logic
// // //       console.log('Form submitted:', { ...formData, isAdmin });
// // //       alert(`Account created as ${isAdmin ? 'Admin' : 'User'} with email: ${formData.email}`);
// // //       // Reset form after submission
// // //       setFormData({ 
// // //         fullName: '',
// // //         email: '',
// // //         password: '',
// // //         confirmPassword: '',
// // //         agreeToTerms: false
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // //         {/* Header with Logo */}
// // //         <div className="text-center mb-6">
// // //           <div className="flex justify-center mb-4">
// // //             {isAdmin ? (
// // //               <ShieldIcon size={48} className="text-indigo-600" />
// // //             ) : (
// // //               <UserPlusIcon size={48} className="text-blue-500" />
// // //             )}
// // //           </div>
// // //           <h2 className="text-2xl font-bold text-gray-800">
// // //             {isAdmin ? 'Admin Registration' : 'User Registration'}
// // //           </h2>
// // //           <p className="text-gray-600 mt-1">
// // //             Create your {isAdmin ? 'admin' : 'user'} account
// // //           </p>
// // //         </div>

// // //         {/* Signup Form */}
// // //         <form onSubmit={handleSubmit} className="space-y-5">
// // //           {/* Full Name Field */}
// // //           <div>
// // //             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
// // //               Full Name
// // //             </label>
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <UserIcon size={18} className="text-gray-400" />
// // //               </div>
// // //               <input
// // //                 type="text"
// // //                 name="fullName"
// // //                 id="fullName"
// // //                 value={formData.fullName}
// // //                 onChange={handleInputChange}
// // //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
// // //                   errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// // //                 }`}
// // //                 placeholder="John Doe"
// // //               />
// // //             </div>
// // //             {errors.fullName && (
// // //               <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
// // //             )}
// // //           </div>

// // //           {/* Email Field */}
// // //           <div>
// // //             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // //               Email Address
// // //             </label>
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <MailIcon size={18} className="text-gray-400" />
// // //               </div>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 id="email"
// // //                 value={formData.email}
// // //                 onChange={handleInputChange}
// // //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
// // //                   errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// // //                 }`}
// // //                 placeholder="your@email.com"
// // //               />
// // //             </div>
// // //             {errors.email && (
// // //               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
// // //             )}
// // //           </div>

// // //           {/* Password Field */}
// // //           <div>
// // //             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
// // //               Password
// // //             </label>
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <KeyIcon size={18} className="text-gray-400" />
// // //               </div>
// // //               <input
// // //                 type={showPassword ? 'text' : 'password'}
// // //                 name="password"
// // //                 id="password"
// // //                 value={formData.password}
// // //                 onChange={handleInputChange}
// // //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
// // //                   errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// // //                 }`}
// // //                 placeholder="••••••••"
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={togglePasswordVisibility}
// // //                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
// // //               >
// // //                 {showPassword ? (
// // //                   <EyeOffIcon size={18} className="text-gray-400 hover:text-gray-600" />
// // //                 ) : (
// // //                   <EyeIcon size={18} className="text-gray-400 hover:text-gray-600" />
// // //                 )}
// // //               </button>
// // //             </div>
// // //             {errors.password && (
// // //               <p className="mt-1 text-sm text-red-600">{errors.password}</p>
// // //             )}
// // //           </div>

// // //           {/* Confirm Password Field */}
// // //           <div>
// // //             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
// // //               Confirm Password
// // //             </label>
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <KeyIcon size={18} className="text-gray-400" />
// // //               </div>
// // //               <input
// // //                 type={showConfirmPassword ? 'text' : 'password'}
// // //                 name="confirmPassword"
// // //                 id="confirmPassword"
// // //                 value={formData.confirmPassword}
// // //                 onChange={handleInputChange}
// // //                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
// // //                   errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
// // //                 }`}
// // //                 placeholder="••••••••"
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={toggleConfirmPasswordVisibility}
// // //                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
// // //               >
// // //                 {showConfirmPassword ? (
// // //                   <EyeOffIcon size={18} className="text-gray-400 hover:text-gray-600" />
// // //                 ) : (
// // //                   <EyeIcon size={18} className="text-gray-400 hover:text-gray-600" />
// // //                 )}
// // //               </button>
// // //             </div>
// // //             {errors.confirmPassword && (
// // //               <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
// // //             )}
// // //           </div>

// // //           {/* Terms and Conditions */}
// // //           <div className="flex items-start">
// // //             <div className="flex items-center h-5">
// // //               <input
// // //                 id="agreeToTerms"
// // //                 name="agreeToTerms"
// // //                 type="checkbox"
// // //                 checked={formData.agreeToTerms}
// // //                 onChange={handleInputChange}
// // //                 className={`h-4 w-4 ${isAdmin ? 'text-indigo-600 focus:ring-indigo-500' : 'text-blue-600 focus:ring-blue-500'} border-gray-300 rounded`}
// // //               />
// // //             </div>
// // //             <div className="ml-3 text-sm">
// // //               <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
// // //                 I agree to the <a href="#" className={`${isAdmin ? 'text-indigo-600' : 'text-blue-600'} hover:underline`}>Terms and Conditions</a>
// // //               </label>
// // //               {errors.agreeToTerms && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Submit Button */}
// // //           <div>
// // //             <button
// // //               type="submit"
// // //               className={`w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
// // //                 isAdmin
// // //                   ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
// // //                   : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
// // //               }`}
// // //             >
// // //               Create Account
// // //             </button>
// // //           </div>
// // //         </form>

// // //         {/* Toggle Between Admin/User */}
// // //         <div className="mt-6 text-center">
// // //           <button
// // //             type="button"
// // //             onClick={toggleUserType}
// // //             className={`text-sm font-medium ${isAdmin ? 'text-indigo-600 hover:text-indigo-500' : 'text-blue-600 hover:text-blue-500'}`}
// // //           >
// // //             Switch to {isAdmin ? 'User' : 'Admin'} Registration
// // //           </button>
// // //         </div>

// // //         {/* Login Link */}
// // //         <div className="mt-4 text-center">
// // //           <p className="text-sm text-gray-600">
// // //             Already have an account?{' '}
// // //             <a href="#" className={`font-medium ${isAdmin ? 'text-indigo-600 hover:text-indigo-500' : 'text-blue-600 hover:text-blue-500'}`}>
// // //               Sign in
// // //             </a>
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignupPage;







// // import React, { useState } from 'react';
// // import { 
// //   EyeIcon, 
// //   EyeOffIcon, 
// //   UserIcon, 
// //   KeyIcon, 
// //   ShieldIcon, 
// //   MailIcon, 
// //   UserPlusIcon,
// //   CheckCircleIcon,
// //   LockIcon,
// //   BadgeCheckIcon,
// //   StarIcon,
// //   GlobeIcon
// // } from 'lucide-react';

// // const SignupPage = () => {
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     agreeToTerms: false
// //   });
// //   const [errors, setErrors] = useState({});

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === 'checkbox' ? checked : value,
// //     });
// //     // Clear errors when user types
// //     if (errors[name]) {
// //       setErrors({
// //         ...errors,
// //         [name]: '',
// //       });
// //     }
// //   };

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const toggleConfirmPasswordVisibility = () => {
// //     setShowConfirmPassword(!showConfirmPassword);
// //   };

// //   const toggleUserType = () => {
// //     setIsAdmin(!isAdmin);
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
    
// //     if (!formData.fullName.trim()) {
// //       newErrors.fullName = 'Full name is required';
// //     }

// //     if (!formData.email) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Email is invalid';
// //     }

// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     } else if (formData.password.length < 6) {
// //       newErrors.password = 'Password must be at least 6 characters';
// //     }

// //     if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }

// //     if (!formData.agreeToTerms) {
// //       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     if (validateForm()) {
// //       // Here you would typically handle the signup logic
// //       console.log('Form submitted:', { ...formData, isAdmin });
// //       alert(`Account created as ${isAdmin ? 'Admin' : 'User'} with email: ${formData.email}`);
// //       // Reset form after submission
// //       setFormData({ 
// //         fullName: '',
// //         email: '',
// //         password: '',
// //         confirmPassword: '',
// //         agreeToTerms: false
// //       });
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-4 sm:p-6 lg:p-8">
// //       {/* Decorative background elements */}
// //       <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
// //         <div className="absolute top-10 left-10">
// //           <UserIcon size={60} className={`${isAdmin ? 'text-indigo-400' : 'text-blue-400'}`} />
// //         </div>
// //         <div className="absolute bottom-10 left-20">
// //           <MailIcon size={50} className={`${isAdmin ? 'text-indigo-300' : 'text-blue-300'}`} />
// //         </div>
// //         <div className="absolute top-20 right-20">
// //           <LockIcon size={55} className={`${isAdmin ? 'text-indigo-300' : 'text-blue-300'}`} />
// //         </div>
// //         <div className="absolute bottom-20 right-10">
// //           <ShieldIcon size={65} className={`${isAdmin ? 'text-indigo-400' : 'text-blue-400'}`} />
// //         </div>
// //         <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
// //           <StarIcon size={40} className={`${isAdmin ? 'text-indigo-300' : 'text-blue-300'}`} />
// //         </div>
// //         <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
// //           <GlobeIcon size={45} className={`${isAdmin ? 'text-indigo-400' : 'text-blue-400'}`} />
// //         </div>
// //       </div>

// //       {/* Main container */}
// //       <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-lg z-10 border border-gray-100">
// //         {/* Header with animated logo */}
// //         <div className="text-center mb-6 relative">
// //           <div className="flex justify-center mb-4 transition-all duration-300 hover:scale-110">
// //             {isAdmin ? (
// //               <div className="relative">
// //                 <ShieldIcon size={60} className="text-indigo-600" />
// //                 <BadgeCheckIcon size={24} className="text-indigo-400 absolute bottom-0 right-0" />
// //               </div>
// //             ) : (
// //               <div className="relative">
// //                 <UserPlusIcon size={60} className="text-blue-500" />
// //                 <CheckCircleIcon size={24} className="text-blue-400 absolute bottom-0 right-0" />
// //               </div>
// //             )}
// //           </div>
// //           <h1 className={`text-3xl font-bold mb-1 ${isAdmin ? 'text-indigo-700' : 'text-blue-600'}`}>
// //             {isAdmin ? 'Admin Registration' : 'User Registration'}
// //           </h1>
// //           <p className="text-gray-600 text-lg">
// //             Create your {isAdmin ? 'admin' : 'user'} account
// //           </p>
          
// //           {/* Divider with icon */}
// //           <div className="flex items-center my-4">
// //             <div className="flex-grow border-t border-gray-200"></div>
// //             <div className="mx-4">
// //               <UserIcon size={18} className={`${isAdmin ? 'text-indigo-500' : 'text-blue-500'}`} />
// //             </div>
// //             <div className="flex-grow border-t border-gray-200"></div>
// //           </div>
// //         </div>

// //         {/* Signup Form */}
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           {/* Full Name Field */}
// //           <div className="group">
// //             <label htmlFor="fullName" className={`block text-sm font-medium mb-1 transition-colors ${
// //               isAdmin ? 'text-indigo-700 group-hover:text-indigo-800' : 'text-blue-600 group-hover:text-blue-700'
// //             }`}>
// //               Full Name
// //             </label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <UserIcon size={18} className={`${
// //                   isAdmin ? 'text-indigo-500' : 'text-blue-500'
// //                 }`} />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 id="fullName"
// //                 value={formData.fullName}
// //                 onChange={handleInputChange}
// //                 className={`pl-10 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
// //                   errors.fullName 
// //                     ? 'border-red-500 focus:ring-red-200 shadow-sm' 
// //                     : `border-gray-300 ${
// //                         isAdmin 
// //                           ? 'focus:border-indigo-500 focus:ring-indigo-200' 
// //                           : 'focus:border-blue-500 focus:ring-blue-200'
// //                       } hover:border-gray-400`
// //                 }`}
// //                 placeholder="John Doe"
// //               />
// //             </div>
// //             {errors.fullName && (
// //               <p className="mt-1 text-sm text-red-600 flex items-center">
// //                 <span className="mr-1">•</span>{errors.fullName}
// //               </p>
// //             )}
// //           </div>

// //           {/* Email Field */}
// //           <div className="group">
// //             <label htmlFor="email" className={`block text-sm font-medium mb-1 transition-colors ${
// //               isAdmin ? 'text-indigo-700 group-hover:text-indigo-800' : 'text-blue-600 group-hover:text-blue-700'
// //             }`}>
// //               Email Address
// //             </label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <MailIcon size={18} className={`${
// //                   isAdmin ? 'text-indigo-500' : 'text-blue-500'
// //                 }`} />
// //               </div>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 id="email"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 className={`pl-10 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
// //                   errors.email 
// //                     ? 'border-red-500 focus:ring-red-200 shadow-sm' 
// //                     : `border-gray-300 ${
// //                         isAdmin 
// //                           ? 'focus:border-indigo-500 focus:ring-indigo-200' 
// //                           : 'focus:border-blue-500 focus:ring-blue-200'
// //                       } hover:border-gray-400`
// //                 }`}
// //                 placeholder="your@email.com"
// //               />
// //             </div>
// //             {errors.email && (
// //               <p className="mt-1 text-sm text-red-600 flex items-center">
// //                 <span className="mr-1">•</span>{errors.email}
// //               </p>
// //             )}
// //           </div>

// //           {/* Password Fields - Side by side on larger screens */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {/* Password Field */}
// //             <div className="group">
// //               <label htmlFor="password" className={`block text-sm font-medium mb-1 transition-colors ${
// //                 isAdmin ? 'text-indigo-700 group-hover:text-indigo-800' : 'text-blue-600 group-hover:text-blue-700'
// //               }`}>
// //                 Password
// //               </label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <KeyIcon size={18} className={`${
// //                     isAdmin ? 'text-indigo-500' : 'text-blue-500'
// //                   }`} />
// //                 </div>
// //                 <input
// //                   type={showPassword ? 'text' : 'password'}
// //                   name="password"
// //                   id="password"
// //                   value={formData.password}
// //                   onChange={handleInputChange}
// //                   className={`pl-10 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
// //                     errors.password 
// //                       ? 'border-red-500 focus:ring-red-200 shadow-sm' 
// //                       : `border-gray-300 ${
// //                           isAdmin 
// //                             ? 'focus:border-indigo-500 focus:ring-indigo-200' 
// //                             : 'focus:border-blue-500 focus:ring-blue-200'
// //                         } hover:border-gray-400`
// //                   }`}
// //                   placeholder="••••••••"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={togglePasswordVisibility}
// //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// //                 >
// //                   {showPassword ? (
// //                     <EyeOffIcon size={18} className="text-gray-400 hover:text-gray-600 transition-colors" />
// //                   ) : (
// //                     <EyeIcon size={18} className="text-gray-400 hover:text-gray-600 transition-colors" />
// //                   )}
// //                 </button>
// //               </div>
// //               {errors.password && (
// //                 <p className="mt-1 text-sm text-red-600 flex items-center">
// //                   <span className="mr-1">•</span>{errors.password}
// //                 </p>
// //               )}
// //             </div>

// //             {/* Confirm Password Field */}
// //             <div className="group">
// //               <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-1 transition-colors ${
// //                 isAdmin ? 'text-indigo-700 group-hover:text-indigo-800' : 'text-blue-600 group-hover:text-blue-700'
// //               }`}>
// //                 Confirm Password
// //               </label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <LockIcon size={18} className={`${
// //                     isAdmin ? 'text-indigo-500' : 'text-blue-500'
// //                   }`} />
// //                 </div>
// //                 <input
// //                   type={showConfirmPassword ? 'text' : 'password'}
// //                   name="confirmPassword"
// //                   id="confirmPassword"
// //                   value={formData.confirmPassword}
// //                   onChange={handleInputChange}
// //                   className={`pl-10 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${
// //                     errors.confirmPassword 
// //                       ? 'border-red-500 focus:ring-red-200 shadow-sm' 
// //                       : `border-gray-300 ${
// //                           isAdmin 
// //                             ? 'focus:border-indigo-500 focus:ring-indigo-200' 
// //                             : 'focus:border-blue-500 focus:ring-blue-200'
// //                         } hover:border-gray-400`
// //                   }`}
// //                   placeholder="••••••••"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={toggleConfirmPasswordVisibility}
// //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// //                 >
// //                   {showConfirmPassword ? (
// //                     <EyeOffIcon size={18} className="text-gray-400 hover:text-gray-600 transition-colors" />
// //                   ) : (
// //                     <EyeIcon size={18} className="text-gray-400 hover:text-gray-600 transition-colors" />
// //                   )}
// //                 </button>
// //               </div>
// //               {errors.confirmPassword && (
// //                 <p className="mt-1 text-sm text-red-600 flex items-center">
// //                   <span className="mr-1">•</span>{errors.confirmPassword}
// //                 </p>
// //               )}
// //             </div>
// //           </div>

// //           {/* Terms and Conditions with icon */}
// //           <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
// //             <div className="flex items-center h-5">
// //               <input
// //                 id="agreeToTerms"
// //                 name="agreeToTerms"
// //                 type="checkbox"
// //                 checked={formData.agreeToTerms}
// //                 onChange={handleInputChange}
// //                 className={`h-4 w-4 ${
// //                   isAdmin 
// //                     ? 'text-indigo-600 focus:ring-indigo-500' 
// //                     : 'text-blue-600 focus:ring-blue-500'
// //                 } border-gray-300 rounded transition-colors`}
// //               />
// //             </div>
// //             <div className="ml-3 text-sm flex items-center">
// //               <CheckCircleIcon size={16} className={`mr-2 ${
// //                 isAdmin ? 'text-indigo-500' : 'text-blue-500'
// //               }`} />
// //               <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
// //                 I agree to the <a href="#" className={`${
// //                   isAdmin ? 'text-indigo-600 hover:text-indigo-800' : 'text-blue-600 hover:text-blue-800'
// //                 } underline decoration-dotted hover:decoration-solid transition-all duration-200`}>Terms and Conditions</a>
// //               </label>
// //             </div>
// //           </div>
// //           {errors.agreeToTerms && (
// //             <p className="mt-1 text-sm text-red-600 flex items-center">
// //               <span className="mr-1">•</span>{errors.agreeToTerms}
// //             </p>
// //           )}

// //           {/* Submit Button with hover effects */}
// //           <div className="pt-2">
// //             <button
// //               type="submit"
// //               className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 ${
// //                 isAdmin
// //                   ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-100'
// //                   : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 hover:shadow-lg hover:shadow-blue-100'
// //               }`}
// //             >
// //               <div className="flex items-center justify-center">
// //                 <UserPlusIcon size={18} className="mr-2" />
// //                 <span>Create Account</span>
// //               </div>
// //             </button>
// //           </div>
// //         </form>

// //         {/* Bottom section with toggle and login link */}
// //         <div className="mt-8 space-y-4">
// //           {/* Divider */}
// //           <div className="relative flex items-center py-2">
// //             <div className="flex-grow border-t border-gray-200"></div>
// //             <span className="flex-shrink mx-3 text-gray-400">{isAdmin ? 'ADMIN' : 'USER'}</span>
// //             <div className="flex-grow border-t border-gray-200"></div>
// //           </div>

// //           {/* Toggle Between Admin/User */}
// //           <div className="text-center">
// //             <button
// //               type="button"
// //               onClick={toggleUserType}
// //               className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
// //                 isAdmin 
// //                   ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100' 
// //                   : 'text-blue-700 bg-blue-50 hover:bg-blue-100'
// //               }`}
// //             >
// //               <ShieldIcon size={16} className="mr-2" />
// //               Switch to {isAdmin ? 'User' : 'Admin'} Registration
// //             </button>
// //           </div>

// //           {/* Login Link */}
// //           <div className="text-center pt-4">
// //             <p className="text-sm text-gray-600">
// //               Already have an account?{' '}
// //               <a 
// //                 href="#" 
// //                 className={`font-medium hover:underline transition-all duration-200 ${
// //                   isAdmin ? 'text-indigo-600 hover:text-indigo-800' : 'text-blue-600 hover:text-blue-800'
// //                 }`}
// //               >
// //                 Sign in instead
// //               </a>
// //             </p>
// //           </div>
          
// //           {/* Footer with decorative elements */}
// //           <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center space-x-4">
// //             <div className={`rounded-full p-2 ${isAdmin ? 'bg-indigo-50' : 'bg-blue-50'}`}>
// //               <LockIcon size={16} className={`${isAdmin ? 'text-indigo-500' : 'text-blue-500'}`} />
// //             </div>
// //             <div className={`rounded-full p-2 ${isAdmin ? 'bg-indigo-50' : 'bg-blue-50'}`}>
// //               <ShieldIcon size={16} className={`${isAdmin ? 'text-indigo-500' : 'text-blue-500'}`} />
// //             </div>
// //             <div className={`rounded-full p-2 ${isAdmin ? 'bg-indigo-50' : 'bg-blue-50'}`}>
// //               <UserIcon size={16} className={`${isAdmin ? 'text-indigo-500' : 'text-blue-500'}`} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupPage;









// import React, { useState } from 'react';
// import {
//   EyeIcon,
//   EyeOffIcon,
//   UserIcon,
//   KeyIcon,
//   ShieldIcon,
//   MailIcon,
//   UserPlusIcon
// } from 'lucide-react';

// const SignupPage = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });

//     // Clear errors when user types
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: '',
//       });
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const toggleUserType = () => {
//     setIsAdmin(!isAdmin);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert(`Account created as ${isAdmin ? 'Admin' : 'User'} with email: ${formData.email}`);
//       console.log('Form submitted:', { ...formData, isAdmin });

//       setFormData({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         agreeToTerms: false
//       });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className="flex justify-center mb-4">
//             {isAdmin ? (
//               <ShieldIcon size={48} className="text-indigo-600" />
//             ) : (
//               <UserPlusIcon size={48} className="text-blue-500" />
//             )}
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">
//             {isAdmin ? 'Admin Registration' : 'User Registration'}
//           </h2>
//           <p className="text-gray-600 mt-1">
//             Create your {isAdmin ? 'admin' : 'user'} account
//           </p>
//         </div>

//         {/* Toggle Button */}
//         <div className="text-center mb-4">
//           <button
//             onClick={toggleUserType}
//             type="button"
//             className={`px-4 py-2 rounded-lg text-sm font-medium shadow ${
//               isAdmin
//                 ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
//                 : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
//             }`}
//           >
//             Switch to {isAdmin ? 'User' : 'Admin'} Mode
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Full Name */}
//           <div>
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <UserIcon size={18} className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="fullName"
//                 id="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
//                   errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
//                 }`}
//                 placeholder="John Doe"
//               />
//             </div>
//             {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <MailIcon size={18} className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
//                   errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
//                 }`}
//                 placeholder="you@example.com"
//               />
//             </div>
//             {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
//           </div>

//           {/* Password */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <KeyIcon size={18} className="text-gray-400" />
//               </div>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
//                   errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
//                 }`}
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//               >
//                 {showPassword ? (
//                   <EyeOffIcon size={18} className="text-gray-400" />
//                 ) : (
//                   <EyeIcon size={18} className="text-gray-400" />
//                 )}
//               </button>
//             </div>
//             {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <KeyIcon size={18} className="text-gray-400" />
//               </div>
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
//                   errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
//                 }`}
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={toggleConfirmPasswordVisibility}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//               >
//                 {showConfirmPassword ? (
//                   <EyeOffIcon size={18} className="text-gray-400" />
//                 ) : (
//                   <EyeIcon size={18} className="text-gray-400" />
//                 )}
//               </button>
//             </div>
//             {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>}
//           </div>

//           {/* Terms and Conditions */}
//           <div className="flex items-start">
//             <input
//               id="agreeToTerms"
//               name="agreeToTerms"
//               type="checkbox"
//               checked={formData.agreeToTerms}
//               onChange={handleInputChange}
//               className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
//             />
//             <div className="ml-3 text-sm">
//               <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
//                 I agree to the{' '}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Terms and Conditions
//                 </a>
//               </label>
//               {errors.agreeToTerms && <p className="text-sm text-red-600 mt-1">{errors.agreeToTerms}</p>}
//             </div>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className={`w-full py-2 px-4 rounded-lg shadow text-white font-semibold ${
//               isAdmin ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'
//             } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//               isAdmin ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
//             }`}
//           >
//             Sign Up as {isAdmin ? 'Admin' : 'User'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;




import React, { useState } from 'react';
import {
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  KeyIcon,
  ShieldIcon,
  MailIcon,
  UserPlusIcon,
} from 'lucide-react';

const SignupPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'At least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          {isAdmin ? (
            <ShieldIcon size={48} className="text-indigo-600 mx-auto" />
          ) : (
            <UserPlusIcon size={48} className="text-blue-500 mx-auto" />
          )}
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {isAdmin ? 'Admin Registration' : 'User Registration'}
          </h2>
          <p className="text-gray-600">Create your {isAdmin ? 'admin' : 'user'} account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <UserIcon size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <MailIcon size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <KeyIcon size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <KeyIcon size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                placeholder="••••••••"
              />
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.agreeToTerms && <p className="text-sm text-red-600 mt-1">{errors.agreeToTerms}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
              isAdmin ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Sign Up as {isAdmin ? 'Admin' : 'User'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className="text-sm text-gray-600 hover:underline"
          >
            Switch to {isAdmin ? 'User' : 'Admin'} Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;