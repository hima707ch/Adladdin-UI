// App.jsx - Main application component
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import InterviewRoom from './pages/InterviewRoom';
// import PracticeQuestions from './pages/PracticeQuestions';
// import Profile from './pages/Profile';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import NotFound from './pages/NotFound';

const App = () => {
  const [loading, setLoading] = useState(false);

  const {isAuth, user} = useSelector(s=>s.user)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/dashboard" 
              element={isAuth ? <Dashboard user={user} /> : <Navigate to="/login" />} 
            />
            {/* <Route 
              path="/interview/:id" 
              element={isAuthenticated ? <InterviewRoom user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/practice" 
              element={isAuthenticated ? <PracticeQuestions user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={isAuthenticated ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} 
            /> */}
            {/* <Route 
              path="/login" 
              element={!isAuthenticated ? <Login onLogin={login} /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/register" 
              element={!isAuthenticated ? <Register onLogin={login} /> : <Navigate to="/dashboard" />} 
            />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;