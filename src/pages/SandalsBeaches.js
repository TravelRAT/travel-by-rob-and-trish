import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SandalsBeaches() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const resorts = [
    {
      id: 1,
      name: 'Sandals Montego Bay',
      brand: 'sandals',
      location: 'Montego Bay, Jamaica',
      description: 'Experience luxury on the pristine shores of Montego Bay with world-class amenities and romantic settings.',
      gradient: 'from-blue-400 to-teal-500',
      features: ['All-Inclusive', 'Adults Only', 'Private Beach', 'Multiple Restaurants'],
      image: '/images/Beach.jpg', // You can replace with specific resort image
      link: 'https://www.sandals.com/montego-bay/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 2,
      name: 'Sandals Royal Caribbean',
      brand: 'sandals',
      location: 'Montego Bay, Jamaica',
      description: 'Discover Caribbean elegance with private island access and offshore dining experiences.',
      gradient: 'from-purple-400 to-blue-500',
      features: ['All-Inclusive', 'Adults Only', 'Private Island', 'Over-Water Dining'],
      image: '/images/Beach.jpg', // You can replace with specific resort image
      link: 'https://www.sandals.com/royal-caribbean/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 3,
      name: 'Sandals Negril',
      brand: 'sandals',
      location: 'Negril, Jamaica',
      description: 'Relax on the famous Seven Mile Beach with stunning sunsets and laid-back luxury.',
      gradient: 'from-orange-400 to-red-500',
      features: ['All-Inclusive', 'Adults Only', 'Seven Mile Beach', 'Clifftop Bars'],
      image: '/images/Beach.jpg', // You can replace with specific resort image
      link: 'https://www.sandals.com/negril/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 4,
      name: 'Sandals South Coast',
      brand: 'sandals',
      location: 'Whitehouse, Jamaica',
      description: 'Immerse yourself in tranquil luxury along Jamaica\'s untouched southern coastline.',
      gradient: 'from-green-400 to-blue-500',
      features: ['All-Inclusive', 'Adults Only', 'Pristine Beach', 'Spa Services'],
      image: '/images/RivMaya.avif',
      link: 'https://www.sandals.com/south-coast/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 5,
      name: 'Sandals Ochi',
      brand: 'sandals',
      location: 'Ocho Rios, Jamaica',
      description: 'Adventure awaits with beachfront luxury and access to Jamaica\'s natural wonders.',
      gradient: 'from-teal-400 to-green-500',
      features: ['All-Inclusive', 'Adults Only', 'Beach & Jungle', 'Adventure Tours'],
      image: '/images/Tulum.jpg',
      link: 'https://www.sandals.com/ochi/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 6,
      name: 'Sandals Royal Plantation',
      brand: 'sandals',
      location: 'Ocho Rios, Jamaica',
      description: 'Experience intimate luxury in this adults-only all-suite resort with personalized butler service.',
      gradient: 'from-indigo-400 to-purple-500',
      features: ['All-Inclusive', 'Adults Only', 'All-Suite', 'Butler Service'],
      image: '/images/Hammock.jpg',
      link: 'https://www.sandals.com/royal-plantation/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 7,
      name: 'Sandals Dunn\'s River',
      brand: 'sandals',
      location: 'Ocho Rios, Jamaica',
      description: 'Nestled near the famous Dunn\'s River Falls with lush tropical gardens and pristine beachfront.',
      gradient: 'from-emerald-400 to-teal-500',
      features: ['All-Inclusive', 'Adults Only', 'Near Dunn\'s River Falls', 'Tropical Gardens'],
      image: '/images/Beach.jpg',
      link: 'https://www.sandals.com/dunns-river/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 8,
      name: 'Sandals Royal Bahamian',
      brand: 'sandals',
      location: 'Nassau, Bahamas',
      description: 'Experience British colonial elegance with offshore cay access and world-class spa treatments.',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['All-Inclusive', 'Adults Only', 'Private Offshore Cay', 'Red Lane Spa'],
      image: '/images/RivMaya.avif',
      link: 'https://www.sandals.com/royal-bahamian/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 9,
      name: 'Sandals Grande Antigua',
      brand: 'sandals',
      location: 'St. John\'s, Antigua',
      description: 'Discover the beauty of Dickenson Bay with Mediterranean-inspired architecture and crystal waters.',
      gradient: 'from-amber-400 to-orange-500',
      features: ['All-Inclusive', 'Adults Only', 'Dickenson Bay', 'Mediterranean Style'],
      image: '/images/Tulum.jpg',
      link: 'https://www.sandals.com/grande-antigua/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 10,
      name: 'Sandals Regency La Toc',
      brand: 'sandals',
      location: 'Castries, Saint Lucia',
      description: 'Golf enthusiasts\' paradise with championship course and stunning Piton mountain views.',
      gradient: 'from-lime-400 to-green-500',
      features: ['All-Inclusive', 'Adults Only', 'Golf Course', 'Piton Views'],
      image: '/images/Hammock.jpg',
      link: 'https://www.sandals.com/regency-la-toc/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 11,
      name: 'Sandals Grande St. Lucian',
      brand: 'sandals',
      location: 'Gros-Islet, Saint Lucia',
      description: 'Sophisticated beachfront resort with over-the-water bungalows and panoramic Caribbean views.',
      gradient: 'from-violet-400 to-purple-500',
      features: ['All-Inclusive', 'Adults Only', 'Over-Water Bungalows', 'Beachfront Location'],
      image: '/images/Beach.jpg',
      link: 'https://www.sandals.com/grande-st-lucian/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 12,
      name: 'Sandals Halcyon Beach',
      brand: 'sandals',
      location: 'Castries, Saint Lucia',
      description: 'Intimate beachfront sanctuary with lush gardens and authentic Caribbean charm.',
      gradient: 'from-rose-400 to-pink-500',
      features: ['All-Inclusive', 'Adults Only', 'Intimate Setting', 'Lush Gardens'],
      image: '/images/RivMaya.avif',
      link: 'https://www.sandals.com/halcyon-beach/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 13,
      name: 'Sandals Grenada',
      brand: 'sandals',
      location: 'St. George\'s, Grenada',
      description: 'Discover the spice island\'s natural beauty with pristine beaches and lush rainforest adventures.',
      gradient: 'from-emerald-400 to-green-600',
      features: ['All-Inclusive', 'Adults Only', 'Spice Island', 'Rainforest Views'],
      image: '/images/Tulum.jpg',
      link: 'https://www.sandals.com/sandals-grenada/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 14,
      name: 'Sandals Barbados',
      brand: 'sandals',
      location: 'St. Lawrence Gap, Barbados',
      description: 'Experience authentic Bajan culture with rooftop pools and oceanfront luxury on Maxwell Beach.',
      gradient: 'from-yellow-400 to-orange-500',
      features: ['All-Inclusive', 'Adults Only', 'Rooftop Pools', 'Maxwell Beach'],
      image: '/images/Beach.jpg',
      link: 'https://www.sandals.com/sandals-barbados/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 15,
      name: 'Sandals Royal Barbados',
      brand: 'sandals',
      location: 'St. Lawrence Gap, Barbados',
      description: 'Ultra-luxury beachfront resort with bowling, gourmet dining, and sophisticated island elegance.',
      gradient: 'from-purple-400 to-indigo-500',
      features: ['All-Inclusive', 'Adults Only', 'Luxury Suites', 'Bowling Alley'],
      image: '/images/Hammock.jpg',
      link: 'https://www.sandals.com/royal-barbados/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 16,
      name: 'Sandals Royal Curaçao',
      brand: 'sandals',
      location: 'Santa Barbara, Curaçao',
      description: 'European charm meets Caribbean luxury with colorful architecture and pristine white sand beaches.',
      gradient: 'from-blue-400 to-cyan-500',
      features: ['All-Inclusive', 'Adults Only', 'European Charm', 'White Sand Beach'],
      image: '/images/RivMaya.avif',
      link: 'https://www.sandals.com/royal-curacao/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 17,
      name: 'Sandals Saint Vincent',
      brand: 'sandals',
      location: 'Buccament Bay, Saint Vincent',
      description: 'Untouched Caribbean paradise with volcanic black sand beaches and lush tropical landscapes.',
      gradient: 'from-green-400 to-teal-600',
      features: ['All-Inclusive', 'Adults Only', 'Volcanic Beaches', 'Untouched Paradise'],
      image: '/images/Tulum.jpg',
      link: 'https://www.sandals.com/sandals-saint-vincent/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 18,
      name: 'Beaches Negril',
      brand: 'beaches',
      location: 'Negril, Jamaica',
      description: 'Family paradise on Seven Mile Beach with endless activities for all ages and supervised kids programs.',
      gradient: 'from-orange-400 to-pink-500',
      features: ['Family Friendly', 'All-Inclusive', 'Seven Mile Beach', 'Kids Programs'],
      image: '/images/Beach.jpg',
      link: 'https://www.beaches.com/resorts/negril/photos/?referral=134984&agentid=8724046969338202',
      external: true
    },
    {
      id: 19,
      name: 'Beaches Turks & Caicos',
      brand: 'beaches',
      location: 'Providenciales, Turks & Caicos',
      description: 'Ultimate family resort with water parks, championship golf, and pristine Grace Bay Beach access.',
      gradient: 'from-cyan-400 to-blue-600',
      features: ['Family Friendly', 'All-Inclusive', 'Water Parks', 'Grace Bay Beach'],
      image: '/images/Hammock.jpg',
      link: 'https://www.beaches.com/resorts/turks-caicos/photos/?referral=134984&agentid=8724046969338202',
      external: true
    }
  ];

  const brands = [
    { id: 'all', name: 'All Resorts' },
    { id: 'sandals', name: 'Sandals Resorts' },
    { id: 'beaches', name: 'Beaches Resorts' },
  ];

  const filteredResorts = selectedBrand === 'all'
    ? resorts
    : resorts.filter(resort => resort.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/RivMaya.avif" 
              alt="Beautiful Caribbean resort background" 
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
                Sandals & Beaches Resorts
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Discover luxury all-inclusive resorts in the Caribbean's most beautiful destinations. 
                From adults-only romance to family-friendly adventures.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Brand Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border-2 border-teal-100 bg-white p-1 shadow-lg">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedBrand === brand.id
                    ? 'bg-teal-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredResorts.map((resort, index) => (
            <motion.div
              key={resort.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-64">
                <div 
                  className={`w-full h-full ${resort.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${resort.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={resort.image ? { backgroundImage: `url(${resort.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${resort.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                        {resort.name}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        {resort.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-yellow-50">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">{resort.description}</p>
                  <div className="space-y-3">
                    {resort.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
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
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Your Caribbean Getaway?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect Sandals or Beaches resort for your dream vacation. 
            Our experts know these resorts inside and out.
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default SandalsBeaches;