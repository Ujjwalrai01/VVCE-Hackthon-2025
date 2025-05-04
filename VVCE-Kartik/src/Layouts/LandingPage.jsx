import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import {
  FaChevronDown,
  FaShieldAlt,
  FaHandsHelping,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Home = () => {
  const [disasterOpen, setDisasterOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center flex-wrap gap-y-3">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-blue-700 dark:text-white">DisasterGuard</span>
          </div>

          <ul className="flex flex-wrap gap-4 sm:gap-6 items-center font-medium text-gray-700 dark:text-gray-200">
            <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link></li>

            {/* Disaster Dropdown */}
            <li className="relative">
              <button
                onClick={() => {
                  setDisasterOpen(!disasterOpen);
                  setLearnOpen(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Disaster <FaChevronDown size={12} />
              </button>
              {disasterOpen && (
                <ul className="absolute bg-white dark:bg-gray-700 mt-2 shadow-xl rounded-md w-52 p-2 z-30 border border-blue-200 dark:border-gray-500">
                  {["Earthquake", "Flood", "Cyclone", "Wildfire"].map((type) => (
                    <li key={type} className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-md">
                      <a href={`https://ndma.gov.in/disaster/${type.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                        {type}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Learn Dropdown */}
            <li className="relative">
              <button
                onClick={() => {
                  setLearnOpen(!learnOpen);
                  setDisasterOpen(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-300"
              >
                Learn <FaChevronDown size={12} />
              </button>
              {learnOpen && (
                <ul className="absolute bg-white dark:bg-gray-700 mt-2 shadow-xl rounded-md w-64 p-2 z-30 border border-purple-200 dark:border-gray-500">
                  {[
                    { label: "Earthquake Safety", url: "https://ndma.gov.in/en/safety-earthquake.html" },
                    { label: "Flood Preparedness", url: "https://ndma.gov.in/en/floods.html" },
                    { label: "Cyclone Emergency", url: "https://ndma.gov.in/en/cyclones.html" },
                    { label: "Wildfire Evacuation", url: "https://ndma.gov.in/en/wildfires.html" },
                    { label: "First Aid Basics", url: "https://ndma.gov.in/en/first-aid.html" },
                  ].map(({ label, url }) => (
                    <li key={label} className="px-4 py-2 hover:bg-purple-100 dark:hover:bg-gray-600 rounded-md">
                      <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</Link></li>
           
            <li><Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-300">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-600 dark:hover:text-blue-300">Sign Up</Link></li>

            {/* Theme Toggle */}
            <li>
              <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative">
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-5 flex items-center justify-center">
                      {darkMode ? <BsSunFill className="text-yellow-500 text-xs" /> : <BsMoonStarsFill className="text-gray-500 text-xs" />}
                    </div>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-white mb-4">Be Prepared, Stay Safe</h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Real-time disaster alerts, emergency response resources, and survival training for everyone.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {[
            { icon: <FaShieldAlt className="text-blue-500 text-4xl mb-2" />, title: "Live Alerts", desc: "Get notified of disasters in your area." },
            { icon: <FaHandsHelping className="text-purple-500 text-4xl mb-2" />, title: "Rescue Support", desc: "Find nearby rescue camps & aid." },
            { icon: <FaPhoneAlt className="text-green-500 text-4xl mb-2" />, title: "Emergency Contacts", desc: "Access verified helplines." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition hover:shadow-xl">
              <div className="flex justify-center">{icon}</div>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 dark:bg-gray-900 text-white text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} DisasterGuard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;




