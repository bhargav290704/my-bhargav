import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";  // Import date picker styles
import '../App.css';  // Import the extracted CSS file

const data = [
  { name: 'Jan', value: 1550 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
];

const pageSize = 2;  // Show 2 rows per page

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("senders");
  const [currentPage, setCurrentPage] = useState(1);


  const sendersData = [
    { name: "John Doe", status: "Active", campaigns: 5, connectionsSent: 120, connectionRate: "45%", messagesSent: 80, messageReplyRate: "20%", inMailsSent: 30, inMailReplyRate: "15%" },
    { name: "Jane Smith", status: "Inactive", campaigns: 3, connectionsSent: 90, connectionRate: "50%", messagesSent: 60, messageReplyRate: "25%", inMailsSent: 20, inMailReplyRate: "10%" },
    { name: "Alice Brown", status: "Active", campaigns: 4, connectionsSent: 100, connectionRate: "48%", messagesSent: 70, messageReplyRate: "22%", inMailsSent: 25, inMailReplyRate: "12%" },
  ];
  const campaignsData = [
    { status: "Running", name: "Campaign A", performance: "Good", progress: "75%", senders: 3 },
    { status: "Completed", name: "Campaign B", performance: "Excellent", progress: "100%", senders: 5 },
    { status: "Paused", name: "Campaign C", performance: "Average", progress: "50%", senders: 2 },
  ];

  const data = [
    { name: 'Jan', thisYear: 1500, lastYear: 1200 },
    { name: 'Feb', thisYear: 3000, lastYear: 2500 },
    { name: 'Mar', thisYear: 4500, lastYear: 4000 },
    { name: 'Apr', thisYear: 5000, lastYear: 4700 },
    { name: 'May', thisYear: 6000, lastYear: 5200 },
    { name: 'Jun', thisYear: 7500, lastYear: 6800 },
    { name: 'Jul', thisYear: 8500, lastYear: 7900 },
    { name: 'Aug', thisYear: 9000, lastYear: 8500 },
    { name: 'Sep', thisYear: 9500, lastYear: 9100 },
    { name: 'Oct', thisYear: 10500, lastYear: 9700 },
    { name: 'Nov', thisYear: 11000, lastYear: 10300 },
    { name: 'Dec', thisYear: 12000, lastYear: 11000 },
  ];

  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <header className="Header">
        <h2>Dashboard</h2>
      </header>
      
      <div className="card-container1">
        <div className="MainWrapper">
          <div className="ContentWrapper">
            
            {/* Dropdown Cards */}
            <div className="card-container">
              <div className="card">
                <p>Select senders:</p>
                <select className="dropdown-menu">
                  <option value="account">Account Details</option>
                  <option value="activity">Activity</option>
                  <option value="security">Security Settings</option>
                  <option value="billing">Billing Information</option>
                </select>
              </div>

              <div className="card">
                <p>Select campaign:</p>
                <select className="dropdown-menu">
                  <option value="account">Account Details</option>
                  <option value="activity">Activity</option>
                  <option value="security">Security Settings</option>
                  <option value="billing">Billing Information</option>
                </select>
              </div>

              {/* Date Range Picker */}
              <div className="card">
                <p>Enter date range:</p>
                <div className="DateRangeWrapper">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Start Date"
                    className="date-input"
                  />
                  <span> to </span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="End Date"
                    className="date-input"
                  />
                </div>
              </div>
            </div>
            <div className="cards-container">
              <div className="card1">
                <div className="blue-box"></div>
                <div className="text-container">
                  <p className="title">Connections Sent</p>
                  <p className="value">0</p>
                </div>
              </div>
              <div className="card1">
                <div className="green-box"></div>
                <div className="text-container">
                  <p className="title">Connections Accepted</p>
                  <p className="value">0</p>
                </div>
              </div>                 
              <div className="card1">
                <div className="orange-box"></div>
                <div className="text-container">
                  <p className="title">Message Sent</p>
                  <p className="value">0</p>
                </div>
              </div> 
              <div className="card1">
                <div className="violet-box"></div>
                <div className="text-container">
                  <p className="title">Message Replies</p>
                  <p className="value">0</p>
                </div>
              </div> 
              <div className="card1">
                <div className="skyblue-box"></div>
                <div className="text-container">
                  <p className="title">Inmails Sent</p>
                  <p className="value">0</p>
                </div>
              </div> 
              <div className="card1">
                <div className="black-box"></div>
                <div className="text-container">
                  <p className="title">Inmails Replies</p>
                  <p className="value">0</p>
                </div>
              </div> 
            </div>
            
            {/* Line Chart */}
            <div className="chart-container">
              <h3>Performance Overview</h3>
              <ResponsiveContainer width="101%" height={400}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }} />
                  <Legend />
                  <Line type="monotone" dataKey="thisYear" stroke="#007bff" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="lastYear" stroke="#ff7300" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Tabs */}
            <div className="TabContainer">
              <button 
                className={`TabButton ${activeTab === "senders" ? "active" : ""}`} 
                onClick={() => { setActiveTab("senders"); setCurrentPage(1); }}
              >
                All-Time Stats: LinkedIn Senders
              </button>
              <button 
                className={`TabButton ${activeTab === "campaigns" ? "active" : ""}`} 
                onClick={() => { setActiveTab("campaigns"); setCurrentPage(1); }}
              >
                All-Time Stats: Campaigns
              </button>
            </div>

            {/* Tab Content */}
            <div className="TabContent">
              <div className="TableWrapper">
                <h3>{activeTab === "senders" ? "LinkedIn Senders Stats" : "Campaign Stats"}</h3>
                <table className="Table">
                  <thead>
                    <tr>
                      {activeTab === "senders" ? (
                        <>
                          <th>Name</th>
                          <th>Status</th>
                          <th>Campaigns</th>
                          <th>Connections Sent</th>
                          <th>Connection Rate</th>
                          <th>Messages Sent</th>
                          <th>Message Reply Rate</th>
                          <th>InMails Sent</th>
                          <th>InMail Reply Rate</th>
                        </>
                      ) : (
                        <>
                          <th>Status</th>
                          <th>Name</th>
                          <th>Performance</th>
                          <th>Progress</th>
                          <th>Senders</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((item, index) => (
                      <tr key={index}>
                        {activeTab === "senders" ? (
                          <>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>{item.campaigns}</td>
                            <td>{item.connectionsSent}</td>
                            <td>{item.connectionRate}</td>
                            <td>{item.messagesSent}</td>
                            <td>{item.messageReplyRate}</td>
                            <td>{item.inMailsSent}</td>
                            <td>{item.inMailReplyRate}</td>
                          </>
                        ) : (
                          <>
                            <td>{item.status}</td>
                            <td>{item.name}</td>
                            <td>{item.performance}</td>
                            <td>{item.progress}</td>
                            <td>{item.senders}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                 {/* Pagination */}
                 <div className="Pagination">
                  <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                  <span>Page {currentPage} of {totalPages}</span>
                  <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
