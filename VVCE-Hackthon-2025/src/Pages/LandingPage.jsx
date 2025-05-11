// import { useState } from 'react';
// import { MessageCircle, Shield, User, BarChart3, ChevronRight, Globe, Check, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// export default function LandingPage() {
//   const [isChatOpen, setIsChatOpen] = useState(false); 
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };
//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//     setIsLanguageDropdownOpen(false);
//   };


//   // Smooth scroll to section
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-700 text-gray-800">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-between py-3 px-4 lg:px-8 shadow-lg">
//         <div className="flex items-center space-x-2">
//           <div className="text-white text-2xl font-bold flex items-center">
//             <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//               <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//             </svg>
//             <span>IDVerifyAI</span>
//           </div>
//         </div>
        
//         <div className="hidden md:flex items-center space-x-8">
//           <a onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</a>
//           <a onClick={() => scrollToSection('features')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">Features</a>
//           <a onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">How It Works</a>
//           <a onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">Contact</a>
//         </div>
        
//        <div className="flex items-center space-x-4">
//           {/* Language Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
//               className="flex items-center bg-blue-900 bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition"
//             >
//               <Globe size={16} className="mr-1" />
//               {selectedLanguage}
//             </button>
//             {isLanguageDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
//                 <button
//                   onClick={() => handleLanguageChange('English')}
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   English
//                 </button>
//                 <button
//                   onClick={() => handleLanguageChange('Hindi')}
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   हिंदी (Hindi)
//                 </button>
//                 <button
//                   onClick={() => handleLanguageChange('Kannada')}
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   ಕನ್ನಡ (Kannada)
//                 </button>
//               </div>
//             )}
//           </div>
          
//           {/* Chat bot icon */}
//           <button 
//             onClick={toggleChat}
//             className="text-white hover:text-blue-400 transition relative"
//             aria-label="Chat with assistant"
//           >
//             <MessageCircle size={24} />
//             {isChatOpen && (
//               <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
//             )}
//           </button>
          
//           <a href="./Login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
//             Login
//           </a>
//           <a href="SignupPage" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
//             Sign Up
//           </a>
//         </div>
//       </nav>

//       {/* Main hero section */}
//       <div id="home" className="container mx-auto pt-28 pb-20 px-4">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 p-8 md:p-12">
//               <div className="flex items-center mb-8">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//                   <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                   </svg>
//                 </div>
//               </div>
              
//               <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-600 mb-6">
//                 Secure Identity Verification in Seconds
//               </h1>
              
//               <p className="text-lg text-gray-600 mb-8">
//                 Protect your business with our state-of-the-art AI verification system that detects fraud and tampering instantly.
//               </p>
              
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
//                 <a href="#" className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg group">
//                   <span className="font-medium">Get Started Free</span>
//                   <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
//                 </a>
//                 <a href="#" className="flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300">
//                   <span className="font-medium">See How It Works</span>
//                 </a>
//               </div>
              
//               <div className="flex flex-col space-y-3">
//                 <div className="flex items-center">
//                   <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                     <Check size={14} className="text-green-600" />
//                   </div>
//                   <p className="text-gray-700">99.9% accuracy in fraud detection</p>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                     <Check size={14} className="text-green-600" />
//                   </div>
//                   <p className="text-gray-700">Compliant with global ID regulations</p>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                     <Check size={14} className="text-green-600" />
//                   </div>
//                   <p className="text-gray-700">Secure & encrypted data handling</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-blue-100 p-8 flex items-center justify-center">
//               <div className="relative w-full max-w-md">
//                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full bg-opacity-20 filter blur-xl"></div>
//                 <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400 rounded-full bg-opacity-20 filter blur-xl"></div>
                
//                 <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
//                   <div className="flex justify-between items-center mb-6">
//                     <div className="flex space-x-1">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <div className="text-xs text-gray-500">ID Verification</div>
//                   </div>
                  
//                   <div className="bg-gray-100 p-4 rounded-lg mb-4">
//                     <svg className="mx-auto" width="180" height="100" viewBox="0 0 200 120">
//                       <rect x="20" y="20" width="160" height="100" rx="10" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2"/>
//                       <circle cx="100" cy="50" r="25" fill="#93c5fd"/>
//                       <path d="M100 85 C 80 85, 50 110, 50 110 L 150 110 C 150 110, 120 85, 100 85" fill="#60a5fa"/>
//                       <rect x="40" y="95" width="120" height="16" rx="2" fill="#2563eb"/>
//                       <rect x="40" y="115" width="40" height="4" rx="1" fill="#1d4ed8"/>
//                       <rect x="120" y="115" width="40" height="4" rx="1" fill="#1d4ed8"/>
//                     </svg>
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
//                         <Check size={16} className="text-green-600" />
//                       </div>
//                       <span className="ml-2 text-green-600 font-medium">Verified</span>
//                     </div>
//                     <span className="text-gray-500 text-sm">0.5s</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Features section */}
//       <div id="features" className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced AI-Powered Features</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our cutting-edge technology provides the most reliable identity verification system on the market
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
//                 <Shield size={32} className="text-blue-600" />
//               </div>
//               <h3 className="font-bold text-xl mb-3">Tamper Detection</h3>
//               <p className="text-gray-600">
//                 Advanced AI algorithms detect even the slightest modifications to ID documents with 99.9% accuracy.
//               </p>
//             </div>
            
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
//                 <User size={32} className="text-green-600" />
//               </div>
//               <h3 className="font-bold text-xl mb-3">Biometric Matching</h3>
//               <p className="text-gray-600">
//                 Compare facial features with ID photos in milliseconds to ensure legitimate identity verification.
//               </p>
//             </div>
            
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
//                 <BarChart3 size={32} className="text-purple-600" />
//               </div>
//               <h3 className="font-bold text-xl mb-3">Fraud Analytics</h3>
//               <p className="text-gray-600">
//                 Comprehensive reports and insights to identify patterns and prevent future fraud attempts.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* How it works section */}
//       <div id="how-it-works" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Simple, secure verification in just three easy steps
//             </p>
//           </div>
          
//           <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
//             <div className="md:w-1/3 text-center px-4 mb-8 md:mb-0">
//               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-xl font-bold">1</span>
//               </div>
//               <h3 className="font-bold text-xl mb-3">Upload Document</h3>
//               <p className="text-gray-600">
//                 Securely upload an ID document through our encrypted platform.
//               </p>
//             </div>
            
//             <div className="md:w-1/3 text-center px-4 mb-8 md:mb-0">
//               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-xl font-bold">2</span>
//               </div>
//               <h3 className="font-bold text-xl mb-3">AI Analysis</h3>
//               <p className="text-gray-600">
//                 Our AI analyzes and verifies all document security features.
//               </p>
//             </div>
            
//             <div className="md:w-1/3 text-center px-4">
//               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-xl font-bold">3</span>
//               </div>
//               <h3 className="font-bold text-xl mb-3">Get Results</h3>
//               <p className="text-gray-600">
//                 Receive instant verification results with detailed analysis.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Testimonials/Stats */}
//       <div className="bg-indigo-900 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="p-6">
//               <h3 className="text-4xl font-bold mb-2">99.8%</h3>
//               <p className="text-indigo-200">Accuracy Rate</p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-4xl font-bold mb-2">0.5s</h3>
//               <p className="text-indigo-200">Average Verification Time</p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-4xl font-bold mb-2">5M+</h3>
//               <p className="text-indigo-200">Verifications Completed</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Contact section */}
//       <div id="contact" className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Have questions about our service? Our team is here to help you.
//             </p>
//           </div>
          
