import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, OAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from './Firebaseconfig'; // Import Firebase Auth and Providers
import './App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // For login success or error messages
  const [messageType, setMessageType] = useState(''); // "success" or "error"
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Use navigate hook for redirection


  const sliderImages = [
    '6256878.jpg', // Replace with your actual image paths
    'images.jpg',  // Replace with your actual image paths
    'image1.jpg',  // Replace with your actual image paths
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Login successful!');
      setMessageType('success');
      navigate('/dashboard');
    } catch (err) {
      setMessage('Incorrect email or password.');
      setMessageType('error');
    }
  };

   // Google Sign-In
   const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  
    // Force account selection by setting the "prompt" parameter
    provider.setCustomParameters({
      prompt: "select_account",
    });
  
    try {
      await signInWithPopup(auth, provider);
      setMessage("Login successful with Google!");
      setMessageType("success");
      navigate('/logout');
    } catch (err) {
      setMessage("Google login failed.");
      setMessageType("error");
      console.error(err.message); // Log the error for debugging
    }
  };
  

  // Apple Sign-In
  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      await signInWithPopup(auth, provider);
      setMessage("Login successful with Apple!");
      setMessageType("success");
    } catch (err) {
      setMessage("Apple login failed.");
      setMessageType("error");
    }
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
            {message && (
              <div className={`message-box ${messageType}`}>
                <p>{message}</p>
              </div>
            )}

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
            {/* Chatbox-style notification */}

            {/* Google Sign-In Button */}
        <div className="social-signin">
          <button onClick={handleGoogleSignIn} className="google-btn">
            Sign in with Google
          </button>
        </div>

        {/* Apple Sign-In Button */}
        <div className="social-signin">
          <button onClick={handleAppleSignIn} className="apple-btn">
            Sign in with Apple
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
