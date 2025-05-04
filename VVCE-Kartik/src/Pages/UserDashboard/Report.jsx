import React from 'react';
import { FaTasks, FaClock, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa';

const reportData = [
  {
    id: 1,
    title: 'Completed Tasks',
    value: 42,
    icon: <FaCheckCircle className="text-green-500 text-3xl" />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Pending Tasks',
    value: 8,
    icon: <FaTasks className="text-yellow-500 text-3xl" />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Hours Logged',
    value: 128,
    icon: <FaClock className="text-blue-500 text-3xl" />,
    bgColor: 'bg-blue-100',
  },
  {
    id: 4,
    title: 'Projects Involved',
    value: 6,
    icon: <FaProjectDiagram className="text-purple-500 text-3xl" />,
    bgColor: 'bg-purple-100',
  },
];

const Report = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">📊 User Report Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportData.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-4 rounded-xl shadow-sm ${item.bgColor}`}
          >
            <div className="mr-4">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-2xl font-bold text-gray-700">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
