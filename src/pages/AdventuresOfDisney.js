import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AdventuresOfDisney() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);
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
          subject: `Disney Adventure Inquiry - ${selectedDestination.name}`,
          formData: {
            ...formData,
            destination: selectedDestination.name,
            location: selectedDestination.location
          }
        }),
      });

      if (response.ok) {
        alert(`Thank you for your inquiry about ${selectedDestination.name}! We will contact you soon.`);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setShowModal(false);
        setSelectedDestination(null);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDestination(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const disneyDestinations = [
    {
      id: 1,
      name: 'European River Cruise',
      location: 'Rhine & Danube Rivers',
      region: 'Europe',
      filterRegion: 'europe',
      description: 'Sail through the heart of Europe with Disney-guided tours of castles, vineyards, and historic cities.',
      gradient: 'from-blue-500 to-purple-600',
      features: ['Disney Adventure Guides', 'Cultural Immersion', 'Family-Friendly', 'All-Inclusive'],
      image: '/images/Castle.jpg',
      highlight: 'River Adventure',
      details: 'Rhine & Danube Rivers, Medieval Castles, Local Culture',
      bestTime: 'Apr-Oct'
    },
    {
      id: 2,
      name: 'African Safari',
      location: 'South Africa',
      region: 'Africa',
      filterRegion: 'africa',
      description: 'Experience the Big Five and African culture with Disney\'s expert adventure guides and storytelling.',
      gradient: 'from-orange-500 to-red-600',
      features: ['Wildlife Safari', 'Cultural Experiences', 'Disney Guides', 'Luxury Accommodations'],
      image: '/images/travel-pattern.svg',
      highlight: 'Safari Adventure',
      details: 'Big Five Game Drives, Cultural Villages, Cape Town',
      bestTime: 'May-Sep'
    },
    {
      id: 3,
      name: 'Costa Rica & Panama',
      location: 'Central America',
      region: 'Americas',
      filterRegion: 'americas',
      description: 'Discover rainforests, wildlife, and the Panama Canal with Disney\'s adventure guides.',
      gradient: 'from-green-500 to-teal-600',
      features: ['Rainforest Exploration', 'Wildlife Encounters', 'Panama Canal', 'Adventure Guides'],
      image: '/images/travel-pattern.svg',
      highlight: 'Rainforest Adventure',
      details: 'Manuel Antonio, Panama Canal, Wildlife Reserves',
      bestTime: 'Dec-Apr'
    },
    {
      id: 4,
      name: 'Japan',
      location: 'Tokyo, Kyoto & Hiroshima',
      region: 'Asia',
      filterRegion: 'asia',
      description: 'Experience ancient traditions and modern culture with Disney storytelling and local insights.',
      gradient: 'from-pink-500 to-red-500',
      features: ['Cultural Immersion', 'Traditional Experiences', 'Modern Japan', 'Expert Guides'],
      image: '/images/Castle.jpg',
      highlight: 'Cultural Journey',
      details: 'Tokyo Disney, Kyoto Temples, Hiroshima History',
      bestTime: 'Mar-May, Sep-Nov'
    },
    {
      id: 5,
      name: 'China',
      location: 'Beijing, Xi\'an & Shanghai',
      region: 'Asia',
      filterRegion: 'asia',
      description: 'Explore the Great Wall, Terracotta Warriors, and modern Shanghai with Disney adventure guides.',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Great Wall of China', 'Terracotta Warriors', 'Cultural Sites', 'Local Cuisine'],
      image: '/images/travel-pattern.svg',
      highlight: 'Ancient Wonders',
      details: 'Great Wall, Forbidden City, Shanghai Disney',
      bestTime: 'Apr-Jun, Sep-Nov'
    },
    {
      id: 6,
      name: 'Australia & New Zealand',
      location: 'Sydney, Melbourne & Auckland',
      region: 'Oceania',
      filterRegion: 'oceania',
      description: 'Discover the Land Down Under with Disney guides - from the Outback to the Great Barrier Reef.',
      gradient: 'from-blue-600 to-green-500',
      features: ['Great Barrier Reef', 'Sydney Opera House', 'Maori Culture', 'Wildlife Encounters'],
      image: '/images/travel-pattern.svg',
      highlight: 'Down Under',
      details: 'Sydney Harbor, Uluru, Milford Sound',
      bestTime: 'Sep-Mar'
    },
    {
      id: 7,
      name: 'Private Jet Adventures',
      location: 'Multiple Worldwide Destinations',
      region: 'Luxury',
      filterRegion: 'luxury',
      description: 'Ultimate luxury travel with Disney\'s private jet to multiple destinations in one incredible journey.',
      gradient: 'from-purple-600 to-gold-500',
      features: ['Private Disney Jet', 'Multiple Countries', 'VIP Experiences', 'Luxury Accommodations'],
      image: '/images/travel-pattern.svg',
      highlight: 'Ultimate Luxury',
      details: 'Around the World, VIP Access, Luxury Service',
      bestTime: 'Year-round'
    },
    {
      id: 8,
      name: 'American West',
      location: 'Arizona, Utah & Colorado',
      region: 'Americas',
      filterRegion: 'americas',
      description: 'Explore the Grand Canyon, national parks, and the American frontier with Disney adventure guides.',
      gradient: 'from-red-500 to-orange-600',
      features: ['Grand Canyon', 'National Parks', 'Western Culture', 'Adventure Activities'],
      image: '/images/travel-pattern.svg',
      highlight: 'Wild West',
      details: 'Grand Canyon, Arches, Mesa Verde',
      bestTime: 'Mar-May, Sep-Nov'
    }
  ];

  const regions = ['all', 'europe', 'asia', 'americas', 'africa', 'oceania', 'luxury'];

  const filteredDestinations = selectedRegion === 'all' 
    ? disneyDestinations 
    : disneyDestinations.filter(destination => destination.filterRegion === selectedRegion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/Castle.jpg" 
              alt="Disney Castle background" 
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
                Adventures by Disney
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Guided Group Vacations to Amazing Destinations
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Type Filter */}
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
                {region === 'all' ? 'All Adventures' : 
                 region === 'europe' ? 'Europe' :
                 region === 'asia' ? 'Asia' :
                 region === 'americas' ? 'Americas' :
                 region === 'africa' ? 'Africa' :
                 region === 'oceania' ? 'Oceania' :
                 region === 'luxury' ? 'Luxury' : region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-blue-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40">
                <div 
                  className={`w-full h-full ${destination.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${destination.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={destination.image ? { backgroundImage: `url(${destination.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${destination.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        {destination.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-blue-50">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="space-y-3">
                    {destination.features.map((feature, idx) => (
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
                    onClick={() => openModal(destination)}
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
            Ready for Your Disney Adventure?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let Rob and Trish help you plan the perfect Disney guided adventure. 
            Experience the magic with expert Disney guides and seamless planning.
          </p>
          <Link
            to="/need-more-info"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Planning Your Magic
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedDestination.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
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
                <p className="text-gray-600 mb-4">{selectedDestination.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">{selectedDestination.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Best Time</h4>
                    <p className="text-gray-600">{selectedDestination.bestTime}</p>
                  </div>
                  <div className="col-span-2">
                    <h4 className="font-semibold text-gray-800">Adventure Details</h4>
                    <p className="text-gray-600 text-sm">{selectedDestination.details}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDestination.features.map((feature, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
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
                    placeholder="Tell us about your Disney dreams and any questions you have..."
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
                    className="flex-1 py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
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

export default AdventuresOfDisney;