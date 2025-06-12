import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Zap, Target, TrendingUp, Users, BarChart3, Globe } from 'lucide-react';

const AdladdinHeroVariants = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [animate, setAnimate] = useState(true);

  const variants = [
    {
      name: "Gradient Orbs",
      component: <GradientOrbsHero />
    },
    {
      name: "Geometric Patterns",
      component: <GeometricHero />
    },
    {
      name: "Floating Elements",
      component: <FloatingElementsHero />
    },
    {
      name: "Wave Animation",
      component: <WaveHero />
    },
    {
      name: "Particle Network",
      component: <ParticleNetworkHero />
    },
    {
      name: "3D Perspective",
      component: <PerspectiveHero />
    }
  ];

  const nextVariant = () => {
    setCurrentVariant((prev) => (prev + 1) % variants.length);
  };

  const prevVariant = () => {
    setCurrentVariant((prev) => (prev - 1 + variants.length) % variants.length);
  };

  return (
    <div className="relative">
      {variants[currentVariant].component}
      
      {/* Navigation */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
          <button
            onClick={prevVariant}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <span className="text-white font-medium px-4">
            {currentVariant + 1} / {variants.length} - {variants[currentVariant].name}
          </span>
          <button
            onClick={nextVariant}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Variant 1: Gradient Orbs
const GradientOrbsHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-8 animate-fadeInUp">
          <Zap className="w-4 h-4 mr-2" />
          The Future of Digital Advertising
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fadeInUp animation-delay-200">
          Ad<span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">laddin</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fadeInUp animation-delay-400">
          Transform your marketing with AI-powered advertising that delivers exceptional results. Scale your campaigns, optimize performance, and maximize ROI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-600">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-colors flex items-center">
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// Variant 2: Geometric Patterns
const GeometricHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Geometric SVG Background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <polygon points="0,0 300,0 150,260" fill="url(#grad1)" className="animate-pulse">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 150 130;360 150 130"
            dur="20s"
            repeatCount="indefinite"
          />
        </polygon>
        
        <polygon points="700,100 1000,100 850,360" fill="url(#grad2)" className="animate-pulse">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 850 230;-360 850 230"
            dur="25s"
            repeatCount="indefinite"
          />
        </polygon>
        
        <circle cx="200" cy="700" r="150" fill="url(#grad1)" opacity="0.3">
          <animate attributeName="r" values="150;200;150" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="800" cy="800" r="100" fill="url(#grad2)" opacity="0.4">
          <animate attributeName="r" values="100;150;100" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8">
          <Target className="w-4 h-4 mr-2" />
          Precision Advertising Platform
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tight">
          ADLADDIN
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
          Unleash the power of data-driven advertising with our cutting-edge platform. Reach your audience with unprecedented precision and scale.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">98% Higher ROI</h3>
            <p className="text-white/70 text-sm">Maximize your advertising investment</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">5M+ Audiences</h3>
            <p className="text-white/70 text-sm">Reach your perfect customers</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
            <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-white/70 text-sm">Track performance instantly</p>
          </div>
        </div>
        
        <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 text-lg">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

// Variant 3: Floating Elements
const FloatingElementsHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-pink-400 rotate-45 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-blue-400 rounded-full animate-bounce animation-delay-3000"></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-green-400 rotate-45 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-5000"></div>
        <div className="absolute top-1/3 right-16 w-7 h-7 bg-red-400 rotate-45 animate-pulse animation-delay-6000"></div>
      </div>

      {/* Large Floating Cards */}
      <div className="absolute top-20 left-20 w-32 h-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float">
        <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-2"></div>
        <div className="w-3/4 h-2 bg-white/40 rounded"></div>
      </div>
      
      <div className="absolute bottom-20 right-20 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float animation-delay-2000">
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
          <div className="w-16 h-2 bg-white/40 rounded"></div>
        </div>
        <div className="w-full h-2 bg-white/30 rounded"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Meet <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Adladdin</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
          Your wish for better advertising is our command
        </p>
        
        <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
          Like a genie granting wishes, Adladdin makes your advertising dreams come true with powerful automation, intelligent targeting, and magical results that exceed expectations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center text-lg">
            Make Your Wish
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
};

// Variant 4: Wave Animation
const WaveHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Waves */}
      <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0e7490" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <path d="M0,400 C300,350 600,450 1200,400 L1200,800 L0,800 Z" fill="url(#waveGrad1)">
          <animate attributeName="d" 
            values="M0,400 C300,350 600,450 1200,400 L1200,800 L0,800 Z;
                    M0,450 C300,400 600,500 1200,450 L1200,800 L0,800 Z;
                    M0,400 C300,350 600,450 1200,400 L1200,800 L0,800 Z"
            dur="6s" repeatCount="indefinite" />
        </path>
        
        <path d="M0,450 C300,400 600,500 1200,450 L1200,800 L0,800 Z" fill="url(#waveGrad2)">
          <animate attributeName="d" 
            values="M0,450 C300,400 600,500 1200,450 L1200,800 L0,800 Z;
                    M0,500 C300,450 600,550 1200,500 L1200,800 L0,800 Z;
                    M0,450 C300,400 600,500 1200,450 L1200,800 L0,800 Z"
            dur="8s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-100 text-sm mb-8">
          <Globe className="w-4 h-4 mr-2" />
          Global Advertising Platform
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Ride the Wave of
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Success
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto">
          Adladdin helps you navigate the ever-changing digital landscape with adaptive strategies that flow with market trends and deliver consistent results.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-1">500K+</div>
            <div className="text-cyan-200 text-sm">Active Campaigns</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-1">2.4B</div>
            <div className="text-cyan-200 text-sm">Impressions Served</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-1">95%</div>
            <div className="text-cyan-200 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
            <div className="text-cyan-200 text-sm">Expert Support</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300">
            Start Your Journey
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

// Variant 5: Particle Network
const ParticleNetworkHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <line x1="100" y1="100" x2="300" y2="200" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="200" x2="500" y2="150" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="500" y1="150" x2="700" y2="300" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="700" y1="300" x2="900" y2="200" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="400" x2="400" y2="350" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="350" x2="600" y2="450" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="600" y1="450" x2="800" y2="400" stroke="url(#lineGrad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        
        {/* Network Nodes */}
        <circle cx="100" cy="100" r="6" fill="#8B5CF6">
          <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="200" r="8" fill="#A855F7">
          <animate attributeName="r" values="8;12;8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="150" r="7" fill="#8B5CF6">
          <animate attributeName="r" values="7;11;7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="300" r="9" fill="#A855F7">
          <animate attributeName="r" values="9;13;9" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="200" r="6" fill="#8B5CF6">
          <animate attributeName="r" values="6;10;6" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-200 text-sm mb-8">
          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
          Connected Advertising Ecosystem
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          AD<span className="text-purple-400">LADDIN</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-6">
          Connect Every Touchpoint
        </p>
        
        <p className="text-lg text-purple-200/80 mb-12 max-w-3xl mx-auto">
          Build a powerful network of advertising touchpoints that work together seamlessly. From social media to search engines, connect all your campaigns in one intelligent platform.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-white text-sm">Multi-Platform</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-white text-sm">Real-Time Sync</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-white text-sm">AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-white text-sm">Automated</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center">
            Connect Your Network
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-200 font-semibold rounded-full hover:bg-purple-400/10 transition-colors">
            See Integration
          </button>
        </div>
      </div>
    </div>
  );
};

