// components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">InterviewPro</h2>
            <p className="text-gray-300 text-sm mt-1">Practice tech interviews with peers</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white">Terms</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} InterviewPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