//           <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
//             <div className="md:w-1/3">
//               <div className="bg-white p-6 rounded-xl shadow-md h-full">
//                 <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
//                       <Mail size={20} className="text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium">Email Us</p>
//                       <a href="mailto:info@idverifyai.com" className="text-blue-600 hover:underline">info@idverifyai.com</a>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
//                       <Phone size={20} className="text-green-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium">Call Us</p>
//                       <a href="tel:+18002345678" className="text-green-600 hover:underline">+1 (800) 234-5678</a>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
//                       <MapPin size={20} className="text-purple-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium">Location</p>
//                       <p className="text-gray-600">123 Verification Street, Tech City, TC 98765</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-2/3">
//               <div className="bg-white p-8 rounded-xl shadow-md">
//                 <h3 className="font-bold text-xl mb-6">Send a Message</h3>
                
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                       <input
//                         type="text"
//                         id="name"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                       <input
//                         type="email"
//                         id="email"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
//                     <input
//                       type="text"
//                       id="subject"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="How can we help you?"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                     <textarea
//                       id="message"
//                       rows="4"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Type your message here..."
//                     ></textarea>
//                   </div>
                  
//                   <button
//                     type="submit"
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-8 md:mb-0">
//               <div className="flex items-center space-x-2 mb-6">
//                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                 </svg>
//                 <span className="text-2xl font-bold">IDVerifyAI</span>
//               </div>
//               <p className="text-gray-400 max-w-xs">
//                 Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
//               </p>
              
//               <div className="flex space-x-4 mt-6">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   <Facebook size={20} />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   <Twitter size={20} />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   <Instagram size={20} />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   <Linkedin size={20} />
//                 </a>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="text-lg font-bold mb-4">Company</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-bold mb-4">Resources</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Integrations</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-bold mb-4">Legal</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GDPR</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Security</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400">© 2025 IDVerifyAI. All rights reserved.</p>
//             <div className="mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mr-4">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </footer>
      
//       {/* Chatbot widget */}
//       {isChatOpen && (
//         <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
//             <div className="flex items-center">
//               <MessageCircle size={20} className="mr-2" />
//               <span className="font-medium">ID Verify Assistant</span>
//             </div>
//             <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             </button>
//           </div>
          
//           <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
//             <div className="bg-indigo-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs ml-auto mb-4">
//               Hello! How can I help you with ID verification today?
//             </div>
//           </div>
          
//           <div className="p-3 border-t">
//             <div className="flex items-center">
//               <input 
//                 type="text"
//                 className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 placeholder="Type your message..."
//               />
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="22" y1="2" x2="11" y2="13"></line>
//                   <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Small chat button (mobile) */}
//       <button 
//         onClick={toggleChat}
//         className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
//         aria-label="Open chat"
//       >
//         <MessageCircle size={24} />
//       </button>
//     </div>
//   );
// };
























// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { 
//   MessageCircle, Shield, User, BarChart3, ChevronRight, 
//   Globe, Check, ArrowRight, Mail, Phone, MapPin, 
//   Facebook, Twitter, Instagram, Linkedin 
// } from 'lucide-react';

// export default function LandingPage() {
//   const [isChatOpen, setIsChatOpen] = useState(false); 
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };
  
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { duration: 0.6 }
//     }
//   };
  
//   const scaleUp = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { 
//       scale: 1, 
//       opacity: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };
  
//   // For parallax effect
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
//   // Check if page is scrolled for navbar effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };
  
//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//     setIsLanguageDropdownOpen(false);
//   };

//   // Smooth scroll to section
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-900 text-gray-800">
//       {/* Navbar */}
//       <motion.nav 
//         className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm flex items-center justify-between py-3 px-4 lg:px-8 shadow-lg ${
//           scrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         <motion.div 
//           className="flex items-center space-x-2"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           <div className="text-white text-2xl font-bold flex items-center">
//             <motion.svg 
//               className="w-8 h-8 mr-2" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2"
//               initial={{ rotate: -10 }}
//               animate={{ rotate: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//               <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//             </motion.svg>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               IDVerifyAI
//             </motion.span>
//           </div>
//         </motion.div>
        
//         <div className="hidden md:flex items-center space-x-8">
//           {['home', 'features', 'how-it-works', 'contact'].map((section, index) => (
//             <motion.a
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="text-white hover:text-teal-400 cursor-pointer transition-colors duration-300"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ scale: 1.1 }}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}
//             </motion.a>
//           ))}
//         </div>
        
//         <div className="flex items-center space-x-4">
//           {/* Language Dropdown */}
//           <motion.div 
//             className="relative" 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <motion.button
//               onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
//               className="flex items-center bg-teal-700 bg-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-50 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Globe size={16} className="mr-1" />
//               {selectedLanguage}
//             </motion.button>
//             <AnimatePresence>
//               {isLanguageDropdownOpen && (
//                 <motion.div 
//                   className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {['English', 'हिंदी (Hindi)', 'ಕನ್ನಡ (Kannada)'].map((language) => (
//                     <motion.button
//                       key={language}
//                       onClick={() => handleLanguageChange(language.split(' ')[0])}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                       whileHover={{ backgroundColor: "#f3f4f6", x: 5 }}
//                     >
//                       {language}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
          
//           {/* Chat bot icon */}
//           <motion.button 
//             onClick={toggleChat}
//             className="text-white hover:text-teal-400 transition relative"
//             aria-label="Chat with assistant"
//             whileHover={{ scale: 1.2, rotate: 15 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <MessageCircle size={24} />
//             {isChatOpen && (
//               <motion.span 
//                 className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring", stiffness: 500, damping: 10 }}
//               ></motion.span>
//             )}
//           </motion.button>
          
//           <motion.a 
//             href="./Login" 
//             className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Login
//           </motion.a>
          
//           <motion.a 
//             href="SignupPage" 
//             className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             Sign Up
//           </motion.a>
//         </div>
//       </motion.nav>

//       {/* Main hero section */}
//       <div id="home" className="container mx-auto pt-28 pb-20 px-4">
//         <motion.div 
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={scaleUp}
//           whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//           transition={{ 
//             type: "spring", 
//             stiffness: 100, 
//             damping: 20,
//             duration: 0.5
//           }}
//         >
//           <div className="flex flex-col md:flex-row">
//             <motion.div 
//               className="md:w-1/2 p-8 md:p-12"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <motion.div 
//                 className="flex items-center mb-8"
//                 variants={fadeInUp}
//               >
//                 <motion.div 
//                   className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
//                   whileHover={{ 
//                     rotate: 5, 
//                     scale: 1.1,
//                     backgroundImage: "linear-gradient(to bottom right, #f472b6, #8b5cf6)" 
//                   }}
//                 >
//                   <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                   </svg>
//                 </motion.div>
//               </motion.div>
              
//               <motion.h1 
//                 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-purple-600 mb-6"
//                 variants={fadeInUp}
//               >
//                 Secure Identity Verification in Seconds
//               </motion.h1>
              
//               <motion.p 
//                 className="text-lg text-gray-600 mb-8"
//                 variants={fadeInUp}
//               >
//                 Protect your business with our state-of-the-art AI verification system that detects fraud and tampering instantly.
//               </motion.p>
              
//               <motion.div 
//                 className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
//                 variants={fadeInUp}
//               >
//                 <motion.a 
//                   href="#" 
//                   className="flex items-center justify-center bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg group"
//                   whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.5)" }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="font-medium">Get Started Free</span>
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                   >
//                     <ArrowRight size={20} className="ml-2" />
//                   </motion.div>
//                 </motion.a>
                
//                 <motion.a 
//                   href="#" 
//                   className="flex items-center justify-center bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="font-medium">See How It Works</span>
//                 </motion.a>
//               </motion.div>
              
