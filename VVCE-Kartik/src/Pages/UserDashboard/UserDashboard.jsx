// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFire, FaCampground, FaComments } from 'react-icons/fa';

// const UserDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
//       <header className="bg-blue-700 text-white p-6 text-2xl font-bold shadow-md flex justify-between items-center">
//         User Dashboard
//         <Link to="/" className="text-sm bg-white text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition">
//           Logout
//         </Link>
//       </header>

//       <main className="flex-grow p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Disaster Updates */}
//           <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-red-500">
//             <div className="flex items-center mb-4">
//               <FaFire className="text-red-500 text-2xl mr-3" />
//               <h3 className="text-xl font-bold text-gray-800">Ongoing Disasters</h3>
//             </div>
//             <p className="text-gray-600">Get real-time updates on natural calamities and alerts in your region.</p>
//             <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
//               View Updates
//             </button>
//           </div>

//           {/* Rescue Camps */}
//           <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-green-500">
//             <div className="flex items-center mb-4">
//               <FaCampground className="text-green-600 text-2xl mr-3" />
//               <h3 className="text-xl font-bold text-gray-800">Rescue Camps</h3>
//             </div>
//             <p className="text-gray-600">Find the nearest rescue shelters and their available facilities.</p>
//             <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
//               Locate Camps
//             </button>
//           </div>

//           {/* Community Messaging */}
//           <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border-t-4 border-blue-500">
//             <div className="flex items-center mb-4">
//               <FaComments className="text-blue-500 text-2xl mr-3" />
//               <h3 className="text-xl font-bold text-gray-800">Community Messages</h3>
//             </div>
//             <p className="text-gray-600">Connect with others for help, guidance, or volunteer services.</p>
//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//               Open Chat
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;


// // import React from 'react'

// // // src/Pages/UserDashboard.jsx
// // import OngoingDisasters from "../Sections/OngoingDisasters";

// // export default function UserDashboard() {
// //   return (
// //     <div className="min-h-screen flex bg-gray-100">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-white shadow-md px-6 py-8 hidden md:block">
// //         <h2 className="text-2xl font-bold mb-6">Citizen Panel</h2>
// //         <nav className="space-y-4 text-gray-700">
// //           <a href="/user-dashboard" className="block hover:text-blue-600 font-medium">
// //             🌀 Disaster Updates
// //           </a>
// //           <a href="#" className="block hover:text-blue-600 font-medium">
// //             🏕️ Rescue Camps
// //           </a>
// //           <a href="#" className="block hover:text-blue-600 font-medium">
// //             🆘 Emergency Contacts
// //           </a>
// //         </nav>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6">
// //         <header className="mb-6">
// //           <h1 className="text-3xl font-bold text-gray-800">Citizen Dashboard</h1>
// //         </header>

// //         <section className="grid gap-6">
// //           <OngoingDisasters />
// //           {/* More sections like RescueCamp, Messaging can be added below */}
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }



// import React, { useState } from 'react';
// import { FaEdit, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSave, FaTimesCircle } from 'react-icons/fa';

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     name: 'Ujjwal Rai',
//     email: 'ujjwal@example.com',
//     phone: '+91 9876543210',
//     location: 'Mysore, India',
//     role: 'Relief Volunteer',
//   });

//   const [formData, setFormData] = useState(userData);

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//     setFormData(userData);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     setUserData(formData);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-200 flex justify-center items-center py-10 px-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 md:p-12 relative border border-blue-300">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
//             👤 User Profile
//           </h2>
//           <button
//             onClick={toggleEdit}
//             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow transition"
//           >
//             {isEditing ? <FaTimesCircle /> : <FaEdit />} {isEditing ? 'Cancel' : 'Edit'}
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="text-center md:text-left">
//             <div className="text-blue-500 text-8xl mb-3">
//               <FaUser />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800">{userData.name}</h3>
//             <p className="text-blue-600">🛠️ {userData.role}</p>
//           </div>

