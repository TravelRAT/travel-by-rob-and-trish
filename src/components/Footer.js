import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <h4 className="text-lg font-semibold">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Disney World</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Universal Studios</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white">Caribbean Cruises</Link></li>
              <li><Link to="/sandals-beaches" className="text-gray-300 hover:text-white">Sandals & Beaches</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Indianapolis, IN</li>
              <li>Rob: (317) 850-3750</li>
              <li>Trish: (317) 246-8850</li>
              <li>Office: (317) 401-3669</li>
              <li>Email: r.whitehair@magicalvacationplanner.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Travel by Rob and Trish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 