// import React from 'react';
// import { 
//   CheckCircle, 
//   Clock, 
//   AlertTriangle, 
//   XCircle, 
//   FileCheck, 
//   ChevronRight, 
//   Calendar, 
//   User, 
//   RefreshCw
// } from 'lucide-react';

// /**
//  * FormStatusCard - Displays current status of a submitted form application
//  * 
//  * @param {Object} props
//  * @param {string} props.status - The current status (Submitted, Under Review, Approved, Rejected)
//  * @param {Object} props.formData - Data about the submission
//  * @param {string} props.formData.id - Form submission ID
//  * @param {string} props.formData.date - Submission date
//  * @param {string} props.formData.applicantName - Name of applicant
//  * @param {string} props.formData.type - Type of application
//  * @param {string} props.formData.remarks - Any remarks from reviewers (optional)
//  * @param {string} props.formData.nextStep - Next step in the process (optional)
//  * @param {string} props.formData.lastUpdated - When status was last updated
//  * @param {boolean} props.darkMode - Whether to use dark mode styling
//  * @param {Function} props.onRefresh - Function to call when refresh button is clicked
//  */
// const FormStatusCard = ({ 
//   status, 
//   formData, 
//   darkMode = false,
//   onRefresh = () => {}
// }) => {
//   // Default form data if not provided
//   const data = formData || {
//     id: "APP123456",
//     date: "2025-05-01",
//     applicantName: "John Doe",
//     type: "Account Opening",
//     lastUpdated: "2025-05-05"
//   };

//   // Configure status-specific styling and icons
//   const statusConfig = {
//     Submitted: {
//       icon: FileCheck,
//       mainColor: darkMode ? "bg-blue-900" : "bg-blue-100",
//       borderColor: darkMode ? "border-blue-700" : "border-blue-300",
//       textColor: darkMode ? "text-blue-300" : "text-blue-800",
//       lightTextColor: darkMode ? "text-blue-200" : "text-blue-600",
//       badgeColor: darkMode ? "bg-blue-800 text-blue-200" : "bg-blue-200 text-blue-800",
//       progressValue: 25
//     },
//     "Under Review": {
//       icon: Clock,
//       mainColor: darkMode ? "bg-amber-900" : "bg-amber-100",
//       borderColor: darkMode ? "border-amber-700" : "border-amber-300",
//       textColor: darkMode ? "text-amber-300" : "text-amber-800",
//       lightTextColor: darkMode ? "text-amber-200" : "text-amber-600",
//       badgeColor: darkMode ? "bg-amber-800 text-amber-200" : "bg-amber-200 text-amber-800",
//       progressValue: 50
//     },
//     Approved: {
//       icon: CheckCircle,
//       mainColor: darkMode ? "bg-green-900" : "bg-green-100",
//       borderColor: darkMode ? "border-green-700" : "border-green-300", 
//       textColor: darkMode ? "text-green-300" : "text-green-800",
//       lightTextColor: darkMode ? "text-green-200" : "text-green-600",
//       badgeColor: darkMode ? "bg-green-800 text-green-200" : "bg-green-200 text-green-800",
//       progressValue: 100
//     },
//     Rejected: {
//       icon: XCircle,
//       mainColor: darkMode ? "bg-red-900" : "bg-red-100",
//       borderColor: darkMode ? "border-red-700" : "border-red-300",
//       textColor: darkMode ? "text-red-300" : "text-red-800", 
//       lightTextColor: darkMode ? "text-red-200" : "text-red-600",
//       badgeColor: darkMode ? "bg-red-800 text-red-200" : "bg-red-200 text-red-800",
//       progressValue: 100
//     },
//     Pending: {
//       icon: AlertTriangle,
//       mainColor: darkMode ? "bg-gray-800" : "bg-gray-100",
//       borderColor: darkMode ? "border-gray-700" : "border-gray-300",
//       textColor: darkMode ? "text-gray-300" : "text-gray-800",
//       lightTextColor: darkMode ? "text-gray-400" : "text-gray-600", 
//       badgeColor: darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800",
//       progressValue: 15
//     }
//   };

//   // Use Pending as default if status is not recognized
//   const currentStatus = statusConfig[status] || statusConfig.Pending;
//   const StatusIcon = currentStatus.icon;

//   // Base card styling
//   const baseCardClasses = `rounded-lg border overflow-hidden shadow-sm ${currentStatus.mainColor} ${currentStatus.borderColor}`;
//   const baseTextClasses = darkMode ? "text-gray-200" : "text-gray-800";
  
//   // Additional status-based styling
//   const headerClasses = `${currentStatus.textColor} font-medium flex items-center justify-between`;
  
