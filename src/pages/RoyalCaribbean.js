import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RoyalCaribbean() {
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
      name: "Icon of the Seas",
      shipClass: "Icon Class",
      filterClass: "icon",
      yearBuilt: "2024",
      description: "The world's largest cruise ship with revolutionary features including 8 neighborhoods, 7 pools, and the largest waterpark at sea.",
      gradient: "from-blue-500 to-teal-500",
      features: ["8 Neighborhoods", "7 Pools", "Largest Waterpark at Sea", "20+ Decks"],
      image: "/images/disney cruise.jpg",
      highlight: "World's Largest",
      guests: "7,600",
      staterooms: "2,805",
      hasSpecialLink: true,
      specialLink: "https://secure.cruisingpower.com/iconoftheseas?id=eyJiIjoiMjEzNDc2IiwiZCI6IjEzNDIwNTYiLCJuIjoiUm9iaW4gV2hpdGVoYWlyIiwiZSI6InIud2hpdGVoYWlyQG1hZ2ljYWx2YWNhdGlvbnBsYW5uZXIuY29tIiwiYSI6Ik1BR0lDQUwgVkFDQVRJT04gUExBTk5FUiIsInAiOiIzMTc4NTAzNzUwIiwibSI6IkkgYW0gcGxlYXNlZCB0byByZXZlYWwgdGhlIG5ld2VzdCBzaGlwIGluIHRoZSBSb3lhbCBDYXJpYmJlYW4gRmxlZXQsIGFuZCBob3BlIHRoaXMgaXMgdGhlIHN0YXJ0IG9mIGNyZWF0aW5nIGljb25pYyB2YWNhdGlvbnMgdG9nZXRoZXIuIiwiYyI6IlVTRCIsImNjIjoiVVNBIn0="
    },
    {
      id: 2,
      name: "Wonder of the Seas",
      shipClass: "Oasis Class",
      filterClass: "oasis",
      yearBuilt: "2022",
      description: "Experience wonder across 8 unique neighborhoods, featuring the Ultimate Abyss slide and Central Park.",
      gradient: "from-purple-500 to-pink-500",
      features: ["8 Neighborhoods", "Ultimate Abyss", "Central Park", "Perfect Day Access"],
      image: "/images/disney cruise.jpg",
      highlight: "Ultimate Adventure",
      guests: "6,988",
      staterooms: "2,867"
    },
    {
      id: 3,
      name: "Symphony of the Seas",
      shipClass: "Oasis Class",
      filterClass: "oasis",
      yearBuilt: "2018",
      description: "A symphony of excitement with revolutionary features including the Ultimate Family Suite.",
      gradient: "from-red-500 to-orange-500",
      features: ["Ultimate Family Suite", "Laser Tag", "Bionic Bar", "AquaTheater"],
      image: "/images/disney cruise.jpg",
      highlight: "Family Paradise",
      guests: "6,680",
      staterooms: "2,759"
    }
  ];

  const shipClasses = [
    { id: 'all', name: 'All Ships' },
    { id: 'icon', name: 'Icon Class' },
    { id: 'oasis', name: 'Oasis Class' }
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
              src="/images/disney cruise.jpg" 
              alt="Royal Caribbean fleet background" 
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
                Royal Caribbean International
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                The Most Innovative Ships • World-Class Entertainment • Family Adventures
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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
                <div className="mt-6 space-y-3">
                  {ship.hasSpecialLink ? (
                    <a
                      href={ship.specialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
                    >
                      Explore Icon
                    </a>
                  ) : null}
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

        {/* Why Choose Royal Caribbean Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 mb-16 mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose Royal Caribbean?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚢</div>
              <h4 className="text-xl font-bold text-white mb-2">Innovative Ships</h4>
              <p className="text-gray-300">Revolutionary features like the Ultimate Abyss slide, FlowRider surf simulator, and RipCord by iFLY skydiving.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-xl font-bold text-white mb-2">World-Class Entertainment</h4>
              <p className="text-gray-300">Broadway-caliber shows, ice skating spectaculars, AquaTheater performances, and live music venues.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌴</div>
              <h4 className="text-xl font-bold text-white mb-2">Perfect Day at CocoCay</h4>
              <p className="text-gray-300">Access to Royal Caribbean's private island paradise with the tallest waterslide in North America.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Your Royal Caribbean Adventure?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect Royal Caribbean ship and itinerary for your dream vacation. 
            From innovative entertainment to island adventures, your perfect cruise awaits!
          </p>
          <Link
            to="/need-more-info"
            className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
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

export default RoyalCaribbean;