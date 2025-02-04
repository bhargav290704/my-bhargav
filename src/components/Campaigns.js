import React, { useState } from "react";
import { Search } from "lucide-react";
import '../App.css';


export default function Leads() {
    const [activeTab, setActiveTab] = useState("senders");
    const [currentPage, setCurrentPage] = useState(1);
    const data = []; // Define your data array here
    const sendersData = []; // Define your sendersData array here
    const campaignsData = []; // Define your campaignsData array here
    const pageSize = 10; // Define your pageSize here
    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = (activeTab === "senders" ? sendersData : campaignsData).slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


    return(
        <>
            <header className="Header">
                <h2>Campaigns</h2>
            </header>

            <div className="LeadsMainWrapper">
                <div className="top-container">
                <div className="leadscard">
                        <select className="dropdown-menu">
                        <option value="account">All</option>
                        <option value="activity">Draft</option>
                        <option value="activity">Starting</option>
                        <option value="activity">Ongoing</option>
                        <option value="activity">Paused</option>
                        <option value="activity">Finished</option>
                        <option value="activity">Cancelled</option>
                        <option value="activity">Failed</option>
                        </select>
                    </div>

                    <div className="leadssearch-container1">
                        <input
                            type="text"
                            placeholder="Serach by title or discription"
                            className="leadssearch-container"
                        />
                    </div>

                    <div className="leadscard">
                        <select className="dropdown-menu">
                        <option value="account">Select senders</option>
                        <option value="activity">Test</option>
                        </select>
                    </div>

                    <div className="LButtons">
                        <button className="addlist-btn">+ Add list</button>
                    </div>
                </div>        

              <div className="TableWrapper">
                <table className="Table">
                  <thead>
                    <tr>
                      {activeTab === "senders" ? (
                        <>
                          
                          <th>Status</th>
                          <th>Name</th>
                          <th>Performance</th>
                          <th>Progress</th>
                          <th>Senders</th>
                        </>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((item, index) => (
                      <tr key={index}>
                        {activeTab === "senders" ? (
                          <>
                            
                            <td>{item.status}</td>
                            <td>{item.name}</td>
                            <td>{item.performance}</td>
                            <td>{item.progress}</td>
                            <td>{item.senders}</td>
                          </>
                        ) : null}
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
        </>
    )
}