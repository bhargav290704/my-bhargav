import React, { useState } from "react";
import { FaInfoCircle, FaUserCircle } from "react-icons/fa"; // Import the info icon
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import '../App.css';



export default function LinkedInAccounts() {
  const navigate = useNavigate(); // Initialize navigate

  const handlePurchaseClick = () => {
    navigate('/purchaseseats'); // Redirect to the /purchase-seats page
  };

  

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
          <button className="purchase-btn" onClick={handlePurchaseClick}>+ Purchase seats</button>
          <button className="connect-btn">Connect account</button>
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


