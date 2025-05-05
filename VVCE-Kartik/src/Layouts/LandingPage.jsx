import React, { useState, useEffect } from 'react';
import DisasterImage from '../assets/Images/Disaster.jpg';
import Image from '../assets/Images/image.png';
// import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Phone, Users, MapPin, Info, Menu, X, ChevronRight } from 'lucide-react';

// Animation for elements to fade in when they come into view
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAlert, setActiveAlert] = useState(0);
  const alerts = [
    { type: "Flood Warning", location: "Central Valley", time: "Current" },
    { type: "Hurricane Alert", location: "Coastal Areas", time: "24h forecast" },
    { type: "Wildfire Risk", location: "Eastern Forest", time: "High" }
  ];
  
  // Cycle through alerts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % alerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <Shield className="h-8 w-8 mr-2" />
        <span className="font-bold text-xl">ResQLink</span>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="hover:text-blue-200 transition-colors font-medium">Home</a>
        <a href="#services" className="hover:text-blue-200 transition-colors font-medium">Services</a>
        <a href="#alerts" className="hover:text-blue-200 transition-colors font-medium">Alerts</a>
        <a href="#about" className="hover:text-blue-200 transition-colors font-medium">About</a>
        <a href="#contact" className="hover:text-blue-200 transition-colors font-medium">Contact</a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-blue-700">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Home</a>
        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Services</a>
        <a href="#alerts" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Alerts</a>
        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">About</a>
        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">Contact</a>
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Disaster Management & Response System
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Protect communities with real-time alerts, coordination, and rapid response capabilities
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#services" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 inline-flex items-center"
                >
                  Emergency Services <ChevronRight size={20} className="ml-1" />
                </a>
                <a 
                  href="#alerts" 
                  className="bg-white text-blue-800 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 hover:bg-gray-100 inline-flex items-center"
                >
                  View Alerts <AlertTriangle size={20} className="ml-1" />
                </a>
              </div>
            </FadeInSection>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FadeInSection delay={300}>
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-full h-full bg-blue-500 rounded-lg"></div>
                <img 
                  src={DisasterImage} 
                  alt="Disaster Response Team" 
                  className="rounded-lg shadow-2xl relative z-10 w-full"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      
      {/* Alert Banner */}
      <div id="alerts" className="bg-red-600 text-white py-3 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
          <div className="overflow-hidden h-6">
            {alerts.map((alert, index) => (
              <div 
                key={index}
                className="transition-all duration-500 ease-in-out"
                style={{ 
                  transform: `translateY(${(index - activeAlert) * 100}%)`,
                  opacity: index === activeAlert ? 1 : 0,
                  position: 'absolute'
                }}
              >
                <span className="font-bold">{alert.type}:</span> {alert.location} - {alert.time}
              </div>
            ))}
          </div>
          <a href="#" className="ml-auto text-sm underline hover:text-red-100">View All Alerts</a>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Emergency Services</h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-red-500">
                <div className="rounded-full bg-red-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Early Warning System</h3>
                <p className="text-gray-600">Receive timely alerts about potential disasters and emergency situations in your area.</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <div className="rounded-full bg-blue-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Evacuation Planning</h3>
                <p className="text-gray-600">Access detailed evacuation plans, routes, and safety zones for your community.</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
                <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Community Coordination</h3>
                <p className="text-gray-600">Organize and coordinate community response efforts during emergency situations.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <FadeInSection delay={100} className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-500 rounded-lg"></div>
                <img 
                  src={Image}  
                  alt="Emergency Response Team" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </FadeInSection>
            
            <div className="md:w-1/2 md:pl-12">
              <FadeInSection delay={200}>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our System</h2>
                <p className="text-gray-600 mb-4">
                  Our Disaster Management System integrates cutting-edge technology with comprehensive planning to protect communities before, during, and after disasters.
                </p>
                <p className="text-gray-600 mb-6">
                  We work closely with government agencies, first responders, and community leaders to ensure coordinated response efforts that save lives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">24/7 Emergency Operations Center</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Real-time Data Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Advanced Early Warning Systems</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeInSection delay={100}>
              <div className="bg-blue-700 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Communities Protected</div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <div className="bg-blue-700 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Monitoring</div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <div className="bg-blue-700 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-blue-200">Alerts Sent</div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <div className="bg-blue-700 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Response Rate</div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeInSection>
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Get in Touch</h2>
    </FadeInSection>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <FadeInSection delay={100}>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-blue-800">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <p className="font-bold text-gray-800">Emergency Hotline</p>
                <p className="text-gray-600">1-800-DISASTER</p>
              </div>
            </div>
            <div className="flex items-center">
              <Info className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <p className="font-bold text-gray-800">Information Center</p>
                <p className="text-gray-600">1-888-INFO-HELP</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <p className="font-bold text-gray-800">Our Location</p>
                <p className="text-gray-600">123 Disaster Lane, Safety City, USA</p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
              <p className="text-sm text-yellow-700">
                For immediate life-threatening emergencies, please call <strong>911</strong>.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Contact Form */}
      <FadeInSection delay={200}>
        <form className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-blue-800">Send Us a Message</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-gray-600"
          >
            Send Message
          </button>
        </form>
      </FadeInSection>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 mr-2 text-blue-400" />
                <span className="font-bold text-xl">DisasterShield</span>
              </div>
              <p className="text-gray-400 mb-4">
                Protecting communities through technology, preparation, and coordination.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#alerts" className="text-gray-400 hover:text-white transition-colors">Alerts</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disaster Preparedness</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Plans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training Materials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">Stay updated with the latest alerts and news.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 DisasterShield. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;











