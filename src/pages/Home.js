import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Disney Magic',
      description: 'Where dreams come true! Experience the wonder of Disney World.',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://www.disneytravelcenter.com/ms7e694227/',
      external: true
    },
    {
      id: 2,
      name: 'Universal Orlando',
      description: 'Check out Epic Universe\nNow Open',
      gradient: 'from-blue-500 to-indigo-500',
      link: '/destinations'
    },
    {
      id: 3,
      name: 'Disney Cruises',
      description: 'Magical voyages with Disney characters and Broadway-style shows.',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://www.disneytravelcenter.com/MIN-000000000098357/sites++disney-cruise-line++disney-cruise-line/',
      external: true
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Beach.jpg" 
            alt="Beautiful beach background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white md:max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
                Your Dream Vacation <br />
                Starts Here
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-shadow">
                Let Rob and Trish guide you to the perfect destination, from magical theme parks 
                to tropical paradises and luxurious cruises.
              </p>
              <div className="text-center md:text-left">
                <Link
                  to="/need-more-info"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Start Planning
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl md:max-w-sm w-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Exclusive Weekly Deals!
              </h2>
              <p className="text-gray-700 mb-6">
                Join our email list for subscriber-only discounts and be the first to know about special promotions!
              </p>
              <Link
                to="/exclusive-deals"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Sign Up Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Deals of the Week Banner */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ⏰ Limited Time Offers
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Exclusive Sandals & Beaches deals available for a limited time only!
            </p>
            <Link
              to="/sandals-beaches-deals"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl animate-pulse"
            >
              🎯 DEALS OF THE WEEK
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Discover our most sought-after vacation experiences</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-80 ${destination.id === 1 || destination.id === 2 || destination.id === 3 ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${destination.gradient}`} relative`} style={destination.id === 1 ? { backgroundImage: 'url(/images/Castle.jpg)' } : destination.id === 2 ? { backgroundImage: 'url(/images/Universal.jpg)' } : destination.id === 3 ? { backgroundImage: 'url(/images/disney%20cruise.jpg)' } : {}}>
                  <div className={`absolute inset-0 ${destination.id === 1 || destination.id === 2 || destination.id === 3 ? 'bg-black bg-opacity-40' : ''}`}>
                    {/* Title in top 1/4 */}
                    <div className="absolute top-0 left-0 right-0 h-1/4 flex items-center justify-center px-6">
                      <h3 className="text-3xl font-bold text-white text-center text-shadow-lg">{destination.name}</h3>
                    </div>
                    
                    {/* Description and button in bottom 1/3 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 flex flex-col items-center justify-center px-6">
                      <p className="text-white text-shadow mb-4 text-center text-sm whitespace-pre-line">{destination.description}</p>
                      <Link
                        to="/need-more-info"
                        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transform group-hover:scale-105 transition-transform duration-200 shadow-lg"
                      >
                        Request More Info
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Explore Destinations Button */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Explore More Options?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover all our amazing destinations including theme parks, cruises, and luxury resorts.
            </p>
            <Link
              to="/destinations"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore All Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Let our expertise make your vacation extraordinary</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Years of experience crafting perfect vacations for our clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Value</h3>
              <p className="text-gray-600">Exclusive deals and packages tailored to your budget</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">We're here for you before, during, and after your vacation</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/need-more-info"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Planning Your Dream Vacation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home; 