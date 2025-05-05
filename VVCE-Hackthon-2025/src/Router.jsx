
import { Routes, Router } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import UploadForm from './Pages/UploadForm';
import ResultPage from './Pages/ResultPage';
import AdminPanel from './Pages/AdminPanel';

const Router = () => {
  return (
    <Routes>
      <Router path="/" element={<LandingPage />} />
      <Router path="/signup" element={<SignupPage />} />
      <Router path="/login" element={<LoginPage />} />
      <Router path="/dashboard" element={<DashboardPage />} />
      <Router path="/uploadform" element={<UploadForm />} />
      <Router path="/result" element={<ResultPage />} />
      <Router path="/admin" element={<AdminPanel />} />
      <Router path="/learnpage" element={<LearnPage />} />
    </Routes>
  );
};

export default Router;
