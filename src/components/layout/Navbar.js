// components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../../pages/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/userSlice';
import axios from 'axios';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {isAuth} = useSelector(s=>s.user)

  const dispatch = useDispatch();

  async function onLogout(){
    await axios.post(`/api/logout`)
    dispatch( logout() )
  }
  
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 font-bold text-xl">
            InterviewPro
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Home</Link>
                {isAuth && (
                  <>
                    <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Dashboard</Link>
                    <Link to="/practice" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Practice</Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isAuth ? (
                <div className="flex items-center">
                  <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                    Profile
                  </Link>
                  <button
                    onClick={onLogout}
                    className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-indigo-700 hover:bg-indigo-800"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                        <GoogleLoginButton />
                </div>
              )}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 focus:outline-none"
            >
              <svg
                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {isAuth && (
            <>
              <Link 
                to="/dashboard" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/practice" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                Practice
              </Link>
            </>
          )}
          {isAuth ? (
            <>
              <Link 
                to="/profile" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;