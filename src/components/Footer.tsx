import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img 
              src="https://creators.gamesight.io/images/once-human/ONCEHUMAN-LOGO.png" 
              alt="OnceHuman Logo" 
              className="h-8 mr-2"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-300">
              OnceHuman.latam
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Acerca de
            </button>
            <button 
              onClick={() => document.getElementById('community')?.scrollIntoView({behavior: 'smooth'})}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Comunidad
            </button>
            <a 
              href="https://discord.gg/oncehuman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
            >
              Discord
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} OnceHuman LATAM. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center text-gray-500 text-sm">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>para la comunidad latinoamericana de OnceHuman</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            <a 
              href="https://oncehuman.game" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              OnceHuman Official Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;