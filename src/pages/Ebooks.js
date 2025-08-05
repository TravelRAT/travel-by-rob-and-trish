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
    },
    {
      id: 9,
      title: '4-Day Disney World Family Planner',
      category: 'Disney',
      filterCategory: 'disney',
      author: 'Rob & Trish',
      description: 'Perfect for a long weekend Disney trip! Maximize your 4 days with detailed daily schedules, FastPass+ strategies, and must-do attractions.',
      gradient: 'from-purple-500 to-blue-600',
      features: ['Daily Schedules', 'FastPass+ Strategy', 'Must-Do Lists', 'Dining Plans'],
      image: '/images/Castle.jpg',
      highlight: 'Long Weekend',
      pages: '28 Pages',
      format: 'PDF'
    },
    {
      id: 10,
      title: '5-Day Disney World Family Planner',
      category: 'Disney',
      filterCategory: 'disney',
      author: 'Rob & Trish',
      description: 'The perfect balance of parks and relaxation! Strategic 5-day plan covering all four parks with built-in flexibility and rest time.',
      gradient: 'from-blue-500 to-purple-600',
      features: ['All 4 Parks Covered', 'Built-in Rest Days', 'Character Dining', 'Park Hopping Tips'],
      image: '/images/Castle.jpg',
      highlight: 'Balanced Trip',
      pages: '35 Pages',
      format: 'PDF'
    },
    {
      id: 11,
      title: '6-Day Disney World Family Planner',
      category: 'Disney',
      filterCategory: 'disney',
      author: 'Rob & Trish',
      description: 'Experience Disney without the rush! Six-day detailed itinerary with time for resort activities, water parks, and repeat favorites.',
      gradient: 'from-pink-500 to-purple-600',
      features: ['Resort Activities', 'Water Park Days', 'Flexible Schedule', 'Repeat Favorites'],
      image: '/images/Castle.jpg',
      highlight: 'No Rush',
      pages: '42 Pages',
      format: 'PDF'
    },
    {
      id: 12,
      title: '7-Day Disney World Family Planner',
      category: 'Disney',
      filterCategory: 'disney',
      author: 'Rob & Trish',
      description: 'The ultimate Disney World experience! Complete 7-day plan with all parks, water parks, Disney Springs, and resort time.',
      gradient: 'from-indigo-500 to-pink-600',
      features: ['Complete Experience', 'All Water Parks', 'Disney Springs', 'Resort Pool Time'],
      image: '/images/Castle.jpg',
      highlight: 'Ultimate Trip',
      pages: '48 Pages',
      format: 'PDF'
    },
    {
      id: 13,
      title: 'Universal Studios First Timer\'s Guide',
      category: 'Theme Parks',
      filterCategory: 'theme-parks',
      author: 'Rob & Trish',
      description: 'Your essential guide to Universal Orlando! Learn the basics of both parks, ticket options, and must-do experiences for first-time visitors.',
      gradient: 'from-red-500 to-yellow-600',
      features: ['Park Basics', 'Ticket Options', 'Must-Do Attractions', 'Getting Started Tips'],
      image: '/images/Universal.jpg',
      highlight: 'First Timer',
      pages: '31 Pages',
      format: 'PDF'
    },
    {
      id: 14,
      title: 'Why Choose an All-Inclusive Resort',
      category: 'Beach',
      filterCategory: 'beach',
      author: 'Rob & Trish',
      description: 'Discover the benefits of all-inclusive vacations! Learn about value, convenience, and peace of mind that comes with all-inclusive resorts.',
      gradient: 'from-emerald-500 to-blue-600',
      features: ['Value Analysis', 'Convenience Benefits', 'Family Advantages', 'Budget Planning'],
      image: '/images/Beach.jpg',
      highlight: 'Value Guide',
      pages: '24 Pages',
      format: 'PDF'
    },
    {
      id: 15,
      title: 'Why Cruise with Carnival',
      category: 'Cruise',
      filterCategory: 'cruise',
      author: 'Rob & Trish',
      description: 'Discover why Carnival is perfect for fun-loving families! Learn about their value pricing, entertainment, and casual atmosphere.',
      gradient: 'from-red-500 to-blue-600',
      features: ['Fun Ship Experience', 'Family Value', 'Casual Atmosphere', 'Entertainment Options'],
      image: '/images/carnival.jpg',
      highlight: 'Fun Ship',
      pages: '22 Pages',
      format: 'PDF'
    },
    {
      id: 16,
      title: 'Why Cruise with Royal Caribbean',
      category: 'Cruise',
      filterCategory: 'cruise',
      author: 'Rob & Trish',
      description: 'Explore why Royal Caribbean leads in innovation! From rock climbing to FlowRider surfing, discover their adventure-packed ships.',
      gradient: 'from-blue-600 to-slate-800',
      features: ['Innovative Ships', 'Adventure Activities', 'Premium Dining', 'Entertainment Variety'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Innovation Leader',
      pages: '28 Pages',
      format: 'PDF'
    },
    {
      id: 17,
      title: 'Why Cruise with Virgin Voyages',
      category: 'Cruise',
      filterCategory: 'cruise',
      author: 'Rob & Trish',
      description: 'Experience the rebellious luxury of Virgin Voyages! Adults-only ships with cutting-edge design and unique experiences.',
      gradient: 'from-pink-500 to-red-600',
      features: ['Adults-Only', 'Rebellious Luxury', 'Cutting-Edge Design', 'Unique Experiences'],
      image: '/images/virgin.jpg',
      highlight: 'Adults Only',
      pages: '25 Pages',
      format: 'PDF'
    },
    {
      id: 18,
      title: 'Why Cruise with Norwegian (NCL)',
      category: 'Cruise',
      filterCategory: 'cruise',
      author: 'Rob & Trish',
      description: 'Discover Norwegian\'s freestyle cruising philosophy! No formal nights, flexible dining, and freedom to cruise your way.',
      gradient: 'from-yellow-500 to-blue-600',
      features: ['Freestyle Cruising', 'Flexible Dining', 'No Formal Nights', 'Freedom & Choice'],
      image: '/images/disney%20cruise.jpg',
      highlight: 'Freestyle',
      pages: '26 Pages',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Section - Full Width */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/travel-pattern.svg" 
            alt="Travel guides background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center px-4">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {filteredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-blue-50 border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48">
                <div 
                  className={`w-full h-full ${ebook.image ? 'bg-cover bg-center bg-no-repeat' : `bg-gradient-to-br ${ebook.gradient}`} group-hover:scale-105 transition-transform duration-300`}
                  style={ebook.image ? { backgroundImage: `url(${ebook.image})` } : {}}
                >
                  <div className={`absolute inset-0 ${ebook.image ? 'bg-black bg-opacity-40' : ''} flex items-end justify-center pb-6`}>
                    <div className="text-center px-4">
                      <h3 className="text-xl font-bold text-white text-shadow-lg mb-1">
                        {ebook.title}
                      </h3>
                      <p className="text-white text-sm opacity-90 mb-2">
                        by {ebook.author}
                      </p>
                      <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 inline-block">
                        {ebook.highlight}
                      </div>
                    </div>
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
            className="bg-white rounded-xl max-w-lg w-full max-h-80vh overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedEbook.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
                              <div className="mb-4">
                <img 
                  src={selectedEbook.image} 
                  alt={selectedEbook.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
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
                <h3 className="text-lg font-semibold mb-3">Get Your Free Copy</h3>
                <div className="space-y-3">
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
                <div className="flex gap-3 mt-4">
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