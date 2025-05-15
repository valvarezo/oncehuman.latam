import React from 'react';
import { MessageSquare, Share2, Award, Calendar } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-cyan-500/20 via-accent-500/20 to-cyan-500/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-r from-cyan-500/20 via-accent-500/20 to-cyan-500/20"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className={`absolute h-1 w-20 rounded-full ${
              Math.random() > 0.5 ? 'bg-cyan-500/30' : 'bg-accent-500/30'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-accent-500 to-cyan-600">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg text-gray-300">
            Conéctate con otros jugadores latinoamericanos de OnceHuman. Compartimos estrategias, organizamos eventos, y nos divertimos juntos.
          </p>
        </div>
        
        <div className="bg-gray-900 border-2 border-gradient-r-cyan-accent rounded-xl p-8 md:p-12 shadow-xl shadow-accent-900/20 max-w-4xl mx-auto relative">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-accent-600/10 to-cyan-600/10"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Discord de OnceHuman LATAM</h3>
              <p className="text-gray-400 mb-6">
                Nuestro servidor de Discord es el lugar perfecto para conectar con otros jugadores, participar en eventos exclusivos y mantenerte al día con todas las novedades del juego.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: <MessageSquare className="h-5 w-5 text-cyan-400" />, text: "Canales temáticos para todos los aspectos del juego" },
                  { icon: <Calendar className="h-5 w-5 text-accent-400" />, text: "Eventos semanales organizados por la comunidad" },
                  { icon: <Award className="h-5 w-5 text-cyan-400" />, text: "Sistema de rangos y recompensas por participación" },
                  { icon: <Share2 className="h-5 w-5 text-accent-400" />, text: "Comparte capturas, videos y tus mejores momentos" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">{item.icon}</div>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://discord.gg/oncehuman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent-600/20 inline-block border border-accent-500/50"
              >
                Unirse a Discord
              </a>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-accent-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-20 w-20 text-accent-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Ya somos más de <span className="text-accent-400 font-bold">500 jugadores</span> en nuestra comunidad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;