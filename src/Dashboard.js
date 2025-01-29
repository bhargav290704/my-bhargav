import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Include custom styles for your dashboard

export default function Dashboard() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleApply = () => {
    if (startDate && endDate) {
      console.log('Date Range Selected:', { startDate, endDate });
      setShowDropdown(false); // Close dropdown after applying the range
    } else {
      alert('Please select both start and end dates.');
    }
  };

  const handleLogout = () => {
    // Perform any logout logic here, like clearing tokens/session
    console.log('User logged out');
    navigate('/login'); // Redirect to the sign-in page
  };

  return (
    <div className="dashboard-wrapper">
      {/* Left Panel: Sidebar */}
      <div className="dashboard-container">
        <aside className="sidebar">
          <h2 className="logo">👋</h2>
          <a href="#profile" className="nav-link">
            <img src="dashboard.png" alt="Dashboard" style={{ width: 24, height: 24 }} />
            <img src="linkedin.png" alt="Linkedin" style={{ width: 24, height: 24 }} />
            <img src="user.png" alt="User Profile" style={{ width: 24, height: 24 }} />
            <img src="networking.png" alt="Networking" style={{ width: 24, height: 24 }} />
            <img src="connection.png" alt="Connection" style={{ width: 24, height: 24 }} />
            <img src="message.png" alt="Message" style={{ width: 24, height: 24 }} />
            <img src="communication.png" alt="Communication" style={{ width: 24, height: 24 }} />
            <img src="settings.png" alt="Settings" style={{ width: 24, height: 24 }} />
            {/* Sign Out Icon */}
            <img
              src="logout.png"
              alt="Logout"
              style={{ width: 24, height: 24, marginTop: 280, cursor: 'pointer' }}
              onClick={handleLogout}
            />
          </a>
        </aside>
      </div>

      {/* Right Panel: Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, User!</h1>
          <p>Your personalized dashboard.</p>
        </header>

        <section className="content">
          {/* Section 1: Overview */}
          
          <div className="card">
            <h3>Select senders:</h3>
            <select className="dropdown-menu">
              <option value="account">Account Details</option>
              <option value="activity">Activity</option>
              <option value="security">Security Settings</option>
              <option value="billing">Billing Information</option>
            </select>
          </div>

          {/* Section 2: Analytics */}
          <div className="card">
            <h3>Select campaign:</h3>
            <select className="dropdown-menu">
              <option value="account">Account Details</option>
              <option value="activity">Activity</option>
              <option value="security">Security Settings</option>
              <option value="billing">Billing Information</option>
            </select>
          </div>

          {/* Section 3: Settings */}
          <div className="card">
            <h3>Select Date Range:</h3>

            {/* Dropdown Menu */}
            <div className="dropdown-container">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                {startDate && endDate
                  ? `${startDate} - ${endDate}`
                  : 'Select Date Range ▼'}
              </button>

              {/* Date Range Inputs (conditionally rendered) */}
              {showDropdown && (
                <div className="date-range-dropdown">
                  <div className="input-group">
                    <label>Start Date:</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="date-input"
                    />
                  </div>
                  <div className="input-group">
                    <label>End Date:</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="date-input"
                    />
                  </div>
                  <button className="apply-btn" onClick={handleApply}>
                    Apply
                  </button>
                </div>
                
              )}
            </div>
          </div>
        <div className="cards-container">
              <div className="card1">
                <h4>Connections Sent</h4>
                <p>0</p>
              </div>
              <div className="card1">
                <h4>Connections Accepted</h4>
                <p>0</p>
              </div>
              <div className="card1">
              <h4>Message Sent</h4>
              <p>0</p>
              </div>
              <div className="card1">
              <h4>Message Replies</h4>
              <p>0</p>
              </div>
              <div className="card1">
              <h4>InMails Sent</h4>
              <p>0</p>
              </div>
              <div className="card1">
              <h4>InMails Replies</h4>
              <p>0</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
