import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function NeedMoreInfo() {
  // Automatically scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    vacationType: '',
    budget: '',
    numberOfAdults: '',
    numberOfChildren: '',
    departureAirport: '',
    travelDates: '',
    additionalInfo: ''
  });

  const vacationTypes = [
    'Theme Parks',
    'Beach Resort',
    'Cruise',
    'European Tour',
    'Asian Adventure',
    'Caribbean Getaway',
    'Mountain Retreat',
    'African Safari',
    'Other'
  ];

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
          subject: 'New Client',
          formData
        }),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({
          fullName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phone: '',
          email: '',
          vacationType: '',
          budget: '',
          numberOfAdults: '',
          numberOfChildren: '',
          departureAirport: '',
          travelDates: '',
          additionalInfo: ''
        });
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      alert('There was an error sending your inquiry. Please try again or contact us directly.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ 
      backgroundImage: 'linear-gradient(to right bottom, #2193b0, #6dd5ed)',
    }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 text-shadow-lg">
              Start Planning Your Perfect Getaway
            </h1>
            <p className="text-xl font-light max-w-2xl mx-auto leading-relaxed text-shadow">
              Ready to turn your dream vacation into reality? Share your travel wishes with us, 
              and let Rob and Trish create a personalized adventure just for you. With our expertise 
              and attention to detail, your perfect getaway is just a few steps away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white border-opacity-20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-blue-500 pb-2 text-blue-800">Contact Information</h2>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Vacation Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-blue-500 pb-2 text-blue-800">Vacation Details</h2>

                <div>
                  <label htmlFor="vacationType" className="block text-sm font-medium text-gray-700">
                    Type of Vacation *
                  </label>
                  <select
                    id="vacationType"
                    name="vacationType"
                    value={formData.vacationType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select a vacation type</option>
                    {vacationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select your budget range</option>
                    <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $15,000">$10,000 - $15,000</option>
                    <option value="$15,000+">$15,000+</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="numberOfAdults" className="block text-sm font-medium text-gray-700">
                      Number of Adults *
                    </label>
                    <input
                      type="number"
                      id="numberOfAdults"
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleChange}
                      required
                      min="1"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700">
                      Number of Children Under 17
                    </label>
                    <input
                      type="number"
                      id="numberOfChildren"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleChange}
                      min="0"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="departureAirport" className="block text-sm font-medium text-gray-700">
                    Which airport will you be flying out of? *
                  </label>
                  <input
                    type="text"
                    id="departureAirport"
                    name="departureAirport"
                    value={formData.departureAirport}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Los Angeles International (LAX)"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700">
                    Travel Dates *
                  </label>
                  <input
                    type="text"
                    id="travelDates"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    required
                    placeholder="e.g. March 15-22, 2024 or Flexible dates in Spring 2024"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Please share any additional details that would help us plan your perfect vacation..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NeedMoreInfo; 