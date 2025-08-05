import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Exclusive Deals', path: '/exclusive-deals' },
    { name: 'Free Guides', path: '/ebooks' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Need More Info', path: '/need-more-info' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Giveaway Button */}
            <Link
              to="/giveaway"
              className="mr-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              style={{ minWidth: 120, textAlign: 'center' }}
            >
              Giveaway
            </Link>
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/images/web-logo.png" 
                alt="Travel by Rob and Trish" 
                className="h-16 w-auto object-contain"
                style={{ maxWidth: '200px' }}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 