//               <motion.div 
//                 className="flex flex-col space-y-3"
//                 variants={staggerContainer}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {[
//                   "99.9% accuracy in fraud detection",
//                   "Compliant with global ID regulations",
//                   "Secure & encrypted data handling"
//                 ].map((text, index) => (
//                   <motion.div 
//                     key={index}
//                     className="flex items-center"
//                     variants={fadeInUp}
//                   >
//                     <motion.div 
//                       className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2 * index, type: "spring" }}
//                     >
//                       <Check size={14} className="text-green-600" />
//                     </motion.div>
//                     <p className="text-gray-700">{text}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
            
//             <motion.div 
//               className="md:w-1/2 bg-gradient-to-br from-violet-50 to-purple-100 p-8 flex items-center justify-center"
//               variants={fadeIn}
//             >
//               <div className="relative w-full max-w-md">
//                 <motion.div 
//                   className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400 rounded-full bg-opacity-20 filter blur-xl"
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     opacity: [0.5, 0.8, 0.5]
//                   }}
//                   transition={{ 
//                     duration: 8,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }}
//                 ></motion.div>
                
//                 <motion.div 
//                   className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-400 rounded-full bg-opacity-20 filter blur-xl"
//                   animate={{ 
//                     scale: [1, 1.3, 1],
//                     opacity: [0.5, 0.7, 0.5]
//                   }}
//                   transition={{ 
//                     duration: 10,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     delay: 1
//                   }}
//                 ></motion.div>
                
//                 <motion.div 
//                   className="relative z-10 bg-white p-6 rounded-xl shadow-xl"
//                   initial={{ rotate: 3 }}
//                   whileHover={{ 
//                     rotate: 0,
//                     scale: 1.05,
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                 >
//                   <div className="flex justify-between items-center mb-6">
//                     <div className="flex space-x-1">
//                       <motion.div 
//                         className="w-3 h-3 bg-red-500 rounded-full"
//                         whileHover={{ scale: 1.5 }}
//                       ></motion.div>
//                       <motion.div 
//                         className="w-3 h-3 bg-yellow-500 rounded-full"
//                         whileHover={{ scale: 1.5 }}
//                       ></motion.div>
//                       <motion.div 
//                         className="w-3 h-3 bg-green-500 rounded-full"
//                         whileHover={{ scale: 1.5 }}
//                       ></motion.div>
//                     </div>
//                     <div className="text-xs text-gray-500">ID Verification</div>
//                   </div>
                  
//                   <motion.div 
//                     className="bg-gray-100 p-4 rounded-lg mb-4"
//                     whileHover={{ y: -5 }}
//                   >
//                     <motion.svg 
//                       className="mx-auto" 
//                       width="180" 
//                       height="100" 
//                       viewBox="0 0 200 120"
//                       initial={{ opacity: 0.5 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 1 }}
//                     >
//                       <motion.rect 
//                         x="20" y="20" width="160" height="100" rx="10" 
//                         fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, delay: 0.5 }}
//                       />
//                       <motion.circle 
//                         cx="100" cy="50" r="25" fill="#93c5fd"
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", delay: 1 }}
//                       />
//                       <motion.path 
//                         d="M100 85 C 80 85, 50 110, 50 110 L 150 110 C 150 110, 120 85, 100 85" 
//                         fill="#60a5fa"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 1.5 }}
//                       />
//                       <motion.rect 
//                         x="40" y="95" width="120" height="16" rx="2" fill="#2563eb"
//                         initial={{ scaleX: 0 }}
//                         animate={{ scaleX: 1 }}
//                         transition={{ delay: 1.7 }}
//                       />
//                       <motion.rect 
//                         x="40" y="115" width="40" height="4" rx="1" fill="#1d4ed8"
//                         initial={{ width: 0 }}
//                         animate={{ width: 40 }}
//                         transition={{ delay: 2 }}
//                       />
//                       <motion.rect 
//                         x="120" y="115" width="40" height="4" rx="1" fill="#1d4ed8"
//                         initial={{ width: 0 }}
//                         animate={{ width: 40 }}
//                         transition={{ delay: 2 }}
//                       />
//                     </motion.svg>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="flex items-center justify-between"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2.5 }}
//                   >
//                     <div className="flex items-center">
//                       <motion.div 
//                         className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
//                         whileHover={{ scale: 1.1 }}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", delay: 2.5 }}
//                       >
//                         <Check size={16} className="text-green-600" />
//                       </motion.div>
//                       <span className="ml-2 text-green-600 font-medium">Verified</span>
//                     </div>
//                     <motion.span 
//                       className="text-gray-500 text-sm"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 2.7 }}
//                     >
//                       0.5s
//                     </motion.span>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
      
//       {/* Features section */}
//       <div id="features" className="bg-gradient-to-b from-gray-50 to-teal-50 py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-600"
//               variants={fadeInUp}
//             >
//               Advanced AI-Powered Features
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600 max-w-2xl mx-auto"
//               variants={fadeInUp}
//             >
//               Our cutting-edge technology provides the most reliable identity verification system on the market
//             </motion.p>
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {[
//               {
//                 icon: <Shield size={32} className="text-teal-600" />,
//                 title: "Tamper Detection",
//                 description: "Advanced AI algorithms detect even the slightest modifications to ID documents with 99.9% accuracy.",
//                 color: "bg-teal-100"
//               },
//               {
//                 icon: <User size={32} className="text-pink-600" />,
//                 title: "Biometric Matching",
//                 description: "Compare facial features with ID photos in milliseconds to ensure legitimate identity verification.",
//                 color: "bg-pink-100"
//               },
//               {
//                 icon: <BarChart3 size={32} className="text-purple-600" />,
//                 title: "Fraud Analytics",
//                 description: "Comprehensive reports and insights to identify patterns and prevent future fraud attempts.",
//                 color: "bg-purple-100"
//               }
//             ].map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 variants={scaleUp}
//                 whileHover={{ 
//                   y: -10, 
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                 }}
//               >
//                 <motion.div 
//                   className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <motion.h3 className="font-bold text-xl mb-3">{feature.title}</motion.h3>
//                 <motion.p className="text-gray-600">{feature.description}</motion.p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
      
//       {/* How it works section */}
//       <div id="how-it-works" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-600"
//               variants={fadeInUp}
//             >
//               How It Works
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600 max-w-2xl mx-auto"
//               variants={fadeInUp}
//             >
//               Simple, secure verification in just three easy steps
//             </motion.p>
//           </motion.div>
          
