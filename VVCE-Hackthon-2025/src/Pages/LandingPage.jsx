// // // // import { Link } from 'react-router-dom';

// // // // const LandingPage = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
// // // //       <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
// // // //         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
// // // //           🔐 AI Identity Verification
// // // //         </h1>
// // // //         <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-100">
// // // //           Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
// // // //         </p>

// // // //         <div className="flex justify-center gap-6">
// // // //           <Link
// // // //             to="/login"
// // // //             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
// // // //           >
// // // //             Login
// // // //           </Link>
// // // //           <Link
// // // //             to="/signup"
// // // //             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
// // // //           >
// // // //             Sign Up
// // // //           </Link>
// // // //         </div>

// // // //         <div className="mt-10 text-sm text-gray-400">
// // // //           Built with ❤️ using React & Tailwind CSS
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LandingPage;


// // // import { Link } from 'react-router-dom';
// // // import { useState } from 'react';

// // // const LandingPage = () => {
// // //   const [lang, setLang] = useState('en');

// // //   return (
// // //     <>
// // //       {/* NavBar */}
// // //       <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
// // //         <div className="text-2xl font-bold text-indigo-600">
// // //           <Link to="/">IDVerify<span className="text-pink-500">AI</span></Link>
// // //         </div>
// // //         <div className="text-align-centre space-x-6 text-sm font-medium hidden md:flex">
// // //           <Link to="/" className="hover:text-indigo-600 transition text-indigo-600">Home</Link>
// // //           <Link to="/learn" className="hover:text-indigo-600 transition text-indigo-600">Learn</Link>
// // //           <Link to="/upload" className="hover:text-indigo-600 transition text-indigo-600">Upload</Link>
// // //           <Link to="/dashboard" className="hover:text-indigo-600 transition text-indigo-600">Dashboard</Link>
// // //           <Link to="/result" className="hover:text-indigo-600 transition text-indigo-600">Result</Link>

// // //           {/* Multi-language Selector */}
// // //           <select
// // //             value={lang}
// // //             onChange={(e) => setLang(e.target.value)}
// // //             className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700"
// // //           >
// // //             <option value="en">🌐 English</option>
// // //             <option value="hi">हिंदी</option>
// // //             <option value="kn">ಕನ್ನಡ</option>
// // //           </select>

// // //           {/* Login/Signup Buttons */}
// // //           <Link
// // //             to="/loginpage"
// // //             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
// // //           >
// // //             Login
// // //           </Link>
// // //           <Link
// // //             to="/signuppage"
// // //             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
// // //           >
// // //             Sign Up
// // //           </Link>
// // //         </div>
// // //       </nav>

// // //       {/* Main Landing Content */}
// // //       <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 pt-24">
// // //         <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
// // //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
// // //             🔐 AI Identity Verification
// // //           </h1>
// // //           <p className="text-lg text-gray-600 mb-8">
// // //             Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
// // //           </p>

// // //           <div className="flex justify-center gap-6">
// // //             <Link
// // //               to="/login"
// // //               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
// // //             >
// // //               Login
// // //             </Link>
// // //             <Link
// // //               to="/signup"
// // //               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
// // //             >
// // //               Sign Up
// // //             </Link>
// // //           </div>

// // //           <div className="mt-10 text-sm text-gray-400">
// // //             Built with ❤️ using React & Tailwind CSS
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default LandingPage;






// // import { Link } from 'react-router-dom';
// // import { useState } from 'react';
// // import { MenuIcon, XIcon } from 'lucide-react';

// // const LandingPage = () => {
// //   const [lang, setLang] = useState('en');
// //   const [isNavOpen, setIsNavOpen] = useState(false);

// //   const toggleNav = () => setIsNavOpen(!isNavOpen);

// //   return (
// //     <>
// //       {/* NavBar */}
// //       <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
// //         <div className="flex justify-between items-center">
// //           {/* Logo */}
// //           <div className="text-2xl font-bold text-indigo-600">
// //             <Link to="/">IDVerify<span className="text-pink-500">AI</span></Link>
// //           </div>

// //           {/* Hamburger Menu for Mobile */}
// //           <button
// //             className="md:hidden text-gray-600 focus:outline-none"
// //             onClick={toggleNav}
// //           >
// //             {isNavOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
// //           </button>

