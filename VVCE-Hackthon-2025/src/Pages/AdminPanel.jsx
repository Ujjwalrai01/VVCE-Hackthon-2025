
import React, { useState, useEffect } from 'react';
import Image from "../assets/img1.png"
import { User, FileText, Check, X, Settings, Menu, LogOut, Edit, Save, ChevronRight, MoreVertical } from 'lucide-react';

const AdminPanel = () => {
  // State for documents
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('documents');
  
  // Admin profile state
  const [profile, setProfile] = useState({
    name: "Ujjwal Rai",
    email: "ujjwal@example.com",
    role: "Super Admin",
    avatar: {Image}
  });
  
  const [editingProfile, setEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({...profile});

  // Mock data for documents
  useEffect(() => {
    // Simulate API call to fetch documents
    setTimeout(() => {
      setDocuments([
        { id: 1, name: "Financial Report Q1", type: "PDF", size: "2.4 MB", status: "pending", uploadedBy: "john@example.com", date: "2025-04-28" },
        { id: 2, name: "Product Catalog", type: "DOCX", size: "5.7 MB", status: "approved", uploadedBy: "sarah@example.com", date: "2025-04-27" },
        { id: 3, name: "Marketing Plan 2025", type: "XLSX", size: "1.8 MB", status: "rejected", uploadedBy: "mike@example.com", date: "2025-04-26" },
        { id: 4, name: "User Research Results", type: "PDF", size: "8.2 MB", status: "pending", uploadedBy: "lisa@example.com", date: "2025-04-25" },
        { id: 5, name: "Company Policies", type: "PDF", size: "3.1 MB", status: "pending", uploadedBy: "david@example.com", date: "2025-04-24" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Handle document approval/rejection
  const handleDocumentAction = (id, action) => {
    setDocuments(documents.map(doc => 
      doc.id === id ? {...doc, status: action} : doc
    ));
  };

  // Handle profile edit
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({...prev, [name]: value}));
  };

  const saveProfile = () => {
    setProfile({...editedProfile});
    setEditingProfile(false);
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
      switch(status) {
        case 'approved':
          return 'bg-green-100 text-green-800';
        case 'rejected':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-yellow-100 text-yellow-800';
      }
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Document List Component
  const DocumentsList = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">Uploaded Documents</h3>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-auto max-h-96">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                        <div className="text-sm text-gray-500">{doc.type} • {doc.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={doc.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleDocumentAction(doc.id, 'approved')}
                        disabled={doc.status === 'approved'}
                        className={`p-1 rounded-full ${doc.status === 'approved' ? 'bg-gray-100 text-gray-400' : 'bg-green-100 text-green-600 hover:bg-green-200'}`}
                      >
                        <Check className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDocumentAction(doc.id, 'rejected')}
                        disabled={doc.status === 'rejected'}
                        className={`p-1 rounded-full ${doc.status === 'rejected' ? 'bg-gray-100 text-gray-400' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                        <FileText className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  // Admin Profile Component
  const AdminProfile = () => (
    <div className="bg-white-200 rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Admin Profile</h3>
        {!editingProfile ? (
          <button 
            onClick={() => setEditingProfile(true)}
            className="flex items-center text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100"
          >
            <Edit className="h-4 w-4 mr-1 text-gray-600" />
            Edit
          </button>
        ) : (
          <button 
            onClick={saveProfile}
            className="flex items-center text-sm px-3 py-1 rounded-md bg-green-50 text-green-600 hover:bg-green-100"
          >
            <Save className="h-4 w-4 mr-1 text-gray-600" />
            Save
          </button>
        )}
      </div>
      
      <div className="p-6 text-gray-600">
        <div className="flex items-start text-gray-600">
          <div className="flex-shrink-0 text-gray-600">
            <img 
              src={profile.avatar} 
              alt="Admin Avatar" 
              className="h-20 w-20 rounded-full border-4 border-gray-200"
            />
          </div>
          
          <div className="ml-6 flex-1 text-gray-600">
            {editingProfile ? (
              <div className="space-y-4 text-gray-600">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleProfileChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleProfileChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={editedProfile.role}
                    onChange={handleProfileChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-gray-500">FULL NAME</h4>
                  <p className="text-base font-medium text-gray-900">{profile.name}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-gray-500">EMAIL ADDRESS</h4>
                  <p className="text-base text-gray-900">{profile.email}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-gray-500">ROLE</h4>
                  <p className="text-base text-gray-900">{profile.role}</p>
                </div>
                
                <div className="pt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Active Account
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-blue-800 text-white transition-all duration-300 ease-in-out flex flex-col`}>
        <div className="p-4 border-b border-blue-700 flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">Admin Panel</span>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-1 rounded-md hover:bg-blue-700"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 py-4">
          <nav className="px-2 space-y-1">
            <button 
              onClick={() => setActiveTab('documents')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeTab === 'documents' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'}`}
            >
              <FileText className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Documents</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeTab === 'profile' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'}`}
            >
              <User className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Profile</span>}
            </button>
            
            <button 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-blue-100 hover:bg-blue-700"
            >
              <Settings className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Settings</span>}
            </button>
          </nav>
        </div>
        
        <div className="p-4 border-t border-blue-700">
          <button className={`flex items-center text-sm font-medium text-blue-100 hover:text-white ${sidebarOpen ? 'w-full' : 'mx-auto'}`}>
            <LogOut className={`h-5 w-5 ${sidebarOpen ? 'mr-2' : ''}`} />
            {sidebarOpen && <span>Log out</span>}
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {activeTab === 'documents' ? 'Document Management' : 'Admin Profile'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center text-sm focus:outline-none">
                  <img 
                    src={profile.avatar} 
                    alt="Admin Avatar" 
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-2 text-gray-700 hidden sm:block">{profile.name}</span>
                  <ChevronRight className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          {activeTab === 'documents' ? <DocumentsList /> : <AdminProfile />}
        </main>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <div className="relative group">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none">
            <MoreVertical className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-16 right-0 hidden group-hover:block">
            <div className="bg-white rounded-lg shadow-lg py-2 w-48 overflow-auto max-h-64">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Upload New Document
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <User className="h-4 w-4 mr-2" />
                Manage Users
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;












