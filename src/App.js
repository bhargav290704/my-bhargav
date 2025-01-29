import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Logout from './Logout'; // Import the Logout component
import Dashboard from './Dashboard';




function App() {
  return (
    <Router>
      <div>
        {/* Define routes for Login and Register */}
        <Routes>
          <Route path="/" element={<Login />} /> {/* Default route */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/" element={<Login />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
