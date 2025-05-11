// // import React, { useState } from 'react';
// // // import { Form, FormControl, Dropdown } from 'react-bootstrap';
// // // import './SearchFilter.css';

// // function SearchFilter({ onSearch, onFilter }) {
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [filterStatus, setFilterStatus] = useState('All');
    
// //     const handleSearchChange = (e) => {
// //         const value = e.target.value;
// //         setSearchTerm(value);
// //         onSearch(value);
// //     };
    
// //     const handleFilterChange = (status) => {
// //         setFilterStatus(status);
// //         onFilter(status);
// //     };
    
// //     return (
// //         <div className="search-filter-container">
// //             <div className="search-bar">
// //                 <Form.Control
// //                     type="text"
// //                     placeholder="Search by bank or branch name..."
// //                     value={searchTerm}
// //                     onChange={handleSearchChange}
// //                 />
// //             </div>
            
// //             <div className="filter-dropdown">
// //                 <Dropdown>
// //                     <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
// //                         Status: {filterStatus}
// //                     </Dropdown.Toggle>
                    
// //                     <Dropdown.Menu>
// //                         <Dropdown.Item onClick={() => handleFilterChange('All')}>All</Dropdown.Item>
// //                         <Dropdown.Item onClick={() => handleFilterChange('Approved')}>Approved</Dropdown.Item>
// //                         <Dropdown.Item onClick={() => handleFilterChange('Rejected')}>Rejected</Dropdown.Item>
// //                         <Dropdown.Item onClick={() => handleFilterChange('Pending')}>Pending</Dropdown.Item>
// //                     </Dropdown.Menu>
// //                 </Dropdown>
// //             </div>
// //         </div>
// //     );
// // }

// // export default SearchFilter;












// import React, { useState } from 'react';

// function SearchFilter({ onSearch, onFilter }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterStatus, setFilterStatus] = useState('All');

//     const handleSearchChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         onSearch(value);
//     };

//     const handleFilterChange = (status) => {
//         setFilterStatus(status);
//         onFilter(status);
//     };

//     return (
//         <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
//             {/* Search Bar */}
//             <div className="w-full md:w-1/2">
//                 <input
//                     type="text"
//                     placeholder="Search by bank or branch name..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>

//             {/* Filter Dropdown */}
//             <div className="relative">
//                 <button
//                     className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                     Status: {filterStatus}
//                 </button>
//                 <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//                     <ul className="py-1">
//                         <li
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                             onClick={() => handleFilterChange('All')}
//                         >
//                             All
//                         </li>
//                         <li
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                             onClick={() => handleFilterChange('Approved')}
//                         >
//                             Approved
//                         </li>
//                         <li
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                             onClick={() => handleFilterChange('Rejected')}
//                         >
//                             Rejected
//                         </li>
//                         <li
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                             onClick={() => handleFilterChange('Pending')}
//                         >
//                             Pending
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SearchFilter;