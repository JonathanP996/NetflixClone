import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If user is logged in and trying to access login page, redirect to home
      if (user && location.pathname === '/login') {
        console.log("Already logged in, redirecting to home");
        navigate('/');
      }
      // If no user and trying to access anything other than login, redirect to login page
      else if (!user && location.pathname !== '/login') {
        console.log("Not logged in, redirecting to login");
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [location.pathname, navigate]);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;