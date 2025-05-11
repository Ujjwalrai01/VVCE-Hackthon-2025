// import React, { useState } from 'react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import { Save, Edit2, X } from 'lucide-react';

// // Validation schema using simple validation rather than Yup
// const validateProfile = (values) => {
//   const errors = {};
  
//   if (!values.name) {
//     errors.name = 'Name is required';
//   } else if (values.name.length < 2) {
//     errors.name = 'Name is too short';
//   } else if (values.name.length > 50) {
//     errors.name = 'Name is too long';
//   }
  
//   if (!values.email) {
//     errors.email = 'Email is required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email format';
//   }
  
//   if (!values.pincode) {
//     errors.pincode = 'Pincode is required';
//   } else if (!/^[0-9]{6}$/.test(values.pincode)) {
//     errors.pincode = 'Pincode must be 6 digits';
//   }
  
//   return errors;
// };

// export default function UserProfile() {
//   // Mock initial user data
//   const [userData, setUserData] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     pincode: '123456',
//     avatar: '/api/placeholder/150/150',
//   });
  
//   const [isEditing, setIsEditing] = useState(false);
//   const [theme, setTheme] = useState('light');
  
//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };
  
//   const handleSubmit = (values, { setSubmitting }) => {
//     // In a real app, you would send this data to your API
//     setTimeout(() => {
//       setUserData({
//         ...userData,
//         name: values.name,
//         email: values.email,
//         pincode: values.pincode,
//       });
//       setIsEditing(false);
//       setSubmitting(false);
//     }, 500);
//   };
  
//   return (
//     <div className={`w-full max-w-md mx-auto p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">User Profile</h2>
//         <button 
//           onClick={toggleTheme}
//           className={`px-3 py-1 rounded-md ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
//         >
//           {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//         </button>
//       </div>
      
//       <div className="flex items-center mb-6">
//         <img 
//           src={userData.avatar} 
//           alt="User avatar" 
//           className="w-16 h-16 rounded-full mr-4 object-cover"
//         />
//         {!isEditing && (
//           <div>
//             <h3 className="text-xl font-medium">{userData.name}</h3>
//             <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{userData.email}</p>
//             <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Pincode: {userData.pincode}</p>
//           </div>
//         )}
//       </div>
      
//       {!isEditing ? (
//         <button
//           onClick={() => setIsEditing(true)}
//           className={`flex items-center px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
//         >
//           <Edit2 size={16} className="mr-2" />
//           Edit Profile
//         </button>
//       ) : (
//         <Formik
//           initialValues={{
//             name: userData.name,
//             email: userData.email,
//             pincode: userData.pincode,
//           }}
//           validate={validateProfile}
//           onSubmit={handleSubmit}
//         >
//           {({ handleSubmit, isSubmitting, errors, touched }) => (
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
//                   Name
//                 </label>
//                 <Field
//                   type="text"
//                   name="name"
//                   id="name"
//                   className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none ${errors.name && touched.name ? 'border-red-500' : theme === 'dark' ? 'focus:border-blue-500' : 'focus:border-blue-400'}`}
//                 />
//                 <ErrorMessage name="name">
//                   {msg => <div className="mt-1 text-sm text-red-500">{msg}</div>}
//                 </ErrorMessage>
//               </div>
              
//               <div>
//                 <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
//                   Email
//                 </label>
//                 <Field
//                   type="email"
//                   name="email"
//                   id="email"
//                   className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none ${errors.email && touched.email ? 'border-red-500' : theme === 'dark' ? 'focus:border-blue-500' : 'focus:border-blue-400'}`}
//                 />
//                 <ErrorMessage name="email">
//                   {msg => <div className="mt-1 text-sm text-red-500">{msg}</div>}
//                 </ErrorMessage>
//               </div>
              
//               <div>
//                 <label htmlFor="pincode" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
//                   Pincode
//                 </label>
//                 <Field
//                   type="text"
//                   name="pincode"
//                   id="pincode"
//                   className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none ${errors.pincode && touched.pincode ? 'border-red-500' : theme === 'dark' ? 'focus:border-blue-500' : 'focus:border-blue-400'}`}
//                 />
//                 <ErrorMessage name="pincode">
//                   {msg => <div className="mt-1 text-sm text-red-500">{msg}</div>}
//                 </ErrorMessage>
//               </div>
              
//               <div className="flex space-x-3">
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className={`flex items-center px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
//                 >
//                   <Save size={16} className="mr-2" />
//                   Save Changes
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className={`flex items-center px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-gray-800'} transition-colors`}
//                 >
//                   <X size={16} className="mr-2" />
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}
//         </Formik>
//       )}
//     </div>
//   );
// }

// // export default UserProfile;