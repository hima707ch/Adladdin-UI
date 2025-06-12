import React from 'react'
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, TrendingUp, Users, Target, CheckCircle, Star, Menu, X, ChevronDown } from 'lucide-react';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Platform', href: '#platform', hasDropdown: true },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources', hasDropdown: true },
    { name: 'Company', href: '#company', hasDropdown: true }
  ];


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  {/* Particle effect around logo */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
                <span className="text-2xl font-bold text-white">
                  Ad<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">laddin</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </a>
                  
                  {/* Dropdown hover effect */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-2">
                        <a href="#" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          Feature 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          Feature 2
                        </a>
                        <a href="#" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                          Feature 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-white/90 hover:text-white font-medium transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200">
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white/90 hover:text-white font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button className="block w-full text-left text-white/90 hover:text-white font-medium transition-colors">
                    Sign In
                  </button>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
  )
}

export default Header