import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [emailData, setEmailData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'r.whitehair@magicalvacationplanner.com',
          subject: 'New Newsletter Signup',
          formData: {
            fullName: emailData.name,
            email: emailData.email,
            phone: '',
            message: `New newsletter signup from ${emailData.name} (${emailData.email}). Please add them to your travel deals mailing list.`,
            inquiryType: 'Newsletter Signup'
          }
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmailData({ name: '', email: '' });
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to submit newsletter signup');
      }
    } catch (error) {
      setSubmitError('Sorry, there was an error submitting your signup. Please try again or contact us directly.');
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/web-logo.png" 
                alt="Travel by Rob and Trish" 
                className="h-20 w-auto object-contain"
                style={{ maxWidth: '240px' }}
              />
            </div>
            <p className="text-gray-300">
              Your trusted travel partners for creating unforgettable journeys and memories that last a lifetime.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Destinations</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-white">Special Deals</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Theme Parks</h4>
            <ul className="space-y-2">
              <li><a href="https://www.disneytravelcenter.com/ms7e694227/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Disney World</a></li>
              <li><a href="https://www.disneytravelcenter.com/ms7e694227/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Disneyland</a></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Universal Orlando</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Universal Hollywood</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Cruises</h4>
            <ul className="space-y-2">
              <li><Link to="/disney-cruise" className="text-gray-300 hover:text-white">Disney Cruise</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Carnival Cruise</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Virgin Voyages</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Royal Caribbean</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resorts</h4>
            <ul className="space-y-2">
              <li><Link to="/sandals-beaches" className="text-gray-300 hover:text-white">Sandals</Link></li>
              <li><Link to="/sandals-beaches" className="text-gray-300 hover:text-white">Beaches</Link></li>
              <li><Link to="/secrets" className="text-gray-300 hover:text-white">Secrets</Link></li>
              <li><Link to="/breathless" className="text-gray-300 hover:text-white">Breathless</Link></li>
              <li><Link to="/riu" className="text-gray-300 hover:text-white">RIU</Link></li>
              <li><Link to="/hard-rock" className="text-gray-300 hover:text-white">Hard Rock</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Indianapolis, IN</li>
              <li>Rob: <a href="tel:+13178503750" className="text-blue-400 hover:text-blue-300 underline">(317) 850-3750</a></li>
              <li>Trish: <a href="tel:+13172468850" className="text-blue-400 hover:text-blue-300 underline">(317) 246-8850</a></li>
              <li>Office: <a href="tel:+13174013669" className="text-blue-400 hover:text-blue-300 underline">(317) 401-3669</a></li>
              <li>Email: <a href="mailto:r.whitehair@magicalvacationplanner.com" className="text-blue-400 hover:text-blue-300 underline">r.whitehair@magicalvacationplanner.com</a></li>
            </ul>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Exclusive Travel Deals!</h3>
            <p className="text-gray-300 mb-6">
              Be the first to hear about special offers and deals from our travel providers. 
              Join our newsletter for insider access to the best vacation packages.
            </p>
            
            {!isSubmitted ? (
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={emailData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={emailData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Our Newsletter'}
                  </button>
                  <p className="text-xs text-gray-400 mt-4 max-w-xl mx-auto">
                    By submitting this form, you understand that we will be sending you 1-2 emails per week 
                    with special offers, deals, and travel updates. You can unsubscribe at any time.
                  </p>
                </form>
                
                {submitError && (
                  <div className="mt-4 bg-red-800 text-red-100 px-6 py-4 rounded-lg">
                    <p className="text-sm">{submitError}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-green-800 text-green-100 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">Thank you for subscribing!</p>
                <p className="text-sm">We've received your newsletter signup and will add you to our exclusive travel deals list. You'll start receiving special offers soon!</p>
              </div>
            )}
          </div>
        </div>

                  {/* Contact Button Section */}
          <div className="mt-12 text-center">
            <Link
              to="/need-more-info"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us About Your Next Adventure
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Travel by Rob and Trish. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer; 