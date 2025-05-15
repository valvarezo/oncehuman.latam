import React from 'react';
import { Shield, Users, Globe, Zap } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: 'cyan' | 'red';
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, variant }) => {
  const borderColorClass = variant === 'cyan' ? 'hover:border-cyan-500/50' : 'hover:border-accent-500/50';
  const bgColorClass = variant === 'cyan' ? 'bg-cyan-600/20' : 'bg-accent-600/20';
  const iconColorClass = variant === 'cyan' ? 'text-cyan-400' : 'text-accent-400';

  return (
    <div className={`flex flex-col items-center text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-700 ${borderColorClass}`}>
      <div className={`${bgColorClass} p-4 rounded-full mb-4`}>
        {React.cloneElement(icon as React.ReactElement, { className: `h-8 w-8 ${iconColorClass}` })}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-accent-500 to-cyan-600">
            Acerca de Nosotros
          </h2>
          <p className="text-lg text-gray-300">
            Somos la comunidad latinoamericana oficial de OnceHuman, un juego de supervivencia y construcción en un mundo abierto. Nuestro objetivo es crear un espacio donde los jugadores latinoamericanos puedan conectarse, compartir y disfrutar juntos de esta increíble experiencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Users />}
            title="Comunidad Activa"
            description="Únete a cientos de jugadores latinoamericanos apasionados por OnceHuman. Comparte experiencias, estrategias y forma nuevas amistades."
            variant="cyan"
          />
          <Feature 
            icon={<Shield />}
            title="Entorno Seguro"
            description="Promovemos un ambiente respetuoso y libre de toxicidad. Nuestro equipo de moderadores está comprometido con mantener una comunidad saludable."
            variant="red"
          />
          <Feature 
            icon={<Globe />}
            title="Eventos Exclusivos"
            description="Organizamos eventos especiales para la comunidad latinoamericana con premios, competencias y actividades únicas."
            variant="cyan"
          />
          <Feature 
            icon={<Zap />}
            title="Soporte Inmediato"
            description="Recibe ayuda y respuestas a tus dudas de forma rápida por parte de nuestro equipo y otros miembros de la comunidad."
            variant="red"
          />
        </div>
      </div>
    </section>
  );
};

export default About;