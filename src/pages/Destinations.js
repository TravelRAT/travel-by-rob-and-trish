import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);
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
      external: true,
      highlights: ['Cinderella Castle', 'Magic Kingdom', 'Epcot', 'Hollywood Studios', 'Animal Kingdom'],
      amenities: ['FastPass+', 'Disney Dining Plan', 'Memory Maker', 'Disney Transportation']
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
      external: true,
      highlights: ['Sleeping Beauty Castle', 'Disneyland Park', 'Disney California Adventure', 'Downtown Disney'],
      amenities: ['MaxPass', 'Disney Dining Plan', 'PhotoPass', 'Disneyland Resort Hotels']
    },
    {
      id: 2,
      name: 'Universal Orlando',
      region: 'theme-parks',
      description: 'Experience Epic Universe and the Wizarding World! Four incredible theme parks with thrilling attractions.',
      gradient: 'from-blue-500 to-indigo-500',
      features: ['4 Theme Parks', 'Epic Universe', 'Wizarding World', 'Express Pass Option'],
      image: '/images/Universal.jpg',
      highlights: ['The Wizarding World of Harry Potter', 'Epic Universe', 'Universal Studios', 'Islands of Adventure'],
      amenities: ['Express Pass', 'Universal Dining Plan', 'Photo Connect', 'Universal Hotels']
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
      external: true,
      highlights: ['Castaway Cay', 'Disney Characters', 'Broadway Shows', 'Pirate Night'],
      amenities: ['Rotational Dining', 'Kids Clubs', 'Adult-Only Areas', 'Disney Transportation']
    },
    {
      id: 4,
      name: 'Carnival Cruise',
      region: 'cruise',
      description: 'Fun-filled adventures with world-class entertainment, dining, and exciting ports of call.',
      gradient: 'from-red-500 to-orange-500',
      features: ['Multiple Destinations', 'Onboard Entertainment', 'Dining Options', 'Family Activities'],
      image: '/images/carnival.jpg',
      highlights: ['Fun Ship Experience', 'WaterWorks', 'Serenity Adult-Only', 'Camp Ocean'],
      amenities: ['Guy\'s Burger Joint', 'BlueIguana Cantina', 'Playlist Productions', 'Carnival WaterWorks']
    },
    {
      id: 5,
      name: 'Virgin Cruise',
      region: 'cruise',
      description: 'Adults-only luxury with innovative dining, cutting-edge entertainment, and stunning ocean views.',
      gradient: 'from-pink-500 to-red-500',
      features: ['Adults Only', 'Premium Dining', 'Innovative Entertainment', 'Luxury Suites'],
      image: '/images/virgin.jpg',
      highlights: ['Adults-Only Experience', 'Scarlet Night', 'Razzle Dazzle', 'The Manor'],
      amenities: ['Included Gratuities', 'Premium WiFi', 'Fitness Classes', 'Group Fitness']
    },
    {
      id: 7,
      name: 'Sandals Resorts',
      region: 'beach',
      description: 'Adults-only luxury all-inclusive resorts in the Caribbean\'s most beautiful destinations.',
      gradient: 'from-teal-500 to-blue-600',
      features: ['Adults Only', 'All-Inclusive', 'Caribbean Locations', 'Butler Service'],
      image: '/images/ssv.avif',
      link: '/sandals-beaches',
      highlights: ['Adults-Only Luxury', 'All-Inclusive', 'Caribbean Locations', 'Butler Service'],
      amenities: ['Unlimited Luxury', 'Premium Spirits', 'Water Sports', 'Land Sports']
    },
    {
      id: 8,
      name: 'Beaches Resorts',
      region: 'beach',
      description: 'Family-friendly all-inclusive resorts with supervised kids programs and endless activities.',
      gradient: 'from-orange-500 to-pink-500',
      features: ['Family Friendly', 'Kids Programs', 'Water Parks', 'All-Inclusive'],
      image: '/images/btc.avif',
      link: '/sandals-beaches',
      highlights: ['Family-Friendly', 'Kids Programs', 'Water Parks', 'All-Inclusive'],
      amenities: ['Sesame Street Characters', 'Kids Camps', 'Water Sports', 'Land Sports']
    },
    {
      id: 9,
      name: 'Secrets Resorts',
      region: 'beach',
      description: 'Adults-only elegance with unlimited luxury and sophisticated amenities in stunning locations.',
      gradient: 'from-purple-500 to-indigo-600',
      features: ['Adults Only', 'Unlimited Luxury', 'Premium Dining', 'Spa Services'],
      image: '/images/Hammock.jpg',
      link: '/secrets',
      highlights: ['Adults-Only Elegance', 'Unlimited Luxury', 'Premium Dining', 'Spa Services'],
      amenities: ['Unlimited Luxury', 'Premium Spirits', 'Water Sports', 'Land Sports']
    },
    {
      id: 10,
      name: 'Breathless Resorts',
      region: 'beach',
      description: 'Vibrant adults-only resorts with energetic atmosphere, entertainment, and modern luxury.',
      gradient: 'from-red-500 to-pink-600',
      features: ['Adults Only', 'Vibrant Atmosphere', 'Entertainment', 'Modern Luxury'],
      image: '/images/breath.webp',
      link: '/breathless',
      highlights: ['Vibrant Atmosphere', 'Adults-Only', 'Entertainment', 'Modern Luxury'],
      amenities: ['Unlimited Luxury', 'Premium Spirits', 'Water Sports', 'Land Sports']
    },
    {
      id: 11,
      name: 'Iberostar Resorts',
      region: 'beach',
      description: 'Premium all-inclusive resorts combining comfort, gastronomy, and sustainability worldwide.',
      gradient: 'from-green-500 to-teal-600',
      features: ['All-Inclusive', 'Premium Comfort', 'Sustainable Tourism', 'Global Locations'],
      image: '/images/ibs.jpg',
      highlights: ['Premium Comfort', 'Sustainable Tourism', 'Global Locations', 'All-Inclusive'],
      amenities: ['All-Inclusive', 'Premium Dining', 'Water Sports', 'Land Sports']
    },
    {
      id: 12,
      name: 'Riu Hotels & Resorts',
      region: 'beach',
      description: 'All-inclusive beach resorts offering fun, quality, and value in tropical paradise settings.',
      gradient: 'from-blue-500 to-cyan-600',
      features: ['All-Inclusive', 'Beach Locations', 'Family & Adults', 'Entertainment Programs'],
      image: '/images/rui.jpg',
      link: '/riu',
      highlights: ['All-Inclusive', 'Beach Locations', 'Family & Adults', 'Entertainment Programs'],
      amenities: ['All-Inclusive', 'Premium Dining', 'Water Sports', 'Land Sports']
    },
    {
      id: 13,
      name: 'Hard Rock Hotels',
      region: 'beach',
      description: 'Rock-inspired luxury resorts with music-themed experiences and world-class amenities.',
      gradient: 'from-gray-700 to-red-600',
      features: ['Music Themed', 'Luxury Amenities', 'Rock Star Service', 'Live Entertainment'],
      image: '/images/HR.jpg',
      link: '/hard-rock',
      highlights: ['Music-Themed', 'Luxury Amenities', 'Rock Star Service', 'Live Entertainment'],
      amenities: ['All-Inclusive', 'Premium Dining', 'Water Sports', 'Land Sports']
    },
    {
      id: 16,
      name: 'Viking River Cruises',
      region: 'cruise',
      description: 'Explore the world\'s great rivers in comfort and style. From the castles of the Rhine to ancient temples of the Mekong.',
      gradient: 'from-blue-500 to-teal-500',
      features: ['Historic Waterways', 'Cultural Immersion', 'All-Inclusive', 'Small Ship Experience'],
      image: '/images/virgin.jpg',
      link: '/viking-river-cruises',
      highlights: ['Historic Waterways', 'Cultural Immersion', 'All-Inclusive', 'Small Ship Experience'],
      amenities: ['All-Inclusive', 'Cultural Lectures', 'Shore Excursions', 'Fine Dining']
    },
    {
      id: 17,
      name: 'Adventures by Disney',
      region: 'adventure',
      description: 'Experience guided group vacations to amazing destinations around the world with Disney storytelling and service.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Expert Disney Guides', 'Cultural Immersion', 'Family Adventures', 'VIP Experiences'],
      image: '/images/Castle.jpg',
      link: '/adventures-of-disney',
      highlights: ['Expert Disney Guides', 'Cultural Immersion', 'Family Adventures', 'VIP Experiences'],
      amenities: ['Disney Guides', 'Cultural Immersion', 'Family Adventures', 'VIP Experiences']
    },
    {
      id: 18,
      name: 'Royal Caribbean',
      region: 'cruise',
      description: 'Experience the world\'s most innovative cruise ships with revolutionary features, world-class entertainment, and unforgettable adventures.',
      gradient: 'from-blue-500 to-indigo-500',
      features: ['Innovative Ships', 'World-Class Entertainment', 'Family Adventures', 'Private Islands'],
      image: '/images/disney cruise.jpg',
      link: '/royal-caribbean',
      highlights: ['Innovative Ships', 'World-Class Entertainment', 'Family Adventures', 'Private Islands'],
      amenities: ['All-Inclusive', 'Premium Dining', 'Water Sports', 'Land Sports']
    },
  ];

  const regions = [
    { id: 'all', name: 'All Destinations' },
    { id: 'theme-parks', name: 'Theme Parks' },
    { id: 'beach', name: 'Beach Resorts' },
    { id: 'cruise', name: 'Cruises' },
    { id: 'adventure', name: 'Adventures' },
  ];

  const filteredDestinations = selectedRegion === 'all'
    ? destinations
    : destinations.filter(dest => dest.region === selectedRegion);

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDestination(null);
  };

  const openQuoteForm = () => {
    setShowQuoteForm(true);
    setShowModal(false);
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
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

  const handleInputChange = (e) => {
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
          ...formData,
          subject: `Quote Request - ${selectedDestination.name}`
        }),
      });

      if (response.ok) {
        alert('Thank you! Your quote request has been sent successfully.');
        closeQuoteForm();
      } else {
        alert('There was an error sending your request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your request. Please try again.');
    }
  };

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

        {/* Interactive Bubbles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(destination)}
            >
              <div className="relative w-48 h-48 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-lg font-bold text-center px-4 text-shadow-lg">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Destination Details Modal */}
        {showModal && selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedDestination.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 text-lg mb-4">{selectedDestination.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {selectedDestination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
                  <ul className="space-y-2">
                    {selectedDestination.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                {selectedDestination.link && (
                  <Link
                    to={selectedDestination.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  >
                    Learn More
                  </Link>
                )}
                <button
                  onClick={openQuoteForm}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Quote Form Modal */}
        {showQuoteForm && selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeQuoteForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Get a Quote for {selectedDestination.name}</h2>
                <button
                  onClick={closeQuoteForm}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="Over $10,000">Over $10,000</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Adults</label>
                    <input
                      type="number"
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                    <input
                      type="number"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departure Airport</label>
                    <input
                      type="text"
                      name="departureAirport"
                      value={formData.departureAirport}
                      onChange={handleInputChange}
                      placeholder="e.g., JFK, LAX, ORD"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      placeholder="e.g., March 15-22, 2024"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Any special requests or additional information..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={closeQuoteForm}
                    className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Send Quote Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

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