//           <motion.div 
//             className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {[
//               {
//                 step: 1,
//                 title: "Upload Document",
//                 description: "Securely upload an ID document through our encrypted platform."
//               },
//               {
//                 step: 2,
//                 title: "AI Analysis",
//                 description: "Our AI analyzes and verifies all document security features."
//               },
//               {
//                 step: 3,
//                 title: "Get Results",
//                 description: "Receive instant verification results with detailed analysis."
//               }
//             ].map((step, index) => (
//               <motion.div 
//                 key={index}
//                 className="md:w-1/3 text-center px-4 mb-8 md:mb-0"
//                 variants={fadeInUp}
//                 custom={index}
//               >
//                 <motion.div 
//                   className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6"
//                   whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)" }}
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1, rotate: [0, 10, 0] }}
//                   viewport={{ once: true }}
//                   transition={{ type: "spring", delay: index * 0.2 }}
//                 >
//                   <span className="text-xl font-bold">{step.step}</span>
//                 </motion.div>
//                 <motion.h3 
//                   className="font-bold text-xl mb-3"
//                   whileHover={{ color: "#7c3aed" }}
//                 >
//                   {step.title}
//                 </motion.h3>
//                 <motion.p className="text-gray-600">
//                   {step.description}
//                 </motion.p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Testimonials/Stats */}
//       <motion.div 
//         className="bg-gradient-to-r from-violet-900 via-purple-800 to-teal-900 text-white py-20"
//         initial={{ backgroundColor: "#312e81" }}
//         whileInView={{ 
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               { value: "99.8%", label: "Accuracy Rate" },
//               { value: "0.5s", label: "Average Verification Time" },
//               { value: "5M+", label: "Verifications Completed" }
//             ].map((stat, index) => (
//               <motion.div 
//                 key={index}
//                 className="p-6"
//                 variants={scaleUp}
//                 whileHover={{ y: -5 }}
//               >
//                 <motion.h3 
//                   className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-pink-300"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                 >
//                   {stat.value}
//                 </motion.h3>
//                 <motion.p 
//                   className="text-teal-200"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 + index * 0.2 }}
//                 >
//                    </motion.p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//       {/* Contact section */}
//       <div id="contact" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-600"
//               variants={fadeInUp}
//             >
//               Get In Touch
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600 max-w-2xl mx-auto"
//               variants={fadeInUp}
//             >
//               Have questions about our identity verification solution? Contact our support team.
//             </motion.p>
//           </motion.div>
          
//           <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
//             <motion.div 
//               className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <motion.div 
//                 className="bg-white p-8 rounded-xl shadow-lg"
//                 whileHover={{ 
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                 }}
//               >
//                 <h3 className="text-2xl font-bold mb-6 text-purple-700">Send Us a Message</h3>
                
//                 <form>
//                   <div className="mb-6">
//                     <label className="block text-gray-700 mb-2 font-medium">Name</label>
//                     <motion.input 
//                       type="text" 
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       placeholder="Your full name"
//                       whileFocus={{ scale: 1.01 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                     />
//                   </div>
                  
//                   <div className="mb-6">
//                     <label className="block text-gray-700 mb-2 font-medium">Email</label>
//                     <motion.input 
//                       type="email" 
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       placeholder="Your email address"
//                       whileFocus={{ scale: 1.01 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                     />
//                   </div>
                  
//                   <div className="mb-6">
//                     <label className="block text-gray-700 mb-2 font-medium">Message</label>
//                     <motion.textarea 
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       placeholder="Tell us how we can help you"
//                       whileFocus={{ scale: 1.01 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                     ></motion.textarea>
//                   </div>
                  
//                   <motion.button 
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-purple-600 to-violet-700 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-700 hover:to-violet-800 transition-colors duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Send Message
//                   </motion.button>
//                 </form>
//               </motion.div>
//             </motion.div>
            
//             <motion.div 
//               className="md:w-1/2 md:pl-8"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <motion.div 
//                 className="bg-white p-8 rounded-xl shadow-lg mb-8"
//                 whileHover={{ 
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                 }}
//               >
//                 <h3 className="text-2xl font-bold mb-6 text-purple-700">Contact Information</h3>
                
//                 <div className="space-y-6">
//                   <motion.div 
//                     className="flex items-start"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="bg-purple-100 p-3 rounded-lg mr-4">
//                       <Mail size={20} className="text-purple-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900">Email</h4>
//                       <p className="text-gray-600">support@idverifyai.com</p>
//                     </div>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="flex items-start"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="bg-teal-100 p-3 rounded-lg mr-4">
//                       <Phone size={20} className="text-teal-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900">Phone</h4>
//                       <p className="text-gray-600">+1 (800) 123-4567</p>
//                     </div>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="flex items-start"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="bg-pink-100 p-3 rounded-lg mr-4">
//                       <MapPin size={20} className="text-pink-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-900">Office</h4>
//                       <p className="text-gray-600">
//                         123 Verification Avenue<br />
//                         Tech District, San Francisco<br />
//                         CA 94107, USA
//                       </p>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 className="bg-gradient-to-r from-violet-600 to-purple-700 p-8 rounded-xl text-white"
//                 whileHover={{ 
//                   scale: 1.02,
//                   boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3), 0 10px 10px -5px rgba(124, 58, 237, 0.2)"
//                 }}
//               >
//                 <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
//                 <p className="mb-6">Follow us on social media for updates and tech insights</p>
                
//                 <div className="flex space-x-4">
//                   {[
//                     { icon: <Facebook size={24} />, bg: "bg-blue-700" },
//                     { icon: <Twitter size={24} />, bg: "bg-sky-500" },
//                     { icon: <Instagram size={24} />, bg: "bg-pink-600" },
//                     { icon: <Linkedin size={24} />, bg: "bg-blue-800" }
//                   ].map((social, index) => (
//                     <motion.a 
//                       key={index}
//                       href="#" 
//                       className={`${social.bg} w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90`}
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       {social.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
      
//       {/* Chat widget */}
//       <AnimatePresence>
//         {isChatOpen && (
//           <motion.div 
//             className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-40"
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 400, damping: 30 }}
//           >
//             <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-4 flex justify-between items-center">
//               <div className="flex items-center">
//                 <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
//                   <MessageCircle size={16} className="text-purple-600" />
//                 </div>
//                 <span className="text-white font-medium">IDVerify Support</span>
//               </div>
//               <button 
//                 onClick={toggleChat}
//                 className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
//               >
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="h-60 overflow-y-auto p-4 bg-gray-50">
//               <div className="flex mb-4">
//                 <div className="bg-purple-100 p-2 rounded-lg rounded-tl-none max-w-3/4">
//                   <p className="text-sm text-gray-700">Hello! How can I help you with ID verification today?</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-4 border-t">
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="Type your message..." 
//                   className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-700">
//                   <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//       {/* Chat button */}
//       <motion.button 
//         onClick={toggleChat}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-violet-600 to-purple-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-30"
//         whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//       >
//         <MessageCircle size={24} />
//       </motion.button>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-8 md:mb-0">
//               <div className="text-white text-2xl font-bold flex items-center mb-4">
//                 <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                 </svg>
//                 IDVerifyAI
//               </div>
//               <p className="text-gray-400 max-w-xs mb-6">
//                 Cutting-edge identity verification technology to protect your business and customers from fraud.
//               </p>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: <Facebook size={20} /> },
//                   { icon: <Twitter size={20} /> },
//                   { icon: <Instagram size={20} /> },
//                   { icon: <Linkedin size={20} /> }
//                 ].map((social, index) => (
//                   <motion.a 
//                     key={index}
//                     href="#" 
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                     whileHover={{ scale: 1.2, rotate: 10 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="text-white font-bold mb-4">Product</h3>
//                 <ul className="space-y-2">
//                   {["Features", "Pricing", "Integration", "Documentation", "API"].map((item, index) => (
//                     <motion.li key={index}>
//                       <motion.a 
//                         href="#" 
//                         className="text-gray-400 hover:text-white transition-colors duration-300"
//                         whileHover={{ x: 5 }}
//                       >
//                         {item}
//                       </motion.a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-white font-bold mb-4">Company</h3>
//                 <ul className="space-y-2">
//                   {["About Us", "Customers", "Careers", "Blog", "Contact"].map((item, index) => (
//                     <motion.li key={index}>
//                       <motion.a 
//                         href="#" 
//                         className="text-gray-400 hover:text-white transition-colors duration-300"
//                         whileHover={{ x: 5 }}
//                       >
//                         {item}
//                       </motion.a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div>
//                 <h3 className="text-white font-bold mb-4">Resources</h3>
//                 <ul className="space-y-2">
//                   {["Help Center", "Privacy", "Terms", "FAQ", "Support"].map((item, index) => (
//                     <motion.li key={index}>
//                       <motion.a 
//                         href="#" 
//                         className="text-gray-400 hover:text-white transition-colors duration-300"
//                         whileHover={{ x: 5 }}
//                       >
//                         {item}
//                       </motion.a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p>© 2025 IDVerifyAI. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <motion.a 
//                 href="#" 
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 whileHover={{ y: -2 }}
//               >
//                 Privacy Policy
//               </motion.a>
//               <motion.a 
//                 href="#" 
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 whileHover={{ y: -2 }}
//               >
//                 Terms of Service
//               </motion.a>
//               <motion.a 
//                 href="#" 
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 whileHover={{ y: -2 }}
//               >
//                 Cookies
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </footer>
      
//     </div>
//   );
// }




























// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { 
//   MessageCircle, Shield, User, BarChart3, ChevronRight, 
//   Globe, Check, ArrowRight, Mail, Phone, MapPin, 
//   Facebook, Twitter, Instagram, Linkedin, Wifi, Clock, CloudOff, Settings
// } from 'lucide-react';

// export default function RuralIDVerifyLandingPage() {
//   const [isChatOpen, setIsChatOpen] = useState(false); 
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
  
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };
  
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { duration: 0.6 }
//     }
//   };
  
//   const scaleUp = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { 
//       scale: 1, 
//       opacity: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };
  
//   // For parallax effect
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
//   // Simulating page load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 800);
    
//     return () => clearTimeout(timer);
//   }, []);
  
//   // Check if page is scrolled for navbar effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };
  
//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//     setIsLanguageDropdownOpen(false);
//   };

//   // Smooth scroll to section
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 flex items-center justify-center">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <motion.div 
//             className="w-16 h-16 mx-auto mb-4 border-4 border-t-teal-500 border-r-transparent border-b-transparent border-l-transparent rounded-full"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           />
//           <h2 className="text-white text-xl font-medium">Loading RuralID Verify...</h2>
//         </motion.div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-gray-800">
//       {/* Navbar */}
//       <motion.nav 
//         className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm flex items-center justify-between py-3 px-4 lg:px-8 shadow-lg ${
//           scrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'
//         } transition-all duration-300`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         <motion.div 
//           className="flex items-center space-x-2"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           <div className="text-white text-xl md:text-2xl font-bold flex items-center">
//             <motion.svg 
//               className="w-6 h-6 md:w-8 md:h-8 mr-2" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2"
//               initial={{ rotate: -10 }}
//               animate={{ rotate: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//               <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//             </motion.svg>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               RuralID Verify
//             </motion.span>
//           </div>
//         </motion.div>
        
//         <div className="hidden md:flex items-center space-x-8">
//           {['home', 'features', 'how-it-works', 'rural-focus', 'contact'].map((section, index) => (
//             <motion.a
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="text-white hover:text-teal-400 cursor-pointer transition-colors duration-300 text-sm lg:text-base"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ scale: 1.1 }}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}
//             </motion.a>
//           ))}
//         </div>
        
