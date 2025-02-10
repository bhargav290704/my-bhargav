import React, { useState } from "react";
import { FaInfoCircle, FaUserCircle } from "react-icons/fa"; // Import icons
import '../App.css';
import { FaLinkedin } from "react-icons/fa";


export default function Network() {

  return (
    <>
      <header className="Header">
        <h2>My Network</h2>
      </header>

      

      <div className="LMainWrapper1">
        <div className="NBar">
            <div className="NDropdown">
                <select className="dropdown-menu">
                    <option value="account">Filter by account:</option>
                </select>
            </div>
            <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        
        <div className="LUserIcon">
          <FaUserCircle className="user-icon" />
        </div>

        <div className="LText1">
          <p>You don't have any LinkedIn accounts.</p>
        </div>

        <div className="LText2">
          <p>Go to the Accounts tab to connect your accounts. We then will sync your LinkedIn network into HeyReach.</p>
        </div>
      </div>
    </>
  );
}
