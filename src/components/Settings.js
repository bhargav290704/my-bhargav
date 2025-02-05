import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState("senders");
  const [password, setPassword] = useState("");


  return (
    <>

    <header className="Header">
      <h2>Settings</h2>
    </header>

    <div className="PSMainWrapper">
            <div className="Spanel1">
            <div className="STabContainer">
              <button 
                className={`TabButton ${activeTab === "senders" ? "active" : ""}`} 
              >
                Profile Settings
              </button>
              
              <button 
                className={`TabButton ${activeTab === "campaigns" ? "active" : ""}`} 
              >
                Team Members
              </button>

              <button 
                className={`TabButton ${activeTab === "campaigns" ? "active" : ""}`} 
              >
                Billing
              </button>

              <button 
                className={`TabButton ${activeTab === "campaigns" ? "active" : ""}`} 
              >
                Intigrations
              </button>

            </div>
            </div>

            <div className="Spanel2">
            <header className="SHeader">
              <h2>Profile Settings</h2>
            </header>
            <div className="Sinput-field">
                  <label className="input-label">Current password</label>
                  <input
                      type="password"
                      placeholder="Current password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input-box"
                  />
              </div>

              <div className="Sinput-field1">
                  <label className="input-label">New password</label>
                  <input
                      type="password"
                      placeholder="New password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input-box"
                  />
              </div>

              <div className="Sinput-field1">
                  <label className="input-label">Confirm new password</label>
                  <input
                      type="password"
                      placeholder="Confirm new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input-box"
                  />
              </div>

              <button type="submit" className="Savechanges-btn">Save changes</button>
            </div>
    

    </div>
    </>
  );
};

export default Settings;
