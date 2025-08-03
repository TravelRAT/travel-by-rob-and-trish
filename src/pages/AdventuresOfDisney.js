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
      name: 'Walt Disney World Resort',
      location: 'Orlando, Florida',
      region: 'USA',
      filterRegion: 'usa',
      description: 'The most magical place on earth featuring four theme parks, luxury resorts, and endless Disney magic.',
      gradient: 'from-blue-500 to-purple-600',
      features: ['4 Theme Parks', 'Disney Resorts', 'Character Dining', 'Genie+ FastPass'],
      image: '/images/Castle.jpg',
      highlight: 'Most Magical Place',
      parks: 'Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom',
      bestTime: 'Year-round'
    },
    {
      id: 2,
      name: 'Disneyland Resort',
      location: 'Anaheim, California',
      region: 'USA',
      filterRegion: 'usa',
      description: 'Where the magic began! Experience Walt Disney\'s original theme park plus Disney California Adventure.',
      gradient: 'from-pink-500 to-rose-600',
      features: ['Original Disneyland', 'California Adventure', 'Disney Hotels', 'MaxPass'],
      image: '/images/Castle.jpg',
      highlight: 'Where Magic Began',
      parks: 'Disneyland Park, Disney California Adventure',
      bestTime: 'Sep-Nov, Jan-May'
    },
    {
      id: 3,
      name: 'Disneyland Paris',
      location: 'Marne-la-Vallée, France',
      region: 'Europe',
      filterRegion: 'europe',
      description: 'European Disney magic with unique attractions, stunning castle, and French flair in the heart of Europe.',
      gradient: 'from-purple-500 to-indigo-600',
      features: ['European Castle', 'Walt Disney Studios', 'French Culture', 'Easy Paris Access'],
      image: '/images/Castle.jpg',
      highlight: 'European Magic',
      parks: 'Disneyland Park, Walt Disney Studios Park',
      bestTime: 'Apr-Jun, Sep-Oct'
    },
    {
      id: 4,
      name: 'Tokyo Disney Resort',
      location: 'Tokyo, Japan',
      region: 'Asia',
      filterRegion: 'asia',
      description: 'Experience Disney with Japanese hospitality and unique attractions found nowhere else in the world.',
      gradient: 'from-red-500 to-pink-500',
      features: ['Japanese Hospitality', 'Unique Attractions', 'DisneySea', 'Cultural Fusion'],
      image: '/images/Castle.jpg',
      highlight: 'Japanese Disney',
      parks: 'Tokyo Disneyland, Tokyo DisneySea',
      bestTime: 'Apr-May, Sep-Nov'
    },
    {
      id: 5,
      name: 'Hong Kong Disneyland',
      location: 'Hong Kong',
      region: 'Asia',
      filterRegion: 'asia',
      description: 'Compact Disney magic with stunning harbor views, unique attractions, and easy exploration in one day.',
      gradient: 'from-teal-500 to-cyan-600',
      features: ['Harbor Views', 'Mystic Manor', 'Compact Size', 'Cultural Blend'],
      image: '/images/Castle.jpg',
      highlight: 'Harbor Magic',
      parks: 'Hong Kong Disneyland Park',
      bestTime: 'Oct-Dec, Mar-May'
    },
    {
      id: 6,
      name: 'Shanghai Disneyland',
      location: 'Shanghai, China',
      region: 'Asia',
      filterRegion: 'asia',
      description: 'The newest Disney resort featuring the tallest Disney castle and innovative attractions with Chinese culture.',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Tallest Castle', 'TRON Attraction', 'Chinese Culture', 'Modern Technology'],
      image: '/images/Castle.jpg',
      highlight: 'Newest Disney',
      parks: 'Shanghai Disneyland Park',
      bestTime: 'Mar-May, Sep-Nov'
    },
    {
      id: 7,
      name: 'Disney Cruise Line',
      location: 'Various Destinations',
      region: 'Cruise',
      filterRegion: 'cruise',
      description: 'Magical voyages with Disney characters, Broadway shows, and private island adventures at sea.',
      gradient: 'from-blue-600 to-teal-500',
      features: ['Character Experiences', 'Broadway Shows', 'Private Island', 'Rotational Dining'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Magic at Sea',
      parks: 'Multiple Ships & Destinations',
      bestTime: 'Year-round'
    },
    {
      id: 8,
      name: 'Adventures by Disney',
      location: 'Worldwide Destinations',
      region: 'Adventure',
      filterRegion: 'adventure',
      description: 'Guided group vacations to amazing destinations around the world with Disney storytelling and service.',
      gradient: 'from-green-500 to-emerald-600',
      features: ['Expert Guides', 'Cultural Immersion', 'Family Adventures', 'Disney Service'],
      image: '/images/travel-pattern.svg',
      highlight: 'Global Adventures',
      parks: 'Africa, Asia, Europe, Americas',
      bestTime: 'Varies by Destination'
    }
  ];

  const regions = ['all', 'usa', 'europe', 'asia', 'cruise', 'adventure'];

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
                Adventures of Disney
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Discover Magic Around the World
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
                 region === 'usa' ? 'USA Parks' :
                 region === 'europe' ? 'European Parks' :
                 region === 'asia' ? 'Asian Parks' :
                 region === 'cruise' ? 'Disney Cruises' :
                 region === 'adventure' ? 'Global Adventures' : region.charAt(0).toUpperCase() + region.slice(1)}
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
      </div>
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
                    <h4 className="font-semibold text-gray-800">Parks/Experiences</h4>
                    <p className="text-gray-600 text-sm">{selectedDestination.parks}</p>
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