//           {!isEditing ? (
//             <div className="space-y-4 text-gray-700">
//               <div className="flex items-center gap-3">
//                 <FaEnvelope className="text-blue-500" />
//                 <p>{userData.email}</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaPhone className="text-blue-500" />
//                 <p>{userData.phone}</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaMapMarkerAlt className="text-blue-500" />
//                 <p>{userData.location}</p>
//               </div>
//               <div className="mt-6 bg-blue-50 p-4 rounded-xl">
//                 <h4 className="text-lg font-semibold text-blue-700 mb-2">📊 Summary</h4>
//                 <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//                   <li>🚨 Participated in 3+ rescue operations</li>
//                   <li>🍱 Distributed food to 400+ people</li>
//                   <li>🧭 Managed 5 relief camps</li>
//                   <li>📍 Reported 12 real-time disasters</li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <form className="space-y-4" onSubmit={handleSave}>
//               <div>
//                 <label className="block text-sm font-medium text-blue-600">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-blue-600">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-blue-600">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-blue-600">Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-xl flex items-center justify-center gap-2 font-semibold"
//               >
//                 <FaSave /> Save Changes
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaCheck, FaBriefcase } from 'react-icons/fa';

// const UserProfile = () => {
//   const [profile, setProfile] = useState({
//     name: 'Kartik Pandey',
//     email: 'kartik@example.com',
//     phone: '+91 987656789',
//     location: 'Mysore, India',
//     occupation: 'Computer Science Engineering Student',
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState(profile);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//     setEditedProfile(profile); // Reset to current profile on cancel
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     setProfile(editedProfile);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-purple-200 flex justify-center items-center p-6">
//       <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl relative border border-purple-200">
//         <div className="text-center mb-6">
//           <div className="w-24 h-24 mx-auto mb-3 rounded-full border-4 border-purple-400 overflow-hidden">
//             <img src="https://i.pravatar.cc/150?img=32" alt="User Avatar" className="w-full h-full object-cover" />
//           </div>
//           <h2 className="text-3xl font-bold text-purple-700">{profile.name}</h2>
//           <p className="text-gray-600 mt-1 flex items-center justify-center gap-2">
//             <FaBriefcase className="text-purple-500" /> {profile.occupation}
//           </p>
//         </div>

//         <div className="bg-purple-50 p-5 rounded-2xl border border-purple-200 shadow-inner">
//           <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
//             🧾 User Summary
//           </h3>
//           <div className="space-y-4 text-gray-700">
//             <div className="flex items-center gap-3">
//               <FaUser className="text-purple-500" />
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={editedProfile.name}
//                   onChange={handleInputChange}
//                   className="w-full border border-purple-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 />
//               ) : (
//                 <span><strong>Name:</strong> {profile.name}</span>
//               )}
//             </div>

//             <div className="flex items-center gap-3">
//               <FaEnvelope className="text-purple-500" />
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={editedProfile.email}
//                   onChange={handleInputChange}
//                   className="w-full border border-purple-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 />
//               ) : (
//                 <span><strong>Email:</strong> {profile.email}</span>
//               )}
//             </div>

//             <div className="flex items-center gap-3">
//               <FaPhone className="text-purple-500" />
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="phone"
//                   value={editedProfile.phone}
//                   onChange={handleInputChange}
//                   className="w-full border border-purple-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 />
//               ) : (
//                 <span><strong>Phone:</strong> {profile.phone}</span>
//               )}
//             </div>

//             <div className="flex items-center gap-3">
//               <FaMapMarkerAlt className="text-purple-500" />
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="location"
//                   value={editedProfile.location}
//                   onChange={handleInputChange}
//                   className="w-full border border-purple-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 />
//               ) : (
//                 <span><strong>Location:</strong> {profile.location}</span>
//               )}
//             </div>
//           </div>

//           <div className="mt-6 flex justify-end gap-3">
//             {isEditing ? (
//               <>
//                 <button
//                   onClick={handleSave}
//                   className="bg-green-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-600 transition flex items-center gap-2"
//                 >
//                   <FaCheck /> Save
//                 </button>
//                 <button
//                   onClick={handleEditToggle}
//                   className="bg-gray-400 text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-500 transition"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={handleEditToggle}
//                 className="bg-purple-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-purple-700 transition flex items-center gap-2"
//               >
//                 <FaEdit /> Edit Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;








// import React from 'react';
// import React, { useState } from 'react';
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaFileAlt,
//   FaChartPie,
//   FaLeaf,
//   FaCalendarAlt,
//   FaCog,
//   FaEdit,
//   FaTrashAlt,
// } from 'react-icons/fa';

