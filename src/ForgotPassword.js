import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

export default function ForgotPassword() {
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
      {/* Left Side - Forgot Password Form */}
      <div className="left-pane">
        <form action="/action_page.php">
          <div className="form-container">
            <h1 className="app-title" style={{ textAlign: 'left', marginBottom: '30px' }}>👋heyreach</h1>
            <h1 className="login-title" style={{ textAlign: 'left', marginBottom: '5px' }}>Forgot Password?</h1>
            <h3 className="signup-text" style={{ textAlign: 'left', marginTop: '0px', fontWeight: 'normal' }}>
              Fill the form to reset password.
            </h3>

            <div className="input-label">
            <div className="input-field">
              <label className="input-label">Email address</label>
              <input
                type="text"
                name="Email address"
                placeholder="Email address"
                required
                className="input-box"
              />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <div className="remember">
                  <label className="remember-label" style={{ textAlign: 'left', margin: '0' }}>
                    Return to <Link to="/login">Sign in</Link>
                  </label>
                  </div>
                </div>
              </div>
              <input className="submit-btn1" type="submit" value="Send reset link" />
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
