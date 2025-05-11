// import React, { useState, useEffect, useMemo } from 'react';
// import { 
//   Search, 
//   SlidersHorizontal, 
//   ChevronDown, 
//   ChevronUp, 
//   Filter, 
//   X, 
//   Eye, 
//   Clock, 
//   CheckCircle, 
//   XCircle, 
//   FileText, 
//   Calendar, 
//   Download
// } from 'lucide-react';

// // Sample application data (replace with your actual data source)
// const SAMPLE_APPLICATIONS = [
//   {
//     id: "APP78964",
//     bank: "State Bank of India (SBI)",
//     branch: "SBI Fort Branch",
//     submissionDate: "2025-05-01",
//     status: "Approved",
//     type: "Account Opening",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78965",
//     bank: "HDFC Bank",
//     branch: "HDFC Bank Connaught Place",
//     submissionDate: "2025-04-28",
//     status: "Under Review",
//     type: "Personal Loan",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78966",
//     bank: "ICICI Bank",
//     branch: "ICICI Bank Fort Branch",
//     submissionDate: "2025-04-25",
//     status: "Rejected",
//     type: "Credit Card",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78967",
//     bank: "Axis Bank",
//     branch: "Axis Bank Hyderabad",
//     submissionDate: "2025-04-20",
//     status: "Approved",
//     type: "Fixed Deposit",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78968",
//     bank: "State Bank of India (SBI)",
//     branch: "SBI Mumbai Main Branch",
//     submissionDate: "2025-04-15",
//     status: "Submitted",
//     type: "Home Loan",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78969",
//     bank: "HDFC Bank",
//     branch: "HDFC Bank Fort",
//     submissionDate: "2025-04-10",
//     status: "Under Review",
//     type: "Auto Loan",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78970",
//     bank: "ICICI Bank",
//     branch: "ICICI Bank M.G. Road",
//     submissionDate: "2025-04-05",
//     status: "Approved",
//     type: "Savings Account",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78971",
//     bank: "Axis Bank",
//     branch: "Axis Bank Fort",
//     submissionDate: "2025-04-01",
//     status: "Rejected",
//     type: "Investment Account",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78972",
//     bank: "State Bank of India (SBI)",
//     branch: "SBI Connaught Place",
//     submissionDate: "2025-03-25",
//     status: "Submitted",
//     type: "Education Loan",
//     applicantName: "Rahul Sharma"
//   },
//   {
//     id: "APP78973",
//     bank: "HDFC Bank",
//     branch: "HDFC Bank Kala Ghoda",
//     submissionDate: "2025-03-20",
//     status: "Approved",
//     type: "Current Account",
//     applicantName: "Rahul Sharma"
//   }
// ];

// /**
//  * ApplicationsTable - Interactive table for displaying and filtering submitted applications
//  * 
//  * @param {Object} props
//  * @param {Function} props.onViewApplication - Function to call when viewing application details
//  * @param {Function} props.onDownloadStatement - Function to call when downloading application PDF
//  * @param {boolean} props.darkMode - Whether to use dark mode styling
//  */
// const ApplicationsTable = ({ 
//   onViewApplication, 
//   onDownloadStatement, 
//   darkMode = false 
// }) => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     bank: '',
//     status: '',
//     dateRange: null
//   });
//   const [sortConfig, setSortConfig] = useState({
//     key: 'submissionDate',
//     direction: 'desc'
//   });
//   const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Banks list for filter dropdown
//   const banksList = ["State Bank of India (SBI)", "HDFC Bank", "ICICI Bank", "Axis Bank"];
  
//   // Status list for filter dropdown
//   const statusList = ["Submitted", "Under Review", "Approved", "Rejected"];

//   // Load applications data
//   useEffect(() => {
//     // Simulate API fetch
//     setTimeout(() => {
//       setApplications(SAMPLE_APPLICATIONS);
//       setLoading(false);
//     }, 500);
//   }, []);

//   // Sort handler
//   const requestSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Apply sorting to applications
//   const sortedApplications = useMemo(() => {
//     const sortableItems = [...applications];
//     if (sortConfig.key) {
//       sortableItems.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableItems;
//   }, [applications, sortConfig]);

//   // Apply filters and search
//   const filteredApplications = useMemo(() => {
//     return sortedApplications.filter(app => {
//       // Apply search term filter
//       const searchMatch = 
//         app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         app.bank.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         app.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         app.type.toLowerCase().includes(searchTerm.toLowerCase());
      