// const users = [
//   {
//     id: 1,
//     name: 'Andrew Mike',
//     date: '04/10/2014',
//     role: 'Admin',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=1',
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     date: '06/09/2015',
//     role: 'Publisher',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=2',
//   },
//   {
//     id: 3,
//     name: 'Micheal Holz',
//     date: '09/05/2016',
//     role: 'Publisher',
//     status: 'Inactive',
//     avatar: 'https://i.pravatar.cc/100?img=3',
//   },
//   {
//     id: 4,
//     name: 'Alex Mike',
//     date: '11/09/2018',
//     role: 'Reviewer',
//     status: 'Suspended',
//     avatar: 'https://i.pravatar.cc/100?img=4',
//   },
//   {
//     id: 5,
//     name: 'Paula Wilson',
//     date: '09/09/2019',
//     role: 'Reviewer',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=5',
//   },
// ];

// const statusColors = {
//   Active: 'bg-green-500',
//   Inactive: 'bg-yellow-400',
//   Suspended: 'bg-red-500',
// };

// const SidebarItem = ({ icon, label, onClick, isActive }) => (
//   <div  
//   onClick={onClick}
//   className={`flex items-center space-x-3 py-3 px-5 cursor-pointer rounded-xl ${
//   isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-600'
//   }`}
//   >
//     {icon}
//     <span>{label}</span>
//   </div>
// );

// const UserDashboard = () => {
//     const [activeSection, setActiveSection] = useState('Dashboard');

//     const disasterReports = [
//         { id: 1, title: 'Flood in Kerala', date: '2025-05-01', status: 'Active' },
//         { id: 2, title: 'Earthquake in Nepal', date: '2025-04-28', status: 'Resolved' },
//         { id: 3, title: 'Cyclone in Odisha', date: '2025-04-20', status: 'Active' },
//       ];

//   return (
//     <div className="flex min-h-screen font-sans bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-500 text-white p-5 space-y-6">
//         <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
//         <SidebarItem icon={<FaUsers />} label="User Management" />
//         <SidebarItem icon={<FaFileAlt />} label="Report" />
//         <SidebarItem icon={<FaChartPie />} label="Analytics" />
//         <SidebarItem icon={<FaLeaf />} label="View Farm" />
//         <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
//         <SidebarItem icon={<FaCog />} label="Setting" />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold text-blue-600">User Management</h1>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
//             />
//             <img
//               src="https://i.pravatar.cc/40?img=11"
//               alt="avatar"
//               className="w-10 h-10 rounded-full border-2 border-blue-400"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           <table className="min-w-full text-left">
//             <thead className="bg-blue-100 text-blue-700">
//               <tr>
//                 <th className="py-3 px-5">#</th>
//                 <th className="py-3 px-5">Name</th>
//                 <th className="py-3 px-5">Date Created</th>
//                 <th className="py-3 px-5">Role</th>
//                 <th className="py-3 px-5">Status</th>
//                 <th className="py-3 px-5">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id} className="border-b hover:bg-blue-50">
//                   <td className="py-4 px-5 text-gray-500">{user.id}</td>
//                   <td className="flex items-center gap-3 py-4 px-5">
//                     <img src={user.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
//                     {user.name}
//                   </td>
//                   <td className="py-4 px-5 text-gray-500">{user.date}</td>
//                   <td className="py-4 px-5 text-gray-500">{user.role}</td>
//                   <td className="py-4 px-5 text-gray-500">
//                     <span className={`inline-block w-3 h-3 rounded-full mr-2 ${statusColors[user.status]}`}></span>
//                     {user.status}
//                   </td>
//                   <td className="py-4 px-5 space-x-2">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit />
//                     </button>
//                     <button className="text-red-500 hover:text-red-700">
//                       <FaTrashAlt />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-between items-center px-5 py-3 bg-blue-50 text-blue-700 text-sm">
//             <span>Showing 5 out of 25 entries</span>
//             <div className="flex items-center space-x-2">
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">1</button>
//               <button className="px-3 py-1 rounded bg-blue-500 text-white">2</button>
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">3</button>
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">4</button>
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">5</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;






// import React, { useState } from 'react';
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaFileAlt,
//   FaChartPie,
//   FaLeaf,
//   FaCalendarAlt,
//   FaCog,
//   FaEdit,
//   FaTrashAlt,
// } from 'react-icons/fa';

// const users = [
//   {
//     id: 1,
//     name: 'Andrew Mike',
//     date: '04/10/2014',
//     role: 'Admin',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=1',
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     date: '06/09/2015',
//     role: 'Publisher',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=2',
//   },
//   {
//     id: 3,
//     name: 'Micheal Holz',
//     date: '09/05/2016',
//     role: 'Publisher',
//     status: 'Inactive',
//     avatar: 'https://i.pravatar.cc/100?img=3',
//   },
//   {
//     id: 4,
//     name: 'Alex Mike',
//     date: '11/09/2018',
//     role: 'Reviewer',
//     status: 'Suspended',
//     avatar: 'https://i.pravatar.cc/100?img=4',
//   },
//   {
//     id: 5,
//     name: 'Paula Wilson',
//     date: '09/09/2019',
//     role: 'Reviewer',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=5',
//   },
// ];

