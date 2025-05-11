// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { ChevronsDown, AlertCircle, Check, Moon, Sun } from 'lucide-react';

// // Bank-specific field configurations
// const BANK_FIELDS = {
//   "State Bank of India (SBI)": [
//     { name: 'accountNumber', label: 'Account Number', type: 'text', 
//       validation: Yup.string()
//         .matches(/^\d{11}$/, 'SBI account number must be 11 digits')
//         .required('Account number is required') },
//     { name: 'cifNumber', label: 'CIF Number', type: 'text',
//       validation: Yup.string()
//         .matches(/^\d{10}$/, 'CIF number must be 10 digits')
//         .required('CIF number is required') },
//     { name: 'accountType', label: 'Account Type', type: 'select',
//       options: ['Savings', 'Current', 'Salary', 'Fixed Deposit'],
//       validation: Yup.string().required('Account type is required') }
//   ],
//   "HDFC Bank": [
//     { name: 'accountNumber', label: 'Account Number', type: 'text',
//       validation: Yup.string()
//         .matches(/^\d{14}$/, 'HDFC account number must be 14 digits')
//         .required('Account number is required') },
//     { name: 'customerId', label: 'Customer ID', type: 'text',
//       validation: Yup.string()
//         .matches(/^\d{8}$/, 'Customer ID must be 8 digits')
//         .required('Customer ID is required') },
//     { name: 'accountType', label: 'Account Type', type: 'select',
//       options: ['Savings', 'Current', 'Salary', 'Premium'],
//       validation: Yup.string().required('Account type is required') },
//     { name: 'isNetBankingEnabled', label: 'NetBanking Enabled', type: 'checkbox',
//       validation: Yup.boolean() }
//   ],
//   "ICICI Bank": [
//     { name: 'accountNumber', label: 'Account Number', type: 'text',
//       validation: Yup.string()
//         .matches(/^\d{12}$/, 'ICICI account number must be 12 digits')
//         .required('Account number is required') },
//     { name: 'cardNumber', label: 'Debit Card Number (Last 4 digits)', type: 'text',
//       validation: Yup.string()
//         .matches(/^\d{4}$/, 'Please enter last 4 digits only')
//         .required('Debit card details required') },
//     { name: 'accountType', label: 'Account Type', type: 'select',
//       options: ['Savings', 'Current', 'Salary', 'Privilege'],
//       validation: Yup.string().required('Account type is required') },
//     { name: 'mobileLinked', label: 'Mobile Number Linked', type: 'checkbox',
//       validation: Yup.boolean() }
//   ],
//   "Axis Bank": [
//     { name: 'accountNumber', label: 'Account Number', type: 'text',
//       validation: Yup.string()
//         .matches(/^\d{15}$/, 'Axis account number must be 15 digits')
//         .required('Account number is required') },
//     { name: 'customerId', label: 'Customer ID', type: 'text',
//       validation: Yup.string()
//         .matches(/^[A-Z]{3}\d{7}$/, 'Format: 3 uppercase letters followed by 7 digits')
//         .required('Customer ID is required') },
//     { name: 'accountType', label: 'Account Type', type: 'select',
//       options: ['Savings', 'Current', 'Salary', 'Premium', 'NRI'],
//       validation: Yup.string().required('Account type is required') }
//   ]
// };

// // Common fields for all banks
// const COMMON_FIELDS = [
//   { name: 'name', label: 'Full Name', type: 'text',
//     validation: Yup.string()
//       .min(3, 'Name must be at least 3 characters')
//       .required('Name is required') },
//   { name: 'mobile', label: 'Mobile Number', type: 'tel',
//     validation: Yup.string()
//       .matches(/^[6-9]\d{9}$/, 'Enter valid 10-digit Indian mobile number')
//       .required('Mobile number is required') },
//   { name: 'email', label: 'Email Address', type: 'email',
//     validation: Yup.string()
//       .email('Enter a valid email')
//       .required('Email is required') },
//   { name: 'acceptTerms', label: 'I agree to terms and conditions', type: 'checkbox',
//     validation: Yup.boolean()
//       .oneOf([true], 'You must accept the terms and conditions')
//       .required('You must accept the terms and conditions') }
// ];

// const DynamicForm = ({ 
//   selectedBank, 
//   onSubmit, 
//   darkMode = false,
//   onToggleDarkMode = () => {} 
// }) => {
//   const [allFields, setAllFields] = useState([]);
//   const [validationSchema, setValidationSchema] = useState({});
//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   // Generate initial values
//   const generateInitialValues = (fields) => {
//     const values = {};
//     fields.forEach(field => {
//       if (field.type === 'checkbox') {
//         values[field.name] = false;
//       } else {
//         values[field.name] = '';
//       }
//     });
//     return values;
//   };

//   // Update fields and validation schema when selected bank changes
//   useEffect(() => {
//     if (!selectedBank) {
//       setAllFields(COMMON_FIELDS);
//     } else {
//       const bankSpecificFields = BANK_FIELDS[selectedBank] || [];
//       setAllFields([...bankSpecificFields, ...COMMON_FIELDS]);
//     }
//   }, [selectedBank]);

//   // Build validation schema
//   useEffect(() => {
//     const schemaObject = {};
//     allFields.forEach(field => {
//       if (field.validation) {
//         schemaObject[field.name] = field.validation;
//       }
//     });
//     setValidationSchema(Yup.object().shape(schemaObject));
//   }, [allFields]);

