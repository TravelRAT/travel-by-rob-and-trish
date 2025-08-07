import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Secrets() {
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

  const secretsResorts = [
    {
      name: 'Secrets Maroma Beach Riviera Cancun',
      location: 'Riviera Maya, Mexico',
      coordinates: { lat: 20.6296, lng: -87.0739 },
      description: 'AAA Five Diamond Resort on 500 acres of pristine white sand beach. Pure luxury and sophistication in an adults-only paradise.',
      highlights: ['AAA Five Diamond', 'Adults-Only', 'World-Class Spa', '500 Acres of Beachfront'],
      amenities: [
        '12 gourmet restaurants and bars',
        'Infinity pools and swim-up bars',
        'Full-service spa and wellness center',
        'Daily activities and nightly entertainment',
        'Complimentary water sports',
        'Romantic beachfront dinners',
        'Free Wi-Fi throughout the resort'
      ],
      gradient: 'from-purple-600 to-indigo-700',
      image: '/images/Hammock.jpg'
    },
    {
      name: 'Secrets Cap Cana Resort & Spa',
      location: 'Punta Cana, Dominican Republic',
      coordinates: { lat: 18.5601, lng: -68.3725 },
      description: 'Exclusive luxury on beautiful Juanillo Beach. Sophisticated elegance with stunning ocean views and premium amenities.',
      highlights: ['Exclusive Gated Community', 'Juanillo Beach', 'Golf Course Access', 'Premium Spa'],
      amenities: [
        'Spacious suites with swim-out access',
        'Private white-sand beach',
        'Multiple gourmet dining options',
        'World-class spa and hydrotherapy circuit',
        'Access to championship golf courses',
        'Live music and themed parties',
        '24-hour room service'
      ],
      gradient: 'from-teal-600 to-blue-700',
      image: '/images/Beach.jpg'
    },
    {
      name: 'Secrets The Vine Cancun',
      location: 'Cancun, Mexico',
      coordinates: { lat: 21.1743, lng: -86.8466 },
      description: 'Wine-inspired luxury in the heart of Cancun. Contemporary design with extensive wine collection and rooftop experiences.',
      highlights: ['Wine Collection', 'Rooftop Experiences', 'Contemporary Design', 'AAA Four Diamond'],
      amenities: [
        'Over 4,500 wine labels',
        'Modern, elegant suites',
        'Infinity pools overlooking the Caribbean',
        'Gourmet restaurants and wine pairings',
        'Exclusive spa treatments',
        'Yoga and fitness classes',
        'Direct beach access'
      ],
      gradient: 'from-red-600 to-purple-700',
      image: '/images/Castle.jpg'
    },
    {
      name: 'Secrets St. James Montego Bay',
      location: 'Montego Bay, Jamaica',
      coordinates: { lat: 18.4655, lng: -77.9186 },
      description: 'British Colonial elegance on a breathtaking peninsula. Classic sophistication meets Caribbean charm in this AAA Four Diamond resort.',
      highlights: ['British Colonial Style', 'Peninsula Location', 'AAA Four Diamond', 'World-Class Spa'],
      amenities: [
        'Private beach and water sports',
        'Multiple pools and swim-up bars',
        'Full-service spa and wellness center',
        'Fine dining and Jamaican cuisine',
        'Casino and nightly entertainment',
        'Access to nearby golf courses',
        'Romantic gazebos and wedding venues'
      ],
      gradient: 'from-green-600 to-teal-700',
      image: '/images/Universal.jpg'
    },
    {
      name: 'Secrets Playa Mujeres Golf & Spa Resort',
      location: 'Cancun, Mexico',
      coordinates: { lat: 21.2333, lng: -86.8333 },
      description: 'Golf paradise with Greg Norman signature course. Secluded white sand beaches and championship golf in perfect harmony.',
      highlights: ['Greg Norman Golf', 'Secluded Beach', 'AAA Four Diamond', 'Adults-Only'],
      amenities: [
        'Championship golf course on-site',
        'Spacious suites with private terraces',
        'Multiple gourmet restaurants',
        'Expansive pools and lazy river',
        'Full-service spa and hydrotherapy',
        'Tennis courts and fitness center',
        'Live shows and themed events'
      ],
      gradient: 'from-yellow-600 to-orange-700',
      image: '/images/Universal2.jpg'
    },
    {
      name: 'Secrets Akumal Riviera Maya',
      location: 'Riviera Maya, Mexico',
      coordinates: { lat: 20.3964, lng: -87.3147 },
      description: 'Turtle sanctuary paradise where luxury meets nature. Famous for sea turtle nesting and exceptional snorkeling opportunities.',
      highlights: ['Sea Turtle Sanctuary', 'Snorkeling Paradise', 'AAA Four Diamond', 'Natural Beauty'],
      amenities: [
        'Direct access to Akumal Beach',
        'Snorkeling with sea turtles',
        'Multiple pools and swim-up bars',
        'Gourmet dining and themed nights',
        'Full-service spa and yoga classes',
        'Eco-friendly initiatives',
        'Romantic beachfront cabanas'
      ],
      gradient: 'from-emerald-600 to-green-700',
      image: '/images/Tulum.jpg'
    },
    {
      name: 'Secrets Puerto Los Cabos Golf & Spa Resort',
      location: 'Los Cabos, Mexico',
      coordinates: { lat: 23.0597, lng: -109.6976 },
      description: 'Desert meets ocean luxury with stunning Sea of Cortez views. Mountain backdrops and unique Baja California landscapes.',
      highlights: ['Sea of Cortez Views', 'Desert Landscapes', 'Championship Golf', 'Unique Terrain'],
      amenities: [
        'Oceanfront infinity pools',
        'Championship golf nearby',
        'Gourmet restaurants and bars',
        'Desert botanical gardens',
        'Full-service spa and wellness',
        'Art walks and cultural events',
        'Private terraces with hot tubs'
      ],
      gradient: 'from-orange-600 to-red-700',
      image: '/images/breath.webp'
    },
    {
      name: 'Secrets Vallarta Bay Puerto Vallarta',
      location: 'Puerto Vallarta, Mexico',
      coordinates: { lat: 20.6597, lng: -105.2333 },
      description: 'Pacific Coast elegance with vibrant culture. Beautiful beach setting with access to Puerto Vallarta\'s famous attractions.',
      highlights: ['Pacific Ocean Views', 'Cultural Access', 'Beautiful Beach', 'AAA Four Diamond'],
      amenities: [
        'Beachfront infinity pools',
        'Easy access to downtown Puerto Vallarta',
        'Gourmet restaurants and local cuisine',
        'Full-service spa and hydrotherapy',
        'Live music and cultural shows',
        'Water sports and excursions',
        'Romantic sunset views'
      ],
      gradient: 'from-blue-600 to-cyan-700',
      image: '/images/Beach.jpg'
    },
    {
      name: 'Secrets Royal Beach Punta Cana',
      location: 'Punta Cana, Dominican Republic',
      coordinates: { lat: 18.5601, lng: -68.3725 },
      description: 'Over 700 yards of pristine white sand beach. Modern suites with vivid tropical colors and secluded romantic hideaways.',
      highlights: ['700 Yards Beach', 'Modern Suites', 'Secluded Pools', 'AAA Four Diamond'],
      amenities: [
        'Expansive white sand beach',
        'Modern, colorful suites',
        'Multiple pools and swim-up bars',
        'Gourmet dining and international cuisine',
        'Full-service spa and wellness',
        'Nightly entertainment and casino',
        'Private cabanas and Bali beds'
      ],
      gradient: 'from-pink-600 to-purple-700',
      image: '/images/Beach.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/Hammock.jpg" 
              alt="Secrets Resorts luxury background" 
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
                Secrets Resorts
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Unlimited-Luxury® • Adults-Only Excellence • World-Class Spas • Sophisticated Getaways
              </p>
            </motion.div>
          </div>
        </div>

        {/* About Secrets Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About Secrets Resorts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Secrets Resorts represents the pinnacle of adults-only luxury travel, offering sophisticated 
                escapes designed exclusively for couples seeking romance and tranquility. Each resort embodies 
                the Unlimited-Luxury® concept, providing an all-inclusive experience where no reservations are 
                required for dining, premium spirits flow freely, and world-class amenities are available 24/7.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From pristine beaches to championship golf courses, from wine-inspired experiences to turtle 
                sanctuaries, Secrets Resorts span the most beautiful destinations across Mexico and the Caribbean, 
                each offering its own unique blend of luxury, romance, and adventure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">What Makes Secrets Special</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">💜</span>
                  <span>Adults-Only Sophistication</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🍽️</span>
                  <span>Unlimited-Luxury® Dining</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🌺</span>
                  <span>Romantic Experiences</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏆</span>
                  <span>AAA Diamond Recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Interactive Resort Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-teal-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Secrets Resorts
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Click on any resort bubble to discover detailed information about each luxurious destination
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {secretsResorts.map((resort, index) => (
              <motion.div
                key={index}
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
          className="text-center bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Secrets Experience?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect adults-only Secrets resort for your romantic getaway. 
            From AAA Diamond luxury to sophisticated elegance, your dream escape awaits!
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
                  {selectedResort.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Amenities & Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedResort.amenities.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
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

export default Secrets;