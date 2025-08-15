import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ExclusiveDeals() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'r.whitehair@magicalvacationplanner.com',
          subject: 'I Want To Join Exclusive Deals',
          formData: {
            fullName: formData.fullName,
            email: formData.email,
            phone: '',
            message: `${formData.fullName} (${formData.email}) wants to join your exclusive travel deals program. Please add them to your exclusive deals mailing list.`,
            inquiryType: 'Exclusive Deals Signup'
          }
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: ''
        });
        // Reset success message after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } else {
        throw new Error('Failed to submit exclusive deals request');
      }
    } catch (error) {
      setSubmitError('Sorry, there was an error submitting your request. Please try again or contact us directly.');
      console.error('Exclusive deals signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section - Full Width */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Beach.jpg" 
            alt="Exclusive travel deals background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-shadow-lg">
              Exclusive Travel Deals
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-shadow max-w-5xl mx-auto">
              Unlock insider access to the best vacation packages, special offers, and VIP travel deals
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why Join Our Exclusive Deals Program?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">VIP Access</h3>
              <p className="text-gray-600">Get first access to exclusive deals before they're available to the general public.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Special Pricing</h3>
              <p className="text-gray-600">Receive member-only discounts and special pricing on resorts, cruises, and theme parks.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Offers</h3>
              <p className="text-gray-600">Get deals tailored to your travel preferences and dream destinations.</p>
            </div>
          </div>
        </motion.div>

        {/* Current Deals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Current Exclusive Deals
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Deal Card 1 - Viking Octantis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-red-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">Limited-Time Savings</h3>
                  <span className="bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    EXPIRES 8/31/2025
                  </span>
                </div>
                <div className="space-y-2 text-lg">
                  <p className="font-semibold">FREE International Airfare* | Reduced Fares</p>
                  <p className="text-red-100">Ask for offer EFP25</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Octantis Penguins Shoreline Antarctica
                </h4>
                <p className="text-gray-600 italic mb-4">Natural splendor awaits</p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For a limited time, take advantage of FREE international airfare and reduced fares on an enriching voyage of discovery to Canada, South America or Antarctica. From the cascading waterfalls of Quebec to the breathtaking glaciers of the "White Continent," you can explore some of the world's most stunning landscapes when you join us on one of the all-inclusive expedition voyages featured below. Reserve your stateroom today and prepare to experience nature's wonders up close—all while sailing in Viking comfort.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg">
                    Get This Deal
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200">
                    Learn More
                  </button>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Offer Code:</strong> EFP25 | <strong>Expires:</strong> August 31, 2025
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Placeholder for additional deal cards */}
            <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🎯</div>
                <p className="text-lg font-semibold">More Deals Coming Soon</p>
                <p className="text-sm">Join our exclusive deals program to be the first to know!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Signup Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Exclusive Deals Program
            </h2>
            <p className="text-gray-600 text-lg">
              Enter your information below to start receiving insider travel deals and VIP offers.
            </p>
          </div>

          {!isSubmitted ? (
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Joining Program...' : 'Join Exclusive Deals Program'}
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto">
                  By joining our exclusive deals program, you'll receive special travel offers, VIP pricing, 
                  and insider access to the best vacation packages. You can unsubscribe at any time.
                </p>
              </form>
              
              {submitError && (
                <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                  <p className="text-sm">{submitError}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 text-green-800 px-8 py-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-xl font-semibold mb-2">Welcome to Our Exclusive Deals Program!</p>
              <p className="text-sm">
                Thank you for joining! We've received your request and will add you to our exclusive deals list. 
                You'll start receiving VIP travel offers and special pricing soon. Keep an eye on your inbox!
              </p>
            </div>
          )}
        </motion.div>

        {/* What to Expect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl mb-2">📧</div>
              <h4 className="font-semibold mb-2">Weekly Deals</h4>
              <p className="text-blue-100 text-sm">Receive 1-2 exclusive offers per week with the best travel deals.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-semibold mb-2">Early Access</h4>
              <p className="text-blue-100 text-sm">Get 24-48 hours early access to limited-time promotions.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🎁</div>
              <h4 className="font-semibold mb-2">Surprise Perks</h4>
              <p className="text-blue-100 text-sm">Enjoy unexpected bonuses like room upgrades and special amenities.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExclusiveDeals;