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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Viking River Cruises
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore the World's Great Rivers in Comfort and Style
            </p>
            <p className="text-lg text-blue-200 max-w-4xl mx-auto">
              Experience the heart of civilization along the world's most historic waterways. 
              From the castles of the Rhine to the temples of the Mekong, Viking River Cruises 
              offers intimate, all-inclusive journeys that bring you closer to culture, history, and local life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6"
        >
          <h3 className="text-white text-lg font-semibold mb-4">Filter by Region:</h3>
          <div className="flex flex-wrap gap-3">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? 'bg-white text-blue-900 shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {region === 'all' ? 'All Regions' : region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cruises Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCruises.map((cruise, index) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${cruise.gradient} rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => openModal(cruise)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cruise.image} 
                  alt={cruise.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {cruise.highlight}
                </div>
              </div>
              
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{cruise.name}</h3>
                <p className="text-sm opacity-90 mb-3">{cruise.duration} • {cruise.region}</p>
                <p className="text-sm mb-4 line-clamp-3">{cruise.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cruise.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 py-2 px-4 rounded-lg font-semibold transition-all">
                  Learn More & Book
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white bg-opacity-10 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Set Sail?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Rob and Trish help you plan your perfect river cruise adventure
          </p>
          <Link
            to="/need-more-info"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Planning Your Journey
          </Link>
        </div>
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