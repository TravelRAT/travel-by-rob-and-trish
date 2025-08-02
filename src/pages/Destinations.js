import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      image: '/images/Castle.jpg',
      link: 'https://www.disneytravelcenter.com/ms7e694227/',
      external: true
    },
    {
      id: 15,
      name: 'Disneyland',
      region: 'theme-parks',
      description: 'Experience the magic where dreams come true! From enchanting castle shows to thrilling rides and character meetings.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['2 Theme Parks', 'Character Dining', 'Disney Resort Stay', 'Park Hopper Option'],
      image: '/images/Castle.jpg',
      link: 'https://www.disneytravelcenter.com/ms7e694227/',
      external: true
    },
    {
      id: 2,
      name: 'Universal Orlando',
      region: 'theme-parks',
      description: 'Experience Epic Universe and the Wizarding World! Four incredible theme parks with thrilling attractions.',
      gradient: 'from-blue-500 to-indigo-500',
      features: ['4 Theme Parks', 'Epic Universe', 'Wizarding World', 'Express Pass Option'],
      image: '/images/Universal.jpg'
    },
    {
      id: 3,
      name: 'Disney Cruises',
      region: 'cruise',
      description: 'Magical voyages with Disney characters, Broadway-style shows, and enchanted family adventures at sea.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Disney Characters', 'Broadway Shows', 'Kids Clubs', 'Private Island'],
      image: '/images/disney%20cruise.jpg',
      link: 'https://www.disneytravelcenter.com/MIN-000000000098357/sites++disney-cruise-line++disney-cruise-line/',
      external: true
    },
    {
      id: 4,
      name: 'Carnival Cruise',
      region: 'cruise',
      description: 'Fun-filled adventures with world-class entertainment, dining, and exciting ports of call.',
      gradient: 'from-red-500 to-orange-500',
      features: ['Multiple Destinations', 'Onboard Entertainment', 'Dining Options', 'Family Activities'],
      image: '/images/carnival.jpg'
    },
    {
      id: 5,
      name: 'Virgin Cruise',
      region: 'cruise',
      description: 'Adults-only luxury with innovative dining, cutting-edge entertainment, and stunning ocean views.',
      gradient: 'from-pink-500 to-red-500',
      features: ['Adults Only', 'Premium Dining', 'Innovative Entertainment', 'Luxury Suites'],
      image: '/images/virgin.jpg'
    },

    {
      id: 7,
      name: 'Sandals Resorts',
      region: 'beach',
      description: 'Adults-only luxury all-inclusive resorts in the Caribbean\'s most beautiful destinations.',
      gradient: 'from-teal-500 to-blue-600',
      features: ['Adults Only', 'All-Inclusive', 'Caribbean Locations', 'Butler Service'],
      image: '/images/ssv.avif',
      link: '/sandals-beaches'
    },
    {
      id: 8,
      name: 'Beaches Resorts',
      region: 'beach',
      description: 'Family-friendly all-inclusive resorts with supervised kids programs and endless activities.',
      gradient: 'from-orange-500 to-pink-500',
      features: ['Family Friendly', 'Kids Programs', 'Water Parks', 'All-Inclusive'],
      image: '/images/btc.avif',
      link: '/sandals-beaches'
    },
    {
      id: 9,
      name: 'Secrets Resorts',
      region: 'beach',
      description: 'Adults-only elegance with unlimited luxury and sophisticated amenities in stunning locations.',
      gradient: 'from-purple-500 to-indigo-600',
      features: ['Adults Only', 'Unlimited Luxury', 'Premium Dining', 'Spa Services'],
      image: '/images/Hammock.jpg'
    },
    {
      id: 10,
      name: 'Breathless Resorts',
      region: 'beach',
      description: 'Vibrant adults-only resorts with energetic atmosphere, entertainment, and modern luxury.',
      gradient: 'from-red-500 to-pink-600',
      features: ['Adults Only', 'Vibrant Atmosphere', 'Entertainment', 'Modern Luxury'],
      image: '/images/breath.webp'
    },
    {
      id: 11,
      name: 'Iberostar Resorts',
      region: 'beach',
      description: 'Premium all-inclusive resorts combining comfort, gastronomy, and sustainability worldwide.',
      gradient: 'from-green-500 to-teal-600',
      features: ['All-Inclusive', 'Premium Comfort', 'Sustainable Tourism', 'Global Locations'],
      image: '/images/ibs.jpg'
    },
    {
      id: 12,
      name: 'Riu Hotels & Resorts',
      region: 'beach',
      description: 'All-inclusive beach resorts offering fun, quality, and value in tropical paradise settings.',
      gradient: 'from-blue-500 to-cyan-600',
      features: ['All-Inclusive', 'Beach Locations', 'Family & Adults', 'Entertainment Programs'],
      image: '/images/rui.jpg'
    },
    {
      id: 13,
      name: 'Hard Rock Hotels',
      region: 'beach',
      description: 'Rock-inspired luxury resorts with music-themed experiences and world-class amenities.',
      gradient: 'from-gray-700 to-red-600',
      features: ['Music Themed', 'Luxury Amenities', 'Rock Star Service', 'Live Entertainment'],
      image: '/images/HR.jpg'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section - Full Width */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Beach.jpg" 
            alt="Beautiful destinations background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-shadow-lg">
              Discover Your Perfect Destination
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-shadow max-w-5xl mx-auto">
              From magical theme parks to serene beaches and luxurious cruises, 
              let us help you find your next unforgettable adventure.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-amber-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40">
                <div 
                  className={`w-full h-full ${destination.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${destination.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={destination.image ? { backgroundImage: `url(${destination.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${destination.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
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
          {(destination.id === 7 || destination.id === 8) ? (
            // Special two-button layout for Sandals & Beaches Resorts
            <div className="space-y-3">
              <Link
                to="/sandals-beaches"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                See More Resorts
              </Link>
              <Link
                to="/need-more-info"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                Request More Info
              </Link>
            </div>
          ) : destination.id === 13 ? (
            // Special two-button layout for Hard Rock Hotels
            <div className="space-y-3">
              <Link
                to="/hard-rock"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                See All Hard Rock Resorts
              </Link>
              <Link
                to="/need-more-info"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                Request More Info
              </Link>
            </div>
          ) : destination.id === 9 ? (
            // Special two-button layout for Secrets Resorts
            <div className="space-y-3">
              <Link
                to="/secrets"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                See All Secrets Resorts
              </Link>
              <Link
                to="/need-more-info"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                Request More Info
              </Link>
            </div>
          ) : destination.id === 3 ? (
            // Special two-button layout for Disney Cruises
            <div className="space-y-3">
              <Link
                to="/disney-cruise"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                See All Disney Ships
              </Link>
              <Link
                to="/need-more-info"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                Request More Info
              </Link>
            </div>
          ) : destination.id === 10 ? (
            // Special two-button layout for Breathless Resorts
            <div className="space-y-3">
              <Link
                to="/breathless"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                See All Breathless Resorts
              </Link>
              <Link
                to="/need-more-info"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                Request More Info
              </Link>
            </div>
          ) : destination.id === 12 ? (
            // Special two-button layout for Riu Hotels & Resorts
            <div className="space-y-3">
              <Link
                to="/riu"
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-cyan-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                See All RIU Resorts
              </Link>
              <Link
                to="/need-more-info"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
              >
                Request More Info
              </Link>
            </div>
          ) : (
            // Standard single button for all other destinations
            <Link
              to="/need-more-info"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
            >
              Request More Info
            </Link>
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