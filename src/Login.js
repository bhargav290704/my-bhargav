import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebaseconfig'; // Import Firebase Auth
import './App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    '6256878.jpg',       // Replace with your actual image paths
    'images .jpg',      // Replace with your actual image paths
    'image1.jpg',       // Replace with your actual image paths
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
      alert("incorrect password");
    }
  };

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
        <form onSubmit={handleLogin}>
          <div className="form-container">
            <h1 className="app-title">👋 heyreach</h1>
            <h2 className="login-title">Sign In</h2>
            <h3 className="signup-text" style={{ fontWeight: 'normal' }}>
              Don't have an account? <Link to="/register">Sign up</Link>
            </h3>

            {error && <p className="error-text">{error}</p>}

            <div className="input-field">
              <label className="input-label">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-box"
              />
            </div>

            <div className="input-field">
              <label className="input-label">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
