import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function VikingRiverCruises() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCruise, setSelectedCruise] = useState(null);
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
          subject: `Quote Request - ${selectedCruise.name}`,
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

  const openModal = (cruise) => {
    setSelectedCruise(cruise);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCruise(null);
  };

  const openQuoteForm = () => {
    setShowQuoteForm(true);
    setShowModal(false);
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
    setSelectedCruise(null);
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

  const riverCruises = [
    {
      id: 1,
      name: 'Rhine Getaway',
      region: 'Europe',
      filterRegion: 'europe',
      duration: '8 Days',
      description: 'Journey through the heart of Europe along the legendary Rhine River, visiting fairy-tale castles and charming medieval towns.',
      gradient: 'from-blue-500 to-teal-500',
      features: ['Medieval Castles', 'Wine Tastings', 'Cultural Tours', 'Historic Towns'],
      image: '/images/virgin.jpg',
      highlight: 'Classic Europe',
      ports: 'Amsterdam, Cologne, Heidelberg, Strasbourg',
      season: 'Apr-Oct'
    },
    {
      id: 2,
      name: 'Danube Waltz',
      region: 'Europe',
      filterRegion: 'europe',
      duration: '8 Days',
      description: 'Sail the "Blue Danube" through four countries, experiencing imperial cities, baroque architecture, and rich musical heritage.',
      gradient: 'from-purple-500 to-indigo-500',
      features: ['Imperial Cities', 'Music Heritage', 'Baroque Architecture', 'UNESCO Sites'],
      image: '/images/Castle.jpg',
      highlight: 'Musical Journey',
      ports: 'Budapest, Vienna, Salzburg, Passau',
      season: 'Mar-Nov'
    },
    {
      id: 3,
      name: 'Paris & The Heart of Normandy',
      region: 'France',
      filterRegion: 'france',
      duration: '8 Days',
      description: 'Explore the Seine River from Paris to the historic beaches of Normandy, combining city elegance with wartime history.',
      gradient: 'from-rose-500 to-pink-500',
      features: ['City of Light', 'D-Day Beaches', 'Impressionist Art', 'French Cuisine'],
      image: '/images/travel-pattern.svg',
      highlight: 'History & Art',
      ports: 'Paris, Rouen, Honfleur, Caudebec-en-Caux',
      season: 'Apr-Oct'
    },
    {
      id: 4,
      name: 'Romantic Douro',
      region: 'Portugal',
      filterRegion: 'portugal',
      duration: '10 Days',
      description: 'Discover Portugal\'s stunning Douro Valley, famous for its terraced vineyards, port wine, and breathtaking landscapes.',
      gradient: 'from-orange-500 to-red-500',
      features: ['Terraced Vineyards', 'Port Wine', 'UNESCO Valley', 'Traditional Villages'],
      image: '/images/Beach.jpg',
      highlight: 'Wine Country',
      ports: 'Porto, Peso da Régua, Pinhão, Salamanca',
      season: 'Mar-Nov'
    },
    {
      id: 5,
      name: 'Volga Dreams',
      region: 'Russia',
      filterRegion: 'russia',
      duration: '13 Days',
      description: 'Journey through Russia\'s heartland along the mighty Volga River, visiting historic cities and experiencing Russian culture.',
      gradient: 'from-red-600 to-yellow-500',
      features: ['Russian Culture', 'Historic Cities', 'Onion Domes', 'Traditional Crafts'],
      image: '/images/travel-pattern.svg',
      highlight: 'Cultural Immersion',
      ports: 'Moscow, Yaroslavl, Nizhny Novgorod, Volgograd',
      season: 'May-Sep'
    },
    {
      id: 6,
      name: 'Magnificent Mekong',
      region: 'Asia',
      filterRegion: 'asia',
      duration: '15 Days',
      description: 'Explore the exotic Mekong River through Vietnam and Cambodia, discovering ancient temples and vibrant cultures.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Ancient Temples', 'Floating Markets', 'Local Culture', 'Exotic Cuisine'],
      image: '/images/travel-pattern.svg',
      highlight: 'Exotic Adventure',
      ports: 'Ho Chi Minh City, Phnom Penh, Siem Reap, Hanoi',
      season: 'Aug-Apr'
    }
  ];

  const regions = ['all', 'europe', 'france', 'portugal', 'russia', 'asia'];

  const filteredCruises = selectedRegion === 'all' 
    ? riverCruises 
    : riverCruises.filter(cruise => cruise.filterRegion === selectedRegion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/virgin.jpg" 
              alt="Viking River Cruise background" 
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
                Viking River Cruises
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Explore the World's Great Rivers in Comfort and Style
              </p>
            </motion.div>
          </div>
        </div>

        {/* About Viking River Cruises Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About Viking River Cruises
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Viking River Cruises offers the world's leading river cruise experiences, combining 
                cultural enrichment, destination-focused itineraries, and elegant accommodations. 
                Each journey is carefully crafted to immerse guests in the history, culture, and 
                beauty of the world's most iconic rivers.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the romantic Danube to the exotic Mekong, Viking's award-winning river ships 
                provide an intimate way to explore historic cities, charming villages, and stunning 
                landscapes while enjoying world-class dining and exceptional service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">What Makes Viking Special</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏛️</span>
                  <span>Cultural Enrichment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🌊</span>
                  <span>River Exploration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🍽️</span>
                  <span>World-Class Dining</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">👑</span>
                  <span>Elegant Accommodations</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Region Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border-2 border-teal-100 bg-white p-1 shadow-lg">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedRegion === region
                    ? 'bg-teal-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {region === 'all' ? 'All Regions' : region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Cruise Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Viking River Cruises
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Click on any cruise bubble to discover detailed information about each river adventure
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredCruises.map((cruise, index) => (
              <motion.div
                key={cruise.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(cruise)}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${cruise.gradient} group-hover:brightness-110 transition-all duration-300`}
                    style={cruise.image ? { backgroundImage: `url(${cruise.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                      <h3 className="text-sm md:text-base font-bold mb-2 leading-tight">
                        {cruise.name.split(' ').slice(0, 3).join(' ')}
                      </h3>
                      <p className="text-xs opacity-90">
                        {cruise.duration} • {cruise.region}
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
                    {cruise.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {cruise.duration} • {cruise.region}
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-900 to-teal-900 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Set Sail?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Rob and Trish help you plan the perfect river cruise adventure. 
            Experience culture, history, and luxury along the world's great rivers.
          </p>
          <button className="bg-gradient-to-r from-teal-400 to-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-500 hover:to-blue-500 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </motion.div>
      </div>

      {/* Modal for Cruise Details */}
      {showModal && selectedCruise && (
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
                  className={`w-full h-full bg-gradient-to-br ${selectedCruise.gradient} bg-cover bg-center`}
                  style={selectedCruise.image ? { backgroundImage: `url(${selectedCruise.image})` } : {}}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h2 className="text-3xl font-bold mb-2">{selectedCruise.name}</h2>
                      <p className="text-xl opacity-90">🚢 {selectedCruise.duration} • {selectedCruise.region}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedCruise.description}
                </p>
                
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Duration</h4>
                      <p className="text-gray-600">{selectedCruise.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Region</h4>
                      <p className="text-gray-600">{selectedCruise.region}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Season</h4>
                      <p className="text-gray-600">{selectedCruise.season}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Key Ports</h4>
                      <p className="text-gray-600 text-sm">{selectedCruise.ports}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCruise.features.map((feature, idx) => (
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
      {showQuoteForm && selectedCruise && (
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
                  Get a Quote for {selectedCruise.name}
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

export default VikingRiverCruises;