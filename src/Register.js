import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebaseconfig'; // Import Firebase auth
import './App.css';



export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Register the user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Registration successful!');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

const [currentSlide, setCurrentSlide] = useState(0);
const sliderImages = [
  '6256878.jpg',       // Replace with your actual image paths
  'images.jpg',      // Replace with your actual image paths
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
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1 className="app-title" style={{ textAlign: 'left', marginBottom: '30px' }}>👋heyreach</h1>
            <h1 className="login-title" style={{ textAlign: 'left', marginBottom: '5px' }}>Register</h1>
            <h3 className="signup-text" style={{ textAlign: 'left', marginTop: '0px', fontWeight: 'normal' }}>
              Already have an account? <Link to="/Login">Sign in</Link>
            </h3>

            {/* Error or Success Messages */}
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <div className="input-label">
              <div className="input-field">
                <label className="input-label">First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="input-box"
                />
              </div>
              <div className="input-field">
                <label className="input-label">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="input-box"
                />
              </div>
              <div className="input-field">
                <label className="input-label">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="input-box"
                />
              </div>
              <div className="input-field">
                <label className="input-label">Your Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-box"
                />
              </div>
              <div className="input-field">
                <label className="input-label">Create a password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
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
