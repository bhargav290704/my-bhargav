import React, { useState } from "react";
import '../App.css';
import { useNavigate, Link } from "react-router-dom"; // Import navigation hook and Link component
import { Filter } from "lucide-react"; // Import the filter icon


const Inbox = () => {
      const [activeTab, setActiveTab] = useState("senders");
      const navigate = useNavigate(); // Hook to navigate on button click
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);

      const handleButtonClick = () => {
        setIsDrawerOpen(true);
      };
    
      const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
      };
      
      const handleAddAccount = () => {
        navigate('/linkedin'); // Navigate to the PurchaseSeats page
      };



  return (
    <>
        <header className="Header">
            <h2>Unibox</h2>
        </header>

        <div className="PSMainWrapper">
            <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
                <div className="drawer-content">
                    <button className="dclose-btn" onClick={handleCloseDrawer}>✖</button>
                    <h3>Unibox filters</h3>
                    <div className="DCARD">
                        <p>Campaigns:</p>
                        <select className="dropdown-menu">
                            <option value="account">All campaigns</option>
                            <option value="activity">Test</option>
                        </select>
                    </div>
                    
                    <p>Tag name:</p>
                    <select className="dropdown-menu">
                        <option value="account">Select tag</option>
                    </select>

                    <p>Message type:</p>
                    <select className="dropdown-menu">
                        <option value="account">All</option>
                        <option value="activity">Linkedin messages</option>
                        <option value="activity">Sales navigator messages</option>
                        <option value="activity">Recruiter messages</option>
                    </select>

                    <p>Last message from:</p>
                    <select className="dropdown-menu">
                        <option value="account">All</option>
                        <option value="activity">Sender</option>
                        <option value="activity">Lead</option>
                    </select>

                    <p>Sort by:</p>
                    <select className="dropdown-menu">
                        <option value="account">Unread first</option>
                        <option value="activity">Newest</option>
                    </select>

                    <button  type="submit" className="clr-btn">Clear filters</button>
                    <button  type="submit" className="apply-btn">Apply</button>
                </div>
            </div>

            <div className="Ipanel1">
            <div className="TabContainer">
              <button 
                className={`TabButton ${activeTab === "senders" ? "active" : ""}`} 
              >
                All Messages
              </button>
              
              <button 
                className={`TabButton ${activeTab === "campaigns" ? "active" : ""}`} 
              >
                Unread
              </button>
            </div>
            <div className="leadscard">
                        <select className="dropdown-menu">
                        <option value="account">senders</option>
                        </select>
            </div>
            <div className="leadssearch-container1">
                        <input
                            type="text"
                            placeholder="Search leads"
                            className="leadssearch-container"
                            style={{ width: "250px", marginTop: "10px" }}
                        />
                        <button
                            className="filter-button"
                            style={{
                                width: "50px",
                                height: "30px",
                                marginLeft: "10px",
                                marginBottom: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#f0f0f0",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginTop: "10px"
                            }}
                            onClick={handleButtonClick}
                        >
                            <Filter size={20} color="#333" />
                        </button>
                </div>

            <div className="INBOX">
                <div className="inboxtext">
                    <p>No Messages Yet</p>
                </div>
                <div className="inboxtext2">
                    <p>Once you add some, they'll show up here.</p>
                </div>
                <button className="addbutton" onClick={handleAddAccount}>Add your accounts</button>
            </div>
            </div>

            <div className="Ipanel2">
                <img 
                    src="nomessage.png" 
                    alt="No Messages" 
                    className="inbox-image" 
                    style={{ width: "150px", height: "150px", marginBottom: "5px", marginTop:"100px" }} 
                />
                <div className="inboxtext3">
                    <p>Start chatting</p>
                </div>
                <div className="inboxtext4">
                    <p>Click on a conversation to start</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Inbox;
