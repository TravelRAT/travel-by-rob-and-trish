import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SandalsBeachesDeals() {
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const deals = [
    { id: 1, image: '/images/s1.jpeg', name: 'Sandals Royal Caribbean', location: 'Montego Bay, Jamaica' },
    { id: 2, image: '/images/s2.jpeg', name: 'Sandals Negril', location: 'Negril, Jamaica' },
    { id: 3, image: '/images/s3.jpeg', name: 'Sandals Ochi', location: 'Ocho Rios, Jamaica' },
    { id: 4, image: '/images/s4.jpeg', name: 'Sandals South Coast', location: 'White House, Jamaica' },
    { id: 5, image: '/images/s5.jpeg', name: 'Sandals Montego Bay', location: 'Montego Bay, Jamaica' },
    { id: 6, image: '/images/s6.jpeg', name: 'Sandals Grande St. Lucian', location: 'Gros Islet, St. Lucia' },
    { id: 7, image: '/images/s7.jpeg', name: 'Sandals Halcyon Beach', location: 'Castries, St. Lucia' },
    { id: 8, image: '/images/s8.jpeg', name: 'Sandals LaSource Grenada', location: 'St. George\'s, Grenada' },
    { id: 9, image: '/images/s9.jpeg', name: 'Sandals Royal Bahamian', location: 'Nassau, Bahamas' },
    { id: 10, image: '/images/s10.jpeg', name: 'Sandals Emerald Bay', location: 'Great Exuma, Bahamas' },
    { id: 11, image: '/images/s11.jpeg', name: 'Sandals Barbados', location: 'St. Lawrence Gap, Barbados' },
    { id: 12, image: '/images/s12.jpeg', name: 'Sandals Royal Barbados', location: 'St. Lawrence Gap, Barbados' },
    { id: 13, image: '/images/s13.jpeg', name: 'Beaches Turks & Caicos', location: 'Providenciales, Turks & Caicos' },
    { id: 14, image: '/images/s14.jpeg', name: 'Beaches Negril', location: 'Negril, Jamaica' },
    { id: 15, image: '/images/s15.jpeg', name: 'Beaches Ocho Rios', location: 'Ocho Rios, Jamaica' },
    { id: 16, image: '/images/s16.jpeg', name: 'Beaches South Coast', location: 'White House, Jamaica' },
  ];

  const openEmailForm = (deal) => {
    setSelectedDeal(deal);
    setShowEmailForm(true);
  };

  const closeEmailForm = () => {
    setShowEmailForm(false);
    setSelectedDeal(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const openImageModal = (imageSrc, dealName) => {
    console.log('Opening image modal for:', dealName, imageSrc);
    setSelectedImage({ src: imageSrc, name: dealName });
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    console.log('Closing image modal');
    setShowImageModal(false);
    setSelectedImage(null);
  };

  const handleInputChange = (e) => {
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
          ...formData,
          subject: `Hot Deal - ${selectedDeal.name}`
        }),
      });

      if (response.ok) {
        alert('Thank you! Your deal request has been sent successfully.');
        closeEmailForm();
      } else {
        alert('There was an error sending your request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/ssv.avif" 
            alt="Sandals & Beaches Deals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-shadow-lg">
              Deals of the Week
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-shadow max-w-5xl mx-auto">
              Exclusive offers on Sandals & Beaches resorts - Limited time only!
            </p>
            <div className="mt-8">
              <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold animate-pulse">
                ⏰ Limited Time Offers
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            This Week's Hottest Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover incredible savings on luxury all-inclusive resorts. These exclusive offers 
            are available for a limited time only - don't miss out on your dream vacation!
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-auto object-contain cursor-zoom-in hover:scale-105 transition-transform duration-300"
                  onClick={() => openImageModal(deal.image, deal.name)}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    HOT DEAL
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-95 rounded-lg px-4 py-3 text-sm font-bold text-gray-800 flex items-center space-x-2 shadow-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <button
                  onClick={() => openEmailForm(deal)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-lg text-lg font-bold hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  I Want This Deal!
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {showImageModal && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{selectedImage.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Email Form Modal */}
        {showEmailForm && selectedDeal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeEmailForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get This Hot Deal!</h2>
                <button
                  onClick={closeEmailForm}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedDeal.name}</h3>
                <p className="text-gray-600">{selectedDeal.location}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Any special requests or questions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={closeEmailForm}
                    className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't Miss These Incredible Deals!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            These exclusive offers are available for a limited time only. Contact us today to 
            secure your spot at these luxury all-inclusive resorts before they're gone!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SandalsBeachesDeals;
