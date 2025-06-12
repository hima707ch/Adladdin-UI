import React from 'react';
import { PenTool, Target, BarChart3, Zap, ArrowRight, Play, Image, Users, TrendingUp, Settings } from 'lucide-react';

const AdladdinHowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <PenTool className="w-8 h-8" />,
      title: "Create Ads Easily",
      description: "Design stunning ads using our media library and choose from multiple formats",
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 overflow-hidden">
          {/* Design Canvas */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-sm border-2 border-dashed border-purple-200">
            <div className="p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Image className="w-4 h-4 text-purple-500" />
                <div className="h-2 bg-purple-200 rounded w-20 animate-pulse"></div>
              </div>
              <div className="h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded animate-pulse"></div>
              <div className="flex space-x-2">
                <div className="h-2 bg-purple-300 rounded w-16"></div>
                <div className="h-2 bg-pink-300 rounded w-12"></div>
              </div>
            </div>
          </div>
          {/* Floating Design Elements */}
          <div className="absolute top-2 right-2 w-6 h-6 bg-purple-400 rounded opacity-60 animate-float"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-float animation-delay-1000"></div>
        </div>
      ),
      features: ["Drag & Drop Editor", "Media Library", "Multiple Formats"]
    },
    {
      step: "02", 
      icon: <Target className="w-8 h-8" />,
      title: "Target Right Audience",
      description: "Set precise filters for age, interests, and location to reach ideal customers",
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 overflow-hidden">
          {/* Target Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 border-4 border-blue-400 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute inset-8 border-4 border-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute inset-14 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          {/* Floating User Icons */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center animate-float">
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="absolute top-6 right-6 w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center animate-float animation-delay-2000">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center animate-float animation-delay-1500">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      ),
      features: ["Age Targeting", "Interest Filters", "Location Based"]
    },
    {
      step: "03",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track Performance", 
      description: "Monitor campaigns with real-time analytics and comprehensive reporting dashboard",
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 overflow-hidden">
          {/* Dashboard */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="w-16 h-2 bg-green-300 rounded"></div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            {/* Animated Bars */}
            <div className="flex items-end space-x-2 h-24">
              <div className="w-4 bg-green-400 rounded-t animate-growBar" style={{height: '60%'}}></div>
              <div className="w-4 bg-green-500 rounded-t animate-growBar animation-delay-200" style={{height: '80%'}}></div>
              <div className="w-4 bg-green-400 rounded-t animate-growBar animation-delay-400" style={{height: '45%'}}></div>
              <div className="w-4 bg-green-600 rounded-t animate-growBar animation-delay-600" style={{height: '90%'}}></div>
              <div className="w-4 bg-green-500 rounded-t animate-growBar animation-delay-800" style={{height: '70%'}}></div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="w-8 h-1 bg-green-200 rounded"></div>
              <div className="w-12 h-1 bg-green-200 rounded"></div>
            </div>
          </div>
          {/* Floating Metrics */}
          <div className="absolute top-2 right-2 bg-green-200 rounded px-2 py-1 text-xs text-green-700 animate-float">
            +24%
          </div>
        </div>
      ),
      features: ["Real-time Data", "Custom Reports", "Performance Metrics"]
    },
    {
      step: "04",
      icon: <Zap className="w-8 h-8" />,
      title: "Optimize Automatically",
      description: "Get AI-powered suggestions and automated optimizations to maximize ROI",
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 overflow-hidden">
          {/* AI Brain */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white animate-pulse" />
              </div>
              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-full w-12 h-0.5 bg-yellow-400 transform -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-1/2 right-full w-12 h-0.5 bg-orange-400 transform -translate-y-1/2 animate-pulse animation-delay-500"></div>
              <div className="absolute bottom-full left-1/2 w-0.5 h-12 bg-yellow-500 transform -translate-x-1/2 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
          {/* Floating Suggestions */}
          <div className="absolute top-4 left-4 bg-yellow-200 rounded-lg px-3 py-1 text-xs text-yellow-800 animate-float">
            Boost Budget +15%
          </div>
          <div className="absolute top-4 right-4 bg-orange-200 rounded-lg px-3 py-1 text-xs text-orange-800 animate-float animation-delay-1000">
            New Audience
          </div>
          <div className="absolute bottom-4 left-6 bg-yellow-300 rounded-lg px-3 py-1 text-xs text-yellow-800 animate-float animation-delay-2000">
            Update Creative
          </div>
          {/* Settings Icon */}
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center animate-spin-slow">
            <Settings className="w-4 h-4 text-orange-700" />
          </div>
        </div>
      ),
      features: ["AI Suggestions", "Auto Optimization", "Smart Bidding"]
    }
  ];

  return (
    <div className="relative bg-white py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#8B5CF6" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1715px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            How It Works
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Started in 
            <span className="text-purple-600"> 4 Simple Steps</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ad creation to optimization, our platform guides you through every step of successful advertising campaigns.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Illustration */}
                <div className="mb-6">
                  {step.illustration}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-purple-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already scaling their advertising with Adladdin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom CSS for animations
const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes growBar {
    0% {
      height: 0%;
    }
    100% {
      height: var(--final-height);
    }
  }

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-growBar {
    animation: growBar 2s ease-out infinite alternate;
  }

  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  .animation-delay-500 {
    animation-delay: 0.5s;
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

  .animation-delay-1500 {
    animation-delay: 1.5s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;
const HowItWork = () => (
  <>
    <style>{styles}</style>
    <AdladdinHowItWorks />
  </>
);

export default HowItWork