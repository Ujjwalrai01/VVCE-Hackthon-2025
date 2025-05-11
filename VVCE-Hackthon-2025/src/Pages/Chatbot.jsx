import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, Mic, Image, Paperclip, Settings, User, LogOut, Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';

// Sidebar Item Component
const SidebarItem = ({ icon, label, active, onClick }) => {
  return (
    <li>
      <button
        className={`flex items-center w-full px-3 py-2 text-left rounded-md transition-colors ${
          active 
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        onClick={onClick}
      >
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </button>
    </li>
  );
};

// Sidebar Component
const SideBar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center">
        <MessageSquare className="text-blue-500" size={24} />
        <h1 className="ml-2 text-xl font-bold text-gray-800 dark:text-white">NexusAI</h1>
      </div>
      
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          <SidebarItem 
            icon={<MessageSquare size={20} />} 
            label="Chat" 
            active={currentPage === "chat"}
            onClick={() => setCurrentPage("chat")}
          />
          <SidebarItem 
            icon={<ChevronRight size={20} />} 
            label="Explore" 
            active={currentPage === "explore"}
            onClick={() => setCurrentPage("explore")}
          />
          <SidebarItem 
            icon={<User size={20} />} 
            label="Profile" 
            active={currentPage === "profile"}
            onClick={() => setCurrentPage("profile")}
          />
          <SidebarItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            active={currentPage === "settings"}
            onClick={() => setCurrentPage("settings")}
          />
        </ul>
      </nav>
      
      <div className="p-4 border-t dark:border-gray-700">
        <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
          <LogOut size={20} className="mr-2" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

// Chat Message Component
const ChatMessage = ({ message }) => {
  return (
    <div 
      className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div 
        className={`p-3 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ${
          message.sender === "user" 
            ? "bg-blue-500 text-white rounded-br-none" 
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

// Chat Page Component
const ChatPage = ({ messages, input, setInput, sendMessage, handleInputChange, handleKeyPress, messagesEndRef }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t dark:border-gray-700 p-4">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
          <Paperclip size={20} className="mr-2 text-gray-500 cursor-pointer" />
          <Image size={20} className="mr-2 text-gray-500 cursor-pointer" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <Mic size={20} className="mx-2 text-gray-500 cursor-pointer" />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Settings Page Component
const SettingsPage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Dark Mode</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark theme</p>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Notifications</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enable push notifications</p>
          </div>
          <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
            <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Chat History</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Clear all previous conversations</p>
          </div>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

// Profile Page Component
const ProfilePage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Profile</h2>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">
          JP
        </div>
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">John Peterson</h3>
        <p className="text-gray-500 dark:text-gray-400">john.peterson@example.com</p>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Account Details</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage your account information</p>
        </div>
        
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Privacy Settings</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Control your data and privacy preferences</p>
        </div>
        
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Help & Support</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Get assistance with using NexusAI</p>
        </div>
      </div>
    </div>
  );
};

// Explore Page Component
const ExplorePage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Explore</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <h3 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Writing Assistant</h3>
          <p className="text-sm text-blue-600 dark:text-blue-300 mb-3">Get help with writing emails, reports, and creative content</p>
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Try now</button>
        </div>
        
        <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <h3 className="font-medium mb-2 text-purple-800 dark:text-purple-200">Research Assistant</h3>
          <p className="text-sm text-purple-600 dark:text-purple-300 mb-3">Get information and insights on any topic</p>
          <button className="px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600">Try now</button>
        </div>
        
        <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
          <h3 className="font-medium mb-2 text-green-800 dark:text-green-200">Code Helper</h3>
          <p className="text-sm text-green-600 dark:text-green-300 mb-3">Get assistance with programming and debugging</p>
          <button className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600">Try now</button>
        </div>
        
        <div className="p-4 bg-amber-100 dark:bg-amber-900 rounded-lg">
          <h3 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Language Translator</h3>
          <p className="text-sm text-amber-600 dark:text-amber-300 mb-3">Translate text between multiple languages</p>
          <button className="px-3 py-1 text-sm bg-amber-500 text-white rounded hover:bg-amber-600">Try now</button>
        </div>
      </div>
    </div>
  );
};

// Main Chatbot Component
const NexusAI = () => {
  // State management
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm NexusAI, your personal assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState("chat");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Send message function
  const sendMessage = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: input, sender: "user" }
    ];
    
    setMessages(newMessages);
    setInput("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I understand what you're asking. Let me help with that.",
        "That's an interesting question! Here's what I know.",
        "I'd be happy to assist with that request.",
        "I'm processing your question. Here's what I found.",
        "Thanks for asking! Here's my recommendation."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: randomResponse, sender: "bot" }
      ]);
    }, 1000);
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  // Handle key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  
  // Render different pages based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "chat":
        return (
          <ChatPage 
            messages={messages}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            handleInputChange={handleInputChange}
            handleKeyPress={handleKeyPress}
            messagesEndRef={messagesEndRef}
          />
        );
      
      case "settings":
        return (
          <SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        );
        
      case "profile":
        return <ProfilePage />;
        
      case "explore":
        return <ExplorePage />;
      
      default:
        return <div>Page not found</div>;
    }
  };
  
  return (
    <div className={`flex h-screen bg-white dark:bg-gray-900 ${darkMode ? 'dark' : ''}`}>
      {/* Mobile menu button */}
      <button 
        className="md:hidden absolute top-4 left-4 z-20 text-gray-700 dark:text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Sidebar - Mobile */}
      <div className={`
        md:hidden fixed inset-y-0 left-0 w-64 bg-gray-50 dark:bg-gray-800 z-10 transform transition-transform duration-200 ease-in-out
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <SideBar 
          currentPage={currentPage} 
          setCurrentPage={(page) => {
            setCurrentPage(page);
            setMenuOpen(false);
          }}
        />
      </div>
      
      {/* Sidebar - Desktop */}
      <div className="hidden md:block w-64 bg-gray-50 dark:bg-gray-800">
        <SideBar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="text-blue-500" size={24} />
              <h1 className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">NexusAI</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-hidden">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Chatbot;