//         <div className="flex items-center space-x-2 md:space-x-4">
//           {/* Language Dropdown - More important for rural context */}
//           <motion.div 
//             className="relative" 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <motion.button
//               onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
//               className="flex items-center bg-teal-700 bg-opacity-30 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-opacity-50 transition text-xs md:text-sm"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Globe size={16} className="mr-1" />
//               {selectedLanguage}
//             </motion.button>
//             <AnimatePresence>
//               {isLanguageDropdownOpen && (
//                 <motion.div 
//                   className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {['English', 'हिंदी (Hindi)', 'ಕನ್ನಡ (Kannada)', 'తెలుగు (Telugu)', 'मराठी (Marathi)', 'ਪੰਜਾਬੀ (Punjabi)', 'বাংলা (Bengali)'].map((language) => (
//                     <motion.button
//                       key={language}
//                       onClick={() => handleLanguageChange(language.split(' ')[0])}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
//                       whileHover={{ backgroundColor: "#f3f4f6", x: 5 }}
//                     >
//                       {language}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
          
//           {/* Chat bot icon */}
//           <motion.button 
//             onClick={toggleChat}
//             className="text-white hover:text-teal-400 transition relative"
//             aria-label="Chat with assistant"
//             whileHover={{ scale: 1.2, rotate: 15 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <MessageCircle size={20} className="md:hidden" />
//             <MessageCircle size={24} className="hidden md:block" />
//             {isChatOpen && (
//               <motion.span 
//                 className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring", stiffness: 500, damping: 10 }}
//               ></motion.span>
//             )}
//           </motion.button>
          
//           <motion.a 
//             href="#" 
//             className="bg-teal-600 hover:bg-teal-700 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 text-xs md:text-sm"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Login
//           </motion.a>
          
//           <motion.a 
//             href="#" 
//             className="bg-pink-500 hover:bg-pink-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 text-xs md:text-sm"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             Sign Up
//           </motion.a>
//         </div>
//       </motion.nav>

//       {/* Main hero section */}
//       <div id="home" className="container mx-auto pt-20 md:pt-28 pb-12 md:pb-20 px-4">
//         <motion.div 
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={scaleUp}
//           whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//           transition={{ 
//             type: "spring", 
//             stiffness: 100, 
//             damping: 20,
//             duration: 0.5
//           }}
//         >
//           <div className="flex flex-col md:flex-row">
//             <motion.div 
//               className="md:w-1/2 p-6 md:p-12"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <motion.div 
//                 className="flex items-center mb-6 md:mb-8"
//                 variants={fadeInUp}
//               >
//                 <motion.div 
//                   className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
//                   whileHover={{ 
//                     rotate: 5, 
//                     scale: 1.1,
//                     backgroundImage: "linear-gradient(to bottom right, #f472b6, #8b5cf6)" 
//                   }}
//                 >
//                   <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                   </svg>
//                 </motion.div>
//               </motion.div>
              
//               <motion.h1 
//                 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-purple-600 mb-4 md:mb-6"
//                 variants={fadeInUp}
//               >
//                 Rural Identity Verification Made Simple
//               </motion.h1>
              
//               <motion.p 
//                 className="text-base md:text-lg text-gray-600 mb-6 md:mb-8"
//                 variants={fadeInUp}
//               >
//                 Secure, offline-capable verification for rural communities with limited connectivity and infrastructure. Works anywhere, anytime.
//               </motion.p>
              
//               <motion.div 
//                 className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12"
//                 variants={fadeInUp}
//               >
//                 <motion.a 
//                   href="#" 
//                   className="flex items-center justify-center bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 shadow-lg group text-sm md:text-base"
//                   whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.5)" }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="font-medium">Start Free Trial</span>
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                   >
//                     <ArrowRight size={18} className="ml-2" />
//                   </motion.div>
//                 </motion.a>
                
//                 <motion.a 
//                   href="#" 
//                   className="flex items-center justify-center bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="font-medium">Rural Demo</span>
//                 </motion.a>
//               </motion.div>
              
//               <motion.div 
//                 className="flex flex-col space-y-3"
//                 variants={staggerContainer}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {[
//                   "Works offline in low connectivity areas",
//                   "Supports local languages and dialects",
//                   "Inclusive design for all literacy levels"
//                 ].map((text, index) => (
//                   <motion.div 
//                     key={index}
//                     className="flex items-center"
//                     variants={fadeInUp}
//                   >
//                     <motion.div 
//                       className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2 * index, type: "spring" }}
//                     >
//                       <Check size={12} className="text-green-600" />
//                     </motion.div>
//                     <p className="text-sm md:text-base text-gray-700">{text}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
            
