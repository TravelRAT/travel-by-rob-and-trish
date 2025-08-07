import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SandalsBeaches() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedResort, setSelectedResort] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    budget: '',
    numberOfAdults: '',
    numberOfChildren: '',
    departureAirport: '',
    travelDates: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'r.whitehair@magicalvacationplanner.com',
          subject: `Quote Request - ${selectedResort.name}`,
          formData
        }),
      });

      if (response.ok) {
        alert('Thank you for your quote request! We will contact you soon.');
        closeQuoteForm();
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      alert('There was an error sending your quote request. Please try again or contact us directly.');
      console.error('Error:', error);
    }
  };

  const openModal = (resort) => {
    setSelectedResort(resort);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedResort(null);
  };

  const openQuoteForm = () => {
    setShowQuoteForm(true);
    setShowModal(false);
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
    setSelectedResort(null);
    setFormData({
      fullName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      email: '',
      budget: '',
      numberOfAdults: '',
      numberOfChildren: '',
      departureAirport: '',
      travelDates: '',
      additionalInfo: ''
    });
  };

  const resorts = [
    {
      id: 1,
      name: 'Sandals Montego Bay',
      brand: 'sandals',
      location: 'Montego Bay, Jamaica',
      description: 'Experience luxury on the pristine shores of Montego Bay with world-class amenities and romantic settings.',
      gradient: 'from-blue-400 to-teal-500',
      features: ['All-Inclusive', 'Adults Only', 'Private Beach', 'Multiple Restaurants'],
      image: '/images/Beach.jpg',
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
      image: '/images/RivMaya.avif',
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
      image: '/images/Tulum.jpg',
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
      image: '/images/ochi.avif',
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
      image: '/images/srp.avif',
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
      image: '/images/dr.webp',
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
      image: '/images/srb.avif',
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
      image: '/images/sga.avif',
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
      image: '/images/srlt.avif',
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
      image: '/images/sgl.avif',
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
      image: '/images/shv.avif',
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
      image: '/images/sg.avif',
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
      image: '/images/sb.avif',
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
      image: '/images/srbarb.avif',
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
      image: '/images/src.avif',
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
      image: '/images/ssv.avif',
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
      image: '/images/bn.jpg',
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
      image: '/images/btc.avif',
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

        {/* Interactive Resort Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Sandals & Beaches Resorts
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Click on any resort bubble to discover detailed information about each luxurious destination
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredResorts.map((resort, index) => (
              <motion.div
                key={resort.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(resort)}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${resort.gradient} group-hover:brightness-110 transition-all duration-300`}
                    style={resort.image ? { backgroundImage: `url(${resort.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                      <h3 className="text-sm md:text-base font-bold mb-2 leading-tight">
                        {resort.name.split(' ').slice(0, 3).join(' ')}
                      </h3>
                      <p className="text-xs opacity-90">
                        {resort.location}
                      </p>
                      <div className="mt-2">
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                          Click for Details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-sm font-semibold text-gray-800 truncate">
                    {resort.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {resort.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

      {/* Modal for Resort Details */}
      {showModal && selectedResort && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
              >
                ×
              </button>
              
              <div className="relative h-64">
                <div 
                  className={`w-full h-full bg-gradient-to-br ${selectedResort.gradient} bg-cover bg-center`}
                  style={selectedResort.image ? { backgroundImage: `url(${selectedResort.image})` } : {}}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h2 className="text-3xl font-bold mb-2">{selectedResort.name}</h2>
                      <p className="text-xl opacity-90">📍 {selectedResort.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedResort.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedResort.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                  <button 
                    onClick={openQuoteForm}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quote Form Modal */}
      {showQuoteForm && selectedResort && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative">
              <button
                onClick={closeQuoteForm}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
              >
                ×
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Get a Quote for {selectedResort.name}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget</label>
                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="numberOfAdults" className="block text-sm font-medium text-gray-700">Number of Adults</label>
                    <input
                      type="number"
                      id="numberOfAdults"
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700">Number of Children</label>
                    <input
                      type="number"
                      id="numberOfChildren"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700">Travel Dates</label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="departureAirport" className="block text-sm font-medium text-gray-700">Departure Airport</label>
                    <input
                      type="text"
                      id="departureAirport"
                      name="departureAirport"
                      value={formData.departureAirport}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default SandalsBeaches;