//   return (
//     <div className={`font-sans w-full max-w-md ${baseCardClasses}`}>
//       {/* Header with status and refresh button */}
//       <div className="p-4 border-b border-opacity-50 flex justify-between items-center">
//         <div className="flex items-center">
//           <StatusIcon className={`w-5 h-5 mr-2 ${currentStatus.textColor}`} />
//           <h3 className={`text-lg ${headerClasses}`}>{status}</h3>
//         </div>
//         <button 
//           onClick={onRefresh}
//           className={`p-2 rounded-full transition-all hover:bg-opacity-20 hover:bg-gray-500 ${currentStatus.lightTextColor}`}
//           aria-label="Refresh status"
//         >
//           <RefreshCw className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Progress bar */}
//       <div className="h-1 w-full bg-gray-300 dark:bg-gray-700">
//         <div 
//           className={`h-1 ${
//             status === 'Approved' ? 'bg-green-500 dark:bg-green-400' : 
//             status === 'Rejected' ? 'bg-red-500 dark:bg-red-400' : 
//             'bg-blue-500 dark:bg-blue-400'
//           }`}
//           style={{ width: `${currentStatus.progressValue}%` }}
//         />
//       </div>

//       {/* Main content */}
//       <div className="p-4">
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           {/* Application details */}
//           <div className={`${baseTextClasses}`}>
//             <div className="flex items-center mb-2">
//               <User className="w-4 h-4 mr-1 opacity-70" />
//               <span className="text-sm font-medium">Applicant</span>
//             </div>
//             <p className="text-base">{data.applicantName}</p>
//           </div>
          
//           <div className={`${baseTextClasses}`}>
//             <div className="flex items-center mb-2">
//               <Calendar className="w-4 h-4 mr-1 opacity-70" />
//               <span className="text-sm font-medium">Submitted On</span>
//             </div>
//             <p className="text-base">{new Date(data.date).toLocaleDateString()}</p>
//           </div>
//         </div>

//         {/* Application ID and Type */}
//         <div className="mb-4">
//           <div className="flex justify-between items-center">
//             <span className={`text-sm ${currentStatus.lightTextColor}`}>Application ID</span>
//             <span className={`text-sm font-mono px-2 py-0.5 rounded ${currentStatus.badgeColor}`}>
//               {data.id}
//             </span>
//           </div>
//           <div className="flex justify-between items-center mt-2">
//             <span className={`text-sm ${currentStatus.lightTextColor}`}>Type</span>
//             <span className={`${baseTextClasses} text-sm font-medium`}>{data.type}</span>
//           </div>
//           <div className="flex justify-between items-center mt-2">
//             <span className={`text-sm ${currentStatus.lightTextColor}`}>Last Updated</span>
//             <span className={`${baseTextClasses} text-sm`}>
//               {new Date(data.lastUpdated).toLocaleDateString()}
//             </span>
//           </div>
//         </div>

//         {/* Remarks (if any) */}
//         {data.remarks && (
//           <div className={`mt-4 p-3 rounded-md ${
//             status === 'Rejected' 
//               ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200' 
//               : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
//           }`}>
//             <h4 className="text-sm font-medium mb-1">Remarks</h4>
//             <p className="text-sm">{data.remarks}</p>
//           </div>
//         )}

//         {/* Next steps (if any) */}
//         {data.nextStep && (
//           <div className={`mt-4 flex items-center p-3 rounded-md bg-opacity-50 ${
//             darkMode ? "bg-gray-800" : "bg-gray-50"
//           } ${baseTextClasses}`}>
//             <div className="flex-1">
//               <h4 className="text-sm font-medium mb-1">Next Step</h4>
//               <p className="text-sm">{data.nextStep}</p>
//             </div>
//             <ChevronRight className="w-5 h-5 opacity-50" />
//           </div>
//         )}
//       </div>

//       {/* Call to action based on status */}
//       <div className={`p-4 border-t ${currentStatus.borderColor}`}>
//         {status === 'Submitted' && (
//           <p className={`text-sm ${currentStatus.lightTextColor}`}>
//             Your application has been received and will be processed soon.
//           </p>
//         )}
//         {status === 'Under Review' && (
//           <p className={`text-sm ${currentStatus.lightTextColor}`}>
//             Your application is currently being reviewed by our team.
//           </p>
//         )}
//         {status === 'Approved' && (
//           <p className={`text-sm ${currentStatus.lightTextColor}`}>
//             Congratulations! Your application has been approved.
//           </p>
//         )}
//         {status === 'Rejected' && (
//           <p className={`text-sm ${currentStatus.lightTextColor}`}>
//             Unfortunately, your application has been rejected. Please review the remarks for more information.
//           </p>
//         )}
//         {status === 'Pending' && (
//           <p className={`text-sm ${currentStatus.lightTextColor}`}>
//             Additional information may be required to process your application.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormStatusCard;