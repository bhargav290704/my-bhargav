import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

export default function Register() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    'images.jpg',       // Replace with your actual image paths
    '6256878.jpg',      // Replace with your actual image paths
    'image1.jpg',     // Replace with your actual image paths
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="main-container">
      {/* Left Side - Registration Form */}
      <div className="left-pane">
        <form action="/action_page.php">
          <div className="form-container">
            <h1 className="app-title" style={{ textAlign: 'left', marginBottom: '30px' }}>👋heyreach</h1>
            <h1 className="login-title" style={{ textAlign: 'left', marginBottom: '5px' }}>Register</h1>
            <h3 className="signup-text" style={{ textAlign: 'left', marginTop: '0px', fontWeight: 'normal' }}>
              Already have an account? <Link to="/Login">Sign in</Link>
            </h3>

            <div className="input-label">
            <div className="input-field">
              <label className="input-label">First name</label>
              <input
                type="text"
                name="Email address"
                placeholder="First name"
                required
                className="input-box"
              />
            </div>
            <div className="input-field">
              <label className="input-label">Last name</label>
              <input
                type="text"
                name="Email address"
                placeholder="Last name"
                required
                className="input-box"
              />
            </div>
            <div className="input-field">
              <label className="input-label">Company</label>
              <input
                type="text"
                name="Email address"
                placeholder="Company"
                required
                className="input-box"
              />
            </div>
            <div className="input-field">
              <label className="input-label">Your Email address</label>
              <input
                type="text"
                name="Email address"
                placeholder="Your Email address"
                required
                className="input-box"
              />
            </div>
            <div className="input-field">
              <label className="input-label">Create a password</label>
              <input
                type="text"
                name="Email address"
                placeholder="Create a password"
                required
                className="input-box"
              />
            </div>
              <button type="submit" className="submit-btn">
              Register
            </button>
          </div>
          </div>
        </form>
      </div>

       {/* Right Side - Slider with Text */}
       <div className="right-pane">
        <div className="slider-container">
          {/* Text on top of the slider */}
          <h1 className="bgtitle">You are joining a movement!</h1>
          
          {/* Slider */}
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <img
            src={sliderImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slider-image"
          />
          <button className="slider-btn next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
