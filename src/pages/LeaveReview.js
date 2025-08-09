import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LeaveReview() {
  const [formData, setFormData] = useState({
    familyLastName: '',
    reviewText: '',
    rating: '5',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting review:', formData);
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'r.whitehair@magicalvacationplanner.com',
          subject: 'New Client Review',
          formData
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormData({ familyLastName: '', reviewText: '', rating: '5' });
      alert('Thank you for your review! We truly appreciate your feedback.');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Sorry, there was a problem submitting your review. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <img
            src="/images/web-logo.png"
            alt="Magical Vacation Planner by Rob & Trish"
            className="h-20 w-auto mx-auto mb-4 object-contain"
            style={{ maxWidth: '260px' }}
          />
          <h1 className="text-4xl font-bold">Leave a Review</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We value your experience and would love to hear about your trip!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="familyLastName" className="block text-sm font-medium text-gray-700">
                Family Last Name
              </label>
              <input
                type="text"
                id="familyLastName"
                name="familyLastName"
                value={formData.familyLastName}
                onChange={handleChange}
                required
                placeholder="e.g., Johnson"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">
                Your Review
              </label>
              <textarea
                id="reviewText"
                name="reviewText"
                rows={5}
                value={formData.reviewText}
                onChange={handleChange}
                required
                placeholder="Share highlights from your experience..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Star Rating (1–5)
              </label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors shadow"
            >
              Submit Review
            </button>
          </form>

          <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">A Note from Rob & Trish</h2>
            <p className="text-blue-900">
              I’d also be honored to assist you with your future adventures. As a full-service travel agency, Magical Vacation Planner by Rob & Trish can book your travel anywhere in the world — from cruises and all-inclusive resorts to guided tours and unique experiences.
            </p>
            <p className="mt-3 text-blue-900">
              And remember, referrals are the highest compliment you can give. If you have friends or family looking to plan a trip, please send them my way — I’d be truly grateful.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LeaveReview;


