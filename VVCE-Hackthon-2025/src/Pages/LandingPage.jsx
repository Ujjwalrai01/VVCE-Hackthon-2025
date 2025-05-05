import { useState } from 'react';
import { MessageCircle, Shield, User, BarChart3, ChevronRight, Globe, Check, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
//     const [messages, setMessages] = useState([
//       { sender: 'bot', text: 'Hello! How can I help you with ID verification today?' },
//     ]);
//     const [userInput, setUserInput] = useState('');
  
//     const toggleChat = () => {
//       setIsChatOpen(!isChatOpen);
//     };
  
//     const handleSendMessage = async () => {
//       if (!userInput.trim()) return;
  
//       // Add user message to chat
//       setMessages((prev) => [...prev, { sender: 'user', text: userInput }]);
  
//       // Clear input field
//       setUserInput('');
  
//       try {
//         // Send user message to Gemini API
//         const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB2X9ZKhnCugWvHxVhablDGc6gfwB0bg3k", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer AIzaSyB2X9ZKhnCugWvHxVhablDGc6gfwB0bg3k`, // Replace with your API key
//           },
//           body: JSON.stringify({ message: userInput }),
//         });
  
//         const data = await response.json();
  
//         // Add Gemini's response to chat
//         setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
//       } catch (error) {
//         console.error('Error communicating with Gemini API:', error);
//         setMessages((prev) => [
//           ...prev,
//           { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' },
//         ]);
//       }
//     };
  
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-700 text-gray-800">
//         {/* Chatbot widget */}
//         {isChatOpen && (
//           <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
//               <div className="flex items-center">
//                 <MessageCircle size={20} className="mr-2" />
//                 <span className="font-medium">ID Verify Assistant</span>
//               </div>
//               <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
//                 ✕
//               </button>
//             </div>
  
//             <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`p-3 rounded-lg ${
//                     msg.sender === 'bot'
//                       ? 'bg-indigo-100 text-gray-800 rounded-tl-none max-w-xs ml-auto mb-4'
//                       : 'bg-gray-200 text-gray-800 rounded-tr-none max-w-xs mr-auto mb-4'
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>
  
//             <div className="p-3 border-t">
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   value={userInput}
//                   onChange={(e) => setUserInput(e.target.value)}
//                   className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   placeholder="Type your message..."
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300"
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
  
//         {/* Small chat button (mobile) */}
//         <button
//           onClick={toggleChat}
//           className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
//           aria-label="Open chat"
//         >
//           <MessageCircle size={24} />
//         </button>
//       </div>
//     );
//   }

// export default function LandingPage() {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello! How can I help you with ID verification today?' },
//   ]);
//   const [userInput, setUserInput] = useState('');

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const handleSendMessage = async () => {
//     if (!userInput.trim()) return;

//     setMessages((prev) => [...prev, { sender: 'user', text: userInput }]);
//     const currentInput = userInput;
//     setUserInput('');

//     try {
//       const response = await fetch(
//         "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB2X9ZKhnCugWvHxVhablDGc6gfwB0bg3k",
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [{ text: currentInput }],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const botReply =
//         data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         'Sorry, I didn’t quite get that. Can you try rephrasing?';

//       setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
//     } catch (error) {
//       console.error('Error communicating with Gemini API:', error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: 'bot',
//           text: 'Sorry, something went wrong. Please try again later.',
//         },
//       ]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-700 text-gray-800">
//       {/* Chatbot widget */}
//       {isChatOpen && (
//         <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
//             <div className="flex items-center">
//               <MessageCircle size={20} className="mr-2" />
//               <span className="font-medium">ID Verify Assistant</span>
//             </div>
//             <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
//               ✕
//             </button>
//           </div>

//           <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-3 rounded-lg ${
//                   msg.sender === 'bot'
//                     ? 'bg-indigo-100 text-gray-800 rounded-tl-none max-w-xs ml-auto mb-4'
//                     : 'bg-gray-200 text-gray-800 rounded-tr-none max-w-xs mr-auto mb-4'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="p-3 border-t">
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 placeholder="Type your message..."
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating chat button */}
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
//         aria-label="Open chat"
//       >
//         <MessageCircle size={24} />
//       </button>
//     </div>
//   );
// }

  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-700 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-between py-3 px-4 lg:px-8 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="text-white text-2xl font-bold flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>IDVerifyAI</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</a>
          <a onClick={() => scrollToSection('features')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">Features</a>
          <a onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">How It Works</a>
          <a onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4 ">
          <button className="hidden md:flex items-center bg-blue-900 bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition ">
            <Globe size={16} className="mr-1" />
            English
          </button>
          
          {/* Chat bot icon */}
          <button 
            onClick={toggleChat}
            className="text-white hover:text-blue-400 transition relative"
            aria-label="Chat with assistant"
          >
            <MessageCircle size={24} />
            {isChatOpen && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
            )}
          </button>
          
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
            Login
          </a>
          <a href="#" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Main hero section */}
      <div id="home" className="container mx-auto pt-28 pb-20 px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-600 mb-6">
                Secure Identity Verification in Seconds
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Protect your business with our state-of-the-art AI verification system that detects fraud and tampering instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <a href="#" className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg group">
                  <span className="font-medium">Get Started Free</span>
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="#" className="flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300">
                  <span className="font-medium">See How It Works</span>
                </a>
              </div>
              
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <p className="text-gray-700">99.9% accuracy in fraud detection</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <p className="text-gray-700">Compliant with global ID regulations</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <p className="text-gray-700">Secure & encrypted data handling</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-blue-100 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full bg-opacity-20 filter blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400 rounded-full bg-opacity-20 filter blur-xl"></div>
                
                <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">ID Verification</div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <svg className="mx-auto" width="180" height="100" viewBox="0 0 200 120">
                      <rect x="20" y="20" width="160" height="100" rx="10" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2"/>
                      <circle cx="100" cy="50" r="25" fill="#93c5fd"/>
                      <path d="M100 85 C 80 85, 50 110, 50 110 L 150 110 C 150 110, 120 85, 100 85" fill="#60a5fa"/>
                      <rect x="40" y="95" width="120" height="16" rx="2" fill="#2563eb"/>
                      <rect x="40" y="115" width="40" height="4" rx="1" fill="#1d4ed8"/>
                      <rect x="120" y="115" width="40" height="4" rx="1" fill="#1d4ed8"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={16} className="text-green-600" />
                      </div>
                      <span className="ml-2 text-green-600 font-medium">Verified</span>
                    </div>
                    <span className="text-gray-500 text-sm">0.5s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced AI-Powered Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our cutting-edge technology provides the most reliable identity verification system on the market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Tamper Detection</h3>
              <p className="text-gray-600">
                Advanced AI algorithms detect even the slightest modifications to ID documents with 99.9% accuracy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <User size={32} className="text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Biometric Matching</h3>
              <p className="text-gray-600">
                Compare facial features with ID photos in milliseconds to ensure legitimate identity verification.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Fraud Analytics</h3>
              <p className="text-gray-600">
                Comprehensive reports and insights to identify patterns and prevent future fraud attempts.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, secure verification in just three easy steps
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
            <div className="md:w-1/3 text-center px-4 mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Upload Document</h3>
              <p className="text-gray-600">
                Securely upload an ID document through our encrypted platform.
              </p>
            </div>
            
            <div className="md:w-1/3 text-center px-4 mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes and verifies all document security features.
              </p>
            </div>
            
            <div className="md:w-1/3 text-center px-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Get Results</h3>
              <p className="text-gray-600">
                Receive instant verification results with detailed analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials/Stats */}
      <div className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">99.8%</h3>
              <p className="text-indigo-200">Accuracy Rate</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">0.5s</h3>
              <p className="text-indigo-200">Average Verification Time</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">5M+</h3>
              <p className="text-indigo-200">Verifications Completed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact section */}
      <div id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our service? Our team is here to help you.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:info@idverifyai.com" className="text-blue-600 hover:underline">info@idverifyai.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+18002345678" className="text-green-600 hover:underline">+1 (800) 234-5678</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                      <MapPin size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">123 Verification Street, Tech City, TC 98765</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="font-bold text-xl mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-2xl font-bold">IDVerifyAI</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
              </p>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Integrations</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GDPR</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 IDVerifyAI. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot widget */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <span className="font-medium">ID Verify Assistant</span>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
            <div className="bg-indigo-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs ml-auto mb-4">
              Hello! How can I help you with ID verification today?
            </div>
          </div>
          
          <div className="p-3 border-t">
            <div className="flex items-center">
              <input 
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Type your message..."
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Small chat button (mobile) */}
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};