//       // Apply bank filter if set
//       const bankMatch = filters.bank ? app.bank === filters.bank : true;
      
//       // Apply status filter if set
//       const statusMatch = filters.status ? app.status === filters.status : true;
      
//       // Apply date range filter if set
//       const dateMatch = true; // Simplified for this example
      
//       return searchMatch && bankMatch && statusMatch && dateMatch;
//     });
//   }, [sortedApplications, searchTerm, filters]);

//   // Calculate pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredApplications.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

//   // Reset filters
//   const resetFilters = () => {
//     setFilters({
//       bank: '',
//       status: '',
//       dateRange: null
//     });
//     setIsFilterMenuOpen(false);
//   };

//   // Get appropriate status icon and color
//   const getStatusDetails = (status) => {
//     switch (status) {
//       case 'Submitted':
//         return { 
//           icon: FileText, 
//           color: darkMode ? 'text-blue-400' : 'text-blue-600',
//           bgColor: darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
//         };
//       case 'Under Review':
//         return { 
//           icon: Clock, 
//           color: darkMode ? 'text-amber-400' : 'text-amber-600',
//           bgColor: darkMode ? 'bg-amber-900/50' : 'bg-amber-100'
//         };
//       case 'Approved':
//         return { 
//           icon: CheckCircle, 
//           color: darkMode ? 'text-green-400' : 'text-green-600',
//           bgColor: darkMode ? 'bg-green-900/50' : 'bg-green-100'
//         };
//       case 'Rejected':
//         return { 
//           icon: XCircle, 
//           color: darkMode ? 'text-red-400' : 'text-red-600',
//           bgColor: darkMode ? 'bg-red-900/50' : 'bg-red-100'
//         };
//       default:
//         return { 
//           icon: FileText, 
//           color: darkMode ? 'text-gray-400' : 'text-gray-600',
//           bgColor: darkMode ? 'bg-gray-800' : 'bg-gray-100'
//         };
//     }
//   };

//   // Get sort icon
//   const getSortIcon = (columnName) => {
//     if (sortConfig.key !== columnName) {
//       return <ChevronDown className="w-4 h-4 opacity-50" />;
//     }
//     return sortConfig.direction === 'asc' 
//       ? <ChevronUp className="w-4 h-4" /> 
//       : <ChevronDown className="w-4 h-4" />;
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-IN', { 
//       day: 'numeric', 
//       month: 'short', 
//       year: 'numeric' 
//     });
//   };

//   // Theme classes
//   const themeClasses = {
//     container: darkMode 
//       ? 'bg-gray-900 text-gray-200' 
//       : 'bg-white text-gray-800',
//     table: darkMode 
//       ? 'border-gray-700' 
//       : 'border-gray-200',
//     tableHeader: darkMode 
//       ? 'bg-gray-800 text-gray-200' 
//       : 'bg-gray-50 text-gray-600',
//     tableRow: darkMode 
//       ? 'border-gray-700 hover:bg-gray-800' 
//       : 'border-gray-200 hover:bg-gray-50',
//     inputBg: darkMode 
//       ? 'bg-gray-800 border-gray-700' 
//       : 'bg-white border-gray-300',
//     button: {
//       primary: darkMode 
//         ? 'bg-blue-600 hover:bg-blue-700 text-white' 
//         : 'bg-blue-500 hover:bg-blue-600 text-white',
//       secondary: darkMode 
//         ? 'bg-gray-700 hover:bg-gray-600 text-white' 
//         : 'bg-gray-100 hover:bg-gray-200 text-gray-800',
//       outline: darkMode 
//         ? 'border border-gray-600 hover:bg-gray-800 text-gray-300' 
//         : 'border border-gray-300 hover:bg-gray-100 text-gray-600'
//     },
//     filterMenu: darkMode 
//       ? 'bg-gray-800 border-gray-700 shadow-xl' 
//       : 'bg-white border-gray-200 shadow-lg',
//     paginationButton: darkMode 
//       ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
//       : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100',
//     activePaginationButton: darkMode 
//       ? 'bg-blue-900 border-blue-700 text-blue-200' 
//       : 'bg-blue-100 border-blue-300 text-blue-800'
//   };

