// import { useState, useEffect, useRef } from 'react';
// import { ChevronDown, Check, Search } from 'lucide-react';

// const BANKS = [
//   "Axis Bank", 
//   "Bank of Baroda",
//   "Bank of India",
//   "Bank of Maharashtra",
//   "Canara Bank", 
//   "Central Bank of India",
//   "City Union Bank",
//   "Federal Bank",
//   "HDFC Bank",
//   "ICICI Bank",
//   "IDBI Bank",
//   "Indian Bank",
//   "IndusInd Bank",
//   "Jammu & Kashmir Bank",
//   "Karnataka Bank",
//   "Kotak Mahindra Bank",
//   "Punjab National Bank (PNB)",
//   "RBL Bank",
//   "South Indian Bank",
//   "State Bank of India (SBI)",
//   "UCO Bank",
//   "Union Bank of India",
//   "Yes Bank"
// ];

// export default function BankSelector({ onBankSelect, darkMode = false }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedBank, setSelectedBank] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredBanks, setFilteredBanks] = useState(BANKS);
//   const dropdownRef = useRef(null);

//   // Filter banks based on search term
//   useEffect(() => {
//     const results = BANKS.filter(bank =>
//       bank.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredBanks(results);
//   }, [searchTerm]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Handle bank selection
//   const handleBankSelect = (bank) => {
//     setSelectedBank(bank);
//     setIsOpen(false);
//     setSearchTerm('');
//     if (onBankSelect) {
//       onBankSelect(bank);
//     }
//   };

//   // Reset search when opening dropdown
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       setSearchTerm('');
//       setFilteredBanks(BANKS);
//     }
//   };

//   // Theme classes
//   const themeClasses = darkMode 
//     ? 'bg-gray-800 text-white border-gray-700' 
//     : 'bg-white text-gray-800 border-gray-300';

//   const buttonClasses = darkMode
//     ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
//     : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300';

//   const dropdownClasses = darkMode
//     ? 'bg-gray-800 border-gray-700'
//     : 'bg-white border-gray-300';

//   const optionClasses = darkMode
//     ? 'hover:bg-gray-700'
//     : 'hover:bg-gray-100';

//   const selectedOptionClasses = darkMode
//     ? 'bg-gray-700'
//     : 'bg-gray-100';
    
//   const searchClasses = darkMode
//     ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
//     : 'bg-gray-50 text-gray-800 placeholder-gray-500 border-gray-300';

//   return (
//     <div className={`font-sans ${themeClasses}`}>
//       <div className="relative w-64" ref={dropdownRef}>
//         {/* Dropdown Button */}
//         <button
//           onClick={toggleDropdown}
//           className={`flex items-center justify-between w-full px-4 py-2 text-left border rounded-lg shadow-sm ${buttonClasses}`}
//           type="button"
//         >
//           <span className="truncate">
//             {selectedBank || 'Select a bank'}
//           </span>
//           <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <div className={`absolute z-10 w-full mt-1 overflow-hidden border rounded-lg shadow-lg ${dropdownClasses}`}>
//             {/* Search Input */}
//             <div className="p-2 border-b">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <Search className="w-4 h-4 text-gray-500" />
//                 </div>
//                 <input
//                   type="text"
//                   className={`w-full pl-10 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${searchClasses}`}
//                   placeholder="Search banks..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   autoFocus
//                 />
//               </div>
//             </div>

//             {/* Bank List */}
//             <div className="max-h-60 overflow-y-auto py-1">
//               {filteredBanks.length > 0 ? (
//                 filteredBanks.map((bank) => (
//                   <button
//                     key={bank}
//                     onClick={() => handleBankSelect(bank)}
//                     className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left ${bank === selectedBank ? selectedOptionClasses : ''} ${optionClasses}`}
//                   >
//                     <span>{bank}</span>
//                     {bank === selectedBank && <Check className="w-4 h-4 text-blue-500" />}
//                   </button>
//                 ))
//               ) : (
//                 <div className="px-4 py-2 text-sm text-gray-500">No banks found</div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }