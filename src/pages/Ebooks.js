import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Ebooks() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEbook, setSelectedEbook] = useState(null);
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
          subject: `Ebook Download Request - ${selectedEbook.title}`,
          formData: {
            ...formData,
            ebook: selectedEbook.title,
            category: selectedEbook.category
          }
        }),
      });

      if (response.ok) {
        alert(`Thank you! We will send you "${selectedEbook.title}" shortly.`);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setShowModal(false);
        setSelectedEbook(null);
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      alert('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (ebook) => {
    setSelectedEbook(ebook);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEbook(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const ebooks = [
    {
      id: 1,
      title: 'Disney World First-Timer\'s Guide',
      category: 'Disney',
      filterCategory: 'disney',
      author: 'Rob & Trish',
      description: 'Everything you need to know for your first magical Disney World vacation, from park strategies to dining reservations.',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Park Strategies', 'Dining Tips', 'FastPass+ Guide', 'Money-Saving Tips'],
      image: '/images/Castle.jpg',
      highlight: 'Most Popular',
      pages: '45 Pages',
      format: 'PDF'
    },
    {
      id: 2,
      title: 'Caribbean All-Inclusive Resort Guide',
      category: 'Beach',
      filterCategory: 'beach',
      author: 'Rob & Trish',
      description: 'Discover the best all-inclusive resorts in the Caribbean with insider tips on which resorts offer the best value.',
      gradient: 'from-blue-500 to-teal-600',
      features: ['Resort Comparisons', 'Best Value Picks', 'Booking Tips', 'Excursion Guide'],
      image: '/images/Beach.jpg',
      highlight: 'Insider Tips',
      pages: '32 Pages',
      format: 'PDF'
    },
    {
      id: 3,
      title: 'Cruise Planning Essentials',
      category: 'Cruise',
      filterCategory: 'cruise',
      author: 'Rob & Trish',
      description: 'Master the art of cruise planning with tips on cabin selection, dining packages, and shore excursions.',
      gradient: 'from-blue-600 to-indigo-600',
      features: ['Cabin Selection', 'Dining Packages', 'Shore Excursions', 'Packing Lists'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Complete Guide',
      pages: '38 Pages',
      format: 'PDF'
    },
    {
      id: 4,
      title: 'Universal Orlando Survival Guide',
      category: 'Theme Parks',
      filterCategory: 'theme-parks',
      author: 'Rob & Trish',
      description: 'Navigate Universal Orlando like a pro with strategies for both parks, Express Pass tips, and must-do attractions.',
      gradient: 'from-red-500 to-orange-600',
      features: ['Express Pass Strategy', 'Park Hopping Tips', 'Butterbeer Guide', 'Hotel Benefits'],
      image: '/images/Universal.jpg',
      highlight: 'Pro Tips',
      pages: '29 Pages',
      format: 'PDF'
    },
    {
      id: 5,
      title: 'European River Cruise Planner',
      category: 'Cruise',
      filterCategory: 'cruise',
      author: 'Rob & Trish',
      description: 'Plan the perfect European river cruise with destination guides, packing tips, and cultural insights.',
      gradient: 'from-green-500 to-blue-500',
      features: ['Route Comparisons', 'Cultural Tips', 'Packing Guide', 'Shore Excursions'],
      image: '/images/Castle.jpg',
      highlight: 'Cultural Insights',
      pages: '42 Pages',
      format: 'PDF'
    },
    {
      id: 6,
      title: 'Family Travel Budget Planner',
      category: 'Planning',
      filterCategory: 'planning',
      author: 'Rob & Trish',
      description: 'Create realistic travel budgets and save money on family vacations with our proven strategies and worksheets.',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Budget Worksheets', 'Money-Saving Tips', 'Planning Timeline', 'Cost Calculators'],
      image: '/images/travel-pattern.svg',
      highlight: 'Save Money',
      pages: '25 Pages',
      format: 'PDF'
    },
    {
      id: 7,
      title: 'Travel Photography Essentials',
      category: 'Photography',
      filterCategory: 'photography',
      author: 'Rob & Trish',
      description: 'Capture amazing travel memories with professional photography tips, equipment guides, and editing basics.',
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Camera Settings', 'Composition Tips', 'Equipment Guide', 'Editing Basics'],
      image: '/images/travel-pattern.svg',
      highlight: 'Pro Techniques',
      pages: '35 Pages',
      format: 'PDF'
    },
    {
      id: 8,
      title: 'Sandals & Beaches Resort Insider Guide',
      category: 'Beach',
      filterCategory: 'beach',
      author: 'Rob & Trish',
      description: 'Get the most out of your Sandals or Beaches vacation with insider tips, restaurant guides, and activity recommendations.',
      gradient: 'from-teal-500 to-cyan-600',
      features: ['Restaurant Rankings', 'Activity Guide', 'Romance Tips', 'Loyalty Benefits'],
      image: '/images/Beach.jpg',
      highlight: 'Insider Access',
      pages: '33 Pages',
      format: 'PDF'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'disney', name: 'Disney' },
    { id: 'beach', name: 'Beach Resorts' },
    { id: 'cruise', name: 'Cruises' },
    { id: 'theme-parks', name: 'Theme Parks' },
    { id: 'planning', name: 'Planning' },
    { id: 'photography', name: 'Photography' },
  ];

  const filteredEbooks = selectedCategory === 'all'
    ? ebooks
    : ebooks.filter(ebook => ebook.filterCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/images/travel-pattern.svg" 
              alt="Travel guides background" 
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
                Rob & Trish's Travel Guides
              </h1>
              <p className="text-xl md:text-2xl text-shadow">
                Free Ebook Collection - Our Favorite Travel Tips & Guides
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

        {/* Ebooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {filteredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-blue-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40">
                <div 
                  className={`w-full h-full ${ebook.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${ebook.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={ebook.image ? { backgroundImage: `url(${ebook.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${ebook.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-8`}>
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                        {ebook.title}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        by {ebook.author}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {ebook.highlight}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full bg-blue-50">
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{ebook.pages}</span>
                    <span className="text-sm text-gray-500">{ebook.format}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{ebook.description}</p>
                  <div className="space-y-3">
                    {ebook.features.map((feature, idx) => (
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
                  <button
                    onClick={() => openModal(ebook)}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Download Free
                  </button>
                  <Link
                    to="/need-more-info"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg inline-block text-center"
                  >
                    Get Personal Help
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want More Personalized Help?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            While our free guides are packed with valuable tips, nothing beats personalized advice from Rob and Trish. 
            Let us help you plan your perfect vacation with expert guidance tailored to your needs.
          </p>
          <Link
            to="/need-more-info"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Personal Travel Planning
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && selectedEbook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedEbook.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={selectedEbook.image} 
                  alt={selectedEbook.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4">{selectedEbook.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Author</h4>
                    <p className="text-gray-600">{selectedEbook.author}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pages</h4>
                    <p className="text-gray-600">{selectedEbook.pages}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Format</h4>
                    <p className="text-gray-600">{selectedEbook.format}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Category</h4>
                    <p className="text-gray-600">{selectedEbook.category}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What's Inside</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEbook.features.map((feature, idx) => (
                      <span key={idx} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mb-4">Get Your Free Copy</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    name="message"
                    placeholder="Any questions or travel plans you'd like to share? (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me This Guide'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Ebooks;