// //           {/* Desktop Nav Links */}
// //           <div className="hidden md:flex space-x-6 text-sm font-medium">
// //             <Link to="/" className="hover:text-indigo-600 transition text-indigo-600">Home</Link>
// //             <Link to="/learn" className="hover:text-indigo-600 transition text-indigo-600">Learn</Link>
// //             <Link to="/upload" className="hover:text-indigo-600 transition text-indigo-600">Upload</Link>
// //             <Link to="/dashboard" className="hover:text-indigo-600 transition text-indigo-600">Dashboard</Link>
// //             <Link to="/result" className="hover:text-indigo-600 transition text-indigo-600">Result</Link>

// //             {/* Multi-language Selector */}
// //             <select
// //               value={lang}
// //               onChange={(e) => setLang(e.target.value)}
// //               className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700"
// //             >
// //               <option value="en">🌐 English</option>
// //               <option value="hi">हिंदी</option>
// //               <option value="kn">ಕನ್ನಡ</option>
// //             </select>

// //             {/* Login/Signup Buttons */}
// //             <Link
// //               to="/loginpage"
// //               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               to="/signuppage"
// //               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Mobile Nav Links */}
// //         {isNavOpen && (
// //           <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
// //             <Link to="/" className="block hover:text-indigo-600 transition text-indigo-600">Home</Link>
// //             <Link to="/learn" className="block hover:text-indigo-600 transition text-indigo-600">Learn</Link>
// //             <Link to="/upload" className="block hover:text-indigo-600 transition text-indigo-600">Upload</Link>
// //             <Link to="/dashboard" className="block hover:text-indigo-600 transition text-indigo-600">Dashboard</Link>
// //             <Link to="/result" className="block hover:text-indigo-600 transition text-indigo-600">Result</Link>

// //             {/* Multi-language Selector */}
// //             <select
// //               value={lang}
// //               onChange={(e) => setLang(e.target.value)}
// //               className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700 w-full"
// //             >
// //               <option value="en">🌐 English</option>
// //               <option value="hi">हिंदी</option>
// //               <option value="kn">ಕನ್ನಡ</option>
// //             </select>

// //             {/* Login/Signup Buttons */}
// //             <Link
// //               to="/loginpage"
// //               className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-center"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               to="/signuppage"
// //               className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition text-center"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>
// //         )}
// //       </nav>

// //       {/* Main Landing Content */}
// //       <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 pt-24">
// //         <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
// //             🔐 AI Identity Verification
// //           </h1>
// //           <p className="text-lg text-gray-600 mb-8">
// //             Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
// //           </p>

// //           <div className="flex justify-center gap-6">
// //             <Link
// //               to="/login"
// //               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               to="/signup"
// //               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>

// //           <div className="mt-10 text-sm text-gray-400">
// //             Built with ❤️ using React & Tailwind CSS
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default LandingPage;




// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { MenuIcon, XIcon } from 'lucide-react';
// import img1 from '../assets/img1.png'; // Adjust the path based on your folder structure
// import img2 from '../assets/img2.png'; // Adjust the path based on your folder structure

// const LandingPage = () => {
//   const [lang, setLang] = useState('en');
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => setIsNavOpen(!isNavOpen);

//   return (
//     <>
//       {/* NavBar */}
//       <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-2xl font-bold text-indigo-600">
//             <Link to="/">IDVerify<span className="text-pink-500">AI</span></Link>
//           </div>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             className="md:hidden text-gray-600 focus:outline-none"
//             onClick={toggleNav}
//           >
//             {isNavOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
//           </button>

//           {/* Desktop Nav Links */}
//           <div className="hidden md:flex space-x-6 text-sm font-medium">
//             <Link to="/" className="hover:text-indigo-600 transition text-indigo-600">Home</Link>
//             <Link to="/learn" className="hover:text-indigo-600 transition text-indigo-600">Learn</Link>
//             <Link to="/uploadform" className="hover:text-indigo-600 transition text-indigo-600">Upload</Link>
//             <Link to="/dashboardpage" className="hover:text-indigo-600 transition text-indigo-600">Dashboard</Link>
//             <Link to="/resultpage" className="hover:text-indigo-600 transition text-indigo-600">Result</Link>

//             {/* Multi-language Selector */}
//             <select
//               value={lang}
//               onChange={(e) => setLang(e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700"
//             >
//               <option value="en">🌐 English</option>
//               <option value="hi">हिंदी</option>
//               <option value="kn">ಕನ್ನಡ</option>
//             </select>

