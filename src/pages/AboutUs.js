import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Section - Full Width */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Castle.jpg" 
            alt="About Rob and Trish" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-shadow">
              Meet Rob & Trish Whitehair - Your Central Indiana Travel Experts
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Who We Are – Rob & Trish Whitehair</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Hi! We're Rob and Trish Whitehair — proud Hoosiers, lifelong Central Indiana residents, and the heart behind <strong>Travel by Rob & Trish</strong>. We currently live in the <strong>Southport/Greenwood area</strong>, where we're raising our family and helping others plan unforgettable vacations.
              </p>
              
              <p className="mb-6">
                With four kids of our own, we understand how precious family time is. That's why we've made it our mission to help other families (and couples!) create <strong>stress-free, joy-filled, memory-making trips</strong> — whether it's a relaxing beach getaway, an exciting theme park adventure, or a dream cruise.
              </p>
              
              <p className="mb-6">
                We've traveled extensively — with <strong>over 10 cruises</strong> under our belt and visits to beautiful destinations like <strong>Mexico, Puerto Rico, St. Thomas, St. Maarten, Barbados, St. Lucia, St. Kitts, Jamaica, the Dominican Republic, and the Bahamas</strong>. We've also spent time at <strong>Disney, Universal, and SeaWorld</strong>, and we're always on the lookout for new tips and tricks to help our clients get the most out of their vacations.
              </p>
              
              <p>
                Coming up, we're headed back to <strong>Disney and Universal in October 2025</strong> for even more insider research, and we're booked on an <strong>11-day Viking River Cruise in July 2026</strong> to expand our knowledge of European cruising.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Travel Adventures</h2>
              <p className="text-xl text-gray-600">A glimpse into our family travels and experiences</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src="/images/web1.jpg" 
                  alt="Rob and Trish travel adventure" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src="/images/web2.jpg" 
                  alt="Rob and Trish travel experience" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src="/images/minney.jpg" 
                  alt="Disney experience with Minnie Mouse" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src="/images/IMG_1141.JPEG" 
                  alt="Family travel memories" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src="/images/IMG_1011.JPEG" 
                  alt="Travel adventure moments" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src="/images/IMG_0576.JPEG" 
                  alt="Vacation experiences" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-600">
                These are just a few snapshots from our travels! We love sharing our real experiences to help you plan your perfect getaway.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">✈️</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Travel by Rob & Trish?</h2>
            </div>
            
            <p className="text-xl mb-8 text-blue-100">
              We're not just travel agents — we're <strong>real travelers</strong>, with real experience, helping real families just like yours.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">When you book through us, you get:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">•</span>
                    Personalized travel planning based on your preferences
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">•</span>
                    Expert advice on destinations we've visited ourselves
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">•</span>
                    Cruise, all-inclusive, and theme park vacation expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">•</span>
                    Help from start to finish — <strong>all at no extra cost to you!</strong>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4">Perfect For:</h3>
                <ul className="space-y-2 text-lg">
                  <li>🏖️ First big family trips</li>
                  <li>💕 Romantic couples' escapes</li>
                  <li>🌟 Once-in-a-lifetime adventures</li>
                  <li>🎢 Theme park vacations</li>
                  <li>🚢 Cruise getaways</li>
                  <li>🏝️ All-inclusive resorts</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl mt-8 text-center text-blue-100">
              Whether it's your first big family trip, a romantic couples' escape, or a once-in-a-lifetime adventure, we'll make sure it's exactly what you need.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">💌</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Let's Get Started</h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              We're just down the road — and always just a message away.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-800 mb-2">Call/Text</h3>
                <a href="tel:317-401-3669" className="text-blue-600 hover:text-blue-800 font-medium">
                  317-401-3669
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold text-gray-800 mb-2">Website</h3>
                <a href="http://www.TravelbyRobandTrish.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                  TravelbyRobandTrish.com
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <a href="mailto:r.whitehair@magicalvacationplanner.com" className="text-green-600 hover:text-green-800 font-medium text-sm">
                  r.whitehair@magicalvacationplanner.com
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-gray-800 mb-2">Facebook</h3>
                <a href="https://www.facebook.com/MagicalVacationByRobAndTrish" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                  Magical Vacation by Rob and Trish
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                Let's plan something amazing together. Your dream vacation is just a click away.
              </p>
              
              <Link
                to="/need-more-info"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Planning Your Dream Vacation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;