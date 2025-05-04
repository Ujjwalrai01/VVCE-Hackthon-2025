// src/Sections/OngoingDisasters.jsx
export default function OngoingDisasters() {
    const disasters = [
      { id: 1, title: "Flood in Kerala", status: "Active", date: "2025-05-03" },
      { id: 2, title: "Earthquake in Nepal", status: "Under Control", date: "2025-05-01" },
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">🌀 Ongoing Disaster Updates</h2>
        <ul className="space-y-3">
          {disasters.map((disaster) => (
            <li key={disaster.id} className="border-b pb-2">
              <p className="font-medium text-gray-700">{disaster.title}</p>
              <p className="text-sm text-gray-500">Status: {disaster.status}</p>
              <p className="text-xs text-gray-400">Last Updated: {disaster.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  