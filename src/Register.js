import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
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
  const navigate = useNavigate(); // Use the navigate hook for redirection

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Password validation function
  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,15})/; // Password validation regex
    return passwordRegex.test(password);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validate password
    if (!isPasswordValid(password)) {
      setError(
        'Password must be 8-15 characters long, include at least one special character, and one capital letter.'
      );
      setSuccess('');
      return;
    }

    try {
      // Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Send email verification
      await sendEmailVerification(userCredential.user, {
        url: 'http://localhost:3000/Login', // Replace with your app's verification handler URL
        handleCodeInApp: true,
      });
      // Show success message
      setSuccess('Registration successful! Please check your email to verify your account.');
      setError(''); // Clear any existing error

      // Delay redirection to allow the user to read the success message
      setTimeout(() => {
        navigate('/Login'); // Redirect to Sign In page
      }, 5000); // Wait for 5 seconds
    } catch (err) {
      setError(err.message);
      setSuccess(''); // Clear any existing success message
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [
    '6256878.jpg', // Replace with your actual image paths
    'images.jpg', // Replace with your actual image paths
    'image1.jpg', // Replace with your actual image paths
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
            <h1 className="app-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
              👋heyreach
            </h1>
            <h1 className="login-title" style={{ textAlign: 'left', marginBottom: '5px' }}>
              Register
            </h1>
            <h3 className="signup-text" style={{ textAlign: 'left', marginTop: '0px', fontWeight: 'normal' }}>
              Already have an account? <Link to="/Login">Sign in</Link>
            </h3>

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
                {!isPasswordValid(formData.password) && formData.password.length > 0 && (
                  <p className="error-message">
                    Password must be 8-15 characters long, include at least one special character, and one capital letter.
                  </p>
                )}
              </div>

              {/* Display success or error messages */}
              {success && <p className="success-message">{success}</p>}
              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="submit-btn">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right Side - Slider */}
      <div className="right-pane">
        <div className="slider-container">
          <h1 className="bgtitle">You are joining a movement!</h1>
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <img src={sliderImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-image" />
          <button className="slider-btn next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
