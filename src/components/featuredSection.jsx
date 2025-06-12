import React from 'react';
import { Brain, Target, TrendingUp, Users, BarChart3, Zap, Globe, Settings, ArrowRight } from 'lucide-react';

const AdladdinFeaturesSection = () => {
  const features = [
    {
      illustration: (
        <div className="w-20 h-20  mb-6 relative">
          <div className="w-full h-full bg-purple-100 rounded-2xl flex items-center justify-center relative">
            <div className="w-12 h-12 bg-purple-500 rounded-xl"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      ),
      title: "AI-Powered Optimization",
      description: "Automatically optimize campaigns with machine learning for maximum ROI.",
      ctaText: "Learn More"
    },
    {
      illustration: (
        <div className="w-20 h-20 mb-6 relative">
          <div className="w-full h-full bg-blue-100 rounded-2xl flex items-center justify-center relative">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="absolute top-3 left-3 w-4 h-4 border-2 border-blue-400 rounded-full"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      ),
      title: "Smart Targeting",
      description: "Reach your ideal customers with precision targeting and data insights.",
      ctaText: "Learn More"
    },
    {
      illustration: (
        <div className="w-20 h-20 mb-6 relative">
          <div className="w-full h-full bg-green-100 rounded-2xl flex items-center justify-center relative">
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-green-500 rounded"></div>
              <div className="w-2 h-10 bg-green-400 rounded"></div>
              <div className="w-2 h-6 bg-green-300 rounded"></div>
            </div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      ),
      title: "Live Analytics",
      description: "Track performance in real-time with comprehensive reporting dashboard.",
      ctaText: "Learn More"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-20 overflow-hidden">
      {/* Subtle Particle Network Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 600">
        <defs>
          <linearGradient id="subtleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="subtleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Subtle Network Lines */}
        <line x1="100" y1="100" x2="300" y2="150" stroke="url(#subtleGrad1)" strokeWidth="1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="150" x2="500" y2="120" stroke="url(#subtleGrad2)" strokeWidth="1">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="700" y1="200" x2="900" y2="250" stroke="url(#subtleGrad1)" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite" />
        </line>
        
        {/* Subtle Network Nodes */}
        <circle cx="100" cy="100" r="3" fill="#8B5CF6" opacity="0.3">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="150" r="4" fill="#EC4899" opacity="0.3">
          <animate attributeName="r" values="4;6;4" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="250" r="3" fill="#8B5CF6" opacity="0.3">
          <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div className="max-w-[1715px] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Platform Capabilities
          </div> */}
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Adladdin is the
            <br />
            <span className="text-purple-600">
              best advertising platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl">
            Powerful AI technology, smart targeting, and real-time analytics for better results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-[4rem] mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8"
            >
              {/* Illustration */}
              {feature.illustration}

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* CTA Link */}
              <div className="">
                <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200 group-hover:translate-x-1">
                  {feature.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gray-900 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
          {/* Background Particle Network */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 400">
            <defs>
              <linearGradient id="ctaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="ctaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            <line x1="50" y1="50" x2="200" y2="80" stroke="url(#ctaGrad1)" strokeWidth="2">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="200" y1="80" x2="350" y2="60" stroke="url(#ctaGrad2)" strokeWidth="2">
              <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="450" y1="100" x2="600" y2="130" stroke="url(#ctaGrad1)" strokeWidth="2">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
            </line>
            
            <circle cx="50" cy="50" r="4" fill="#8B5CF6">
              <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="80" r="5" fill="#EC4899">
              <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="130" r="4" fill="#8B5CF6">
              <animate attributeName="r" values="4;7;4" dur="2.8s" repeatCount="indefinite" />
            </circle>
          </svg>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to boost your
              <br />
              <span className="text-purple-400">
                advertising results?
              </span>
            </h3>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500K+ businesses using Adladdin to scale campaigns and maximize ROI.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">500K+</div>
                <div className="text-white/70 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-1">98%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1">$2.4B</div>
                <div className="text-white/70 text-sm">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-white/70 text-sm">Expert Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all duration-300 shadow-xl">
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
            <Globe className="w-8 h-8 text-yellow-400" />
          </div>
          
          <div className="absolute bottom-8 left-8 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float animation-delay-2000">
            <Settings className="w-6 h-6 text-green-400" />
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
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;

const FeaturedSection = ()=>{
    return (
      <>
        <style>{styles}</style>
        <AdladdinFeaturesSection />
      </>
    );
}

export default FeaturedSection
