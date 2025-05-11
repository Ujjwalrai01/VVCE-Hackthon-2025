
// // import { Routes, Router } from 'react-router-dom';
// // import LandingPage from './Pages/LandingPage';
// // import SignupPage from './Pages/SignupPage';
// // import LoginPage from './Pages/LoginPage';
// // import DashboardPage from './Pages/DashboardPage';
// // import UploadForm from './Pages/UploadForm';
// // import ResultPage from './Pages/ResultPage';
// // import AdminPanel from './Pages/AdminPanel';
// // import Chatbot from './Pages/Chatbot';

// // const Router = () => {
// //   return (
// //     <Routes>
// //       <Router path="/" element={<LandingPage />} />
// //       <Router path="/signup" element={<SignupPage />} />
// //       <Router path="/login" element={<LoginPage />} />
// //       <Router path="/dashboard" element={<DashboardPage />} />
// //       <Router path="/uploadform" element={<UploadForm />} />
// //       <Router path="/result" element={<ResultPage />} />
// //       <Router path="/admin" element={<AdminPanel />} />
// //       <Router path="/learnpage" element={<LearnPage />} />
// //       <Router path="/chatbot" element={<Chatbot />} />
// //     </Routes>
// //   );
// // };

// // export default Router;




// import { Routes, Route } from 'react-router-dom';
// import LandingPage from './Pages/LandingPage';
// import SignupPage from './Pages/SignupPage';
// import LoginPage from './Pages/LoginPage';
// import DashboardPage from './Pages/DashboardPage';
// import UploadForm from './Pages/UploadForm';
// import ResultPage from './Pages/ResultPage';
// import AdminPanel from './Pages/AdminPanel';
// import Chatbot from './Pages/Chatbot';

// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/dashboard" element={<DashboardPage />} />
//       <Route path="/uploadform" element={<UploadForm />} />
//       <Route path="/result" element={<ResultPage />} />
//       <Route path="/admin" element={<AdminPanel />} />
//       <Route path="/learnpage" element={<LearnPage />} />
//       <Route path="/chatbot" element={<Chatbot/>}/>
//     </Routes>
//   );
// };

// export default Router;
























import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import UploadForm from './Pages/UploadForm';
import ResultPage from './Pages/ResultPage';
import AdminPanel from './Pages/AdminPanel';
import Chatbot from './Pages/Chatbot';
import Render from './layouts/Render';

// import ApplicationsTable from './dashboard/ApplicationsTable';
// import BankSelectors from './dashboard/BankSelectors';
// import BranchLookup from './dashboard/BranchLookup';
// import DynamicForm from './dashboard/DynamicForm';
// import EditDeleteForm from './dashboard/EditDeleteForm';
// import FormStatusCard from './dashboard/FormStatusCard';
// import SearchFilter from './dashboard/SearchFilter';
// import UserProfile from './dashboard/UserProfile';
// import Dashboard from './dashboard/Dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Render />} />
      <Route path="/uploadform" element={<UploadForm />} />
      {/* <Route path="/result" element={<ResultPage />} /> */}
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/learnpage" element={<LearnPage />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/result/:docId" element={<ResultPage />} />

      {/* Routes for additional components */}
      {/* <Route path="/applications-table" element={<ApplicationsTable />} />
      <Route path="/bank-selectors" element={<BankSelectors />} />
      <Route path="/branch-lookup" element={<BranchLookup />} />
      <Route path="/dynamic-form" element={<DynamicForm />} />
      <Route path="/edit-delete-form" element={<EditDeleteForm />} />
      <Route path="/form-status-card" element={<FormStatusCard />} />
      <Route path="/search-filter" element={<SearchFilter />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default Router;