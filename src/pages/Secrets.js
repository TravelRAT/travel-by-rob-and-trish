import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Secrets() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResort, setSelectedResort] = useState(null);
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
          subject: `Inquiry about ${selectedResort.name}`,
          formData: {
            ...formData,
            resort: selectedResort.name,
            location: selectedResort.location
          }
        }),
      });

      if (response.ok) {
        alert(`Thank you for your inquiry about ${selectedResort.name}! We will contact you soon.`);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setShowModal(false);
        setSelectedResort(null);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (resort) => {
    setSelectedResort(resort);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedResort(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const resorts = [
    {
      id: 1,
      name: 'Secrets Maroma Beach Riviera Cancun',
      location: 'Riviera Maya, Mexico',
      filterCategory: 'mexico',
      description: 'AAA Five Diamond Resort on 500 acres of pristine white sand beach. Pure luxury and sophistication in an adults-only paradise.',
      gradient: 'from-purple-600 to-indigo-700',
      features: ['AAA Five Diamond', 'Adults-Only', 'World-Class Spa', '500 Acres'],
      image: '/images/Hammock.jpg',
      highlight: 'AAA Five Diamond'
    },
    {
      id: 2,
      name: 'Secrets Cap Cana Resort & Spa',
      location: 'Punta Cana, Dominican Republic',
      filterCategory: 'caribbean',
      description: 'Exclusive luxury on beautiful Juanillo Beach. Sophisticated elegance with stunning ocean views and premium amenities.',
      gradient: 'from-teal-600 to-blue-700',
      features: ['Exclusive Gated Community', 'Juanillo Beach', 'Golf Course Access', 'Premium Spa'],
      image: '/images/Hammock.jpg',
      highlight: 'Exclusive Luxury'
    },
    {
      id: 3,
      name: 'Secrets The Vine Cancun',
      location: 'Cancun, Mexico',
      filterCategory: 'mexico',
      description: 'Wine-inspired luxury in the heart of Cancun. Contemporary design with extensive wine collection and rooftop experiences.',
      gradient: 'from-red-600 to-purple-700',
      features: ['Wine Collection', 'Rooftop Experiences', 'Contemporary Design', 'AAA Four Diamond'],
      image: '/images/Hammock.jpg',
      highlight: 'Wine Paradise'
    },
    {
      id: 4,
      name: 'Secrets St. James Montego Bay',
      location: 'Montego Bay, Jamaica',
      filterCategory: 'caribbean',
      description: 'British Colonial elegance on a breathtaking peninsula. Classic sophistication meets Caribbean charm in this AAA Four Diamond resort.',
      gradient: 'from-green-600 to-teal-700',
      features: ['British Colonial Style', 'Peninsula Location', 'AAA Four Diamond', 'World-Class Spa'],
      image: '/images/Hammock.jpg',
      highlight: 'Colonial Elegance'
    },
    {
      id: 5,
      name: 'Secrets Playa Mujeres Golf & Spa Resort',
      location: 'Cancun, Mexico',
      filterCategory: 'mexico',
      description: 'Golf paradise with Greg Norman signature course. Secluded white sand beaches and championship golf in perfect harmony.',
      gradient: 'from-blue-600 to-green-700',
      features: ['Greg Norman Golf', 'Secluded Beach', 'AAA Four Diamond', 'Adults-Only'],
      image: '/images/Hammock.jpg',
      highlight: 'Golf Paradise'
    },
    {
      id: 6,
      name: 'Secrets Akumal Riviera Maya',
      location: 'Riviera Maya, Mexico',
      filterCategory: 'mexico',
      description: 'Turtle sanctuary paradise where luxury meets nature. Famous for sea turtle nesting and exceptional snorkeling opportunities.',
      gradient: 'from-emerald-600 to-teal-700',
      features: ['Sea Turtle Sanctuary', 'Snorkeling Paradise', 'AAA Four Diamond', 'Natural Beauty'],
      image: '/images/Hammock.jpg',
      highlight: 'Turtle Paradise'
    },
    {
      id: 7,
      name: 'Secrets Puerto Los Cabos Golf & Spa Resort',
      location: 'Los Cabos, Mexico',
      filterCategory: 'mexico',
      description: 'Desert meets ocean luxury with stunning Sea of Cortez views. Mountain backdrops and unique Baja California landscapes.',
      gradient: 'from-orange-600 to-red-700',
      features: ['Sea of Cortez Views', 'Desert Landscapes', 'Championship Golf', 'Unique Terrain'],
      image: '/images/Hammock.jpg',
      highlight: 'Desert Oasis'
    },
    {
      id: 8,
      name: 'Secrets Vallarta Bay Puerto Vallarta',
      location: 'Puerto Vallarta, Mexico',
      filterCategory: 'mexico',
      description: 'Pacific Coast elegance with vibrant culture. Beautiful beach setting with access to Puerto Vallarta\'s famous attractions.',
      gradient: 'from-sunset-orange to-pink-600',
      features: ['Pacific Ocean Views', 'Cultural Access', 'Beautiful Beach', 'AAA Four Diamond'],
      image: '/images/Hammock.jpg',
      highlight: 'Pacific Paradise'
    },
    {
      id: 9,
      name: 'Secrets Royal Beach Punta Cana',
      location: 'Punta Cana, Dominican Republic',
      filterCategory: 'caribbean',
      description: 'Over 700 yards of pristine white sand beach. Modern suites with vivid tropical colors and secluded romantic hideaways.',
      gradient: 'from-aqua-600 to-blue-700',
      features: ['700 Yards Beach', 'Modern Suites', 'Secluded Pools', 'AAA Four Diamond'],
      image: '/images/Hammock.jpg',
      highlight: 'Beachfront Bliss'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resorts' },
    { id: 'mexico', name: 'Mexico' },
    { id: 'caribbean', name: 'Caribbean' },
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

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {filteredResorts.map((resort, index) => (
            <motion.div
              key={resort.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-blue-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40">
                <div 
                  className={`w-full h-full ${resort.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${resort.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={resort.image ? { backgroundImage: `url(${resort.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${resort.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                        {resort.name}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        {resort.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-blue-50">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">{resort.description}</p>
                  <div className="space-y-3">
                    {resort.features.map((feature, idx) => (
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
                    Photos
                  </Link>
                  <button
                    onClick={() => openModal(resort)}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Secrets Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose Secrets Resorts?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💜</div>
              <h4 className="text-xl font-bold text-white mb-2">Adults-Only Luxury</h4>
              <p className="text-gray-300">Sophisticated atmosphere designed exclusively for couples seeking romance and tranquility.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h4 className="text-xl font-bold text-white mb-2">Unlimited Luxury®</h4>
              <p className="text-gray-300">No reservations required, premium spirits, 24-hour room service, and world-class amenities.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌺</div>
              <h4 className="text-xl font-bold text-white mb-2">Romantic Experiences</h4>
              <p className="text-gray-300">Secluded beaches, couples' spa treatments, and intimate dining experiences for unforgettable moments.</p>
            </div>
          </div>
        </motion.div>

        {/* Special Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Romance Packages Available
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">💒</div>
              <h4 className="text-xl font-bold text-white mb-2">Honeymoon Packages</h4>
              <p className="text-gray-300">Complimentary romantic amenities including sparkling wine, fruit, breakfast in bed, and spa discounts.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💍</div>
              <h4 className="text-xl font-bold text-white mb-2">Wedding Packages</h4>
              <p className="text-gray-300">Elegant wedding ceremonies with coordinator, flowers, cake, and romantic settings for your special day.</p>
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
            Ready for Your Secrets Romance?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you choose the perfect adults-only Secrets resort for your romantic getaway. 
            From AAA Diamond luxury to sophisticated elegance, your dream escape awaits!
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && selectedResort && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md border-2 border-teal-100 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Inquiry for {selectedResort.name}
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
                  placeholder={`I'm interested in ${selectedResort.name}...`}
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

export default Secrets;