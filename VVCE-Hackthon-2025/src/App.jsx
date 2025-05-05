// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Router from './Router';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import DashboardPage from './Pages/DashboardPage';
import AdminPanel from './Pages/AdminPanel';
import ResultPage from './Pages/ResultPage';
import UploadForm from './Pages/UploadForm';

function App() {
  return (
    // <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/loginpage' element={<LoginPage/>}/>
      <Route path='/signuppage' element={<SignupPage/>}/>
      <Route path='/dashboardpage' element={<DashboardPage/>}/>
      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/resultpage' element={<ResultPage/>}/>
      <Route path='/uplodform' element={<UploadForm/>}/>

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