// const statusColors = {
//   Active: 'bg-green-500',
//   Inactive: 'bg-yellow-400',
//   Suspended: 'bg-red-500',
// };

// const SidebarItem = ({ icon, label, onClick, isActive }) => (
//   <div
//     onClick={onClick}
//     className={`flex items-center space-x-3 py-3 px-5 cursor-pointer rounded-xl ${
//       isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-600'
//     }`}
//   >
//     {icon}
//     <span>{label}</span>
//   </div>
// );

// const UserDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');

//   const disasterReports = [
//     { id: 1, title: 'Flood in Kerala', date: '2025-05-01', status: 'Active' },
//     { id: 2, title: 'Earthquake in Nepal', date: '2025-04-28', status: 'Resolved' },
//     { id: 3, title: 'Cyclone in Odisha', date: '2025-04-20', status: 'Active' },
//   ];

//   return (
//     <div className="flex min-h-screen font-sans bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-500 text-white p-5 space-y-6">
//         <SidebarItem
//           icon={<FaTachometerAlt />}
//           label="Dashboard"
//           onClick={() => setActiveSection('Dashboard')}
//           isActive={activeSection === 'Dashboard'}
//         />
//         <SidebarItem
//           icon={<FaUsers />}
//           label="User Management"
//           onClick={() => setActiveSection('User Management')}
//           isActive={activeSection === 'User Management'}
//         />
//         <SidebarItem
//           icon={<FaFileAlt />}
//           label="Report"
//           onClick={() => setActiveSection('Report')}
//           isActive={activeSection === 'Report'}
//         />
//         <SidebarItem
//           icon={<FaChartPie />}
//           label="Analytics"
//           onClick={() => setActiveSection('Analytics')}
//           isActive={activeSection === 'Analytics'}
//         />
//         <SidebarItem
//           icon={<FaLeaf />}
//           label="View Farm"
//           onClick={() => setActiveSection('View Farm')}
//           isActive={activeSection === 'View Farm'}
//         />
//         <SidebarItem
//           icon={<FaCalendarAlt />}
//           label="Calendar"
//           onClick={() => setActiveSection('Calendar')}
//           isActive={activeSection === 'Calendar'}
//         />
//         <SidebarItem
//           icon={<FaCog />}
//           label="Setting"
//           onClick={() => setActiveSection('Setting')}
//           isActive={activeSection === 'Setting'}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold text-blue-600">{activeSection}</h1>
//         </div>

//         {/* Content */}
//         {activeSection === 'Dashboard' && (
//           <div>
//             <p>Welcome to the Dashboard!</p>
//           </div>
//         )}