//             {/* Login/Signup Buttons */}
//             <Link
//               to="/loginpage"
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signuppage"
//               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Nav Links */}
//         {isNavOpen && (
//           <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
//             <Link to="/" className="block hover:text-indigo-600 transition text-indigo-600">Home</Link>
//             <Link to="/learn" className="block hover:text-indigo-600 transition text-indigo-600">Learn</Link>
//             <Link to="/upload" className="block hover:text-indigo-600 transition text-indigo-600">Upload</Link>
//             <Link to="/dashboard" className="block hover:text-indigo-600 transition text-indigo-600">Dashboard</Link>
//             <Link to="/result" className="block hover:text-indigo-600 transition text-indigo-600">Result</Link>

//             {/* Multi-language Selector */}
//             <select
//               value={lang}
//               onChange={(e) => setLang(e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700 w-full"
//             >
//               <option value="en">🌐 English</option>
//               <option value="hi">हिंदी</option>
//               <option value="kn">ಕನ್ನಡ</option>
//             </select>

//             {/* Login/Signup Buttons */}
//             <Link
//               to="/loginpage"
//               className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-center"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signuppage"
//               className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition text-center"
//             >
//               Sign Up
//             </Link>
//           </div>
//         )}
//       </nav>

//       {/* Main Landing Content */}
//       <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-4 pt-24">
//         <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-4xl w-full text-center relative">
//           <div className="absolute top-0 left-0 transform -translate-x-12 -translate-y-12">
//             <img src={img1} alt="Decorative" className="w-32 h-32 md:w-48 md:h-48" />
//           </div>
//           <div className="absolute bottom-0 right-0 transform translate-x-12 translate-y-12">
//             <img src={img2} alt="Decorative" className="w-32 h-32 md:w-48 md:h-48" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             🔐 AI Identity Verification
//           </h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
//           </p>

//           <div className="flex justify-center gap-6">
//             <Link
//               to="/loginpage"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signuppage"
//               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
//             >
//               Sign Up
//             </Link>
//           </div>

//           <div className="mt-10 text-sm text-gray-400">
//             Built with ❤️ using React & Tailwind CSS
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;




















// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-sans">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-8 py-4 shadow">
//         <div className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
//           <span className="text-3xl">📄</span>
//           DocVerify
//         </div>
//         <nav className="flex items-center space-x-6">
//           <a href="#features" className="hover:text-indigo-600">Features</a>
//           <a href="#how-it-works" className="hover:text-indigo-600">How It Works</a>
//           <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
//           <a href="/login" className="font-semibold text-indigo-700">Login</a>
//           <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
//             Sign up
//           </button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
//             Verify documents <br /> with <span className="text-indigo-600">intelligent OCR</span>
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">
//             Instant document verification with advanced OCR technology. Upload, verify, and authenticate documents in seconds.
//           </p>
//           <div className="flex justify-center lg:justify-start gap-4">
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
//               Get started
//             </button>
//             <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
//           <img
//             src="/your-image-path.jpg"
//             alt="Document Verification Dashboard"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;





// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { MenuIcon, XIcon } from 'lucide-react';
// import img1 from '../assets/img1.png';
// import img2 from '../assets/img2.png';

// const LandingPage = () => {
//   const [lang, setLang] = useState('en');
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => setIsNavOpen(!isNavOpen);

//   // Prevent body scroll when nav is open (optional)
//   useEffect(() => {
//     document.body.style.overflow = isNavOpen ? 'hidden' : 'auto';
//   }, [isNavOpen]);

//   return (
//     <>
//       {/* NavBar */}
//       <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold text-indigo-600">
//             <Link to="/">IDVerify<span className="text-pink-500">AI</span></Link>
//           </div>
//           <button className="md:hidden text-gray-600" onClick={toggleNav}>
//             {isNavOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
//           </button>
//           <div className="hidden md:flex space-x-6 text-sm font-medium">
//             <Link to="/" className="hover:text-indigo-600 text-indigo-600">Home</Link>
//             <Link to="/learn" className="hover:text-indigo-600 text-indigo-600">Learn</Link>
//             <Link to="/uploadform" className="hover:text-indigo-600 text-indigo-600">Upload</Link>
//             <Link to="/dashboardpage" className="hover:text-indigo-600 text-indigo-600">Dashboard</Link>
//             <Link to="/resultpage" className="hover:text-indigo-600 text-indigo-600">Result</Link>
//             <select
//               value={lang}
//               onChange={(e) => setLang(e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700"
//             >
//               <option value="en">🌐 English</option>
//               <option value="hi">हिंदी</option>
//               <option value="kn">ಕನ್ನಡ</option>
//             </select>
//             <Link to="/loginpage" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
//               Login
//             </Link>
//             <Link to="/signuppage" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         {isNavOpen && (
//           <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
//             <Link to="/" className="block hover:text-indigo-600 text-indigo-600">Home</Link>
//             <Link to="/learn" className="block hover:text-indigo-600 text-indigo-600">Learn</Link>
//             <Link to="/uploadform" className="block hover:text-indigo-600 text-indigo-600">Upload</Link>
//             <Link to="/dashboardpage" className="block hover:text-indigo-600 text-indigo-600">Dashboard</Link>
//             <Link to="/resultpage" className="block hover:text-indigo-600 text-indigo-600">Result</Link>
//             <select
//               value={lang}
//               onChange={(e) => setLang(e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700 w-full"
//             >
//               <option value="en">🌐 English</option>
//               <option value="hi">हिंदी</option>
//               <option value="kn">ಕನ್ನಡ</option>
//             </select>
//             <Link to="/loginpage" className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center">
//               Login
//             </Link>
//             <Link to="/signuppage" className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-center">
//               Sign Up
//             </Link>
//           </div>
//         )}
//       </nav>

