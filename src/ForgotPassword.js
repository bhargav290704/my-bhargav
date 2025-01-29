import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "./Firebaseconfig"; // Import the Firebase configuration
import "./App.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Check if email exists in Firebase Auth
  const checkEmailExists = async (email) => {
    try {
      // Use Firebase method to get sign-in methods for the email
      const methods = await fetchSignInMethodsForEmail(auth, email);
      console.log(methods)
      // If methods exist, email is valid
      return methods.length > 0;
    } catch (err) {
      console.error("Error checking email existence:", err);
      // Firebase error if email doesn't exist or some other issue
      return false;
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    try {
      // Send reset email
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent! Please check your email.");
      setError(""); // Clear any existing error message
    } catch (err) {
      console.error("Error sending reset email:", err);

      // Check specific error codes for more details
      if (err.code === "auth/invalid-email") {
        setError("The email address is not valid.");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email address.");
      } else {
        setError("Failed to send reset link. Please try again.");
      }
      setMessage(""); // Clear any success message
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
      {/* Left Side - Forgot Password Form */}
      <div className="left-pane">
        <form onSubmit={handlePasswordReset}>
          <div className="form-container">
            <h1 className="app-title" style={{ textAlign: "left", marginBottom: "30px" }}>
              👋heyreach
            </h1>
            <h1 className="login-title" style={{ textAlign: "left", marginBottom: "5px" }}>
              Forgot Password?
            </h1>
            <h3
              className="signup-text"
              style={{
                textAlign: "left",
                marginTop: "0px",
                fontWeight: "normal",
              }}
            >
              Fill the form to reset password.
            </h3>

            <div className="input-label">
              <div className="input-field">
                <label className="input-label">Email address</label>
                <input
                  type="email"
                  name="Email address"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-box"
                />
              </div>

              {message && <p style={{ color: "green" }}>{message}</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}

              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
                  <div className="remember">
                    <label className="remember-label" style={{ textAlign: "left", margin: "0" }}>
                      Return to <Link to="/login">Sign in</Link>
                    </label>
                  </div>
                </div>
              </div>
              <button className="submit-btn1" type="submit">
                Send reset link
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