//             <motion.div 
//               className="md:w-1/2 bg-gradient-to-br from-violet-50 to-purple-100 p-6 md:p-8 flex items-center justify-center"
//               variants={fadeIn}
//             >
//               <div className="relative w-full max-w-md">
//                 <motion.div 
//                   className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400 rounded-full bg-opacity-20 filter blur-xl hidden md:block"
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     opacity: [0.5, 0.8, 0.5]
//                   }}
//                   transition={{ 
//                     duration: 8,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }}
//                 ></motion.div>
                
//                 <motion.div 
//                   className="absolute -bottom-10 -right-10 w-40 h-40 md:w-60 md:h-60 bg-purple-400 rounded-full bg-opacity-20 filter blur-xl"
//                   animate={{ 
//                     scale: [1, 1.3, 1],
//                     opacity: [0.5, 0.7, 0.5]
//                   }}
//                   transition={{ 
//                     duration: 10,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     delay: 1
//                   }}
//                 ></motion.div>
                
//                 <motion.div 
//                   className="relative z-10 bg-white p-4 md:p-6 rounded-xl shadow-xl"
//                   initial={{ rotate: 3 }}
//                   whileHover={{ 
//                     rotate: 0,
//                     scale: 1.05,
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                 >
//                   <div className="flex justify-between items-center mb-4 md:mb-6">
//                     <div className="flex space-x-1">
//                       <motion.div 
//                         className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"
//                         whileHover={{ scale: 1.5 }}
//                       ></motion.div>
//                       <motion.div 
//                         className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"
//                         whileHover={{ scale: 1.5 }}
//                       ></motion.div>
//                       <motion.div 
//                         className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"
//                         whileHover={{ scale: 1.5 }}
//                       ></motion.div>
//                     </div>
//                     <div className="text-xs text-gray-500">Rural ID Verification</div>
//                   </div>
                  
//                   <motion.div 
//                     className="bg-gray-100 p-3 md:p-4 rounded-lg mb-3 md:mb-4"
//                     whileHover={{ y: -5 }}
//                   >
//                     <motion.div className="flex items-center justify-center mb-2">
//                       <motion.div 
//                         className="w-full max-w-xs relative"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                       >
//                         {/* Stylized ID Card with Rural Focus */}
//                         <motion.svg
//                           width="100%"
//                           height="120"
//                           viewBox="0 0 300 180"
//                           initial={{ opacity: 0.5 }}
//                           animate={{ opacity: 1 }}
//                         >
//                           {/* ID Card Background */}
//                           <motion.rect 
//                             x="10" y="10" width="280" height="160" rx="10" 
//                             fill="#f3f4ff" stroke="#3b82f6" strokeWidth="2"
//                             initial={{ pathLength: 0 }}
//                             animate={{ pathLength: 1 }}
//                             transition={{ duration: 1.5, delay: 0.5 }}
//                           />
                          
//                           {/* Photo area */}
//                           <motion.rect 
//                             x="30" y="40" width="80" height="100" 
//                             fill="#e0e7ff" stroke="#6366f1" strokeWidth="1"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.8 }}
//                           />
                          
//                           {/* Person silhouette */}
//                           <motion.circle 
//                             cx="70" cy="70" r="20" fill="#a5b4fc"
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ type: "spring", delay: 1 }}
//                           />
//                           <motion.path 
//                             d="M70 95 C 55 95, 40 125, 40 125 L 100 125 C 100 125, 85 95, 70 95" 
//                             fill="#818cf8"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 1.2 }}
//                           />
                          
//                           {/* Farm/Village illustration */}
//                           <motion.path
//                             d="M230 85 L250 65 L270 85 L270 130 L230 130 Z" 
//                             fill="#bfdbfe" 
//                             stroke="#3b82f6" 
//                             strokeWidth="1"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 1.4 }}
//                           />
//                           <motion.path
//                             d="M240 130 L240 110 L250 110 L250 130 Z" 
//                             fill="#93c5fd"
//                             initial={{ scaleY: 0 }}
//                             animate={{ scaleY: 1 }}
//                             transition={{ delay: 1.6 }}
//                             style={{ transformOrigin: '245px 130px' }}
//                           />
//                           <motion.path
//                             d="M200 100 L215 85 L230 100 L230 130 L200 130 Z" 
//                             fill="#dbeafe" 
//                             stroke="#60a5fa" 
//                             strokeWidth="1"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 1.5 }}
//                           />
                          
//                           {/* ID Details Lines */}
//                           <motion.rect x="130" y="50" width="60" height="4" rx="2" fill="#6366f1" 
//                             initial={{ width: 0 }}
//                             animate={{ width: 60 }}
//                             transition={{ delay: 1.7 }}
//                           />
//                           <motion.rect x="130" y="65" width="90" height="4" rx="2" fill="#818cf8" 
//                             initial={{ width: 0 }}
//                             animate={{ width: 90 }}
//                             transition={{ delay: 1.8 }}
//                           />
//                           <motion.rect x="130" y="80" width="70" height="4" rx="2" fill="#818cf8" 
//                             initial={{ width: 0 }}
//                             animate={{ width: 70 }}
//                             transition={{ delay: 1.9 }}
//                           />
//                           <motion.rect x="130" y="95" width="85" height="4" rx="2" fill="#818cf8" 
//                             initial={{ width: 0 }}
//                             animate={{ width: 85 }}
//                             transition={{ delay: 2.0 }}
//                           />
//                           <motion.rect x="130" y="110" width="40" height="4" rx="2" fill="#818cf8" 
//                             initial={{ width: 0 }}
//                             animate={{ width: 40 }}
//                             transition={{ delay: 2.1 }}
//                           />
                          
//                           {/* Government Stamp - Circle */}
//                           <motion.circle 
//                             cx="200" cy="145" r="15" 
//                             fill="none" 
//                             stroke="#4f46e5" 
//                             strokeWidth="1" 
//                             strokeDasharray="2 2"
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1, rotate: 360 }}
//                             transition={{ delay: 2.2, duration: 1 }}
//                           />
                          
//                           {/* Connectivity indicator */}
//                           <motion.g transform="translate(250, 30) scale(0.7)">
//                             <motion.path 
//                               d="M0,15 C0,15 5,5 15,5 C25,5 30,15 30,15" 
//                               stroke="#10b981" 
//                               strokeWidth="3" 
//                               fill="none"
//                               initial={{ pathLength: 0, opacity: 0 }}
//                               animate={{ pathLength: 1, opacity: 1 }}
//                               transition={{ delay: 2.3, duration: 0.7 }}
//                             />
//                             <motion.path 
//                               d="M5,20 C5,20 10,12 15,12 C20,12 25,20 25,20" 
//                               stroke="#10b981" 
//                               strokeWidth="3" 
//                               fill="none"
//                               initial={{ pathLength: 0, opacity: 0 }}
//                               animate={{ pathLength: 1, opacity: 1 }}
//                               transition={{ delay: 2.4, duration: 0.5 }}
//                             />
//                             <motion.path 
//                               d="M10,25 C10,25 12,20 15,20 C18,20 20,25 20,25" 
//                               stroke="#10b981" 
//                               strokeWidth="3" 
//                               fill="none"
//                               initial={{ pathLength: 0, opacity: 0 }}
//                               animate={{ pathLength: 1, opacity: 1 }}
//                               transition={{ delay: 2.5, duration: 0.3 }}
//                             />
//                           </motion.g>
//                         </motion.svg>
//                       </motion.div>
//                     </motion.div>
                    
