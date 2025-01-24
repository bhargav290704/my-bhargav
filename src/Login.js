import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';


export default function Login() {
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
      {/* Left Side - Login Form */}
      <div className="left-pane">
        <form action="/action_page.php">
          <div className="form-container">
            <h1 className="app-title">👋 heyreach</h1>
            <h2 className="login-title">Sign In</h2>
            <h3 className="signup-text" style={{ fontWeight: 'normal' }}>
              Don't have an account? <Link to="/register">Sign up</Link>
            </h3>

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

            <div className="input-field">
              <label className="input-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="input-box"
              />
            </div>

            <div className="remember-me">
              <div className="checkbox">
                <input type="checkbox" name="remember" />
              </div>
              <label className="remember-label">Remember me</label>
              <Link to="/forgot-password" style={{ fontSize: '0.8rem' }}>Forgot Password?</Link>
            </div>

            <button type="submit" className="submit-btn">
              Login
            </button>
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
