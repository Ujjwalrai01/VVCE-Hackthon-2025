// import { useState, useEffect } from 'react';
// import { Search, MapPin, Building, Phone, X } from 'lucide-react';

// // Mock branch data for different banks and pincodes
// const MOCK_BRANCHES = {
//   "State Bank of India (SBI)": {
//     "400001": [
//       { id: "sbi-400001-1", name: "SBI Fort Branch", address: "Fort, Mumbai", phone: "022-22661820", ifsc: "SBIN0000300" },
//       { id: "sbi-400001-2", name: "SBI Mumbai Main Branch", address: "Mumbai Samachar Marg", phone: "022-22661500", ifsc: "SBIN0000001" }
//     ],
//     "110001": [
//       { id: "sbi-110001-1", name: "SBI Connaught Place", address: "Connaught Place, New Delhi", phone: "011-23344237", ifsc: "SBIN0000691" },
//       { id: "sbi-110001-2", name: "SBI Parliament Street", address: "Parliament Street, New Delhi", phone: "011-23344390", ifsc: "SBIN0000317" }
//     ],
//     "700001": [
//       { id: "sbi-700001-1", name: "SBI Kolkata Main", address: "Strand Road, Kolkata", phone: "033-22420216", ifsc: "SBIN0000001" }
//     ]
//   },
//   "HDFC Bank": {
//     "400001": [
//       { id: "hdfc-400001-1", name: "HDFC Bank Fort", address: "Fort, Mumbai", phone: "022-22684888", ifsc: "HDFC0000060" },
//       { id: "hdfc-400001-2", name: "HDFC Bank Kala Ghoda", address: "Kala Ghoda, Mumbai", phone: "022-22674888", ifsc: "HDFC0000128" }
//     ],
//     "110001": [
//       { id: "hdfc-110001-1", name: "HDFC Bank Connaught Place", address: "Connaught Place, New Delhi", phone: "011-23361303", ifsc: "HDFC0000003" }
//     ]
//   },
//   "ICICI Bank": {
//     "400001": [
//       { id: "icici-400001-1", name: "ICICI Bank Fort Branch", address: "Fort, Mumbai", phone: "022-22002722", ifsc: "ICIC0000104" }
//     ],
//     "560001": [
//       { id: "icici-560001-1", name: "ICICI Bank M.G. Road", address: "M.G. Road, Bangalore", phone: "080-25320123", ifsc: "ICIC0000002" }
//     ]
//   },
//   "Axis Bank": {
//     "400001": [
//       { id: "axis-400001-1", name: "Axis Bank Fort", address: "Fort, Mumbai", phone: "022-22672401", ifsc: "UTIB0000004" }
//     ],
//     "500001": [
//       { id: "axis-500001-1", name: "Axis Bank Hyderabad", address: "Bank Street, Hyderabad", phone: "040-23433401", ifsc: "UTIB0000027" }
//     ]
//   }
// };

// // Add some default branches for other banks
// const DEFAULT_BANK_DATA = {
//   "600001": [
//     { id: "default-600001-1", name: "Main Branch", address: "Chennai Main Road", phone: "044-23456789", ifsc: "BANK0000001" },
//     { id: "default-600001-2", name: "Downtown Branch", address: "Anna Salai, Chennai", phone: "044-23456780", ifsc: "BANK0000002" }
//   ],
//   "110001": [
//     { id: "default-110001-1", name: "CP Branch", address: "Connaught Place, New Delhi", phone: "011-23456789", ifsc: "BANK0000101" }
//   ]
// };

// export default function BranchLookup({ selectedBank, onBranchSelect, darkMode = false }) {
//   const [pincode, setPincode] = useState('');
//   const [branches, setBranches] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Reset state when bank changes
//   useEffect(() => {
//     setPincode('');
//     setBranches([]);
//     setSelectedBranch(null);
//     setError('');
//   }, [selectedBank]);

//   // Mock API call to get branches
//   const fetchBranches = () => {
//     // Validate pincode
//     if (!pincode || pincode.length !== 6 || !/^\d+$/.test(pincode)) {
//       setError('Please enter a valid 6-digit pincode');
//       setBranches([]);
//       return;
//     }

//     setLoading(true);
//     setError('');

//     // Simulate API delay
//     setTimeout(() => {
//       try {
//         const bankBranches = MOCK_BRANCHES[selectedBank]?.[pincode] || 
//                             DEFAULT_BANK_DATA[pincode] || [];
        