//                     <motion.div 
//                       className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-1"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 2.2 }}
//                     >
//                       <motion.div 
//                         className="bg-green-500 h-full"
//                         initial={{ width: "0%" }}
//                         animate={{ width: "100%" }}
//                         transition={{ delay: 2.3, duration: 1 }}
//                       ></motion.div>
//                     </motion.div>
//                     <motion.p 
//                       className="text-xs text-center text-gray-500"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 2.6 }}
//                     >
//                       Processing in offline mode...
//                     </motion.p>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="flex items-center justify-between"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2.8 }}
//                   >
//                     <div className="flex items-center">
//                       <motion.div 
//                         className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center"
//                         whileHover={{ scale: 1.1 }}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", delay: 2.9 }}
//                       >
//                         <Check size={14} className="text-green-600" />
//                       </motion.div>
//                       <span className="ml-2 text-green-600 font-medium text-sm md:text-base">Verified</span>
//                     </div>
//                     <motion.div 
//                       className="flex items-center"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}






















import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  MessageCircle, Shield, User, BarChart3, ChevronRight, 
  Globe, Check, ArrowRight, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, Wifi, 
  Network, Signal, CloudOff, Map, Smartphone
} from 'lucide-react';

export default function RuralIDVerifyLanding() {
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const buttonHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    tap: { scale: 0.95 }
  };
  
  // For parallax effect
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  // Check if page is scrolled for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleOfflineMode = () => {
    setOfflineMode(!offlineMode);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-900 text-gray-800">
      {/* Floating offline mode toggle */}
      <motion.div 
        className="fixed top-24 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={toggleOfflineMode}
          className={`flex items-center px-4 py-2 rounded-full shadow-lg transition-colors ${
            offlineMode ? 'bg-amber-500 text-white' : 'bg-teal-500 text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {offlineMode ? (
            <>
              <CloudOff size={16} className="mr-2" />
              <span className="font-medium">Offline Mode</span>
            </>
          ) : (
            <>
              <Wifi size={16} className="mr-2" />
              <span className="font-medium">Online Mode</span>
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm flex items-center justify-between py-4 px-4 lg:px-8 ${
          scrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
        } transition-all duration-500`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
      >
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="text-white text-2xl font-bold flex items-center">
            <motion.svg 
              className="w-8 h-8 mr-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              initial={{ rotate: -10 }}
              animate={{ 
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 5
              }}
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <motion.circle 
                cx="12" 
                cy="16" 
                r="1" 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.svg>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              DigiVerifyAI
            </motion.span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'features', 'rural-solutions', 'how-it-works', 'contact'].map((section, index) => (
            <motion.a
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white hover:text-teal-400 cursor-pointer transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Dropdown */}
          <motion.div 
            className="relative" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center bg-teal-700 bg-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} className="mr-1" />
              {selectedLanguage}
            </motion.button>
            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div 
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {['English', 'हिंदी (Hindi)', 'ಕನ್ನಡ (Kannada)', 'தமிழ் (Tamil)', 'తెలుగు (Telugu)'].map((language) => (
                    <motion.button
                      key={language}
                      onClick={() => handleLanguageChange(language.split(' ')[0])}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      whileHover={{ backgroundColor: "#f3f4f6", x: 5 }}
                    >
                      {language}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Chat bot icon */}
          <motion.button 
            onClick={toggleChat}
            className="text-white hover:text-teal-400 transition relative"
            aria-label="Chat with assistant"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle size={24} />
            {isChatOpen && (
              <motion.span 
                className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              ></motion.span>
            )}
          </motion.button>
          
          <motion.a 
            href="./Login" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Login
          </motion.a>
          
          <motion.a 
            href="SignupPage" 
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Sign Up
          </motion.a>
        </div>
      </motion.nav>

      {/* Main hero section */}
      <div id="home" className="container mx-auto pt-28 pb-20 px-4">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleUp}
          whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ 
            type: "spring", 
            stiffness: 80, 
            damping: 15,
            duration: 0.5
          }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div 
                className="flex items-center mb-8"
                variants={fadeInUp}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    rotate: 5, 
                    scale: 1.1,
                    backgroundImage: "linear-gradient(to bottom right, #f472b6, #8b5cf6)" 
                  }}
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    <circle cx="12" cy="16" r="1" />
                  </svg>
                </motion.div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-purple-600 mb-6"
                variants={fadeInUp}
              >
                Rural ID Verification Without Barriers
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={fadeInUp}
              >
                Our offline-capable AI verification system works anywhere – even in remote areas with limited connectivity. Secure identity verification for everyone.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
                variants={fadeInUp}
              >
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg group"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">Start Free Trial</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} className="ml-2" />
                  </motion.div>
                </motion.a>
                
                <motion.button 
                  onClick={() => setShowDemoPopup(true)}
                  className="flex items-center justify-center bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">Watch Demo</span>
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex flex-col space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Works offline in remote areas",
                  "Multiple local language support",
                  "Accepts alternative ID documents"
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    variants={fadeInUp}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 * index, type: "spring" }}
                    >
                      <Check size={14} className="text-green-600" />
                    </motion.div>
                    <p className="text-gray-700">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 bg-gradient-to-br from-violet-50 to-purple-100 p-8 flex items-center justify-center relative overflow-hidden"
              variants={fadeIn}
            >
              {/* Background patterns */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="purple" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </motion.div>

              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400 rounded-full bg-opacity-20 filter blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-400 rounded-full bg-opacity-20 filter blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              ></motion.div>
              
              <div className="relative z-10 w-full max-w-md">
                {/* Rural verification device mockup */}
                <motion.div 
                  className="relative z-10 bg-white p-6 rounded-xl shadow-xl"
                  initial={{ rotate: 3 }}
                  whileHover={{ 
                    rotate: 0,
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-1">
                      <motion.div 
                        className="w-3 h-3 bg-red-500 rounded-full"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 bg-yellow-500 rounded-full"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 bg-green-500 rounded-full"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className={`w-2 h-2 rounded-full mr-1 ${offlineMode ? 'bg-amber-500' : 'bg-green-500'}`}></span>
                      {offlineMode ? 'Offline Mode' : 'Connected'}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-gray-100 p-4 rounded-lg mb-4 relative"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="absolute top-2 right-2 flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {offlineMode ? (
                        <motion.div 
                          className="flex items-center text-amber-500 text-xs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Signal size={12} className="mr-1" />
                          <span>Offline</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center text-green-500 text-xs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Signal size={12} className="mr-1" />
                          <span>Online</span>
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.svg 
                      className="mx-auto" 
                      width="180" 
                      height="110" 
                      viewBox="0 0 200 120"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {/* ID Card */}
                      <motion.rect 
                        x="20" y="20" width="160" height="100" rx="10" 
                        fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      
                      {/* Person silhouette */}
                      <motion.circle 
                        cx="70" cy="50" r="20" fill="#93c5fd"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 1 }}
                      />
                      
                      <motion.path 
                        d="M70 75 C 60 75, 40 90, 40 90 L 100 90 C 100 90, 80 75, 70 75" 
                        fill="#60a5fa"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      />
                      
                      {/* Rural address details */}
                      <motion.rect 
                        x="110" y="40" width="55" height="4" rx="1" fill="#6b7280"
                        initial={{ width: 0 }}
                        animate={{ width: 55 }}
                        transition={{ delay: 1.6 }}
                      />
                      
                      <motion.rect 
                        x="110" y="50" width="60" height="4" rx="1" fill="#6b7280"
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ delay: 1.7 }}
                      />
                      
                      <motion.rect 
                        x="110" y="60" width="40" height="4" rx="1" fill="#6b7280"
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ delay: 1.8 }}
                      />
                      
                      <motion.rect 
                        x="40" y="95" width="120" height="10" rx="2" fill="#2563eb"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.9 }}
                      />
                      
                      {/* Village name in local language */}
                      <motion.rect 
                        x="45" y="110" width="40" height="4" rx="1" fill="#1d4ed8"
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ delay: 2 }}
                      />
                      
                      {/* Aadhar/local ID number */}
                      <motion.rect 
                        x="120" y="110" width="40" height="4" rx="1" fill="#1d4ed8"
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ delay: 2 }}
                      />
                    </motion.svg>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 2.5 }}
                      >
                        <Check size={16} className="text-green-600" />
                      </motion.div>
                      <span className="ml-2 text-green-600 font-medium">Verified</span>
                    </div>
                    <motion.div 
                      className="flex items-center text-gray-500 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.7 }}
                    >
                      <span>0.8s</span>
                      {offlineMode && (
                        <motion.span 
                          className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 3, type: "spring" }}
                        >
                          Offline
                        </motion.span>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Map location marker indicating rural area */}
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white p-3 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Map size={24} className="text-teal-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Rural-specific section */}
      <div id="rural-solutions" className="py-20 bg-gradient-to-b from-gray-50 to-teal-50">
        <div className="container mx-auto px-4">
          {/* <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-600"
              variants={fadeInUp}
            >
              Designed for Rural Environments
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >

            <motion.p 
  className="text-lg text-gray-600 max-w-2xl mx-auto"
  variants={fadeInUp}
>
  Our solutions are specifically built to handle the unique challenges of rural environments with limited connectivity and infrastructure.
</motion.p>
          </motion.div> */}

