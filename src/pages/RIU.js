import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RIU() {
  const [selectedCategory, setSelectedCategory] = useState('all');
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
      name: 'Riu Palace Las Americas',
      location: 'Cancun, Mexico',
      filterCategory: 'mexico',
      description: 'Adults-only luxury in the heart of Cancun Hotel Zone. Elegant architecture with 24-hour all-inclusive service and exchange privileges.',
      gradient: 'from-blue-600 to-teal-700',
      features: ['Adults-Only', '24hr All-Inclusive', 'Hotel Zone Location', 'Exchange Privileges'],
      image: '/images/rui.jpg',
      highlight: 'Adults-Only Luxury'
    },
    {
      id: 2,
      name: 'Riu Palace Kukulkan',
      location: 'Cancun, Mexico',
      filterCategory: 'mexico',
      description: 'Oceanfront elegance with Elite Club by RIU premium service. Over 400 superior rooms with stunning ocean views and premium amenities.',
      gradient: 'from-turquoise-600 to-blue-700',
      features: ['Elite Club Available', 'Ocean Views', '400+ Rooms', 'Premium Location'],
      image: '/images/rui.jpg',
      highlight: 'Elite Club'
    },
    {
      id: 3,
      name: 'Riu Palace Aquarelle',
      location: 'Falmouth, Jamaica',
      filterCategory: 'caribbean',
      description: 'Brand new beachfront resort on White Bay Beach with over 700 rooms. Features Splash Water World and authentic Jamaican hospitality.',
      gradient: 'from-green-600 to-blue-700',
      features: ['700+ Rooms', 'Splash Water World', 'White Bay Beach', 'Brand New Resort'],
      image: '/images/rui.jpg',
      highlight: 'Newest Resort'
    },
    {
      id: 4,
      name: 'Riu Palace Aruba',
      location: 'Palm Beach, Aruba',
      filterCategory: 'caribbean',
      description: 'Adults-only paradise on famous Palm Beach with guaranteed sunshine. Sophisticated elegance in the heart of the Caribbean.',
      gradient: 'from-orange-600 to-red-700',
      features: ['Adults-Only', 'Palm Beach Location', 'Guaranteed Sunshine', 'Caribbean Paradise'],
      image: '/images/rui.jpg',
      highlight: 'Guaranteed Sunshine'
    },
    {
      id: 5,
      name: 'Riu Palace Costa Rica',
      location: 'Guanacaste, Costa Rica',
      filterCategory: 'central_america',
      description: 'Eco-luxury on Matapalo Beach with Four Seasons Golf access. Perfect blend of adventure and relaxation in tropical Costa Rica.',
      gradient: 'from-green-600 to-emerald-700',
      features: ['Eco-Luxury', 'Golf Access', 'Adventure Activities', 'Pacific Coast'],
      image: '/images/rui.jpg',
      highlight: 'Eco-Adventure'
    },
    {
      id: 6,
      name: 'Riu Palace Riviera Maya',
      location: 'Playa del Carmen, Mexico',
      filterCategory: 'mexico',
      description: 'Family paradise in exclusive Playacar with pristine white sand beach. Recently renovated with modern luxury and tropical gardens.',
      gradient: 'from-cyan-600 to-blue-700',
      features: ['Family-Friendly', 'Playacar Location', '2019 Renovation', 'Tropical Gardens'],
      image: '/images/rui.jpg',
      highlight: 'Family Paradise'
    },
    {
      id: 7,
      name: 'Riu Palace Cabo San Lucas',
      location: 'Los Cabos, Mexico',
      filterCategory: 'mexico',
      description: 'Desert meets ocean luxury with stunning views of the famous Cabo arches. Premium all-inclusive with world-class amenities.',
      gradient: 'from-yellow-600 to-orange-700',
      features: ['Famous Arches Views', 'Desert & Ocean', 'Premium Service', 'Baja Peninsula'],
      image: '/images/rui.jpg',
      highlight: 'Iconic Location'
    },
    {
      id: 8,
      name: 'Riu Palace Bavaro',
      location: 'Punta Cana, Dominican Republic',
      filterCategory: 'caribbean',
      description: 'Nearly 1,000 rooms on stunning Arena Gorda Beach with Elite Club options. 11 pools including Splash Water World access.',
      gradient: 'from-aqua-600 to-blue-700',
      features: ['1,000 Rooms', '11 Pools', 'Arena Gorda Beach', 'Elite Club Options'],
      image: '/images/rui.jpg',
      highlight: 'Mega Resort'
    },
    {
      id: 9,
      name: 'Riu Palace Jamaica',
      location: 'Montego Bay, Jamaica',
      filterCategory: 'caribbean',
      description: 'Adults-only sophistication near Montego Bay with pristine beach and authentic Jamaican culture. Luxury redefined in paradise.',
      gradient: 'from-emerald-600 to-green-700',
      features: ['Adults-Only', 'Montego Bay Area', 'Authentic Culture', 'Pristine Beach'],
      image: '/images/rui.jpg',
      highlight: 'Jamaican Culture'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resorts' },
    { id: 'mexico', name: 'Mexico' },
    { id: 'caribbean', name: 'Caribbean' },
    { id: 'central_america', name: 'Central America' },
  ];

  const filteredResorts = selectedCategory === 'all'
    ? resorts
    : resorts.filter(resort => resort.filterCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/rui.jpg" 
              alt="RIU Hotels & Resorts luxury background" 
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
                RIU Hotels & Resorts
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                24-Hour All-Inclusive • Fun & Quality • Paradise Destinations
              </p>
            </motion.div>
          </div>
        </div>

        {/* About RIU Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About RIU Hotels & Resorts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                RIU Hotels & Resorts is a Spanish hotel chain that has been creating unforgettable 
                vacation experiences since 1953. With a focus on "Fun & Quality," RIU offers 
                24-hour all-inclusive experiences that combine luxury, entertainment, and authentic 
                local culture in the world's most beautiful destinations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the premium RIU Palace collection to the fun-filled Club Hotels RIU, each 
                resort is designed to provide guests with everything they need for the perfect 
                vacation - unlimited dining, premium beverages, entertainment, and activities 
                all included in one convenient package.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">What Makes RIU Special</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏖️</span>
                  <span>24-Hour All-Inclusive</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🎉</span>
                  <span>Fun for Everyone</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🌍</span>
                  <span>Paradise Destinations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">👑</span>
                  <span>Premium Service</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border-2 border-teal-100 bg-white p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {category.name}
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
            Explore Our RIU Hotels & Resorts
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Click on any resort bubble to discover detailed information about each paradise destination
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your RIU Adventure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect RIU resort for your dream vacation. 
            From family fun to adults-only luxury, your tropical escape awaits!
          </p>
          <button className="bg-gradient-to-r from-teal-400 to-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-500 hover:to-blue-500 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
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

export default RIU;