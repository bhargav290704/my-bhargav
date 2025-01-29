import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../App.css';
import styled from 'styled-components';

const data = [
  { name: 'Jan', value: 1550 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
];

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
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

        <div className="card">
          <p>Enter date range:</p>
          <input type="date" className="date-input" />
          <input type="date" className="date-input" />
        </div>
      </div>

      <div className="cards-container">
        <div className="card1"><p>Connections Sent</p><p>0</p></div>
        <div className="card1"><p>Connections Accepted</p><p>0</p></div>
        <div className="card1"><p>Message Sent</p><p>0</p></div>
        <div className="card1"><p>Message Replies</p><p>0</p></div>
        <div className="card1"><p>InMails Sent</p><p>0</p></div>
        <div className="card1"><p>InMails Replies</p><p>0</p></div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  margin-left: 60px;
  padding: 20px;
  width: calc(100% - 80px);
`;

export default Dashboard;
