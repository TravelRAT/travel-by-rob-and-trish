import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function UpcomingTrips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Castle.jpg" 
            alt="Upcoming Trips" 
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
              Travel With Us
            </h1>
            <p className="text-xl md:text-2xl text-shadow">
              Join Rob & Trish on Our Upcoming Adventures
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🚢</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Trip: Viking River Cruise</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Rhine & Main River Cruise</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3">📅</span>
                        <div>
                          <strong>Date:</strong> July 11, 2026
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3">⏱️</span>
                        <div>
                          <strong>Duration:</strong> 11 Days
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3">🌍</span>
                        <div>
                          <strong>Destination:</strong> Rhine & Main Rivers, Europe
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3">✨</span>
                        <div>
                          <strong>Highlights:</strong>
                          <ul className="mt-2 space-y-2">
                            <li>• Scenic river cruising</li>
                            <li>• Historic European cities</li>
                            <li>• Cultural experiences</li>
                            <li>• Luxury accommodations</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-lg mb-6">
                      Join Rob and Trish on this incredible European river cruise adventure! Experience the beauty and history of the Rhine and Main rivers while enjoying Viking's legendary service and amenities.
                    </p>
                    <p className="text-lg mb-6">
                      This journey takes you through the heart of Europe, where you'll discover charming villages, historic castles, and breathtaking landscapes. Travel with us and enjoy exclusive group benefits while making memories that will last a lifetime.
                    </p>
                    <Link
                      to="/need-more-info"
                      className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Learn More About Joining Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Trips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Future Adventures</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always planning new exciting trips! Stay tuned for more upcoming adventures.
            </p>
            <div className="flex justify-center">
              <Link
                to="/need-more-info"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Updates on Future Trips
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UpcomingTrips;