//         {activeSection === 'User Management' && (
//           <div>
//             {/* User Management Table */}
//             <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//               <table className="min-w-full text-left">
//                 <thead className="bg-blue-100 text-blue-700">
//                   <tr>
//                     <th className="py-3 px-5 text-gray-500">#</th>
//                     <th className="py-3 px-5 text-gray-500">Name</th>
//                     <th className="py-3 px-5 text-gray-500">Date Created</th>
//                     <th className="py-3 px-5 text-gray-500">Role</th>
//                     <th className="py-3 px-5 text-gray-500">Status</th>
//                     <th className="py-3 px-5 text-gray-500">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.id} className="border-b hover:bg-blue-50 text-gray-500">
//                       <td className="py-4 px-5 text-gray-500">{user.id}</td>
//                       <td className="flex items-center gap-3 py-4 px-5">
//                         <img src={user.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
//                         {user.name}
//                       </td>
//                       <td className="py-4 px-5 text-gray-500">{user.date}</td>
//                       <td className="py-4 px-5 text-gray-500">{user.role}</td>
//                       <td className="py-4 px-5 text-gray-500">
//                         <span
//                           className={`inline-block w-3 h-3 rounded-full mr-2 ${statusColors[user.status]}`}
//                         ></span>
//                         {user.status}
//                       </td>
//                       <td className="py-4 px-5 space-x-2">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <FaEdit />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <FaTrashAlt />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Pagination */}
//               <div className="flex justify-between items-center px-5 py-3 bg-blue-50 text-blue-700 text-sm">
//                 <span>Showing 5 out of 25 entries</span>
//                 <div className="flex items-center space-x-2">
//                   <button className="px-3 py-1 rounded bg-white border border-blue-300">1</button>
//                   <button className="px-3 py-1 rounded bg-blue-500 text-white">2</button>
//                   <button className="px-3 py-1 rounded bg-white border border-blue-300">3</button>
//                   <button className="px-3 py-1 rounded bg-white border border-blue-300">4</button>
//                   <button className="px-3 py-1 rounded bg-white border border-blue-300">5</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeSection === 'Report' && (
//           <div className="bg-white shadow-xl rounded-xl p-6">
//             <h2 className="text-xl font-bold text-blue-600 mb-4">Disaster Reports</h2>
//             <table className="min-w-full text-left">
//               <thead className="bg-blue-100 text-blue-700">
//                 <tr>
//                   <th className="py-3 px-5 text-gray-500">#</th>
//                   <th className="py-3 px-5 text-gray-500">Title</th>
//                   <th className="py-3 px-5 text-gray-500">Date</th>
//                   <th className="py-3 px-5 text-gray-500">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {disasterReports.map((report) => (
//                   <tr key={report.id} className="border-b hover:bg-blue-50">
//                     <td className="py-4 px-5 text-gray-500">{report.id}</td>
//                     <td className="py-4 px-5 text-gray-500">{report.title}</td>
//                     <td className="py-4 px-5 text-gray-500">{report.date}</td>
//                     <td className="py-4 px-5 text-gray-500">{report.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeSection === 'Analytics' && (
//           <div>
//             <p>Analytics Section</p>
//           </div>
//         )}

//         {activeSection === 'View Farm' && (
//           <div>
//             <p>View Farm Section</p>
//           </div>
//         )}

//         {activeSection === 'Calendar' && (
//           <div>
//             <p>Calendar Section</p>
//           </div>
//         )}

//         {activeSection === 'Setting' && (
//           <div>
//             <p>Setting Section</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;





// import React, { useState } from 'react';
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaFileAlt,
//   FaChartPie,
//   FaLeaf,
//   FaCalendarAlt,
//   FaCog,
//   FaEdit,
//   FaTrashAlt,
// } from 'react-icons/fa';

// const users = [
//   {
//     id: 1,
//     name: 'Andrew Mike',
//     date: '04/10/2014',
//     role: 'Admin',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=1',
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     date: '06/09/2015',
//     role: 'Publisher',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=2',
//   },
//   {
//     id: 3,
//     name: 'Micheal Holz',
//     date: '09/05/2016',
//     role: 'Publisher',
//     status: 'Inactive',
//     avatar: 'https://i.pravatar.cc/100?img=3',
//   },
//   {
//     id: 4,
//     name: 'Alex Mike',
//     date: '11/09/2018',
//     role: 'Reviewer',
//     status: 'Suspended',
//     avatar: 'https://i.pravatar.cc/100?img=4',
//   },
//   {
//     id: 5,
//     name: 'Paula Wilson',
//     date: '09/09/2019',
//     role: 'Reviewer',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=5',
//   },
// ];

// const statusColors = {
//   Active: 'bg-green-500',
//   Inactive: 'bg-yellow-400',
//   Suspended: 'bg-red-500',
// };

// const SidebarItem = ({ icon, label, onClick, isActive }) => (
//   <div
//     onClick={onClick}
//     className={`flex items-center space-x-3 py-3 px-5 cursor-pointer rounded-xl ${
//       isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-600'
//     }`}
//   >
//     {icon}
//     <span>{label}</span>
//   </div>
// );

// const UserDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');

//   const disasterReports = [
//     { id: 1, title: 'Flood in Kerala', date: '2025-05-01', status: 'Active' },
//     { id: 2, title: 'Earthquake in Nepal', date: '2025-04-28', status: 'Resolved' },
//     { id: 3, title: 'Cyclone in Odisha', date: '2025-04-20', status: 'Active' },
//   ];

//   const analyticsData = [
//     { metric: 'Total Users', value: '1,245' },
//     { metric: 'Active Disasters', value: '3' },
//     { metric: 'Reports Submitted', value: '567' },
//     { metric: 'Relief Camps', value: '25' },
//   ];