// Variant 6: 3D Perspective
const PerspectiveHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 flex items-center justify-center relative overflow-hidden">
      {/* 3D Perspective Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute top-20 left-20 w-48 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-lg transform rotate-x-12 rotate-y-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-56 h-36 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg transform rotate-x-[-12deg] rotate-y-[-12deg] animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-32 w-40 h-28 bg-gradient-to-br from-pink-500/25 to-purple-500/25 backdrop-blur-sm rounded-lg transform rotate-x-6 rotate-y-6 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-32 right-32 w-52 h-32 bg-gradient-to-br from-yellow-500/20 to-red-500/20 backdrop-blur-sm rounded-lg transform rotate-x-[-8deg] rotate-y-[-8deg] animate-float animation-delay-6000"></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-700/50 to-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 text-sm mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
          Next-Generation Advertising Platform
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tight transform-gpu">
          <span className="inline-block transform hover:scale-110 transition-transform duration-300">A</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300">D</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">L</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">A</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">D</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">D</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">I</span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">N</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          Dimension Beyond Advertising
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
          Step into the future of digital marketing with our revolutionary 3D advertising platform. Experience campaigns that transcend traditional boundaries and deliver results from every angle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-bold mb-2">360° Targeting</h3>
            <p className="text-gray-400 text-sm">Reach customers from every dimension with precision targeting</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-bold mb-2">Multi-Dimensional Analytics</h3>
            <p className="text-gray-400 text-sm">Analyze performance across all marketing dimensions</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">Deploy campaigns instantly across all platforms</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-2xl">
            Enter the Future
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
            Explore Platform
          </button>
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
      transform: translateY(0px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: translateY(-20px) rotateX(5deg) rotateY(5deg);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
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

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-3000 {
    animation-delay: 3s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .animation-delay-5000 {
    animation-delay: 5s;
  }

  .animation-delay-6000 {
    animation-delay: 6s;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  .rotate-x-12 {
    transform: rotateX(12deg);
  }

  .rotate-y-12 {
    transform: rotateY(12deg);
  }

  .rotate-x-6 {
    transform: rotateX(6deg);
  }

  .rotate-y-6 {
    transform: rotateY(6deg);
  }

  .transform-gpu {
    transform: translate3d(0, 0, 0);
  }
`;


const HeroSection = ()=>{
    return (
        <>
          <style>{styles}</style>
          <AdladdinHeroVariants />
        </>
      );
}

export default HeroSection