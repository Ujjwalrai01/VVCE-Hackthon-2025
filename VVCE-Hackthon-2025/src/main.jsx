// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom';
// import './index.css'
// import App from './App.jsx'
// import './i18n'; 

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//      <App />
//   </BrowserRouter>
// )


// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/Store'; 
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);