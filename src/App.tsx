import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Guides from './components/Guides';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'OnceHuman LATAM | Comunidad Oficial';
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Guides />
      <Community />
      <Footer />
    </div>
  );
}

export default App