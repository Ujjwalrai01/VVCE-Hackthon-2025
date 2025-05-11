import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
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
  FileText,
  Calendar,
  Phone,
  Mail,
  Home,
  CreditCard,
  Briefcase,
  DollarSign,
  Users,
} from "lucide-react";

const ResultPage = () => {
  const { docId } = useParams(); // Get docId from the URL

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL; 
        const response = await fetch(`${baseUrl}/getform/${docId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data : ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        console.log("API Response:", result);
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [docId]);
  // Sample admin profile data
  const [adminProfile, setAdminProfile] = useState({
    name: "Alex Johnson",
    role: "System Administrator",
    email: "alex.johnson@company.com",
    department: "IT Operations",
    joinDate: "2023-01-15",
  });

  // State for editing admin profile
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...adminProfile });

  // State for sidebar visibility on mobile
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Sample bank account data
  const [bankAccount, setBankAccount] = useState({
    fullName: "Rahul Sharma",
    fatherName: "Vikram Sharma",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    email: "rahul.sharma@example.com",
    phoneNumber: "+91 9876543210",
    phoneVerified: true,
    emailVerified: true,
    address: {
      street: "123 Park Avenue",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
    },
    aadhaarNumber: "XXXX-XXXX-1234",
    panNumber: "ABCDE1234F",
    kycDocuments: {
      aadhaarFront: "uploads/aadhaar_front.jpg",
      aadhaarBack: "uploads/aadhaar_back.jpg",
      panCard: "uploads/pan_card.jpg",
      selfie: "uploads/selfie.jpg",
    },
    accountType: "Savings",
    occupation: "Software Engineer",
    annualIncome: 1200000,
    nomineeName: "Priya Sharma",
    nomineeRelation: "Spouse",
    createdAt: "2024-01-10T10:30:00.000Z",
    status: "approved",
    uuid: "ACC-78912-34567",
  });

  // State for active tab in bank account details
  const [activeTab, setActiveTab] = useState("personal");

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setAdminProfile({ ...editedProfile });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile({ ...adminProfile });
    setIsEditing(false);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Format currency function
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile by default */}
      <div
        className={`bg-indigo-800 text-white w-64 flex-shrink-0 transform transition-transform duration-300 ease-in-out ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static h-full z-10`}
      >
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
                <p className="text-xs text-indigo-300">
                  Member since{" "}
                  {new Date(adminProfile.joinDate).toLocaleDateString()}
                </p>
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
                  <label className="block text-xs text-indigo-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleProfileChange}
                    className="w-full bg-indigo-600 border border-indigo-500 rounded px-2 py-1 text-white"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-xs text-indigo-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleProfileChange}
                    className="w-full bg-indigo-600 border border-indigo-500 rounded px-2 py-1 text-white"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-xs text-indigo-300 mb-1">
                    Department
                  </label>
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
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-indigo-700 flex items-center"
                >
                  <Settings size={18} className="mr-2" /> Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded bg-indigo-700 flex items-center"
                >
                  <User size={18} className="mr-2" /> Results
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-indigo-700 flex items-center"
                >
                  <Settings size={18} className="mr-2" /> Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-indigo-700 flex items-center"
                >
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
              <button
                onClick={toggleSidebar}
                className="lg:hidden mr-3 text-gray-600"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">
                Bank Account Details
              </h1>
              {loading ? (
                <div className="p-6 text-gray-600">Loading...</div>
              ) : error ? (
                <div className="p-6 text-red-500">Error: {error}</div>
              ) : data ? (
                <div className="bg-white rounded-lg shadow-md p-6 my-4">
                  <h2 className="text-xl font-bold mb-4">
                    {data.title || "Untitled Document"}
                  </h2>
                  <p className="text-gray-700 mb-2">
                    <strong>Document ID:</strong> {data.id || docId}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Uploaded By:</strong> {data.uploadedBy || "Unknown"}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Status:</strong> {data.status || "N/A"}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Upload Date:</strong> {data.date || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <strong>Description:</strong>{" "}
                    {data.description || "No description available"}
                  </p>
                </div>
              ) : (
                <p className="p-6 text-gray-600">No data available.</p>
              )}
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

        {/* Bank Account Content */}
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Account Status and ID Bar */}
            <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex flex-wrap justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="text-sm text-gray-500">Account ID:</span>
                  <span className="ml-2 font-medium">{bankAccount.uuid}</span>
                </div>
                <div className="mr-4">
                  <span className="text-sm text-gray-500">Created:</span>
                  <span className="ml-2">
                    {formatDate(bankAccount.createdAt)}
                  </span>
                </div>
              </div>
              <div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                    ${
                      bankAccount.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : bankAccount.status === "rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                >
                  {bankAccount.status.charAt(0).toUpperCase() +
                    bankAccount.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Account Info Summary */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <User size={32} />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">
                      {bankAccount.fullName}
                    </h2>
                    <p className="text-gray-500">
                      {bankAccount.accountType} Account
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="mb-1 flex items-center">
                    <Phone size={16} className="text-gray-400 mr-2" />
                    <span>{bankAccount.phoneNumber}</span>
                    {bankAccount.phoneVerified && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-400 mr-2" />
                    <span>{bankAccount.email}</span>
                    {bankAccount.emailVerified && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "personal"
                      ? "border-b-2 border-indigo-500 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Personal Information
                </button>
                <button
                  onClick={() => setActiveTab("kyc")}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "kyc"
                      ? "border-b-2 border-indigo-500 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  KYC Details
                </button>
                <button
                  onClick={() => setActiveTab("financial")}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "financial"
                      ? "border-b-2 border-indigo-500 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Financial Information
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Personal Information Tab */}
              {activeTab === "personal" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-blue-200 to-blue-600 p-6 rounded-lg shadow-md">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <User size={16} className="mr-2 text-indigo-500" /> Full
                        Name
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.fullName}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Users size={16} className="mr-2 text-indigo-500" />{" "}
                        Father's Name
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.fatherName}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Calendar size={16} className="mr-2 text-indigo-500" />{" "}
                        Date of Birth
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {formatDate(bankAccount.dateOfBirth)}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700">
                        Gender
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.gender}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Home size={16} className="mr-2 text-indigo-500" />{" "}
                        Address
                      </h3>
                      <div className="mt-2 text-gray-900">
                        <p className="text-lg font-medium">
                          {bankAccount.address.street}
                        </p>
                        <p className="text-sm text-gray-600">
                          {bankAccount.address.city},{" "}
                          {bankAccount.address.state}{" "}
                          {bankAccount.address.postalCode}
                        </p>
                        <p className="text-sm text-gray-600">
                          {bankAccount.address.country}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Users size={16} className="mr-2 text-indigo-500" />{" "}
                        Nominee Details
                      </h3>
                      <div className="mt-2 text-gray-900">
                        <p className="text-lg font-medium">
                          {bankAccount.nomineeName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {bankAccount.nomineeRelation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* KYC Details Tab */}
              {activeTab === "kyc" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-blue-200 to-blue-600 p-6 rounded-lg shadow-md">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <FileText size={16} className="mr-2 text-blue-500" />{" "}
                        Aadhaar Number
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.aadhaarNumber}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <FileText size={16} className="mr-2 text-blue-500" />{" "}
                        PAN Number
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.panNumber}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700">
                        Uploaded Documents
                      </h3>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                          <p className="text-xs text-gray-500">Aadhaar Front</p>
                          <div className="mt-2 h-20 bg-gray-200 rounded flex items-center justify-center">
                            <FileText size={24} className="text-gray-400" />
                          </div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                          <p className="text-xs text-gray-500">Aadhaar Back</p>
                          <div className="mt-2 h-20 bg-gray-200 rounded flex items-center justify-center">
                            <FileText size={24} className="text-gray-400" />
                          </div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                          <p className="text-xs text-gray-500">PAN Card</p>
                          <div className="mt-2 h-20 bg-gray-200 rounded flex items-center justify-center">
                            <FileText size={24} className="text-gray-400" />
                          </div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                          <p className="text-xs text-gray-500">Selfie</p>
                          <div className="mt-2 h-20 bg-gray-200 rounded flex items-center justify-center">
                            <User size={24} className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Financial Information Tab */}
              {activeTab === "financial" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-blue-200 to-blue-600 p-6 rounded-lg shadow-md">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <CreditCard
                          size={16}
                          className="mr-2 text-purple-500"
                        />{" "}
                        Account Type
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.accountType}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Briefcase size={16} className="mr-2 text-purple-500" />{" "}
                        Occupation
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {bankAccount.occupation}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-4">
                      <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                        <DollarSign
                          size={16}
                          className="mr-2 text-purple-500"
                        />{" "}
                        Annual Income
                      </h3>
                      <p className="mt-2 text-lg font-medium text-gray-900">
                        {formatCurrency(bankAccount.annualIncome)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResultPage;
