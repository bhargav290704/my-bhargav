import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaChartLine, FaCog, FaLinkedin, FaUser, FaBullhorn, FaInbox, FaNetworkWired, FaSignOutAlt } from 'react-icons/fa'; // Import the required icons
import '../App.css'; // Import the CSS file

const Sidebar = () => {
  const navigate = useNavigate();  // Hook for navigation

  const handleSignOut = () => {
    // Perform sign-out logic here (e.g., clear auth token, reset state, etc.)
    console.log("User signed out!");

    // Redirect to Sign In page
    navigate('/login');
  };

  return (
    <div className="sidebar-container">
      <h2 className="logo1">👋</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard"><FaTachometerAlt /></Link></li>
          <li><Link to="/analytics"><FaChartLine /></Link></li>
          <li><Link to="/linkedin"><FaLinkedin /></Link></li>
          <li><Link to="/leads"><FaUser /></Link></li>
          <li><Link to="/campaigns"><FaBullhorn /></Link></li>  {/* Added Campaign Icon */}
          <li><Link to="/inbox"><FaInbox /></Link></li>
          <li><Link to="/network"><FaNetworkWired /></Link></li>
          <li><Link to="/settings"><FaCog /></Link></li>
          <li><button onClick={handleSignOut} className="signout-btn"><FaSignOutAlt /></button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
