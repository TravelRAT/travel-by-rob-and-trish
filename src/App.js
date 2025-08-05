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


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/sandals-beaches" element={<SandalsBeaches />} />
          <Route path="/hard-rock" element={<HardRock />} />
          <Route path="/secrets" element={<Secrets />} />
          <Route path="/riu" element={<RIU />} />
          <Route path="/breathless" element={<Breathless />} />
          <Route path="/disney-cruise" element={<DisneyCruise />} />
          <Route path="/viking-river-cruises" element={<VikingRiverCruises />} />
          <Route path="/adventures-of-disney" element={<AdventuresOfDisney />} />
          <Route path="/royal-caribbean" element={<RoyalCaribbean />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/exclusive-deals" element={<ExclusiveDeals />} />
          <Route path="/need-more-info" element={<NeedMoreInfo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 