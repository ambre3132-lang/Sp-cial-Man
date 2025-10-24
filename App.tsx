import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.344l.229.352-1.232 4.493 4.625-1.211.335.205z"/>
    </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const FloatingSocials: React.FC = () => {
    const phoneNumber = "212666678797";
    const message = encodeURIComponent("Bonjour, je souhaite prendre contact avec Special Man.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-4">
            <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-14 h-14 rounded-full flex items-center justify-center bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
            >
                <WhatsAppIcon />
            </a>
            <a 
                href="https://www.instagram.com/speciale.man/"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-500 text-white shadow-lg transition-transform hover:scale-110"
            >
                <InstagramIcon />
            </a>
        </div>
    );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen ${isHomePage ? '' : 'bg-black'} text-neutral-200 flex flex-col`}>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;