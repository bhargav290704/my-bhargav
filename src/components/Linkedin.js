import React, { useState } from "react";
import { FaInfoCircle, FaUserCircle } from "react-icons/fa"; // Import icons
import { useNavigate, Link } from "react-router-dom"; // Import navigation hook and Link component
import '../App.css';

export default function LinkedInAccounts() {
  const navigate = useNavigate(); // Hook to navigate on button click

  const handlePurchaseClick = () => {
    navigate('/purchase-seats'); // Navigate to the PurchaseSeats page
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const isFormValid = email !== "" && password !== "";

  return (
    <>
      <header className="Header">
        <h2>LinkedIn Accounts</h2>
      </header>

      <div className="LMainWrapper">
        <div className="LText">
          <FaInfoCircle className="info-icon" />
          <p>The LinkedIn accounts are called senders when put in a campaign. Connect multiple LinkedIn sending accounts on one campaign to increase your daily sending volume.</p>
        </div>
      </div>

      <div className="LMainWrapper1">
        {/* Buttons on the right */}
        <div className="LButtons">
          <button className="purchase-btn1" onClick={handlePurchaseClick}>+ Purchase seats</button>
        </div>
        <div className="dcontainer">
        <button className="LButtons" onClick={handleButtonClick}>
          Connect account
        </button>

      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-content">
          <button className="dclose-btn" onClick={handleCloseDrawer}>✖</button>
          <h3>Connect your account</h3>
          <div className="input-field">
              <label className="input-label">Your LinkedIn Email address</label>
              <input
                type="email"
                placeholder="Your LinkedIn Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-box"
              />
            </div>

            <div className="input-field">
              <label className="input-label">Your LinkedIn password</label>
              <input
                type="password"
                placeholder="Your LinkedIn password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-box"
              />
            </div>

            <div className="dcard">
                <p>Select which conversations to load into HeyReach</p>
                <select className="dropdown-menu">
                  <option value="account">Track and import all likedin Information</option>
                  <option value="activity">Track only conversations started from HeyReach</option>
                </select>
            </div>

            <div className="dconnect-btn1">
              <button type="submit"
                className="dconnect-btn"
                disabled={!isFormValid} >Connect Account</button>
            </div>

            <div className="dText">
              <p>Feeling lazy? Connect via our Chrome extension instead</p>
            </div>

            <div className="dbtn">
              <button className="dbtn1">Install Chrome Extension</button>
            </div>

            <div className="dText1">
              <p>*Only available for Google Chrome</p>
            </div>

            <div className="dText2">
              <p className="signup-text" style={{ fontWeight: 'normal' }}>add your <Link to="/register">own proxy</Link> here.</p>
            </div>
        </div>
      </div>
    </div>

        <div className="LUserIcon">
          <FaUserCircle className="user-icon" />
        </div>

        <div className="LText1">
          <p>You have no LinkedIn accounts yet.</p>
        </div>

        <div className="LText2">
          <p>Click on 'Connect account' to start.</p>
        </div>
      </div>
    </>
  );
}
