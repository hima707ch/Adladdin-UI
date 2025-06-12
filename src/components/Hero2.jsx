import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, TrendingUp, Users, Target, CheckCircle, Star } from 'lucide-react';

const AdladdinHeroSplit = () => {
  const [currentWord, setCurrentWord] = useState(0);
  
  const scrollingWords = [
    "Performance",
    "Conversions", 
    "Revenue",
    "Growth",
    "Success",
    "Results"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % scrollingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Particle Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <line x1="100" y1="200" x2="300" y2="300" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="300" x2="500" y2="250" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="500" x2="400" y2="450" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="600" y1="400" x2="800" y2="350" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite" />
        </line>
        
        {/* Network Nodes */}
        <circle cx="100" cy="200" r="4" fill="#8B5CF6">
          <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="300" r="6" fill="#A855F7">
          <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="250" r="5" fill="#8B5CF6">
          <animate attributeName="r" values="5;9;5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="350" r="4" fill="#A855F7">
          <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm animate-fadeInUp">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              #1 AI-Powered Advertising Platform
            </div>

            {/* Main Heading with Scrolling Text */}
            <div className="space-y-4 animate-fadeInUp animation-delay-200">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your
                <br />
                Advertising Into
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                    {scrollingWords.map((word, index) => (
                      <span
                        key={word}
                        className={`absolute inset-0 transition-all duration-500 ${
                          index === currentWord
                            ? 'opacity-100 transform translate-y-0'
                            : index < currentWord
                            ? 'opacity-0 transform -translate-y-full'
                            : 'opacity-0 transform translate-y-full'
                        }`}
                      >
                        {word}
                      </span>
                    ))}
                    <span className="opacity-0">{scrollingWords[0]}</span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl animate-fadeInUp animation-delay-400">
              Adladdin harnesses the power of AI to create, optimize, and scale your advertising campaigns across all platforms. Experience magical results that seem impossible until they happen.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeInUp animation-delay-600">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90">AI-Powered Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90">Real-Time Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90">Multi-Platform Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90">Automated Scaling</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-fadeInUp animation-delay-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500K+</div>
                <div className="text-white/70 text-sm">Active Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">98%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">$2.4B</div>
                <div className="text-white/70 text-sm">Ad Spend Managed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-1000">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-2xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4 animate-fadeInUp animation-delay-1200">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm ml-2">4.9/5 from 10,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative animate-fadeInUp animation-delay-600">
            {/* Main Dashboard Mockup */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Campaign Dashboard</h3>
                    <p className="text-white/60 text-sm">Real-time performance</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Performance Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4">
                  <TrendingUp className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">+247%</div>
                  <div className="text-white/70 text-sm">ROI Increase</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-4">
                  <Users className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-2xl font-bold text-white">1.2M</div>
                  <div className="text-white/70 text-sm">Reach</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/80 text-sm">Performance Trend</span>
                  <Target className="w-4 h-4 text-purple-400" />
                </div>
                <div className="h-24 flex items-end space-x-2">
                  {[40, 65, 45, 80, 55, 90, 75, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Active Campaigns */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Active Campaigns</span>
                  <span className="text-green-400 text-sm">●  Live</span>
                </div>
                {['Google Ads Campaign', 'Facebook Lead Gen', 'LinkedIn B2B'].map((campaign, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white text-sm">{campaign}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
              <div className="text-white font-bold text-lg">AI</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-float animation-delay-2000">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            {/* Notification Popup */}
            <div className="absolute top-20 -left-12 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl animate-float animation-delay-4000">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-800 text-sm font-medium">Campaign optimized!</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">+23% conversion rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom CSS for animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }

  .animation-delay-800 {
    animation-delay: 0.8s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-1200 {
    animation-delay: 1.2s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

const Hero2 = ()=>{
    return (
      <>
        <style>{styles}</style>
        <AdladdinHeroSplit />
      </>
    );
}

export default Hero2
