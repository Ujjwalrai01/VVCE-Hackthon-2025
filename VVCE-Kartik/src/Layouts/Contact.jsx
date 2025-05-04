import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="bg-blue-700 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-blue-100 mb-10">
                Reach out to us for support, safety guidance, or to report disaster-related emergencies. We're here 24/7.
              </p>
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-xl" />
                  <span>Helpline: 112 / 108</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl" />
                  <span>support@disasterguard.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkedAlt className="text-xl" />
                  <span>SJCE Campus, Mysore, Karnataka - 570006</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-semibold mb-2 text-lg">Useful Links:</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="https://ndma.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline">NDMA (National Disaster Management)</a></li>
                <li><a href="https://nidm.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">NIDM (Disaster Training)</a></li>
                <li><a href="https://ncrb.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline">NCRB (Disaster Stats)</a></li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-600"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none resize-none text-gray-600"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition text-gray-600"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