//         if (bankBranches.length === 0) {
//           setError(`No branches found for ${selectedBank} in pincode ${pincode}`);
//         }
        
//         setBranches(bankBranches);
//         setSelectedBranch(null);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching branches');
//         setBranches([]);
//         setLoading(false);
//       }
//     }, 600); // Simulate API delay
//   };

//   const handleBranchSelect = (branch) => {
//     setSelectedBranch(branch);
//     if (onBranchSelect) {
//       onBranchSelect(branch);
//     }
//   };

//   const clearPincode = () => {
//     setPincode('');
//     setBranches([]);
//     setError('');
//   };

//   // Theme classes
//   const themeClasses = darkMode 
//     ? 'bg-gray-800 text-white border-gray-700' 
//     : 'bg-white text-gray-800 border-gray-300';

//   const inputClasses = darkMode
//     ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500'
//     : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-blue-500';

//   const buttonClasses = darkMode
//     ? 'bg-blue-600 hover:bg-blue-700 text-white'
//     : 'bg-blue-500 hover:bg-blue-600 text-white';

//   const cardClasses = darkMode
//     ? 'bg-gray-700 border-gray-600'
//     : 'bg-white border-gray-200';

//   const selectedCardClasses = darkMode
//     ? 'bg-blue-900 border-blue-700'
//     : 'bg-blue-50 border-blue-300';

//   return (
//     <div className={`font-sans ${themeClasses}`}>
//       {!selectedBank ? (
//         <div className="p-4 mb-4 rounded-lg bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
//           Please select a bank first
//         </div>
//       ) : (
//         <div className="w-full max-w-md">
//           <h3 className="mb-3 text-lg font-medium">Find Branches for {selectedBank}</h3>
          
//           {/* Pincode Input */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Enter Pincode</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={pincode}
//                 onChange={(e) => setPincode(e.target.value.slice(0, 6))}
//                 className={`w-full pl-10 pr-10 py-2 rounded-lg border ${inputClasses}`}
//                 placeholder="Enter 6-digit pincode"
//                 maxLength={6}
//               />
//               {pincode && (
//                 <button 
//                   onClick={clearPincode}
//                   className="absolute inset-y-0 right-0 flex items-center pr-3"
//                 >
//                   <X className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
//                 </button>
//               )}
//             </div>
//           </div>
          
//           {/* Search Button */}
//           <button
//             onClick={fetchBranches}
//             disabled={!pincode || pincode.length !== 6 || loading}
//             className={`flex items-center justify-center w-full px-4 py-2 mb-4 rounded-lg ${buttonClasses} ${(!pincode || pincode.length !== 6 || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             {loading ? (
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//             ) : (
//               <Search className="w-4 h-4 mr-2" />
//             )}
//             {loading ? 'Searching...' : 'Find Branches'}
//           </button>
          
//           {/* Error Message */}
//           {error && (
//             <div className="p-3 mb-4 rounded-lg bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
//               {error}
//             </div>
//           )}
          
//           {/* Branch List */}
//           {branches.length > 0 && (
//             <div className="space-y-3">
//               <h4 className="text-sm font-medium">Select a Branch</h4>
//               {branches.map((branch) => (
//                 <div
//                   key={branch.id}
//                   onClick={() => handleBranchSelect(branch)}
//                   className={`p-3 border rounded-lg cursor-pointer transition-colors ${
//                     selectedBranch?.id === branch.id ? selectedCardClasses : cardClasses
//                   }`}
//                 >
//                   <div className="flex items-start mb-1">
//                     <Building className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
//                     <div>
//                       <div className="font-medium">{branch.name}</div>
//                       <div className="text-sm text-gray-600 dark:text-gray-300">{branch.address}</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center mt-2 text-sm">
//                     <Phone className="w-3 h-3 mr-1" />
//                     <span>{branch.phone}</span>
//                     <span className="mx-2">•</span>
//                     <span>IFSC: {branch.ifsc}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
          
//           {/* Display Selected Branch */}
//           {selectedBranch && (
//             <div className="mt-4 p-3 border rounded-lg bg-green-50 border-green-200 text-green-800 dark:bg-green-900 dark:border-green-800 dark:text-green-100">
//               <p className="font-medium">Selected: {selectedBranch.name}</p>
//               <p className="text-sm">IFSC: {selectedBranch.ifsc}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }