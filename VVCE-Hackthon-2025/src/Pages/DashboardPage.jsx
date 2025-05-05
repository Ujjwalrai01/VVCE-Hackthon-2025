import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Upload, 
  User, 
  Settings, 
  Menu, 
  LogOut, 
  Edit, 
  Save, 
  ChevronRight, 
  MoreVertical, 
  X, 
  Download, 
  PlusCircle, 
  Clock, 
  CheckCircle, 
  XCircle,
  BarChart,
  Bell,
  Search
} from 'lucide-react';

const DashboardPage = () => {
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('documents');
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState(3);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  // User profile state
  const [profile, setProfile] = useState({
    name: "Ujjwal Rai",
    email: "ujjwal@example.com",
    role: "Student",
    avatar: "/api/placeholder/80/80",
    department: "ID Verify",
    joinedDate: "Jan 15, 2024"
  });
  
  const [editingProfile, setEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({...profile});

  // Mock data for documents
  useEffect(() => {
    // Simulate API call to fetch documents
    setTimeout(() => {
      setDocuments([
        { id: 1, name: "Q1 Expense Report.pdf", type: "PDF", size: "2.4 MB", status: "approved", uploadDate: "2025-04-28", comments: "Approved by finance team" },
        { id: 2, name: "Client Proposal - XYZ Corp.docx", type: "DOCX", size: "1.7 MB", status: "pending", uploadDate: "2025-05-01", comments: null },
        { id: 3, name: "Department Budget 2025.xlsx", type: "XLSX", size: "3.8 MB", status: "rejected", uploadDate: "2025-04-29", comments: "Please revise figures in section 3" },
        { id: 4, name: "Team Meeting Minutes.pdf", type: "PDF", size: "0.9 MB", status: "approved", uploadDate: "2025-04-25", comments: null },
        { id: 5, name: "Project Timeline.xlsx", type: "XLSX", size: "1.2 MB", status: "pending", uploadDate: "2025-05-02", comments: null },
        { id: 6, name: "Market Research Data.pdf", type: "PDF", size: "5.6 MB", status: "approved", uploadDate: "2025-04-22", comments: "Great insights, please share with the team" },
        { id: 7, name: "Training Documentation.pdf", type: "PDF", size: "4.3 MB", status: "rejected", uploadDate: "2025-04-18", comments: "Need to include updated protocols" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = () => {
    if (!selectedFile) return;
    
    setUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          simulateUploadComplete();
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // Simulate upload completion
  const simulateUploadComplete = () => {
    setTimeout(() => {
      const newDoc = {
        id: documents.length + 1,
        name: selectedFile.name,
        type: selectedFile.name.split('.').pop().toUpperCase(),
        size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
        status: "pending",
        uploadDate: new Date().toISOString().split('T')[0],
        comments: null
      };
      
      setDocuments([newDoc, ...documents]);
      setUploading(false);
      setSelectedFile(null);
      setShowUploadModal(false);
    }, 500);
  };

  // Filter documents based on search term
  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          return 'bg-green-100 text-green-800 border-green-200';
        case 'rejected':
          return 'bg-red-100 text-red-800 border-red-200';
        default:
          return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      }
    };
    
    const getStatusIcon = () => {
      switch(status) {
        case 'approved':
          return <CheckCircle className="h-3 w-3 mr-1" />;
        case 'rejected':
          return <XCircle className="h-3 w-3 mr-1" />;
        default:
          return <Clock className="h-3 w-3 mr-1" />;
      }
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center border ${getStatusStyles()}`}>
        {getStatusIcon()}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Document Upload Modal
  const UploadModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Upload Document</h3>
          <button 
            onClick={() => setShowUploadModal(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {uploading ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Uploading...</span>
              <span className="text-sm font-medium text-gray-700">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Please don't close this window until upload is complete.</p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-all">
                {selectedFile ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <FileText className="h-10 w-10 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    <button 
                      onClick={() => setSelectedFile(null)}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <Upload className="h-10 w-10 text-gray-400" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-900">Drag and drop your file here</p>
                    <p className="mt-1 text-xs text-gray-500">Or</p>
                    <label className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">
                      Browse Files
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileSelect}
                      />
                    </label>
                    <p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOCX, XLSX, PNG, JPG</p>
                  </>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Document Description (Optional)</label>
                <textarea 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-600"
                  rows="3"
                  placeholder="Add a brief description of this document..."
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleFileUpload}
                disabled={!selectedFile}
                className={`px-4 py-2 rounded-md text-sm font-medium text-white ${selectedFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
              >
                Upload
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Documents Tab Component
  const DocumentsTab = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Approved Documents</h3>
              <p className="text-2xl font-semibold text-gray-900">{documents.filter(d => d.status === 'approved').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Clock className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Pending Documents</h3>
              <p className="text-2xl font-semibold text-gray-900">{documents.filter(d => d.status === 'pending').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <XCircle className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Rejected Documents</h3>
              <p className="text-2xl font-semibold text-gray-900">{documents.filter(d => d.status === 'rejected').length}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Documents Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Your Documents</h3>
          <button 
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Upload New
          </button>
        </div>
        
        <div className="px-6 py-4 border-b border-gray-200 bg-white">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-500"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No documents found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm ? "Try adjusting your search term." : "Get started by uploading a new document."}
            </p>
            {!searchTerm && (
              <div className="mt-6">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-auto max-h-96">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={doc.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.comments || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        <button className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                          <FileText className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200">
                          <Download className="h-4 w-4" />
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
    </div>
  );

  // Profile Tab Component
  const ProfileTab = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Your Profile</h3>
        {!editingProfile ? (
          <button 
            onClick={() => setEditingProfile(true)}
            className="flex items-center text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100"
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit Profile
          </button>
        ) : (
          <button 
            onClick={saveProfile}
            className="flex items-center text-sm px-3 py-1 rounded-md bg-green-50 text-green-600 hover:bg-green-100"
          >
            <Save className="h-4 w-4 mr-1" />
            Save Changes
          </button>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="flex-shrink-0 flex flex-col items-center">
            <img 
              src={profile.avatar} 
              alt="User Avatar" 
              className="h-32 w-32 rounded-full border-4 border-gray-200"
            />
            {!editingProfile && (
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {profile.role}
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-6 md:mt-0 md:ml-6 flex-1 text-gray-600">
            {editingProfile ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleProfileChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={editedProfile.department}
                    onChange={handleProfileChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
                  <input
                    type="text"
                    name="avatar"
                    value={editedProfile.avatar}
                    onChange={handleProfileChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500">FULL NAME</h4>
                    <p className="mt-1 text-base font-medium text-gray-900">{profile.name}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium text-gray-500">EMAIL ADDRESS</h4>
                    <p className="mt-1 text-base text-gray-900">{profile.email}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium text-gray-500">DEPARTMENT</h4>
                    <p className="mt-1 text-base text-gray-900">{profile.department}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium text-gray-500">JOINED DATE</h4>
                    <p className="mt-1 text-base text-gray-900">{profile.joinedDate}</p>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900">Document Activity</h4>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Total Documents</span>
                      <span className="font-medium text-gray-900 text-lg">{documents.length}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Approved</span>
                      <span className="font-medium text-green-600 text-lg">{documents.filter(d => d.status === 'approved').length}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Pending</span>
                      <span className="font-medium text-yellow-600 text-lg">{documents.filter(d => d.status === 'pending').length}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Rejected</span>
                      <span className="font-medium text-red-600 text-lg">{documents.filter(d => d.status === 'rejected').length}</span>
                    </div>
                  </div>
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
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-indigo-700 text-white transition-all duration-300 ease-in-out flex flex-col`}>
        <div className="p-4 border-b border-indigo-600 flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">Document Portal</span>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-1 rounded-md hover:bg-indigo-600"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 py-4">
          <nav className="px-2 space-y-1">
            <button 
              onClick={() => setActiveTab('documents')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeTab === 'documents' ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600'}`}
            >
              <FileText className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Documents</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeTab === 'profile' ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600'}`}
            >
              <User className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Profile</span>}
            </button>
            
            <button 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-indigo-100 hover:bg-indigo-600"
            >
              <BarChart className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Analytics</span>}
            </button>
            
            <button 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-indigo-100 hover:bg-indigo-600"
            >
              <Settings className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span>Settings</span>}
            </button>
          </nav>
        </div>
        
        <div className="p-4 border-t border-indigo-600">
          <button className={`flex items-center text-sm font-medium text-indigo-100 hover:text-white ${sidebarOpen ? 'w-full' : 'mx-auto'}`}>
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
                {activeTab === 'documents' ? 'My Documents' : 'User Profile'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <Bell className="h-6 w-6" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white text-center">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>
              
              <div className="relative">
                <button className="flex items-center text-sm focus:outline-none">
                  <img 
                    src={profile.avatar} 
                    alt="User Avatar" 
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
          {activeTab === 'documents' ? <DocumentsTab /> : <ProfileTab />}
        </main>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <div className="relative group">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none">
            <MoreVertical className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-16 right-0 hidden group-hover:block">
            <div className="bg-white rounded-lg shadow-lg py-2 w-48 overflow-auto max-h-64">
              <button 
                onClick={() => setShowUploadModal(true)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <Bell className="h-4 w-4 mr-2" />
                Notifications ({notifications})
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upload Modal */}
      {showUploadModal && <UploadModal />}
    </div>
  );
};

export default DashboardPage;