//   // Handle form submission
//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     setSubmissionStatus('submitting');
    
//     // Simulate API call
//     setTimeout(() => {
//       if (onSubmit) {
//         onSubmit(values);
//       }
//       setSubmissionStatus('success');
//       setSubmitting(false);
      
//       // Reset form after 2 seconds of showing success message
//       setTimeout(() => {
//         resetForm();
//         setSubmissionStatus(null);
//       }, 2000);
//     }, 1000);
//   };

//   // Theme-based styling
//   const themeClasses = {
//     container: darkMode 
//       ? 'bg-gray-800 text-white' 
//       : 'bg-white text-gray-800',
//     card: darkMode 
//       ? 'bg-gray-900 border-gray-700' 
//       : 'bg-gray-50 border-gray-200',
//     input: darkMode 
//       ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500 placeholder-gray-400' 
//       : 'bg-white text-gray-800 border-gray-300 focus:border-blue-500 placeholder-gray-500',
//     select: darkMode 
//       ? 'bg-gray-700 text-white border-gray-600' 
//       : 'bg-white text-gray-800 border-gray-300',
//     button: {
//       primary: darkMode 
//         ? 'bg-blue-600 hover:bg-blue-700 text-white' 
//         : 'bg-blue-500 hover:bg-blue-600 text-white',
//       secondary: darkMode 
//         ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' 
//         : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
//     },
//     label: darkMode 
//       ? 'text-gray-300' 
//       : 'text-gray-700',
//     error: 'text-red-500',
//     success: darkMode 
//       ? 'bg-green-800 text-green-100 border-green-700' 
//       : 'bg-green-50 text-green-800 border-green-200'
//   };

//   // Render appropriate input based on field type
//   const renderField = (field) => {
//     switch (field.type) {
//       case 'select':
//         return (
//           <div className="relative">
//             <Field
//               as="select"
//               name={field.name}
//               className={`block w-full p-2 pr-8 rounded border ${themeClasses.select} appearance-none`}
//             >
//               <option value="">Select {field.label}</option>
//               {field.options && field.options.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </Field>
//             <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//               <ChevronsDown className="w-4 h-4 text-gray-500" />
//             </div>
//           </div>
//         );
//       case 'checkbox':
//         return (
//           <div className="flex items-center">
//             <Field
//               type="checkbox"
//               name={field.name}
//               className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             />
//             <label htmlFor={field.name} className={`ml-2 ${themeClasses.label}`}>
//               {field.label}
//             </label>
//           </div>
//         );
//       default:
//         return (
//           <Field
//             type={field.type}
//             name={field.name}
//             placeholder={`Enter ${field.label}`}
//             className={`block w-full p-2 rounded border ${themeClasses.input}`}
//           />
//         );
//     }
//   };

//   if (!allFields.length) {
//     return <div className="p-4">Loading form fields...</div>;
//   }

//   return (
//     <div className={`font-sans ${themeClasses.container} w-full max-w-lg`}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">
//           {selectedBank ? `${selectedBank} Details` : 'Customer Information'}
//         </h2>
//         <button 
//           onClick={onToggleDarkMode}
//           className={`p-2 rounded-full ${themeClasses.button.secondary}`}
//           aria-label="Toggle dark mode"
//         >
//           {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//       </div>

//       {!selectedBank && (
//         <div className="p-4 mb-4 rounded-lg bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 flex items-center">
//           <AlertCircle className="w-5 h-5 mr-2" />
//           Please select a bank first to see bank-specific fields
//         </div>
//       )}

//       <div className={`p-6 rounded-lg border mb-6 ${themeClasses.card}`}>
//         <Formik
//           enableReinitialize
//           initialValues={generateInitialValues(allFields)}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting, touched, errors }) => (
//             <Form className="space-y-4">
//               {allFields.map((field) => (
//                 <div key={field.name} className="mb-4">
//                   {field.type !== 'checkbox' && (
//                     <label htmlFor={field.name} className={`block text-sm font-medium mb-1 ${themeClasses.label}`}>
//                       {field.label} {field.validation && field.validation.describe().tests.some(t => t.name === 'required') && <span className="text-red-500">*</span>}
//                     </label>
//                   )}
                  
//                   {renderField(field)}
                  
//                   <ErrorMessage name={field.name}>
//                     {msg => (
//                       <div className={`mt-1 text-sm flex items-center ${themeClasses.error}`}>
//                         <AlertCircle className="w-3 h-3 mr-1" />
//                         {msg}
//                       </div>
//                     )}
//                   </ErrorMessage>
//                 </div>
//               ))}

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting || submissionStatus === 'submitting' || !selectedBank}
//                   className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${themeClasses.button.primary} ${
//                     (isSubmitting || submissionStatus === 'submitting' || !selectedBank) ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {submissionStatus === 'submitting' ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       Submitting...
//                     </>
//                   ) : 'Submit Details'}
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>

//       {submissionStatus === 'success' && (
//         <div className={`p-4 mb-4 rounded-lg border flex items-center ${themeClasses.success}`}>
//           <Check className="w-5 h-5 mr-2" />
//           <span>Form submitted successfully!</span>
//         </div>
//       )}
      
//       <div className="text-sm text-gray-500 dark:text-gray-400">
//         <p>Fields marked with <span className="text-red-500">*</span> are required</p>
//       </div>
//     </div>
//   );
// };

// export default DynamicForm;