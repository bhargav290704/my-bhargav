import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTachometerAlt, FaChartLine, FaCog, FaLinkedin, FaUser, FaInbox, FaNetworkWired  } from 'react-icons/fa';  // Import the required icons
import '../App.css';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2 className="logo1">👋</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard"><FaTachometerAlt /></Link></li>
          <li><Link to="/analytics"><FaChartLine /></Link></li>
          <li><Link to="/settings"><FaCog /></Link></li>
          <li><Link to="/linkedin"><FaLinkedin /></Link></li>
          <li><Link to="/user"><FaUser /></Link></li>
          <li><Link to="/inbox"><FaInbox /></Link></li>
          <li><Link to="/network"><FaNetworkWired /></Link></li>
        </ul>
      </nav>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 60px;  /* Sidebar width */
  background-color: #333;
  color: white;
  position: fixed;
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  nav ul {
    list-style: none;
    padding-left: 0;    
  }

  nav ul li {
    padding: 12px;
    text-align: center;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 22px;
    display: flex;
    text-align: center;
  }

  nav ul li a svg {
    margin-right: 8px;  /* Space between the icon and the text */
  }
`;

export default Sidebar;
