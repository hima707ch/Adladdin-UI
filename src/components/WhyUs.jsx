import React from 'react';
import { Target, Rocket, BarChart3, Bot, Plug, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';

const AdladdinWhyChooseUs = () => {
  const benefits = [
    {
      emoji: "🎯",
      icon: <Target className="w-6 h-6" />,
      title: "All-in-One Dashboard",
      description: "Manage all your campaigns from a single, intuitive interface. No more switching between platforms.",
      highlight: "Save 5+ hours weekly",
      visual: (
        <div className="relative w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 h-full">
            <div className="bg-white rounded shadow-sm p-2">
              <div className="w-full h-2 bg-blue-200 rounded mb-1"></div>
              <div className="w-2/3 h-1 bg-blue-300 rounded"></div>
            </div>
            <div className="bg-white rounded shadow-sm p-2">
              <div className="w-full h-2 bg-green-200 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-green-300 rounded"></div>
            </div>
            <div className="bg-white rounded shadow-sm p-2">
              <div className="w-full h-2 bg-purple-200 rounded mb-1"></div>
              <div className="w-1/2 h-1 bg-purple-300 rounded"></div>
            </div>
          </div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      emoji: "🚀",
      icon: <Rocket className="w-6 h-6" />,
      title: "Automated Optimization",
      description: "AI continuously adjusts bids, budgets, and targeting to maximize your campaign performance 24/7.",
      highlight: "Up to 45% better ROI",
      visual: (
        <div className="relative w-full h-32 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 flex items-center justify-center overflow-hidden">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-300 rounded-full animate-spin-slow flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <Rocket className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="absolute top-2 left-2 text-xs text-green-600 font-semibold animate-float">
            Optimizing...
          </div>
        </div>
      )
    },
    {
      emoji: "📊",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Deep Campaign Analytics",
      description: "Get granular insights with advanced reporting, conversion tracking, and attribution modeling.",
      highlight: "200+ metrics tracked",
      visual: (
        <div className="relative w-full h-32 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-4 overflow-hidden">
          <div className="flex items-end justify-between h-full space-x-1">
            {[65, 45, 80, 35, 90, 55, 75].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-purple-400 to-purple-300 rounded-t flex-1 animate-growUp"
                style={{ 
                  height: `${height}%`,
                  animationDelay: `${index * 0.1}s`
                }}
              ></div>
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-purple-200 rounded px-2 py-1 text-xs text-purple-700 animate-float">
            +23.5%
          </div>
        </div>
      )
    },
    {
      emoji: "🤖",
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Recommendations",
      description: "Smart suggestions for creative updates, audience expansion, and budget allocation based on data.",
      highlight: "AI learns from 1M+ campaigns",
      visual: (
        <div className="relative w-full h-32 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg p-4 flex items-center justify-center overflow-hidden">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white animate-pulse" />
            </div>
            {/* Suggestion Bubbles */}
            <div className="absolute -top-4 -left-8 bg-cyan-200 rounded-lg px-2 py-1 text-xs text-cyan-800 animate-float">
              +Budget
            </div>
            <div className="absolute -top-4 -right-8 bg-blue-200 rounded-lg px-2 py-1 text-xs text-blue-800 animate-float animation-delay-500">
              New Audience
            </div>
            <div className="absolute -bottom-6 left-0 bg-cyan-300 rounded-lg px-2 py-1 text-xs text-cyan-800 animate-float animation-delay-1000">
              Update Creative
            </div>
          </div>
        </div>
      )
    },
    {
      emoji: "🔌",
      icon: <Plug className="w-6 h-6" />,
      title: "Integrates with Google & Meta",
      description: "Seamlessly connect with Google Ads, Facebook, Instagram, and 50+ other advertising platforms.",
      highlight: "50+ platform integrations",
      visual: (
        <div className="relative w-full h-32 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg p-4 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Central Hub */}
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Plug className="w-4 h-4 text-white" />
            </div>
            {/* Connected Platforms */}
            <div className="absolute -top-6 -left-6 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float">
              G
            </div>
            <div className="absolute -top-6 -right-6 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float animation-delay-300">
              F
            </div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float animation-delay-600">
              I
            </div>
            <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float animation-delay-900">
              Y
            </div>
            {/* Connection Lines */}
            <div className="absolute top-0 left-0 w-8 h-0.5 bg-orange-300 transform -rotate-45 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-8 h-0.5 bg-orange-300 transform rotate-45 animate-pulse animation-delay-500"></div>
          </div>
        </div>
      )
    },
    {
      emoji: "🛡️",
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "SOC 2 compliant with bank-level encryption. Your data and campaigns are always protected.",
      highlight: "99.9% uptime guaranteed",
      visual: (
        <div className="relative w-full h-32 bg-gradient-to-br from-gray-50 to-slate-100 rounded-lg p-4 flex items-center justify-center overflow-hidden">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-300 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-gray-600 animate-pulse" />
            </div>
            <div className="absolute inset-0 border-4 border-green-400 rounded-full animate-ping opacity-20"></div>
          </div>
          <div className="absolute top-2 right-2 bg-green-200 rounded px-2 py-1 text-xs text-green-700 animate-float">
            Secured
          </div>
        </div>
      )
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-5 h-5" /> },
    { number: "$2.4B", label: "Ad Spend Managed", icon: <BarChart3 className="w-5 h-5" /> },
    { number: "24/7", label: "Expert Support", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="150" r="100" fill="url(#bgGrad)" className="animate-pulse" />
          <circle cx="800" cy="250" r="150" fill="url(#bgGrad)" className="animate-pulse animation-delay-1000" />
          <circle cx="1000" cy="600" r="120" fill="url(#bgGrad)" className="animate-pulse animation-delay-2000" />
        </svg>
      </div>

      <div className="max-w-[1715px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Why Choose Adladdin
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to
            <br />
            <span className="text-purple-600">Dominate Digital Advertising</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features, intelligent automation, and seamless integrations - all in one platform designed for advertising success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group overflow-hidden"
            >
              {/* Visual Illustration */}
              <div className="mb-6">
                {benefit.visual}
              </div>

              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{benefit.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <div className="text-sm text-purple-600 font-semibold">
                    {benefit.highlight}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands Worldwide
            </h3>
            <p className="text-gray-600">
              Join the thousands of businesses scaling their advertising with Adladdin
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Advertising?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-driven advertising optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
                Start Free Trial - No Credit Card Required
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
                Schedule Personal Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 mt-8 opacity-80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Setup in 5 Minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">30-Day Money Back</span>
              </div>
            </div>
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

  @keyframes growUp {
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

  .animate-growUp {
    animation: growUp 2s ease-out;
  }

  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }

  .animation-delay-300 {
    animation-delay: 0.3s;
  }

  .animation-delay-500 {
    animation-delay: 0.5s;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }

  .animation-delay-900 {
    animation-delay: 0.9s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;



const WhyUs = ()=>{
    return (
        <>
          <style>{styles}</style>
          <AdladdinWhyChooseUs />
        </>
      );
}

export default WhyUs