//   return (
//     <div className={`font-sans w-full ${themeClasses.container} p-4`}>
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
//         {/* Search Input */}
//         <div className="relative flex-1 max-w-md">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           </div>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className={`w-full pl-10 pr-4 py-2 rounded-lg border ${themeClasses.inputBg}`}
//             placeholder="Search applications..."
//           />
//           {searchTerm && (
//             <button 
//               onClick={() => setSearchTerm('')}
//               className="absolute inset-y-0 right-0 flex items-center pr-3"
//             >
//               <X className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
//             </button>
//           )}
//         </div>
        
//         {/* Filter Button */}
//         <div className="relative">
//           <button
//             onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
//             className={`flex items-center px-4 py-2 rounded-lg ${themeClasses.button.outline}`}
//           >
//             <Filter className="w-4 h-4 mr-2" />
//             Filter Options
//             {(filters.bank || filters.status) && (
//               <span className="ml-2 flex h-2 w-2 rounded-full bg-blue-500"></span>
//             )}
//           </button>
          
//           {/* Filter Menu Popup */}
//           {isFilterMenuOpen && (
//             <div className={`absolute right-0 mt-2 w-72 p-4 rounded-lg border z-10 ${themeClasses.filterMenu}`}>
//               <div className="flex justify-between items-center mb-4">
//                 <h4 className="font-medium">Filter Applications</h4>
//                 <button 
//                   onClick={() => setIsFilterMenuOpen(false)}
//                   className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
              
//               {/* Bank Filter */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Bank</label>
//                 <select
//                   value={filters.bank}
//                   onChange={(e) => setFilters({...filters, bank: e.target.value})}
//                   className={`w-full p-2 rounded border ${themeClasses.inputBg}`}
//                 >
//                   <option value="">All Banks</option>
//                   {banksList.map(bank => (
//                     <option key={bank} value={bank}>{bank}</option>
//                   ))}
//                 </select>
//               </div>
              
//               {/* Status Filter */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Status</label>
//                 <div className="grid grid-cols-2 gap-2">
//                   {statusList.map(status => {
//                     const isSelected = filters.status === status;
//                     const statusDetails = getStatusDetails(status);
                    
//                     return (
//                       <button
//                         key={status}
//                         onClick={() => setFilters({
//                           ...filters, 
//                           status: isSelected ? '' : status
//                         })}
//                         className={`p-2 rounded border flex items-center justify-center text-sm ${
//                           isSelected 
//                             ? `${statusDetails.bgColor} ${statusDetails.color} border-opacity-50`
//                             : `${themeClasses.inputBg} hover:bg-opacity-80`
//                         }`}
//                       >
//                         {React.createElement(statusDetails.icon, { 
//                           className: `w-3 h-3 mr-1 ${isSelected ? statusDetails.color : ''}` 
//                         })}
//                         {status}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
              
//               {/* Filter Actions */}
//               <div className="flex justify-between">
//                 <button
//                   onClick={resetFilters}
//                   className={`px-3 py-1 text-sm rounded ${themeClasses.button.outline}`}
//                 >
//                   Reset Filters
//                 </button>
//                 <button
//                   onClick={() => setIsFilterMenuOpen(false)}
//                   className={`px-3 py-1 text-sm rounded ${themeClasses.button.primary}`}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Applied Filters Display */}
//       {(filters.bank || filters.status) && (
//         <div className="flex flex-wrap gap-2 mb-4">
//           {filters.bank && (
//             <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
//               darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
//             }`}>
//               Bank: {filters.bank}
//               <button
//                 onClick={() => setFilters({...filters, bank: ''})}
//                 className="ml-1 focus:outline-none"
//               >
//                 <X className="w-3 h-3" />
//               </button>
//             </div>
//           )}
//           {filters.status && (
//             <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
//               darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
//             }`}>
//               Status: {filters.status}
//               <button
//                 onClick={() => setFilters({...filters, status: ''})}
//                 className="ml-1 focus:outline-none"
//               >
//                 <X className="w-3 h-3" />
//               </button>
//             </div>
//           )}
//           <button
//             onClick={resetFilters}
//             className="text-xs text-blue-500 dark:text-blue-400 underline hover:no-underline"
//           >
//             Clear all
//           </button>
//         </div>
//       )}
      
