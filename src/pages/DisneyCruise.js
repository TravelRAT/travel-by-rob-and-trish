import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function DisneyCruise() {
  const [selectedShipClass, setSelectedShipClass] = useState('all');
  const [selectedShip, setSelectedShip] = useState(null);
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
          subject: `Quote Request - ${selectedShip.name}`,
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

  const openModal = (ship) => {
    setSelectedShip(ship);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedShip(null);
  };

  const openQuoteForm = () => {
    setShowQuoteForm(true);
    setShowModal(false);
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
    setSelectedShip(null);
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

  const ships = [
    {
      id: 1,
      name: 'Disney Magic',
      shipClass: 'Magic Class',
      filterClass: 'magic',
      yearBuilt: '1998',
      description: 'The ship that started it all! Classic Disney magic with Broadway-style shows, character meet & greets, and the iconic red funnel.',
      gradient: 'from-red-400 to-pink-500',
      features: ['Classic Disney Style', 'Broadway Shows', 'Rotational Dining', 'Character Experiences'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Original Magic',
      guests: '2,400',
      staterooms: '877'
    },
    {
      id: 2,
      name: 'Disney Wonder',
      shipClass: 'Magic Class',
      filterClass: 'magic',
      yearBuilt: '1999',
      description: 'Sister ship to the Magic, featuring the same classic charm with unique entertainment and the beloved Castaway Cay experience.',
      gradient: 'from-blue-600 to-purple-700',
      features: ['Sister to Magic', 'Classic Charm', 'Castaway Cay', 'Family Adventure'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Classic Twin',
      guests: '2,400',
      staterooms: '877'
    },
    {
      id: 3,
      name: 'Disney Dream',
      shipClass: 'Dream Class',
      filterClass: 'dream',
      yearBuilt: '2011',
      description: 'Larger and more spectacular with the revolutionary AquaDuck water coaster, enhanced staterooms, and expanded family entertainment.',
      gradient: 'from-cyan-600 to-blue-700',
      features: ['AquaDuck Water Coaster', 'Enhanced Staterooms', 'Larger Size', 'Family Districts'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'AquaDuck Pioneer',
      guests: '4,000',
      staterooms: '1,250'
    },
    {
      id: 4,
      name: 'Disney Fantasy',
      shipClass: 'Dream Class',
      filterClass: 'dream',
      yearBuilt: '2012',
      description: 'The ultimate family cruise experience with AquaDuck, adult-exclusive districts, and the most extensive kids clubs at sea.',
      gradient: 'from-purple-600 to-pink-700',
      features: ['AquaDuck Perfected', 'Adult Districts', 'Ultimate Kids Clubs', 'Family Paradise'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Family Ultimate',
      guests: '4,000',
      staterooms: '1,250'
    },
    {
      id: 5,
      name: 'Disney Wish',
      shipClass: 'Triton Class',
      filterClass: 'triton',
      yearBuilt: '2022',
      description: 'The newest innovation featuring AquaMouse, Star Wars Hyperspace Lounge, Marvel dining, and the revolutionary Wish Tower Suite.',
      gradient: 'from-yellow-600 to-amber-600',
      features: ['AquaMouse', 'Star Wars Lounge', 'Marvel Dining', 'Wish Tower Suite'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Newest Innovation',
      guests: '4,000',
      staterooms: '1,254'
    },
    {
      id: 6,
      name: 'Disney Treasure',
      shipClass: 'Triton Class',
      filterClass: 'triton',
      yearBuilt: '2024',
      description: 'Adventure-themed sister to Wish with Aladdin theming, Plaza de Coco restaurant, and Broadway-caliber entertainment.',
      gradient: 'from-amber-600 to-orange-700',
      features: ['Aladdin Themed', 'Plaza de Coco', 'Adventure Focus', 'Broadway Entertainment'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Adventure Magic',
      guests: '4,000',
      staterooms: '1,254'
    },
    {
      id: 7,
      name: 'Disney Destiny',
      shipClass: 'Triton Class',
      filterClass: 'triton',
      yearBuilt: '2025',
      description: 'Heroes & Villains themed ship launching late 2025 with Marvel experiences, unique dining, and cutting-edge family entertainment.',
      gradient: 'from-red-600 to-black',
      features: ['Heroes & Villains', 'Marvel Experiences', 'Destiny Tower Suite', 'Coming 2025'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Heroes & Villains',
      guests: '4,000',
      staterooms: '1,254'
    },
    {
      id: 8,
      name: 'Disney Adventure',
      shipClass: 'Global Class',
      filterClass: 'global',
      yearBuilt: '2025',
      description: 'The largest Disney ship ever, designed for Asian markets with unique cultural experiences and Disney magic for international guests.',
      gradient: 'from-emerald-600 to-teal-700',
      features: ['Largest Disney Ship', 'Asian Markets', 'Cultural Experiences', 'Global Magic'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Largest Ever',
      guests: '6,700',
      staterooms: '2,500'
    }
  ];

  const shipClasses = [
    { id: 'all', name: 'All Ships' },
    { id: 'magic', name: 'Magic Class' },
    { id: 'dream', name: 'Dream Class' },
    { id: 'triton', name: 'Triton Class' },
    { id: 'global', name: 'Global Class' },
  ];

  const filteredShips = selectedShipClass === 'all'
    ? ships
    : ships.filter(ship => ship.filterClass === selectedShipClass);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/disney%20cruise.jpg" 
              alt="Disney Cruise Line fleet background" 
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
                Disney Cruise Line
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Where Dreams Set Sail • Magical Voyages • Character Adventures • Family Magic
              </p>
            </motion.div>
          </div>
        </div>

        {/* About Disney Cruise Line Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About Disney Cruise Line
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Disney Cruise Line brings the magic of Disney to the high seas, offering unforgettable 
                family vacations where every moment is filled with wonder and adventure. From Broadway-style 
                shows to character meet & greets, from innovative water attractions to world-class dining, 
                each ship is designed to create magical memories that last a lifetime.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're sailing on the classic Magic and Wonder, the innovative Dream and Fantasy, 
                or the newest Triton Class ships, you'll experience Disney's signature attention to detail, 
                exceptional service, and family-focused entertainment that sets Disney Cruise Line apart.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">What Makes Disney Cruise Line Special</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏰</span>
                  <span>Disney Magic Everywhere</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
                  <span>Perfect for Families</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🎭</span>
                  <span>Broadway-Quality Shows</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🌊</span>
                  <span>Innovative Attractions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Ship Class Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border-2 border-teal-100 bg-white p-1 shadow-lg">
            {shipClasses.map((shipClass) => (
              <button
                key={shipClass.id}
                onClick={() => setSelectedShipClass(shipClass.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedShipClass === shipClass.id
                    ? 'bg-teal-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {shipClass.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Ship Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Disney Cruise Ships
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Click on any ship bubble to discover detailed information about each magical vessel
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredShips.map((ship, index) => (
              <motion.div
                key={ship.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(ship)}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${ship.gradient} group-hover:brightness-110 transition-all duration-300`}
                    style={ship.image ? { backgroundImage: `url(${ship.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                      <h3 className="text-sm md:text-base font-bold mb-2 leading-tight">
                        {ship.name}
                      </h3>
                      <p className="text-xs opacity-90">
                        {ship.shipClass} • {ship.yearBuilt}
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
                    {ship.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {ship.shipClass} • {ship.yearBuilt}
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
          className="text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Magical Disney Cruise?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect Disney cruise ship and itinerary for your family's dream vacation. 
            From character dining to Broadway shows, your magical voyage awaits!
          </p>
          <button className="bg-gradient-to-r from-teal-400 to-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-500 hover:to-blue-500 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </motion.div>
      </div>

      {/* Modal for Ship Details */}
      {showModal && selectedShip && (
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
                  className={`w-full h-full bg-gradient-to-br ${selectedShip.gradient} bg-cover bg-center`}
                  style={selectedShip.image ? { backgroundImage: `url(${selectedShip.image})` } : {}}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h2 className="text-3xl font-bold mb-2">{selectedShip.name}</h2>
                      <p className="text-xl opacity-90">🚢 {selectedShip.shipClass} • {selectedShip.yearBuilt}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedShip.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Guests: {selectedShip.guests}</span>
                    <span>Staterooms: {selectedShip.staterooms}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedShip.features.map((feature, idx) => (
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
      {showQuoteForm && selectedShip && (
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
                  Get a Quote for {selectedShip.name}
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

export default DisneyCruise;