//   const farmData = [
//     { id: 1, name: 'Farm A', location: 'Mysore', crops: 'Rice, Wheat', status: 'Active' },
//     { id: 2, name: 'Farm B', location: 'Bangalore', crops: 'Sugarcane', status: 'Inactive' },
//     { id: 3, name: 'Farm C', location: 'Mandya', crops: 'Millets', status: 'Active' },
//   ];

//   const calendarEvents = [
//     { id: 1, event: 'Flood Relief Camp', date: '2025-05-10', location: 'Kerala' },
//     { id: 2, event: 'Earthquake Awareness Drive', date: '2025-05-15', location: 'Nepal' },
//     { id: 3, event: 'Cyclone Preparedness Workshop', date: '2025-05-20', location: 'Odisha' },
//   ];

//   const settingsOptions = [
//     { id: 1, option: 'Change Password' },
//     { id: 2, option: 'Update Profile' },
//     { id: 3, option: 'Notification Preferences' },
//     { id: 4, option: 'Privacy Settings' },
//   ];

//   return (
//     <div className="flex min-h-screen font-sans bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-500 text-white p-5 space-y-6">
//         <SidebarItem
//           icon={<FaTachometerAlt />}
//           label="Dashboard"
//           onClick={() => setActiveSection('Dashboard')}
//           isActive={activeSection === 'Dashboard'}
//         />
//         <SidebarItem
//           icon={<FaUsers />}
//           label="User Management"
//           onClick={() => setActiveSection('User Management')}
//           isActive={activeSection === 'User Management'}
//         />
//         <SidebarItem
//           icon={<FaFileAlt />}
//           label="Report"
//           onClick={() => setActiveSection('Report')}
//           isActive={activeSection === 'Report'}
//         />
//         <SidebarItem
//           icon={<FaChartPie />}
//           label="Analytics"
//           onClick={() => setActiveSection('Analytics')}
//           isActive={activeSection === 'Analytics'}
//         />
//         <SidebarItem
//           icon={<FaLeaf />}
//           label="View Farm"
//           onClick={() => setActiveSection('View Farm')}
//           isActive={activeSection === 'View Farm'}
//         />
//         <SidebarItem
//           icon={<FaCalendarAlt />}
//           label="Calendar"
//           onClick={() => setActiveSection('Calendar')}
//           isActive={activeSection === 'Calendar'}
//         />
//         <SidebarItem
//           icon={<FaCog />}
//           label="Setting"
//           onClick={() => setActiveSection('Setting')}
//           isActive={activeSection === 'Setting'}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold text-blue-600">{activeSection}</h1>
//         </div>

//         {/* Content */}
//         {activeSection === 'Dashboard' && (
//           <div>
//             <p>Welcome to the Dashboard!</p>
//           </div>
//         )}

