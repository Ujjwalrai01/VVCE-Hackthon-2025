import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaHandsHelping, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DisasterGuard</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Empowering communities with real-time disaster updates, safety resources, and emergency support.
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <FaMapMarkedAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Live Disaster Map</h3>
          <p>Track real-time disaster data and affected areas with precision.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <FaHandsHelping className="text-green-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Rescue & Relief</h3>
          <p>Connect with shelters and support networks when you need them most.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <FaShieldAlt className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Preparedness Training</h3>
          <p>Learn how to act during earthquakes, floods, and other emergencies.</p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="bg-blue-100 py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto mb-6">
          DisasterGuard aims to build safer communities through education, rapid alerts, and collaborative rescue efforts.
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-blue-700 font-semibold">
          <div>
            <h3 className="text-4xl">100K+</h3>
            <p>Users Protected</p>
          </div>
          <div>
            <h3 className="text-4xl">250+</h3>
            <p>Disasters Tracked</p>
          </div>
          <div>
            <h3 className="text-4xl">24/7</h3>
            <p>Support & Response</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">Stay Informed. Stay Safe.</h2>
        <p className="mb-6">Join our community today and take charge of your safety.</p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} DisasterGuard. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-6 text-white">
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <a
            href="https://ndma.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            NDMA India
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
