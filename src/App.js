import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Sidebar Layout
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import LinkedInAccounts from './components/Linkedin'; // Added LinkedIn Accounts Page
import PurchaseSeats from './components/PurchaseSeat'; // Renamed for clarity

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected Routes with Sidebar */}
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/linkedin" element={<LinkedInAccounts />} />
          <Route path="/purchase-seats" element={<PurchaseSeats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