//       {/* Main Landing Content */}
//       <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center pt-20 px-4">
//         <div className="relative bg-white shadow-2xl rounded-2xl p-10 max-w-4xl w-full text-center overflow-hidden">
//           {/* Decorative Images (wrapped inside relative container) */}
//           <div className="absolute top-0 left-0 -translate-x-10 -translate-y-10">
//             <img src={img1} alt="Decorative" className="w-28 h-28 md:w-40 md:h-40" />
//           </div>
//           <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10">
//             <img src={img2} alt="Decorative" className="w-28 h-28 md:w-40 md:h-40" />
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             🔐 AI Identity Verification
//           </h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
//           </p>

//           <div className="flex justify-center gap-6">
//             <Link to="/loginpage" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105">
//               Login
//             </Link>
//             <Link to="/signuppage" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105">
//               Sign Up
//             </Link>
//           </div>

//           <div className="mt-10 text-sm text-gray-400">
//             Built with ❤️ using React & Tailwind CSS
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;










// import React, { useState, useEffect } from 'react';
// import { Lock, Check, Shield, Upload, BarChart2, Award, ChevronRight } from 'lucide-react';

// const LandingPage = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
  
//   // Handle scroll for navbar effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     { 
//       icon: <Shield className="text-blue-600" size={24} />, 
//       title: 'Advanced Security', 
//       description: 'Multi-layer protection for your identity verification process.' 
//     },
//     { 
//       icon: <Upload className="text-green-500" size={24} />, 
//       title: 'Easy Document Upload', 
//       description: 'Seamless interface for ID document scanning and verification.' 
//     },
//     { 
//       icon: <BarChart2 className="text-purple-500" size={24} />, 
//       title: 'Detailed Analytics', 
//       description: 'Comprehensive dashboard with verification statistics.' 
//     }
//   ];

//   const testimonials = [
//     { 
//       name: 'Jane Smith', 
//       role: 'CTO, TechSolutions', 
//       comment: 'IDVerifyAI has streamlined our onboarding process completely.' 
//     },
//     { 
//       name: 'Mark Johnson', 
//       role: 'Head of Security, FinancePro', 
//       comment: 'The tamper detection capability has saved us from multiple fraud attempts.' 
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
//       {/* Navbar */}
//       <nav className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <Lock size={28} className={`mr-2 ${isScrolled ? "text-indigo-600" : "text-white"}`} />
//             <h1 className={`text-2xl font-bold ${isScrolled ? "text-indigo-600" : "text-white"}`}>IDVerifyAI</h1>
//           </div>
          
//           <div className="hidden md:flex space-x-6">
//             {['Home', 'Learn', 'Upload', 'Dashboard', 'Result'].map((item) => (
//               <a key={item} href="#" className={`font-medium ${isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-indigo-100"}`}>{item}</a>
//             ))}
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className={`px-3 py-1 rounded-full border ${isScrolled ? "border-gray-300 text-gray-700" : "border-white/30 text-white"}`}>
//               <span className="mr-1">🌐</span> English
//             </div>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Login</button>
//             <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">Sign Up</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 pt-32 pb-16">
//         <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             {/* Left Column - Main Content */}
//             <div className="md:w-3/5 p-8 md:p-12">
//               <div className="flex items-center mb-6">
//                 <Lock size={36} className="text-orange-500 mr-4" />
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-800">AI Identity Verification</h2>
//               </div>
              
