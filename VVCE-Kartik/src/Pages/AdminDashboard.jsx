import React from 'react';
import {
  FaUsers,
  FaFileAlt,
  FaComments,
  FaChartLine,
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const summaryCards = [
    {
      title: 'Total Users',
      value: 512,
      icon: <FaUsers className="text-white text-2xl" />,
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Reports',
      value: 87,
      icon: <FaFileAlt className="text-white text-2xl" />,
      bgColor: 'bg-purple-500',
    },
    {
      title: 'Messages',
      value: 24,
      icon: <FaComments className="text-white text-2xl" />,
      bgColor: 'bg-green-500',
    },
    {
      title: 'Performance',
      value: '92%',
      icon: <FaChartLine className="text-white text-2xl" />,
      bgColor: 'bg-yellow-500',
    },
  ];

  const recentReports = [
    { id: 1, title: 'Flood in Mumbai', status: 'Reviewed', date: '2025-05-01' },
    { id: 2, title: 'Earthquake - Delhi', status: 'Pending', date: '2025-04-28' },
    { id: 3, title: 'Forest Fire - Ooty', status: 'Resolved', date: '2025-04-25' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🛠️ Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md text-white flex items-center justify-between ${card.bgColor}`}
          >
            <div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-3xl font-bold mt-1">{card.value}</p>
            </div>
            {card.icon}
          </div>
        ))}
      </div>

      {/* Quick Actions & Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">👤 User Actions</h2>
          <div className="space-y-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
              <FaPlusCircle /> Add New User
            </button>
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow">
              <FaEdit /> Edit User Info
            </button>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">
              <FaTrashAlt /> Delete User
            </button>
          </div>
        </div>

        {/* Latest Reports */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">📝 Latest Reports</h2>
          <ul className="divide-y divide-gray-200">
            {recentReports.map((report) => (
              <li key={report.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{report.title}</p>
                  <p className="text-sm text-gray-500">{report.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    report.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : report.status === 'Reviewed'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {report.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