//         {activeSection === 'Analytics' && (
//           <div className="bg-white shadow-xl rounded-xl p-6">
//             <h2 className="text-xl font-bold text-blue-600 mb-4">Analytics Overview</h2>
//             <ul className="space-y-3">
//               {analyticsData.map((data) => (
//                 <li key={data.metric} className="flex justify-between text-gray-700">
//                   <span>{data.metric}</span>
//                   <span className="font-semibold">{data.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {activeSection === 'View Farm' && (
//           <div className="bg-white shadow-xl rounded-xl p-6">
//             <h2 className="text-xl font-bold text-blue-600 mb-4">Farm Details</h2>
//             <table className="min-w-full text-left">
//               <thead className="bg-blue-100 text-blue-700">
//                 <tr>
//                   <th className="py-3 px-5">#</th>
//                   <th className="py-3 px-5">Farm Name</th>
//                   <th className="py-3 px-5">Location</th>
//                   <th className="py-3 px-5">Crops</th>
//                   <th className="py-3 px-5">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {farmData.map((farm) => (
//                   <tr key={farm.id} className="border-b hover:bg-blue-50">
//                     <td className="py-4 px-5 text-gray-500">{farm.id}</td>
//                     <td className="py-4 px-5 text-gray-500">{farm.name}</td>
//                     <td className="py-4 px-5 text-gray-500">{farm.location}</td>
//                     <td className="py-4 px-5 text-gray-500">{farm.crops}</td>
//                     <td className="py-4 px-5 text-gray-500">{farm.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeSection === 'Calendar' && (
//           <div className="bg-white shadow-xl rounded-xl p-6">
//             <h2 className="text-xl font-bold text-blue-600 mb-4">Upcoming Events</h2>
//             <ul className="space-y-3">
//               {calendarEvents.map((event) => (
//                 <li key={event.id} className="text-gray-700">
//                   <span className="font-semibold">{event.event}</span> - {event.date} ({event.location})
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {activeSection === 'Setting' && (
//           <div className="bg-white shadow-xl rounded-xl p-6">
//             <h2 className="text-xl font-bold text-blue-600 mb-4">Settings</h2>
//             <ul className="space-y-3">
//               {settingsOptions.map((option) => (
//                 <li key={option.id} className="text-gray-700">
//                   {option.option}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;



// import React from 'react';
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaFileAlt,
//   FaChartPie,
//   FaLeaf,
//   FaCalendarAlt,
//   FaCog,
//   FaEdit,
//   FaTrashAlt,
// } from 'react-icons/fa';

// const users = [
//   {
//     id: 1,
//     name: 'Andrew Mike',
//     date: '04/10/2014',
//     role: 'Admin',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=1',
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     date: '06/09/2015',
//     role: 'Publisher',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=2',
//   },
//   {
//     id: 3,
//     name: 'Micheal Holz',
//     date: '09/05/2016',
//     role: 'Publisher',
//     status: 'Inactive',
//     avatar: 'https://i.pravatar.cc/100?img=3',
//   },
//   {
//     id: 4,
//     name: 'Alex Mike',
//     date: '11/09/2018',
//     role: 'Reviewer',
//     status: 'Suspended',
//     avatar: 'https://i.pravatar.cc/100?img=4',
//   },
//   {
//     id: 5,
//     name: 'Paula Wilson',
//     date: '09/09/2019',
//     role: 'Reviewer',
//     status: 'Active',
//     avatar: 'https://i.pravatar.cc/100?img=5',
//   },
// ];

// const statusColors = {
//   Active: 'bg-green-500',
//   Inactive: 'bg-yellow-400',
//   Suspended: 'bg-red-500',
// };

// const SidebarItem = ({ icon, label }) => (
//   <div className="flex items-center space-x-3 text-white py-3 px-5 hover:bg-blue-700 cursor-pointer rounded-xl">
//     {icon}
//     <span>{label}</span>
//   </div>
// );

// const UserDashboard = () => {
//   return (
//     <div className="flex min-h-screen font-sans bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-500 text-white p-5 space-y-6">
//         <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
//         <SidebarItem icon={<FaUsers />} label="User Management" />
//         <SidebarItem icon={<FaFileAlt />} label="Report" />
//         <SidebarItem icon={<FaChartPie />} label="Analytics" />
//         <SidebarItem icon={<FaLeaf />} label="View Farm" />
//         <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
//         <SidebarItem icon={<FaCog />} label="Setting" />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold text-blue-600">User Management</h1>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <img
//               src="https://i.pravatar.cc/40?img=11"
//               alt="avatar"
//               className="w-10 h-10 rounded-full border-2 border-blue-400"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           <table className="min-w-full text-left">
//             <thead className="bg-blue-100 text-blue-700">
//               <tr>
//                 <th className="py-3 px-5">#</th>
//                 <th className="py-3 px-5">Name</th>
//                 <th className="py-3 px-5">Date Created</th>
//                 <th className="py-3 px-5">Role</th>
//                 <th className="py-3 px-5">Status</th>
//                 <th className="py-3 px-5">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id} className="border-b hover:bg-blue-50">
//                   <td className="py-4 px-5">{user.id}</td>
//                   <td className="flex items-center gap-3 py-4 px-5">
//                     <img src={user.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
//                     {user.name}
//                   </td>
//                   <td className="py-4 px-5">{user.date}</td>
//                   <td className="py-4 px-5">{user.role}</td>
//                   <td className="py-4 px-5">
//                     <span className={`inline-block w-3 h-3 rounded-full mr-2 ${statusColors[user.status]}`}></span>
//                     {user.status}
//                   </td>
//                   <td className="py-4 px-5 space-x-2">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit />
//                     </button>
//                     <button className="text-red-500 hover:text-red-700">
//                       <FaTrashAlt />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-between items-center px-5 py-3 bg-blue-50 text-blue-700 text-sm">
//             <span>Showing 5 out of 25 entries</span>
//             <div className="flex items-center space-x-2">
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">1</button>
//               <button className="px-3 py-1 rounded bg-blue-500 text-white">2</button>
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">3</button>
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">4</button>
//               <button className="px-3 py-1 rounded bg-white border border-blue-300">5</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;








// import React, { useState } from 'react';
// import Report from './Report';
// import { FaTachometerAlt, FaFileAlt } from 'react-icons/fa';

// const SidebarItem = ({ icon, label, onClick, isActive }) => (
//   <div
//     onClick={onClick}
//     className={`flex items-center space-x-3 text-white py-3 px-5 hover:bg-blue-700 cursor-pointer rounded-xl ${
//       isActive ? 'bg-blue-700' : ''
//     }`}
//   >
//     {icon}
//     <span>{label}</span>
//   </div>
// );

// const UserDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Report':
//         return <Report />;
//       case 'Dashboard':
//       default:
//         return (
//           <div className="bg-white rounded-xl p-6 shadow-md">
//             <h2 className="text-2xl font-semibold text-blue-600 mb-4">📌 Dashboard Overview</h2>
//             <p className="text-gray-600">
//               Welcome to your user dashboard! Here you can view summaries, access reports, and monitor important updates.
//             </p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-sans">
//       {/* Sidebar */}
//       <div className="w-full lg:w-64 bg-blue-500 text-white p-5 space-y-6">
//         <SidebarItem
//           icon={<FaTachometerAlt />}
//           label="Dashboard"
//           onClick={() => setActiveSection('Dashboard')}
//           isActive={activeSection === 'Dashboard'}
//         />
//         <SidebarItem
//           icon={<FaFileAlt />}
//           label="Report"
//           onClick={() => setActiveSection('Report')}
//           isActive={activeSection === 'Report'}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:p-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold text-blue-600">{activeSection}</h1>
//           <div className="flex items-center space-x-4 mt-4 md:mt-0">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
//             />
//             <img
//               src="https://i.pravatar.cc/40?img=11"
//               alt="avatar"
//               className="w-10 h-10 rounded-full border-2 border-blue-400"
//             />
//           </div>
//         </div>

//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;




import React, { useState } from 'react';
import { Pencil, Save, AlertTriangle, Activity, ShieldCheck } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const UserDashboard = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Ujjwal Rai',
    email: 'urai31382@gmail.com',
    location: 'Mysore, India'
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => setEditMode(!editMode);

  const disasterData = [
    { time: '10AM', risk: 30 },
    { time: '12PM', risk: 45 },
    { time: '2PM', risk: 50 },
    { time: '4PM', risk: 70 },
    { time: '6PM', risk: 65 },
  ];

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Disaster Management Dashboard</h1>

      {/* User Profile */}
      <div className="bg-white shadow-lg rounded-xl p-5 max-w-xl text-gray-700">
        <div className="flex justify-between items-center mb-3 text-gray-700">
          <h2 className="text-xl font-semibold text-gray-700">User Profile</h2>
          <button
            className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100 text-gray-700"
            onClick={toggleEdit}
          >
            {editMode ? <Save className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>
        {['name', 'email', 'location'].map((field) => (
          <div className="mb-3" key={field}>
            <label className="block text-sm font-medium mb-1 capitalize text-gray-700">{field}</label>
            <input
              name={field}
              className="w-full border px-3 py-2 rounded-md text-gray-700"
              value={profile[field]}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      {/* Real-time Monitoring */}
      <div className="bg-white shadow-md rounded-xl p-5 text-gray-700">
        <div className="flex items-center mb-3 text-red-600">
          <AlertTriangle className="mr-2" />
          <h2 className="text-xl font-semibold text-gray-700">Real-time Disaster Monitoring</h2>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Earthquake detected in Nepal - Magnitude 5.8</li>
          <li>Flood warning issued in Assam</li>
          <li>No alerts for South India</li>
        </ul>
      </div>

      {/* Predictive Analytics */}
      <div className="bg-white shadow-md rounded-xl p-5 text-gray-700">
        <div className="flex items-center mb-3 text-blue-600">
          <Activity className="mr-2" />
          <h2 className="text-xl font-semibold text-gray-700">Predictive Analytics (Risk Graph)</h2>
        </div>
        <LineChart width={500} height={250} data={disasterData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="risk" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </div>

      {/* Emergency Services */}
      <div className="text-gray-700 shadow-md rounded-xl p-5">
        <div className="flex items-center mb-3 text-green-600">
          <ShieldCheck className="mr-2" />
          <h2 className="text-xl font-semibold text-gray-700">Emergency Services Coordination</h2>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Rescue teams dispatched to Bihar flood zone</li>
          <li>Medical aid requested for Gujarat earthquake</li>
          <li>Fire and ambulance units on standby in Delhi</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
