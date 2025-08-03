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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
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
              Adventures of Disney
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Discover Magic Around the World
            </p>
            <p className="text-lg text-purple-200 max-w-4xl mx-auto">
              From the original Disneyland in California to the newest adventures in Shanghai, 
              experience Disney magic across the globe. Whether you're seeking theme park thrills, 
              cruise adventures, or guided cultural experiences, let us help you create memories that will last a lifetime.
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
          <h3 className="text-white text-lg font-semibold mb-4">Filter by Type:</h3>
          <div className="flex flex-wrap gap-3">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? 'bg-white text-purple-900 shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
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
        </motion.div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${destination.gradient} rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => openModal(destination)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {destination.highlight}
                </div>
              </div>
              
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-sm opacity-90 mb-3">{destination.location}</p>
                <p className="text-sm mb-4 line-clamp-3">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.features.slice(0, 2).map((feature, idx) => (
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
            Ready for Your Disney Adventure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let Rob and Trish help you plan the perfect Disney experience for your family
          </p>
          <Link
            to="/need-more-info"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Planning Your Magic
          </Link>
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