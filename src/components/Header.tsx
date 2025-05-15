import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative">
          <img 
            src="https://creators.gamesight.io/images/once-human/ONCEHUMAN-LOGO.png" 
            alt="OnceHuman Logo" 
            className="h-24"
          />
          <div 
            className="absolute bottom-0 left-0 right-0 text-center transform translate-y-4"
            style={{
              background: 'linear-gradient(180deg, rgba(6,182,212,1) 0%, rgba(6,182,212,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 10px rgba(6,182,212,0.3)'
            }}
          >
            <span className="text-lg font-bold tracking-widest">LATAM</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Acerca de
          </button>
          <button 
            onClick={() => scrollToSection('guides')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Guías
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Comunidad
          </button>
          <a 
            href="https://discord.gg/SVYF6SC8hd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold px-4 py-2 rounded transition-colors"
          >
            Unirse a Discord
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-gray-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
          >
            Acerca de
          </button>
          <button 
            onClick={() => scrollToSection('guides')}
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
          >
            Guías
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
          >
            Comunidad
          </button>
          <a 
            href="https://discord.gg/SVYF6SC8hd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold px-4 py-2 rounded transition-colors text-center"
          >
            Unirse a Discord
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;