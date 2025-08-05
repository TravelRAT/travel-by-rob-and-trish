import React, { useState } from 'react';

function Giveaway() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    zip: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/giveaway-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: '', lastName: '', zip: '', email: '' });
      } else {
        setError('There was a problem submitting your entry. Please try again.');
      }
    } catch {
      setError('There was a problem submitting your entry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">$100 Full Vacation Giveaway!</h1>
        <p className="text-center text-gray-700 mb-6">
          Enter for a chance to win <span className="font-semibold">$100 off your next Full Vacation booked</span> with Travel by Rob and Trish!<br/>
          <span className="block mt-2 text-sm text-gray-500">Drawing: August 31st, 6pm. Valid only with Travel by Rob and Trish. Must book by 12/31/2025 and travel by 12/31/2026. One entry per person. Winner will be notified by email.</span>
        </p>
        {success ? (
          <div className="text-green-600 text-center font-semibold text-lg">Thank you for entering! Good luck! If you win, you'll receive $100 off your next Full Vacation booked with us.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Zip Code</label>
              <input type="text" name="zip" value={formData.zip} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50">
              {isSubmitting ? 'Submitting...' : 'Enter Giveaway'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Giveaway;