import React, { useState } from 'react';
import { FaSearch, FaUserPlus } from "react-icons/fa";
import "../App.css"

const Settings = () => {
  const [activeTab, setActiveTab] = useState("senders");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const integrations = [
    {
      logo: "clay.jpg", // Replace with actual icons
      title: "Clay",
      description: "Get you enriched leads from Clay into HeyReach",
      buttonText: "Connect with Clay",
    },
    {
      logo: "RB2B.jpg",
      title: "RB2B",
      description: "Get leads from RB2B into HeyReach",
      buttonText: "Connect with RB2B",
    },
    {
      logo: "weezly.png",
      title: "Weezly",
      description: "Create personalized videos for each lead",
      buttonText: "Connect with Weezly",
    },
    {
      logo: "smart.jpg",
      title: "SmartReach AI",
      description: "Hyper-personalize your sequences, messages, and connection notes",
      buttonText: "Connect with SmartReach AI",
    },
    {
      logo: "slack.png",
      title: "Slack",
      description: "Get a Slack message when an event occurs in your workspace.",
      buttonText: "Connect with Slack",
    },
    {
      logo: "Zapier.png",
      title: "Zapier",
      description: "Send a zap when an event occurs in your workspace.",
      buttonText: "Integrate with Zapier",
    },
  ];


  return (
    <>

    <header className="Header">
      <h2>Settings</h2>
    </header>

    <div className="PSMainWrapper">
            <div className="Spanel1">
            <div className="STabContainer">
            <button
          className={`TabButton ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile Settings
        </button>

        <button
          className={`TabButton ${activeTab === "team" ? "active" : ""}`}
          onClick={() => setActiveTab("team")}
        >
          Team Members
        </button>

        <button
          className={`TabButton ${activeTab === "billing" ? "active" : ""}`}
          onClick={() => setActiveTab("billing")}
        >
          Billing
        </button>

        <button
          className={`TabButton ${activeTab === "integrations" ? "active" : ""}`}
          onClick={() => setActiveTab("integrations")}
        >
          Integrations
        </button>
      </div>
      </div>

      <div className="Spanel2">
        {activeTab === "profile" && (
          <>
            <header className="SHeader">
              <h2>Profile Settings</h2>
            </header>

            <div className="Sinput-field">
              <label className="input-label">Current password</label>
              <input
                value={currentPassword}
                type="password"
                placeholder="Current password"
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="input-box"
              />
            </div>

            <div className="Sinput-field1">
              <label className="input-label">New password</label>
              <input
                value={newPassword}
                type="password"
                placeholder="New password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-box"
              />
            </div>

            <div className="Sinput-field1">
              <label className="input-label">Confirm new password</label>
              <input
                value={confirmNewPassword}
                type="password"
                placeholder="Confirm new password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="input-box"
              />
            </div>

            <button type="submit" className="Savechanges-btn">
              Save changes
            </button>
          </>
        )}

        {activeTab === "team" && (
          <>
            <header className="SHeader">
              <h2>Team Members</h2>
            </header>

            <div className="team-actions" style={{ borderRadius:'8px'}}>
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
              />
            
              <button className="invite-btn" style={{ borderRadius:'8px', padding:'10px', cursor:'pointer'}}><FaUserPlus className="invite-icon" style={{ marginRight: '5px' }} />Invite Friends</button>
            </div>

            
            <table className="Table1">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Role</th>
                  <th>Last Active</th>
                  <th>Status</th>
                </tr>
              </thead>
            </table>

            <button  type="submit" className="IM-btn">Invite members</button>

          </>
        )}

        {activeTab === "billing" && (
          <>
            <header className="SHeader">
              <h2>Billing</h2>
            </header>
            <hr />

            <div className="Btext">
              <p>Your trial will end on Feb 11, 2025 .</p>
            </div>

              <button className="upgrade-btn">Upgrade now</button>

            <table className="Table1">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Role</th>
                  <th>Last Active</th>
                  <th>Status</th>
                </tr>
              </thead>
            </table>

            <button  type="submit" className="IM-btn">Invite members</button>

          </>
        )}

        {activeTab === "integrations" && (
          <>
            <header className="SHeader">
              <h2>Integrations</h2>
            </header>
            <hr />

            <div className="integrations-container">
        {integrations.map((integration, index) => (
          <div key={index} className="integration-card">
            {/* Logo */}
            <div className="integration-logo">
              <img src={integration.logo} alt={integration.title} />
            </div>

            {/* Title */}
            <h3 className="integration-title">{integration.title}</h3>

            {/* Description */}
            <p className="integration-description">{integration.description}</p>

            {/* Divider */}
            <hr className="card-divider" />

            {/* Button */}
            <button className="integration-button">{integration.buttonText}</button>
          </div>
          
        ))}
      </div>
      <header className="SHeader">
              <h2>API & Webhooks</h2>
            </header>
            

            

    
          </>
        )}


            </div>

  </div>
    </>
  );
};

export default Settings;
