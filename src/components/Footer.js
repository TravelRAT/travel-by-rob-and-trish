import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [emailData, setEmailData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here - you can integrate with your email service
    console.log('Email signup:', emailData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmailData({ name: '', email: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/web-logo.png" 
                alt="Travel by Rob and Trish" 
                className="h-20 w-auto object-contain"
                style={{ maxWidth: '240px' }}
              />
            </div>
            <p className="text-gray-300">
              Your trusted travel partners for creating unforgettable journeys and memories that last a lifetime.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Destinations</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-white">Special Deals</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Disney World</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Universal Studios</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Caribbean Cruises</Link></li>
              <li><Link to="/sandals-beaches" className="text-gray-300 hover:text-white">Sandals & Beaches</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Indianapolis, IN</li>
              <li>Rob: (317) 850-3750</li>
              <li>Trish: (317) 246-8850</li>
              <li>Office: (317) 401-3669</li>
              <li>Email: r.whitehair@magicalvacationplanner.com</li>
            </ul>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Exclusive Travel Deals!</h3>
            <p className="text-gray-300 mb-6">
              Be the first to hear about special offers and deals from our travel providers. 
              Join our newsletter for insider access to the best vacation packages.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={emailData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={emailData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Join Our Newsletter
                </button>
                <p className="text-xs text-gray-400 mt-4 max-w-xl mx-auto">
                  By submitting this form, you understand that we will be sending you 1-2 emails per week 
                  with special offers, deals, and travel updates. You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="bg-green-800 text-green-100 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">Thank you for subscribing!</p>
                <p className="text-sm">You'll start receiving our exclusive travel deals soon.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Travel by Rob and Trish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 