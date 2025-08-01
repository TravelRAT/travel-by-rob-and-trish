import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Packages() {
  const packages = [
    {
      id: 1,
      name: 'European Adventure',
      duration: '14 days',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      gradient: 'from-blue-500 to-blue-600',
      highlights: [
        'Visit the Eiffel Tower',
        'Explore the Colosseum',
        'Experience Sagrada Familia',
      ],
    },
    {
      id: 2,
      name: 'Asian Discovery',
      duration: '12 days',
      destinations: ['Tokyo', 'Kyoto', 'Seoul'],
      gradient: 'from-purple-500 to-purple-600',
      highlights: [
        'Tokyo nightlife tour',
        'Traditional tea ceremony',
        'K-pop culture experience',
      ],
    },
    {
      id: 3,
      name: 'Tropical Paradise',
      duration: '10 days',
      destinations: ['Bali', 'Maldives', 'Phuket'],
      gradient: 'from-green-500 to-green-600',
      highlights: [
        'Luxury beach resorts',
        'Snorkeling adventures',
        'Sunset dinner cruises',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/Hammock.jpg" 
              alt="Special travel deals background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
                Special Deals
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Discover our exclusive travel packages and limited-time offers 
                designed to give you the best vacation experience at unbeatable prices.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <div className={`w-full h-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center p-6 text-center`}>
                  <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full font-semibold">
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Destinations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((destination) => (
                      <span
                        key={destination}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/need-more-info"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6">
            We can create a custom package tailored to your preferences.
          </p>
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Contact Us for Custom Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packages; 