//               <p className="text-lg text-gray-600 mb-8">
//                 Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
//               </p>
              
//               <div className="flex flex-wrap gap-4 mb-12">
//                 <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center">
//                   Login <ChevronRight size={18} className="ml-2" />
//                 </button>
//                 <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors flex items-center">
//                   Sign Up <ChevronRight size={18} className="ml-2" />
//                 </button>
//               </div>
              
//               {/* Features */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {features.map((feature, index) => (
//                   <div key={index} className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
//                     <div className="mb-3">{feature.icon}</div>
//                     <h3 className="font-semibold text-gray-800">{feature.title}</h3>
//                     <p className="text-sm text-gray-600">{feature.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Right Column - Illustration */}
//             <div className="md:w-2/5 bg-gradient-to-br from-indigo-100 to-purple-100 p-6 flex items-center justify-center">
//               <div className="relative">
//                 {/* People illustration from your original design */}
//                 <div className="absolute left-0 bottom-0 w-1/3">
//                   <div className="w-full h-32 bg-gradient-to-b from-indigo-300 to-purple-300 opacity-70 rounded-t-full"></div>
//                 </div>
                
//                 {/* Magnifying glass illustration from your original design */}
//                 <div className="relative z-10">
//                   <div className="w-32 h-32 rounded-full border-4 border-indigo-500 relative">
//                     <div className="absolute -bottom-6 -right-6 w-12 h-20 bg-indigo-500 rounded-br-full transform rotate-45"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Footer */}
//           <div className="px-8 py-4 bg-gray-50 flex justify-center items-center">
//             <p className="text-gray-600 text-sm">
//               Built with <span className="text-red-500">❤</span> using React & Tailwind CSS
//             </p>
//           </div>
//         </div>
        
//         {/* Testimonials */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="flex items-center mb-4">
//                 <Award className="text-yellow-500 mr-3" size={20} />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">"{testimonial.comment}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

















import React, { useState, useEffect } from 'react';
import { Lock, Check, Shield, Upload, BarChart2, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: 'Advanced Security',
      description: 'Multi-layer protection for your identity verification process.',
    },
    {
      icon: <Upload className="text-green-500" size={24} />,
      title: 'Easy Document Upload',
      description: 'Seamless interface for ID document scanning and verification.',
    },
    {
      icon: <BarChart2 className="text-purple-500" size={24} />,
      title: 'Detailed Analytics',
      description: 'Comprehensive dashboard with verification statistics.',
    },
  ];

  const testimonials = [
    {
      name: 'Jane Smith',
      role: 'CTO, TechSolutions',
      comment: 'IDVerifyAI has streamlined our onboarding process completely.',
    },
    {
      name: 'Mark Johnson',
      role: 'Head of Security, FinancePro',
      comment: 'The tamper detection capability has saved us from multiple fraud attempts.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Navbar */}
      <nav
        className={`fixed w-full transition-all duration-300 z-50 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Lock size={28} className={`mr-2 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} />
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
              IDVerifyAI
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-100'
              }`}
            >
              Learn
            </Link>
            <Link
              to="/uploadform"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-100'
              }`}
            >
              Upload
            </Link>
            <Link
              to="/dashboardpage"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-100'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/resultpage"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-100'
              }`}
            >
              Result
            </Link>
          </div>

          {/* Language Selector and Buttons */}
          <div className="flex items-center space-x-4">
            <div
              className={`px-3 py-1 rounded-full border ${
                isScrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-white'
              }`}
            >
              <span className="mr-1">🌐</span> English
            </div>
            <Link
              to="/loginpage"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signuppage"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Main Content */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Lock size={36} className="text-orange-500 mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">AI Identity Verification</h2>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                Secure, Smart & Instant ID Verification with OCR and AI-Powered Tampering Detection.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/loginpage"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  Login <ChevronRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/signuppage"
                  className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors flex items-center"
                >
                  Sign Up <ChevronRight size={18} className="ml-2" />
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="md:w-2/5 bg-gradient-to-br from-indigo-100 to-purple-100 p-6 flex items-center justify-center">
              <div className="relative">
                {/* Decorative Illustration */}
                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full border-4 border-indigo-500 relative">
                    <div className="absolute -bottom-6 -right-6 w-12 h-20 bg-indigo-500 rounded-br-full transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 flex justify-center items-center">
            <p className="text-gray-600 text-sm">
              Built with <span className="text-red-500">❤</span> using React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Award className="text-yellow-500 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;