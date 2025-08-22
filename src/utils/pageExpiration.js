// Page expiration utility functions

// Page configuration with expiration dates
// Set expiration dates in 'YYYY-MM-DD' format
// Pages with no expiration date will always be active
export const pageConfig = {
  '/': { 
    component: 'Home', 
    expirationDate: null,
    displayName: 'Home'
  },
  '/destinations': { 
    component: 'Destinations', 
    expirationDate: null,
    displayName: 'Destinations'
  },
  '/sandals-beaches': { 
    component: 'SandalsBeaches', 
    expirationDate: null,
    displayName: 'Sandals & Beaches'
  },
  '/hard-rock': { 
    component: 'HardRock', 
    expirationDate: null,
    displayName: 'Hard Rock Hotels'
  },
  '/secrets': { 
    component: 'Secrets', 
    expirationDate: null,
    displayName: 'Secrets Resorts'
  },
  '/riu': { 
    component: 'RIU', 
    expirationDate: null,
    displayName: 'RIU Hotels'
  },
  '/breathless': { 
    component: 'Breathless', 
    expirationDate: null,
    displayName: 'Breathless Resorts'
  },
  '/disney-cruise': { 
    component: 'DisneyCruise', 
    expirationDate: null,
    displayName: 'Disney Cruises'
  },
  '/viking-river-cruises': { 
    component: 'VikingRiverCruises', 
    expirationDate: null,
    displayName: 'Viking River Cruises'
  },
  '/adventures-of-disney': { 
    component: 'AdventuresOfDisney', 
    expirationDate: null,
    displayName: 'Adventures by Disney'
  },
  '/royal-caribbean': { 
    component: 'RoyalCaribbean', 
    expirationDate: null,
    displayName: 'Royal Caribbean'
  },
  '/ebooks': { 
    component: 'Ebooks', 
    expirationDate: null,
    displayName: 'Free Guides'
  },
  '/packages': { 
    component: 'Packages', 
    expirationDate: null,
    displayName: 'Packages'
  },
  '/exclusive-deals': { 
    component: 'ExclusiveDeals', 
    expirationDate: null, // Changed from '2024-12-31' to null
    displayName: 'Exclusive Deals'
  },
  '/need-more-info': { 
    component: 'NeedMoreInfo', 
    expirationDate: null,
    displayName: 'Need More Info'
  },
  '/about': { 
    component: 'AboutUs', 
    expirationDate: null,
    displayName: 'About Us'
  },
  '/contact': { 
    component: 'Contact', 
    expirationDate: null,
    displayName: 'Contact'
  },
  '/upcoming-trips': {
    component: 'UpcomingTrips',
    expirationDate: null,
    displayName: 'Upcoming Trips'
  },
  '/wh-survey': {
    component: 'WHSurvey',
    expirationDate: null,
    displayName: 'Warehouse Survey'
  },
  '/survey-results': {
    component: 'SurveyResults',
    expirationDate: null,
    displayName: 'Survey Results'
  },
  '/reviews': { 
    component: 'Reviews', 
    expirationDate: null,
    displayName: 'Reviews'
  },
  '/leave-review': {
    component: 'LeaveReview',
    expirationDate: null,
    displayName: 'Leave a Review'
  },
  '/sandals-beaches-deals': { 
    component: 'SandalsBeachesDeals', 
    expirationDate: '2025-08-26', // Expires August 26, 2025 at 23:00
    displayName: 'Deals of the Week'
  },
};

// Function to check if a page is active based on expiration date
export const isPageActive = (expirationDate) => {
  if (!expirationDate) return true; // No expiration date means always active
  
  const today = new Date();
  const expiration = new Date(expirationDate);
  
  return today <= expiration;
};

// Get active pages only
export const getActivePages = () => {
  const activePages = {};
  
  Object.entries(pageConfig).forEach(([path, config]) => {
    if (isPageActive(config.expirationDate)) {
      activePages[path] = config;
    }
  });
  
  return activePages;
};

// Get expired pages (for admin purposes)
export const getExpiredPages = () => {
  const expiredPages = {};
  
  Object.entries(pageConfig).forEach(([path, config]) => {
    if (config.expirationDate && !isPageActive(config.expirationDate)) {
      expiredPages[path] = config;
    }
  });
  
  return expiredPages;
};

// Get pages expiring soon (within X days)
export const getPagesExpiringSoon = (days = 7) => {
  const expiringSoon = {};
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + days);
  
  Object.entries(pageConfig).forEach(([path, config]) => {
    if (config.expirationDate) {
      const expiration = new Date(config.expirationDate);
      if (expiration > today && expiration <= futureDate) {
        expiringSoon[path] = config;
      }
    }
  });
  
  return expiringSoon;
};

// Helper function to format expiration date for display
export const formatExpirationDate = (expirationDate) => {
  if (!expirationDate) return 'Never';
  
  const date = new Date(expirationDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to get days until expiration
export const getDaysUntilExpiration = (expirationDate) => {
  if (!expirationDate) return null;
  
  const today = new Date();
  const expiration = new Date(expirationDate);
  const diffTime = expiration - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};
