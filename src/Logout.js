import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebaseconfig'; // Import Firebase auth
import './App.css';

export default function Logout() {
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login'); // Redirect to login page if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Error during logout:', err);
    }
  };

  return (
    <div className="logout-container">
      <h1>Welcome!</h1>
      <p>You are successfully logged in.</p>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}