<motion.div 
  className="text-center mb-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <motion.h2 
    className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-600"
    variants={fadeInUp}
  >
    Designed for Rural Environments
  </motion.h2>
  <motion.p 
    className="text-lg text-gray-600 max-w-2xl mx-auto"
    variants={fadeInUp}
  >
    Our solutions are specifically built to handle the unique challenges of rural environments with limited connectivity and infrastructure.
  </motion.p>
</motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Network size={32} className="text-teal-600" />,
                title: "Works Offline",
                description: "Our system works completely offline with periodic syncing when connectivity is available."
              },
              {
                icon: <Smartphone size={32} className="text-purple-600" />,
                title: "Low-Cost Hardware",
                description: "Designed to run on affordable Android devices already common in rural areas."
              },
              {
                icon: <Globe size={32} className="text-indigo-600" />,
                title: "Multi-Language Support",
                description: "Interface available in local languages for easier adoption in rural communities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: { duration: 0.5, delay: index * 0.2 }
                }}
              >
                <motion.div 
                  className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#f0fdfa" }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Features section */}
      <div id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-700"
              variants={fadeInUp}
            >
              Key Features
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our platform combines innovative technologies to make identity verification accessible to everyone, everywhere.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Wifi size={32} className="text-teal-600" />,
                title: "Online/Offline Mode",
                description: "Seamlessly switch between online and offline verification depending on available connectivity."
              },
              {
                icon: <Shield size={32} className="text-purple-600" />,
                title: "Secure Encryption",
                description: "End-to-end encryption protects sensitive identity data, even in offline mode."
              },
              {
                icon: <User size={32} className="text-indigo-600" />,
                title: "Alternative ID Support",
                description: "Accepts various forms of identification, ideal for users without standard government ID."
              },
              {
                icon: <BarChart3 size={32} className="text-pink-600" />,
                title: "Analytics Dashboard",
                description: "Track verification trends and gain insights into rural service delivery."
              },
              {
                icon: <Globe size={32} className="text-amber-600" />,
                title: "Local Language Interface",
                description: "Available in multiple regional languages for better accessibility."
              },
              {
                icon: <MessageCircle size={32} className="text-blue-600" />,
                title: "Voice Assistance",
                description: "Voice-guided interface for users with limited literacy or visual impairments."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: { duration: 0.5, delay: index * 0.1 }
                }}
              >
                <motion.div 
                  className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* How it works section */}
      <div id="how-it-works" className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeInUp}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-200 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Simple, secure, and accessible identity verification for rural areas.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "1",
                title: "Scan ID",
                description: "Scan any available ID document with the mobile app.",
                color: "from-teal-400 to-teal-500"
              },
              {
                step: "2",
                title: "Verify Locally",
                description: "AI processes verification locally, no internet required.",
                color: "from-purple-400 to-purple-500"
              },
              {
                step: "3",
                title: "Biometric Check",
                description: "Optional facial recognition or fingerprint verification.",
                color: "from-pink-400 to-pink-500"
              },
              {
                step: "4",
                title: "Sync When Connected",
                description: "Data syncs to central system when connectivity is available.",
                color: "from-amber-400 to-amber-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 relative"
                variants={fadeInUp}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className={`absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </motion.div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center bg-white text-purple-700 px-8 py-4 rounded-xl shadow-lg font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ChevronRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Contact section */}
      <div id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div 
                className="p-8 md:p-12 bg-gradient-to-br from-purple-600 to-indigo-700 text-white"
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-purple-100 mb-8">
                  Have questions about implementing RuralIDVerify in your region? Contact our team for more information.
                </p>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                      <Mail size={18} className="text-white" />
                    </div>
                    <span>contact@ruralidverify.com</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                      <Phone size={18} className="text-white" />
                    </div>
                    <span>+91 98765 43210</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <span>Bangalore, India</span>
                  </motion.div>
                </div>
                
                <div className="mt-10 flex space-x-4">
                  {[
                    <Facebook size={20} />,
                    <Twitter size={20} />,
                    <Instagram size={20} />,
                    <Linkedin size={20} />
                  ].map((icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="p-8 md:p-12"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
                <form>
                  <div className="space-y-4">
                    <motion.div whileHover={{ y: -2 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -2 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your email"
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -2 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all h-32"
                        placeholder="Your message"
                      ></textarea>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-white text-xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    <circle cx="12" cy="16" r="1" />
                  </svg>
                  RuralIDVerify
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Secure identity verification for everyone, everywhere.
              </p>
              <div className="flex space-x-4">
                {[
                  <Facebook size={18} />,
                  <Twitter size={18} />,
                  <Instagram size={18} />,
                  <Linkedin size={18} />
                ].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Case Studies', 'Documentation', 'API'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Blog', 'Careers', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance', 'Security'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RuralIDVerify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="text-gray-500 hover:text-gray-300 text-sm"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chat bot popup */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            className="fixed bottom-24 right-8 w-80 bg-white rounded-xl shadow-2xl overflow-hidden z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="bg-purple-700 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <MessageCircle size={18} className="text-purple-700" />
                </div>
                <span className="text-white font-medium">RuralID Assistant</span>
              </div>
              <button 
                onClick={toggleChat}
                className="text-purple-200 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="h-80 p-4 overflow-y-auto bg-gray-50">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <MessageCircle size={16} className="text-purple-600" />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    Hello! How can I help you with rural ID verification today?
                  </p>
                </div>
              </div>
              
              {offlineMode && (
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <MessageCircle size={16} className="text-purple-600" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-700">
                      I notice you're in offline mode. Our assistant can still help with basic questions!
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fixed chat button */}
      <motion.button 
        onClick={toggleChat}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg z-40"
        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={24} className="text-white" />
        <span className="sr-only">Chat with us</span>
      </motion.button>
      
      {/* Demo video popup */}
      <AnimatePresence>
        {showDemoPopup && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden w-full max-w-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="text-xl font-semibold">RuralIDVerify Demo</h3>
                <button 
                  onClick={() => setShowDemoPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="mt-4 text-gray-600">Demo video would play here</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50">
                <button 
                  onClick={() => setShowDemoPopup(false)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Close Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}