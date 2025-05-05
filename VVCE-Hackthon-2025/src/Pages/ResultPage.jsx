// import React from "react";

// const ResultPage = () => {
//   const result = {
//     documentName: "Invoice_#1234.pdf",
//     status: "Verified",
//     confidence: "98%",
//     extractedText: "John Doe - Total Amount: $1,250"
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
//       <h1 className="text-3xl font-bold mb-4 text-green-600">Verification Result</h1>
//       <div className="space-y-4">
//         <p><strong>Document:</strong> {result.documentName}</p>
//         <p><strong>Status:</strong> <span className="text-green-600">{result.status}</span></p>
//         <p><strong>Confidence:</strong> {result.confidence}</p>
//         <p><strong>Extracted Text:</strong> {result.extractedText}</p>
//       </div>
//     </div>
//   );
// };

// export default ResultPage;







import React, { useState } from 'react';
import { 
  Menu,
  ChevronDown, 
  Settings, 
  User, 
  LogOut, 
  Edit, 
  Save,
  X,
  MoreVertical,
  MapPin,
  BarChart2,
  Clock
} from 'lucide-react';

const ResultPage = () => {
  // Sample result data
  const [result, setResult] = useState({
    id: 'res-123456',
    title: 'Annual Budget Report Analysis',
    confidenceScore: 87,
    status: 'Completed',
    location: 'Financial Department',
    timestamp: '2025-05-05T14:30:00',
    content: 'This is the analysis result of the annual budget report that has been processed through our system. The report indicates an overall positive trend in financial performance compared to previous fiscal years.',
    insights: [
      'Revenue increased by 12% compared to last year',
      'Operational costs decreased by 8%',
      'New market opportunities identified in 3 regions',
      'Investment potential in renewable energy sector'
    ]
  });

  // Sample admin profile data
  const [adminProfile, setAdminProfile] = useState({
    name: 'Alex Johnson',
    role: 'System Administrator',
    email: 'alex.johnson@company.com',
    department: 'IT Operations',
    joinDate: '2023-01-15'
  });

  // State for editing admin profile
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({...adminProfile});
  
  // State for sidebar visibility on mobile
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setAdminProfile({...editedProfile});
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile({...adminProfile});
    setIsEditing(false);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({...prev, [name]: value}));
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Confidence score color based on value
  const getConfidenceColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Status badge color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile by default */}
      <div className={`bg-indigo-800 text-white w-64 flex-shrink-0 transform transition-transform duration-300 ease-in-out ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static h-full z-10`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Analytics Dashboard</h2>
            <button onClick={toggleSidebar} className="lg:hidden text-white">
              <X size={20} />
            </button>
          </div>
          
          {/* Admin Profile Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                <User size={24} />
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{adminProfile.name}</h3>
                <p className="text-xs text-indigo-200">{adminProfile.role}</p>
              </div>
            </div>
            
            {!isEditing ? (
              <div className="bg-indigo-700 rounded-lg p-3 text-sm">
                <p className="mb-1">{adminProfile.email}</p>
                <p className="mb-1">{adminProfile.department}</p>
                <p className="text-xs text-indigo-300">Member since {new Date(adminProfile.joinDate).toLocaleDateString()}</p>
                <button 
                  onClick={handleEditProfile}
                  className="mt-2 flex items-center text-xs bg-indigo-600 hover:bg-indigo-500 px-2 py-1 rounded"
                >
                  <Edit size={12} className="mr-1" /> Edit Profile
                </button>
              </div>
            ) : (
              <div className="bg-indigo-700 rounded-lg p-3 text-sm">
                <div className="mb-2">
                  <label className="block text-xs text-indigo-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={editedProfile.name} 
                    onChange={handleProfileChange}
                    className="w-full bg-indigo-600 border border-indigo-500 rounded px-2 py-1 text-white"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-xs text-indigo-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={editedProfile.email} 
                    onChange={handleProfileChange}
                    className="w-full bg-indigo-600 border border-indigo-500 rounded px-2 py-1 text-white"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-xs text-indigo-300 mb-1">Department</label>
                  <input 
                    type="text" 
                    name="department" 
                    value={editedProfile.department} 
                    onChange={handleProfileChange}
                    className="w-full bg-indigo-600 border border-indigo-500 rounded px-2 py-1 text-white"
                  />
                </div>
                <div className="flex space-x-2 mt-3">
                  <button 
                    onClick={handleSaveProfile}
                    className="flex items-center text-xs bg-green-600 hover:bg-green-500 px-2 py-1 rounded"
                  >
                    <Save size={12} className="mr-1" /> Save
                  </button>
                  <button 
                    onClick={handleCancelEdit}
                    className="flex items-center text-xs bg-indigo-600 hover:bg-indigo-500 px-2 py-1 rounded"
                  >
                    <X size={12} className="mr-1" /> Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation Links */}
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-700 flex items-center">
                  <BarChart2 size={18} className="mr-2" /> Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded bg-indigo-700 flex items-center">
                  <User size={18} className="mr-2" /> Results
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-700 flex items-center">
                  <Settings size={18} className="mr-2" /> Settings
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-700 flex items-center">
                  <LogOut size={18} className="mr-2" /> Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="lg:hidden mr-3 text-gray-600">
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">Result Details</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-1 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 rounded-full px-4 py-1">
                  <span>Actions</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              
              <div className="relative">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <MoreVertical size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Result Content */}
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{result.title}</h2>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {/* Confidence Score */}
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <BarChart2 size={16} className="mr-2 text-indigo-600" />
                      <span className="text-sm text-gray-700">Confidence: </span>
                      <span className={`ml-1 text-sm font-medium ${getConfidenceColor(result.confidenceScore)}`}>
                        {result.confidenceScore}%
                      </span>
                    </div>
                    
                    {/* Status */}
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(result.status)}`}>
                      {result.status}
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      <MapPin size={16} className="mr-1 text-gray-500" />
                      {result.location}
                    </div>
                    
                    {/* Timestamp */}
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      <Clock size={16} className="mr-1 text-gray-500" />
                      {new Date(result.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <MoreVertical size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700">{result.content}</p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-indigo-800 mb-3">Key Insights</h3>
                <ul className="space-y-2">
                  {result.insights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-200 text-indigo-800 font-medium text-sm mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResultPage;