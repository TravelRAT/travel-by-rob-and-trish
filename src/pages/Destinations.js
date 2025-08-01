import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Magical Disney World',
      region: 'theme-parks',
      description: 'Experience the magic where dreams come true! From enchanting castle shows to thrilling rides and character meetings.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['4 Theme Parks', 'Character Dining', 'Disney Resort Stay', 'Park Hopper Option'],
      link: 'https://www.disneytravelcenter.com/ms7e694227/',
      external: true
    },
    {
      id: 2,
      name: 'Universal Orlando',
      region: 'theme-parks',
      description: 'Experience Epic Universe and the Wizarding World! Four incredible theme parks with thrilling attractions.',
      gradient: 'from-blue-500 to-indigo-500',
      features: ['4 Theme Parks', 'Epic Universe', 'Wizarding World', 'Express Pass Option']
    },
    {
      id: 3,
      name: 'Disney Cruises',
      region: 'cruise',
      description: 'Magical voyages with Disney characters, Broadway-style shows, and enchanted family adventures at sea.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Disney Characters', 'Broadway Shows', 'Kids Clubs', 'Private Island'],
      link: 'https://www.disneytravelcenter.com/MIN-000000000098357/sites++disney-cruise-line++disney-cruise-line/',
      external: true
    },
    {
      id: 4,
      name: 'Carnival Cruise',
      region: 'cruise',
      description: 'Fun-filled adventures with world-class entertainment, dining, and exciting ports of call.',
      gradient: 'from-red-500 to-orange-500',
      features: ['Multiple Destinations', 'Onboard Entertainment', 'Dining Options', 'Family Activities']
    },
    {
      id: 5,
      name: 'Virgin Cruise',
      region: 'cruise',
      description: 'Adults-only luxury with innovative dining, cutting-edge entertainment, and stunning ocean views.',
      gradient: 'from-pink-500 to-red-500',
      features: ['Adults Only', 'Premium Dining', 'Innovative Entertainment', 'Luxury Suites']
    },
    {
      id: 6,
      name: 'Riviera Maya, Mexico',
      region: 'beach',
      description: 'Crystal clear waters, ancient Mayan ruins, and luxurious all-inclusive resorts await in paradise.',
      gradient: 'from-yellow-400 to-orange-500',
      features: ['All-Inclusive Resort', 'Beach Access', 'Cultural Tours', 'Water Activities']
    },
  ];

  const regions = [
    { id: 'all', name: 'All Destinations' },
    { id: 'theme-parks', name: 'Theme Parks' },
    { id: 'beach', name: 'Beach Resorts' },
    { id: 'cruise', name: 'Cruises' },
  ];

  const filteredDestinations = selectedRegion === 'all'
    ? destinations
    : destinations.filter(dest => dest.region === selectedRegion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/Beach.jpg" 
              alt="Beautiful destinations background" 
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
                Discover Your Perfect Destination
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                From magical theme parks to serene beaches and luxurious cruises, 
                let us help you find your next unforgettable adventure.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Region Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border-2 border-blue-100 bg-white p-1 shadow-lg">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedRegion === region.id
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-64">
                <div className={`w-full h-full ${destination.id === 1 || destination.id === 2 || destination.id === 3 || destination.id === 4 || destination.id === 5 || destination.id === 6 ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${destination.gradient}`} group-hover:scale-105 transition-transform duration-300`} style={destination.id === 1 ? { backgroundImage: 'url(/images/Castle.jpg)' } : destination.id === 2 ? { backgroundImage: 'url(/images/Universal.jpg)' } : destination.id === 3 ? { backgroundImage: 'url(/images/disney%20cruise.jpg)' } : destination.id === 4 ? { backgroundImage: 'url(/images/carnival.jpg)' } : destination.id === 5 ? { backgroundImage: 'url(/images/virgin.jpg)' } : destination.id === 6 ? { backgroundImage: 'url(/images/RivMaya.avif)' } : {}}>
                  <div className={`absolute inset-0 ${destination.id === 1 || destination.id === 2 || destination.id === 3 || destination.id === 4 || destination.id === 5 || destination.id === 6 ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <h3 className="text-2xl font-bold text-white text-center px-4 text-shadow-lg">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-amber-50">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="space-y-3">
                    {destination.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  {destination.external ? (
                    <a
                      href={destination.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
                    >
                      Learn More
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect vacation. Our travel experts will create a personalized 
            experience tailored to your dreams and preferences.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Destinations; 