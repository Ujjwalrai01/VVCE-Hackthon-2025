import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  BarChart2,
  Bell,
  Search,
  Home,
  Calendar,
  HelpCircle,
  Shield,
  Folder,
  TrendingUp,
  MessageSquare,
  Users,
  AlertTriangle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const DashboardPage = () => {
  const navigate = useNavigate();
  

  const handleDocumentClick = (docId) => {
    navigate(`/result/${docId}`); // Navigate to ResultPage with document ID
  };
  

  {
    /* Sidebar */
  }
  <div
    className={`${
      sidebarOpen ? "w-64" : "w-16"
    } bg-indigo-700 text-white transition-all duration-300 ease-in-out flex flex-col`}
  >
    {/* Sidebar Header */}
    <div className="p-4 border-b border-indigo-600 flex items-center justify-between">
      {sidebarOpen && (
        <span className="font-bold text-lg">Document Portal</span>
      )}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-1 rounded-md hover:bg-indigo-600"
      >
        <Menu className="h-5 w-5" />
      </button>
    </div>

    {/* Sidebar Navigation */}
    <div className="flex-1 py-4">
      <nav className="px-2 space-y-1">
        <button
          onClick={() => setActiveTab("documents")}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
            activeTab === "documents"
              ? "bg-indigo-800 text-white"
              : "text-indigo-100 hover:bg-indigo-600"
          }`}
        >
          <FileText className={`h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`} />
          {sidebarOpen && <span>Documents</span>}
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
            activeTab === "profile"
              ? "bg-indigo-800 text-white"
              : "text-indigo-100 hover:bg-indigo-600"
          }`}
        >
          <User className={`h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`} />
          {sidebarOpen && <span>Profile</span>}
        </button>

        <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-indigo-100 hover:bg-indigo-600">
          <BarChart className={`h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`} />
          {sidebarOpen && <span>Analytics</span>}
        </button>

        <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-indigo-100 hover:bg-indigo-600">
          <Settings className={`h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`} />
          {sidebarOpen && <span>Settings</span>}
        </button>
      </nav>
    </div>

    {/* Sidebar Footer */}
    <div className="p-4 border-t border-indigo-600">
      <button
        className={`flex items-center text-sm font-medium text-indigo-100 hover:text-white ${
          sidebarOpen ? "w-full" : "mx-auto"
        }`}
      >
        <LogOut className={`h-5 w-5 ${sidebarOpen ? "mr-2" : ""}`} />
        {sidebarOpen && <span>Log out</span>}
      </button>
    </div>
  </div>;

  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("documents");
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  // User profile state
  const [profile, setProfile] = useState({
    name: "Ujjwal Rai",
    email: "ujjwal@example.com",
    role: "Student",
    avatar: "/api/placeholder/80/80",
    department: "ID Verify",
    joinedDate: "Jan 15, 2024",
  });

  const [editingProfile, setEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  // Chart data
  const documentsByStatusData = [
    { name: "Approved", value: 0, color: "#10B981" },
    { name: "Pending", value: 0, color: "#F59E0B" },
    { name: "Rejected", value: 0, color: "#EF4444" },
  ];

  const documentsByTypeData = [
    { name: "PDF", value: 0, color: "#6366F1" },
    { name: "DOCX", value: 0, color: "#8B5CF6" },
    { name: "XLSX", value: 0, color: "#3B82F6" },
  ];

  const documentsTimelineData = [
    { name: "Apr 20", uploads: 3, approvals: 2 },
    { name: "Apr 25", uploads: 4, approvals: 3 },
    { name: "Apr 30", uploads: 2, approvals: 1 },
    { name: "May 02", uploads: 5, approvals: 3 },
    { name: "May 05", uploads: 3, approvals: 2 },
    { name: "May 08", uploads: 7, approvals: 4 },
  ];

  // Mock notification data
  const notificationItems = [
    {
      id: 1,
      title: "Document approved",
      message: '"Q1 Expense Report.pdf" has been approved',
      time: "15 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "New comment",
      message: 'Your supervisor left a comment on "Project Timeline.xlsx"',
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Document rejected",
      message: 'Your document "Training Documentation.pdf" needs revision',
      time: "3 hours ago",
      read: false,
    },
    {
      id: 4,
      title: "System maintenance",
      message: "The portal will be down for maintenance tonight at 11 PM",
      time: "1 day ago",
      read: true,
    },
  ];

  // Mock data for documents
 useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/getform`);
      const fetchedDocuments = res.data; // Assuming the response is an array of document objects

      setDocuments(fetchedDocuments);

    

    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
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
      setUploadProgress((prev) => {
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
        type: selectedFile.name.split(".").pop().toUpperCase(),
        size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
        status: "pending",
        uploadDate: new Date().toISOString().split("T")[0],
        comments: null,
      };

      setDocuments([newDoc, ...documents]);
      setUploading(false);
      setSelectedFile(null);
      setShowUploadModal(false);
    }, 500);
  };

  // Filter documents based on search term
  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle profile edit
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    setProfile({ ...editedProfile });
    setEditingProfile(false);
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
      switch (status) {
        case "approved":
          return "bg-green-100 text-green-800 border-green-300";
        case "rejected":
          return "bg-red-100 text-red-800 border-red-300";
        default:
          return "bg-yellow-100 text-yellow-800 border-yellow-300";
      }
    };

    const getStatusIcon = () => {
      switch (status) {
        case "approved":
          return <CheckCircle className="h-3 w-3 mr-1" />;
        case "rejected":
          return <XCircle className="h-3 w-3 mr-1" />;
        default:
          return <Clock className="h-3 w-3 mr-1" />;
      }
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center border ${getStatusStyles()}`}
      >
        {getStatusIcon()}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Document Upload Modal
  const UploadModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Upload Document
          </h3>
          <button
            onClick={() => setShowUploadModal(false)}
            className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {uploading ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Uploading...
              </span>
              <span className="text-sm font-medium text-indigo-600">
                {uploadProgress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Please don't close this window until upload is complete.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-indigo-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-all bg-indigo-50 bg-opacity-40">
                {selectedFile ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <FileText className="h-12 w-12 text-indigo-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center justify-center"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <Upload className="h-12 w-12 text-indigo-500 opacity-80" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-900">
                      Drag and drop your file here
                    </p>
                    <p className="mt-1 text-xs text-gray-500">Or</p>
                    <label className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                      Browse Files
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileSelect}
                      />
                    </label>
                    <p className="mt-1 text-xs text-gray-500">
                      Supported formats: PDF, DOCX, XLSX, PNG, JPG
                    </p>
                  </>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Description (Optional)
                </label>
                <textarea
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border bg-gray-50"
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
                className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                  selectedFile
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-300 cursor-not-allowed"
                }`}
              >
                Upload
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Notification dropdown
  const NotificationDropdown = () => (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-200">
      <div className="px-4 py-2 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900">Notifications</h3>
          <span className="text-xs text-indigo-600 font-medium cursor-pointer hover:text-indigo-800">
            Mark all as read
          </span>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notificationItems.map((notification) => (
          <div
            key={notification.id}
            className={`px-4 py-3 hover:bg-gray-50 border-l-4 ${
              notification.read ? "border-transparent" : "border-indigo-500"
            }`}
          >
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium w-full text-center">
          View all notifications
        </button>
      </div>
    </div>
  );

  // Analytics Tab Component
  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Status Distribution */}
        <div className="bg-white rounded-xl shadow p-6 col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Document Status
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={documentsByStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {documentsByStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value} documents`, "Count"]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Document Type Distribution */}
        <div className="bg-white rounded-xl shadow p-6 col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Document Types
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={documentsByTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`${value} documents`, "Count"]}
                />
                <Bar dataKey="value" name="Documents">
                  {documentsByTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Document Timeline */}
        <div className="bg-white rounded-xl shadow p-6 col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Activity Timeline
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={documentsTimelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="uploads"
                  stroke="#6366F1"
                  name="Uploads"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="approvals"
                  stroke="#10B981"
                  name="Approvals"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Document Activity Summary */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">
            Document Activity Summary
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">
                    Total Documents
                  </h4>
                  <p className="text-2xl font-bold text-indigo-700">
                    {documents.length}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-xs text-indigo-600">
                <span className="font-medium">+23%</span> from last month
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">
                    Approved
                  </h4>
                  <p className="text-2xl font-bold text-green-700">
                    {documents.filter((d) => d.status === "approved").length}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-xs text-green-600">
                <span className="font-medium">+18%</span> from last month
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">Pending</h4>
                  <p className="text-2xl font-bold text-yellow-700">
                    {documents.filter((d) => d.status === "pending").length}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-xs text-yellow-600">
                <span className="font-medium">+5%</span> from last month
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <XCircle className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">
                    Rejected
                  </h4>
                  <p className="text-2xl font-bold text-red-700">
                    {documents.filter((d) => d.status === "rejected").length}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-xs text-red-600">
                <span className="font-medium">-10%</span> from last month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Documents Tab Component
  const DocumentsTab = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl shadow p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white bg-opacity-25 text-white">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-white text-opacity-90">
                Approved Documents
              </h3>
              <p className="text-3xl font-bold">
                {documents.filter((d) => d.status === "approved").length}
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-white text-opacity-90">
            <span className="font-medium">+18%</span> from last month
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white bg-opacity-25 text-white">
              <Clock className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-white text-opacity-90">
                Pending Documents
              </h3>
              <p className="text-3xl font-bold">
                {documents.filter((d) => d.status === "pending").length}
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-white text-opacity-90">
            <span className="font-medium">+5%</span> from last month
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-xl shadow p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white bg-opacity-25 text-white">
              <XCircle className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-white text-opacity-90">
                Rejected Documents
              </h3>
              <p className="text-3xl font-bold">
                {documents.filter((d) => d.status === "rejected").length}
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-white text-opacity-90">
            <span className="font-medium">-10%</span> from last month
          </div>
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Your Documents
          </h3>
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No documents found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm
                ? "Try adjusting your search term."
                : "Get started by uploading a new document."}
            </p>
            {!searchTerm && (
              <div className="mt-6">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} 
                      className="hover:bg-gray-50"
                      onClick={() => handleDocumentClick(doc.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {doc.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {doc.type} • {doc.size}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.uploadDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={doc.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.comments || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-2 justify-end">
                        <button
                          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                          aria-label="View Document"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click
                            handleDocumentClick(doc.id);
                          }}
                        >
                          <FileText className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                          aria-label="Download Document"
                        >
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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-indigo-700 text-white transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Sidebar content */}
        {/* Add your sidebar content here */}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">
              {activeTab === "documents" ? "My Documents" : "User Profile"}
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Notifications"
              >
                <Bell className="h-6 w-6 text-gray-600" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white text-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="relative">
                <button className="flex items-center text-sm focus:outline-none">
                  <img
                    src={profile.avatar}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-2 text-gray-700 hidden sm:block">
                    {profile.name}
                  </span>
                  <ChevronRight className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          {activeTab === "documents" ? <DocumentsTab /> : <ProfileTab />}
        </main>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <UploadModal />}
    </div>
  );
};

export default DashboardPage;
