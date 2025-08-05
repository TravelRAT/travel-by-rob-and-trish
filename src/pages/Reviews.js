import React from 'react';
import { motion } from 'framer-motion';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Raye Lynn Jordan",
      date: "March 30, 2024",
      trip: "Spring Break Cruise 2025 - Carnival Venezia",
      image: "/images/carnival.jpg",
      content: "Thank you to Rob and Trish for planning our Spring Break Cruise 2025! They accommodated our changing plans and our 2 'bonus' guests! We all had an amazing week with no issues. The transfers at the airport, to the cruise port and back were seamless. I would trust Rob and Trish again in the future, they have a lot of experience and can personalize your trip for you!",
      details: [
        "Direct flight from Indy to Orlando and back",
        "Carnival Venezia, 4 cabins total",
        "Port stops in Dominican Republic (Amber Cove), San Juan, Puerto Rico, and St. Thomas",
        "Beautiful ship, amazing scenery, lasting memories made",
        "Perfect for group of 3 adults, 3 teens"
      ]
    },
    {
      id: 2,
      name: "Brandon Eric",
      date: "July 9, 2023",
      trip: "Last-Minute Costa Rica Adventure",
      image: "/images/Beach.jpg",
      content: "We decided on a last-minute escape to Costa Rica and Rob and Trish pulled it off with zero stress. Within two days, we had flights, lodging, excursions, and travel insurance. Super professional, super fast.",
      details: [
        "Quick turnaround booking",
        "Complete package with flights and lodging",
        "Excursions included",
        "Travel insurance arranged"
      ]
    },
    {
      id: 3,
      name: "Nathan Tyler",
      date: "July 9, 2023",
      trip: "Boutique Mexico Beach Getaway",
      image: "/images/Tulum.jpg",
      content: "This was our first trip to Mexico and we were nervous about planning everything, but Trish made it so easy. She found us a boutique hotel steps from the beach and even got us a yoga class. Everything felt curated just for us.",
      details: [
        "Boutique beachfront hotel",
        "Personalized activities",
        "First-time Mexico travelers",
        "Custom experience"
      ]
    },
    {
      id: 4,
      name: "Ryan Jacob",
      date: "July 9, 2023",
      trip: "7-Day Caribbean Cruise",
      image: "/images/disney cruise.jpg",
      content: "We just got back from a 7-day Caribbean cruise, and Rob and Trish nailed it. They helped us choose a kid-friendly cruise line and even got us connecting cabins. When our flight was delayed, they handled everything. We already booked our next cruise with them!",
      details: [
        "Family-friendly cruise selection",
        "Connecting cabins arranged",
        "Flight delay assistance",
        "7-day Caribbean itinerary"
      ]
    },
    {
      id: 5,
      name: "Jason Jeffrey",
      date: "July 9, 2023",
      trip: "Disney Family Adventure",
      image: "/images/Castle.jpg",
      content: "Planning a Disney trip with three kids is stressful—unless you have Rob and Trish. They handled everything from Genie+ reservations to stroller rentals. Our kids had the time of their lives.",
      details: [
        "Disney vacation planning",
        "Genie+ reservations",
        "Stroller rentals arranged",
        "Family of five accommodation"
      ]
    },
    {
      id: 6,
      name: "Aurora Ivy",
      date: "July 9, 2023",
      trip: "First-Time Cruise Experience",
      image: "/images/carnival.jpg",
      content: "Trish was by far the most helpful person in planning our cruise. Her knowledge and experience was so important to us as this was our first cruise!",
      details: [
        "First-time cruisers",
        "Expert guidance",
        "Comprehensive planning"
      ]
    },
    {
      id: 7,
      name: "Trish Butcher",
      date: "June 24, 2023",
      trip: "Accessible Cruise Vacation",
      image: "/images/disney cruise.jpg",
      content: "We can't thank you enough for going above and beyond for my husband and me. Traveling can be stressful when accessibility is a concern, but you made the entire process so smooth and stress-free. From the hotel to the transfers and even our cruise cabin—everything was fully ADA-compliant and comfortable. Your attention to detail and care meant the world to us. Thank you again for making our trip truly enjoyable and accessible! 💙",
      details: [
        "ADA-compliant accommodations",
        "Accessible transfers arranged",
        "Special needs consideration",
        "Stress-free planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/carnival.jpg" 
            alt="Happy travelers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
            <p className="text-xl">Real experiences from our wonderful clients - {reviews.length} happy travelers and counting!</p>
          </motion.div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img
                    className="h-full w-full object-cover md:h-full md:w-full"
                    src={review.image}
                    alt={`${review.trip} experience`}
                  />
                </div>
                <div className="p-8 md:p-12 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                    {review.trip}
                  </div>
                  <div className="mt-2 text-gray-500">
                    {review.date}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                    {review.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {review.content}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Trip Details:
                    </h3>
                    <ul className="space-y-2">
                      {review.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="text-indigo-500 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Create Your Own Travel Story?
          </h2>
          <a
            href="/need-more-info"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Planning Your Dream Vacation
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Reviews;