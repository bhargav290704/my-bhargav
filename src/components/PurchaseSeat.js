import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../App.css';

const SeatSelector = () => {
    const navigate = useNavigate();

    const handleDismissClick = () => {
    // Navigate to the LinkedIn page when button is clicked
    navigate('/linkedin');
    };

    const [seats, setSeats] = useState(10);
    const maxSeats = 20;
  
    const handleSliderChange = (e) => {
      setSeats(Number(e.target.value));
    };
  
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSeats(value);
    };

    const pricePerSeat = seats > 10 ? 49 : 59;




  return (
    <>
        <header className="Header">
            <h2>Linkedin Accounts</h2>

            <div className="header-right">
                <h2>Purchase Seats</h2>
                <button className="dismiss-btn" onClick={handleDismissClick}>✖ Dismiss Purchase</button>
            </div>
        </header>

        <div className="PSMainWrapper">
            {/* Top Panel - Pricing Calculator */}
            <div className="panel1">
                <h2>Pricing Calculator</h2>
                <div className="PSMainWrapper1">
                    <div classname="PSeatText">
                        <p>Price per seat:</p>
                    </div>
                    <div classname="PSeatText1">
                        <p>${pricePerSeat}</p>
                    </div>
                </div>
                <div className="seat-selector">
                <div className="parent-container">
                    <div className="input-container">
                        <label htmlFor="seat-input">Add 20+ seats:*</label>
                        <input
                            type="number"
                            id="seat-input"
                            value={seats}
                            min="20"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="total-container">
                        <span className="total-label">Monthly total:</span>
                        <span className="total-amount">${seats * pricePerSeat}</span>
                    </div>
                </div>


                    <div className="slider-container1">
                        <input
                        type="range"
                        min="1"
                        max="20"
                        step="1"
                        value={seats > 20 ? 20 : seats}
                        onChange={handleSliderChange}
                        className="slider1"
                        />
                    </div>

                    <div className="seat-labels">
                        <span className="seat-min">1 seat</span>
                        <span className="seat-max">20 seats</span>
                    </div>

                    
                    </div>
                    <div className="Purchasenow-btn">
                        <button className="purchase-btn">Purchase Now</button>
                    </div>
                    <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="search-input"
                    />
                    <button className="search-btn">Submit</button>
                    </div>
                    <div className="bookdemo">
                        <Link to="/forgot-password" style={{ fontSize: '0.8rem' }}>Book a Demo</Link>
                    </div>
            </div>

            {/* Bottom Panel - Features */}
            <div className="panel2">
                <h2>🎉Features</h2>
                {/* Add feature list here */}
                <div className="feature-list">
                    <p>✅Unlimited connection requests</p>
                    <p>✅Unlimited messages</p>
                    <p>✅One billing for all LinkedIn accounts</p>
                    <p>✅All features included. Everything unlimited</p>
                    <p>✅100% Cloud based solution</p>
                    <p>✅Sales Navigator compatible</p>
                    <p>✅Synced account rotation outreach</p>
                    <p>✅HubSpot, Pipedrive, Close and GoHighLevel native integration</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default function PurchaseSeats() {
  return <SeatSelector />;
}

