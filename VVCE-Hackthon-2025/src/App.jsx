// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Router from './Router';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
// import DashboardPage from './Pages/DashboardPage';
import AdminPanel from './Pages/AdminPanel';
import ResultPage from './Pages/ResultPage';
import UploadForm from './Pages/UploadForm';
import Render from './layouts/Render';

function App() {
  
  return (
    // <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/dashboard' element={<Render/>}/>
      {/* <Route path='/admin' element={<AdminPanel/>}/> */}
      <Route path='/result/:docId' element={<ResultPage/>}/>
      <Route path='/uploadform' element={<UploadForm/>}/>

      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/admin" element={<Admin />} /> */}
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