//       {/* Loader */}
//       {loading ? (
//         <div className="flex justify-center items-center py-20">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       ) : filteredApplications.length === 0 ? (
//         <div className={`p-6 text-center border rounded-lg ${
//           darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'
//         }`}>
//           <FileText className="mx-auto h-12 w-12 opacity-30 mb-2" />
//           <h3 className="text-lg font-medium mb-1">No applications found</h3>
//           <p className="text-sm">Try adjusting your search or filter criteria</p>
//         </div>
//       ) : (
//         <>
//           {/* Applications Table */}
//           <div className="overflow-x-auto">
//             <table className={`min-w-full border ${themeClasses.table}`}>
//               <thead className={themeClasses.tableHeader}>
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     <button 
//                       className="flex items-center font-medium focus:outline-none"
//                       onClick={() => requestSort('id')}
//                     >
//                       ID {getSortIcon('id')}
//                     </button>
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     <button 
//                       className="flex items-center font-medium focus:outline-none"
//                       onClick={() => requestSort('bank')}
//                     >
//                       Bank {getSortIcon('bank')}
//                     </button>
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     <button 
//                       className="flex items-center font-medium focus:outline-none"
//                       onClick={() => requestSort('branch')}
//                     >
//                       Branch {getSortIcon('branch')}
//                     </button>
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     <button 
//                       className="flex items-center font-medium focus:outline-none"
//                       onClick={() => requestSort('type')}
//                     >
//                       Type {getSortIcon('type')}
//                     </button>
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     <button 
//                       className="flex items-center font-medium focus:outline-none"
//                       onClick={() => requestSort('submissionDate')}
//                     >
//                       Date {getSortIcon('submissionDate')}
//                     </button>
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     <button 
//                       className="flex items-center font-medium focus:outline-none"
//                       onClick={() => requestSort('status')}
//                     >
//                       Status {getSortIcon('status')}
//                     </button>
//                   </th>
//                   <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//                 {currentItems.map((application) => {
//                   const statusDetails = getStatusDetails(application.status);
//                   const StatusIcon = statusDetails.icon;
                  
//                   return (
//                     <tr key={application.id} className={`hover:bg-opacity-50 ${themeClasses.tableRow}`}>
//                       <td className="px-4 py-3 text-sm font-mono">
//                         {application.id}
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         {application.bank}
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <div className="truncate max-w-[200px]" title={application.branch}>
//                           {application.branch}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         {application.type}
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <div className="flex items-center">
//                           <Calendar className="w-3 h-3 mr-1 opacity-70" />
//                           {formatDate(application.submissionDate)}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${statusDetails.bgColor} ${statusDetails.color}`}>
//                           <StatusIcon className="w-3 h-3 mr-1" />
//                           {application.status}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-sm text-right">
//                         <div className="flex justify-end">
//                           <button
//                             onClick={() => onViewApplication(application)}
//                             className={`p-1 rounded-full mr-2 ${themeClasses.button.outline}`}
//                             title="View details"
//                           >
//                             <Eye className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => onDownloadStatement(application)}
//                             className={`p-1 rounded-full ${themeClasses.button.outline}`}
//                             title="Download statement"
//                           >
//                             <Download className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
          
//           {/* Pagination */}
//           <div className="flex justify-between items-center mt-4 flex-wrap">
//             <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
//               Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredApplications.length)} of {filteredApplications.length} entries
//             </div>
//             <div className="flex space-x-1">
//               <button
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`px-3 py-1 rounded border text-sm ${
//                   currentPage === 1 
//                     ? 'opacity-50 cursor-not-allowed' 
//                     : ''
//                 } ${themeClasses.paginationButton}`}
//               >
//                 Previous
//               </button>
              
//               {Array.from({ length: Math.min(totalPages, 3) }).map((_, idx) => {
//                 // Simple pagination logic for demonstration
//                 let pageNum;
//                 if (totalPages <= 3) {
//                   pageNum = idx + 1;
//                 } else if (currentPage <= 2) {
//                   pageNum = idx + 1;
//                 } else if (currentPage >= totalPages - 1) {
//                   pageNum = totalPages - 2 + idx;
//                 } else {
//                   pageNum = currentPage - 1 + idx;
//                 }
                
//                 return (
//                   <button
//                     key={pageNum}
//                     onClick={() => setCurrentPage(pageNum)}
//                     className={`w-8 h-8 flex items-center justify-center rounded border text-sm ${
//                       currentPage === pageNum 
//                         ? themeClasses.activePaginationButton 
//                         : themeClasses.paginationButton
//                     }`}
//                   >
//                     {pageNum}
//                   </button>
//                 );
//               })}
              
//               <button
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className={`px-3 py-1 rounded border text-sm ${
//                   currentPage === totalPages 
//                     ? 'opacity-50 cursor-not-allowed' 
//                     : ''
//                 } ${themeClasses.paginationButton}`}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ApplicationsTable;