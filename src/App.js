import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import SandalsBeaches from './pages/SandalsBeaches';
import HardRock from './pages/HardRock';
import Secrets from './pages/Secrets';
import RIU from './pages/RIU';
import Breathless from './pages/Breathless';
import DisneyCruise from './pages/DisneyCruise';
import VikingRiverCruises from './pages/VikingRiverCruises';
import AdventuresOfDisney from './pages/AdventuresOfDisney';
import RoyalCaribbean from './pages/RoyalCaribbean';
import Ebooks from './pages/Ebooks';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';
import ExclusiveDeals from './pages/ExclusiveDeals';
import Contact from './pages/Contact';
import NeedMoreInfo from './pages/NeedMoreInfo';
import Reviews from './pages/Reviews';
import SandalsBeachesDeals from './pages/SandalsBeachesDeals';
import PageExpirationAdmin from './components/PageExpirationAdmin';
import { getActivePages } from './utils/pageExpiration';

// Component mapping for dynamic routing
const componentMap = {
  'Home': Home,
  'Destinations': Destinations,
  'SandalsBeaches': SandalsBeaches,
  'HardRock': HardRock,
  'Secrets': Secrets,
  'RIU': RIU,
  'Breathless': Breathless,
  'DisneyCruise': DisneyCruise,
  'VikingRiverCruises': VikingRiverCruises,
  'AdventuresOfDisney': AdventuresOfDisney,
  'RoyalCaribbean': RoyalCaribbean,
  'Ebooks': Ebooks,
  'AboutUs': AboutUs,
  'Packages': Packages,
  'ExclusiveDeals': ExclusiveDeals,
  'Contact': Contact,
  'NeedMoreInfo': NeedMoreInfo,
  'Reviews': Reviews,
  'SandalsBeachesDeals': SandalsBeachesDeals,
  'PageExpirationAdmin': PageExpirationAdmin,
};

function App() {
  const activePages = getActivePages();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePages={activePages} />
      <main className="flex-grow">
        <Routes>
          {Object.entries(activePages).map(([path, config]) => {
            const Component = componentMap[config.component];
            return Component ? (
              <Route key={path} path={path} element={<Component />} />
            ) : null;
          })}
          {/* Admin route - always accessible */}
          <Route path="/admin/page-expiration" element={<PageExpirationAdmin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 