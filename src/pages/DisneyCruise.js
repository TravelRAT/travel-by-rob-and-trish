import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function DisneyCruise() {
  const [selectedShipClass, setSelectedShipClass] = useState('all');
  const [selectedShip, setSelectedShip] = useState(null);
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
          subject: `Inquiry about ${selectedShip.name}`,
          formData: {
            ...formData,
            ship: selectedShip.name,
            shipClass: selectedShip.shipClass
          }
        }),
      });

      if (response.ok) {
        alert(`Thank you for your inquiry about ${selectedShip.name}! We will contact you soon.`);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setShowModal(false);
        setSelectedShip(null);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (ship) => {
    setSelectedShip(ship);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedShip(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
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

        {/* Ships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {filteredShips.map((ship, index) => (
            <motion.div
              key={ship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-blue-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40">
                <div 
                  className={`w-full h-full ${ship.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${ship.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={ship.image ? { backgroundImage: `url(${ship.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${ship.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                        {ship.name}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        {ship.shipClass} • {ship.yearBuilt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-blue-50">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">{ship.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-3">
                      <span>Guests: {ship.guests}</span>
                      <span>Staterooms: {ship.staterooms}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {ship.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => openModal(ship)}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Disney Cruise Line Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose Disney Cruise Line?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏰</div>
              <h4 className="text-xl font-bold text-white mb-2">Disney Magic</h4>
              <p className="text-gray-300">Beloved Disney characters, Broadway-style shows, and magical moments that only Disney can create at sea.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="text-xl font-bold text-white mb-2">Family Perfect</h4>
              <p className="text-gray-300">Age-specific clubs, family staterooms, rotational dining, and activities designed for every member of the family.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation at Sea</h4>
              <p className="text-gray-300">AquaDuck water coasters, AquaMouse adventures, virtual portholes, and cutting-edge entertainment technology.</p>
            </div>
          </div>
        </motion.div>

        {/* Disney Cruise Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            The Disney Cruise Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🎭</div>
              <h4 className="text-xl font-bold text-white mb-2">World-Class Entertainment</h4>
              <p className="text-gray-300">Broadway-caliber shows, Disney character interactions, deck parties with fireworks, and immersive themed experiences throughout your voyage.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🍽️</div>
              <h4 className="text-xl font-bold text-white mb-2">Rotational Dining</h4>
              <p className="text-gray-300">Unique dining concept where you rotate through different themed restaurants each night while your servers follow you for personalized service.</p>
            </div>
          </div>
        </motion.div>

        {/* Fleet Classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Disney's Ship Classes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🎪</div>
              <h4 className="text-xl font-bold text-white mb-2">Magic Class</h4>
              <p className="text-gray-300">Classic Disney charm with intimate settings, perfect for first-time cruisers and those seeking timeless Disney magic.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🌊</div>
              <h4 className="text-xl font-bold text-white mb-2">Dream Class</h4>
              <p className="text-gray-300">Enhanced with AquaDuck water coasters, larger family staterooms, and expanded entertainment districts for ultimate family fun.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-2">Triton Class</h4>
              <p className="text-gray-300">The newest innovation featuring AquaMouse, Star Wars experiences, Marvel dining, and revolutionary suite accommodations.</p>
            </div>
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
            Ready for Your Magical Disney Cruise?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect Disney cruise ship and itinerary for your family's dream vacation. 
            From character dining to Broadway shows, your magical voyage awaits!
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && selectedShip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md border-2 border-teal-100 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Inquiry for {selectedShip.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder={`I'm interested in sailing on the ${selectedShip.name}...`}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default DisneyCruise;