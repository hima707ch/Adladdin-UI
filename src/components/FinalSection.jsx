import React, { useState } from 'react';
import { 
  Star, Quote, CheckCircle, ArrowRight, Zap, Users, BarChart3, Crown, 
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube,
  Shield, Clock, Headphones, FileText, HelpCircle, DollarSign
} from 'lucide-react';

const AdladdinFinalSections = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  // Testimonials Data
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "SC",
      rating: 5,
      text: "Adladdin transformed our advertising strategy completely. We saw a 340% increase in ROI within the first month. The AI optimization is truly magical.",
      metrics: "340% ROI increase"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Growth Lead",
      company: "StartupBoost",
      avatar: "MR",
      rating: 5,
      text: "The automation saved us 20+ hours per week on campaign management. Now we can focus on strategy while Adladdin handles the optimization.",
      metrics: "20+ hours saved weekly"
    },
    {
      name: "Emily Foster",
      role: "E-commerce Manager", 
      company: "RetailPro Inc",
      avatar: "EF",
      rating: 5,
      text: "Integration with Google and Meta was seamless. The unified dashboard gives us insights we never had before. Game-changer for our business.",
      metrics: "Unified cross-platform view"
    }
  ];

  // Company Logos (simplified representations)
  const companies = [
    { name: "TechFlow", color: "bg-blue-500" },
    { name: "StartupBoost", color: "bg-green-500" },
    { name: "RetailPro", color: "bg-purple-500" },
    { name: "GrowthCorp", color: "bg-orange-500" },
    { name: "ScaleUp", color: "bg-pink-500" },
    { name: "InnovateLab", color: "bg-cyan-500" }
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "14 days",
      description: "Perfect for testing the waters",
      features: [
        "Up to 2 campaigns",
        "Basic analytics",
        "Email support",
        "Google Ads integration"
      ],
      cta: "Start Free Trial",
      popular: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Great for small businesses",
      features: [
        "Up to 10 campaigns",
        "Advanced analytics",
        "Priority support",
        "All platform integrations",
        "Basic AI optimization"
      ],
      cta: "Get Started",
      popular: false,
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Pro",
      price: "$149",
      period: "per month",
      description: "Best for growing companies",
      features: [
        "Unlimited campaigns",
        "Deep analytics & reporting",
        "24/7 phone support",
        "Advanced AI optimization",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Start Pro Trial",
      popular: true,
      icon: <Crown className="w-6 h-6" />
    }
  ];

  // Footer Links
  const footerLinks = {
    product: [
      { name: "Platform", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "API", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Case Studies", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  return (
    <div className="w-full">
      {/* Testimonials Section */}
     

      {/* Pricing Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="max-w-[1715px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Simple Pricing
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your <span className="text-purple-600">Perfect Plan</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, scale as you grow. All plans include our core features with varying limits and support levels.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular ? 'border-purple-500 scale-105' : 'border-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Footer */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Headphones className="w-4 h-4 mr-2" />
                Expert Onboarding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-[1715px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Start Promoting Your Business Today
              <br />
              <span className="text-yellow-300">It's Free to Try</span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              Join 500K+ businesses using Adladdin to create, optimize, and scale their advertising campaigns with AI-powered precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="px-12 py-5 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl text-lg">
                Create Your First Ad
                <ArrowRight className="w-6 h-6 ml-3 inline" />
              </button>
              <button className="px-8 py-5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                Schedule Demo Call
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>500K+ Happy Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-[1715px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Ad<span className="text-purple-400">laddin</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transform your advertising with AI-powered optimization, smart targeting, and real-time analytics. Scale your campaigns like never before.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>hello@adladdin.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h4 className="font-semibold mb-2 text-white">Stay Updated</h4>
                <p className="text-gray-400">Get the latest advertising tips, platform updates, and industry insights.</p>
              </div>
              <div className="lg:w-1/2 lg:max-w-md">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-full transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="text-gray-400 text-sm mb-4 lg:mb-0">
                © 2024 Adladdin. All rights reserved. Built with ❤️ for marketers worldwide.
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;

const FinalSection = ()=> (
  <>
    <style>{styles}</style>
    <AdladdinFinalSections />
  </>
);

export default FinalSection;