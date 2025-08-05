import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function VikingRiverCruises() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'r.whitehair@magicalvacationplanner.com',
          subject: `Viking River Cruise Inquiry - ${selectedCruise.name}`,
          formData: {
            ...formData,
            cruise: selectedCruise.name,
            region: selectedCruise.region
          }
        }),
      });

      if (response.ok) {
        alert(`Thank you for your inquiry about ${selectedCruise.name}! We will contact you soon.`);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setShowModal(false);
        setSelectedCruise(null);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (cruise) => {
    setSelectedCruise(cruise);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCruise(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
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

        {/* Cruises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {filteredCruises.map((cruise, index) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-blue-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40">
                <div 
                  className={`w-full h-full ${cruise.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${cruise.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={cruise.image ? { backgroundImage: `url(${cruise.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${cruise.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                        {cruise.name}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        {cruise.duration} • {cruise.region}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-blue-50">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">{cruise.description}</p>
                  <div className="space-y-3">
                    {cruise.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Link
                    to="/need-more-info"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
                  >
                    Request Info
                  </Link>
                  <button
                    onClick={() => openModal(cruise)}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
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
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Set Sail?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let Rob and Trish help you plan the perfect river cruise adventure. 
            Experience culture, history, and luxury along the world's great rivers.
          </p>
          <Link
            to="/need-more-info"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Planning Your Journey
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && selectedCruise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedCruise.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={selectedCruise.image} 
                  alt={selectedCruise.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4">{selectedCruise.description}</p>
                
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
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCruise.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mb-4">Request More Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your travel preferences and any questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default VikingRiverCruises;