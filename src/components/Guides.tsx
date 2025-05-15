import React from 'react';
import { Book, Sword, Shield, Map, Users, Wrench } from 'lucide-react';

interface GuideCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  timeToRead: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ icon, title, description, difficulty, timeToRead }) => {
  const difficultyColor = {
    'Principiante': 'text-green-400',
    'Intermedio': 'text-yellow-400',
    'Avanzado': 'text-red-400'
  }[difficulty];

  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 group">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-gray-700/50 group-hover:bg-cyan-500/10 transition-colors">
          {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-cyan-400" })}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className={`${difficultyColor}`}>{difficulty}</span>
            <span className="text-gray-500">{timeToRead} min de lectura</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Guides: React.FC = () => {
  const guides = [
    {
      icon: <Book />,
      title: "Primeros Pasos en OnceHuman",
      description: "Guía esencial para comenzar tu aventura. Aprende los conceptos básicos del juego y cómo sobrevivir tus primeras horas.",
      difficulty: "Principiante",
      timeToRead: "10"
    },
    {
      icon: <Sword />,
      title: "Sistema de Combate",
      description: "Domina las mecánicas de combate básicas, aprende sobre las diferentes armas y cómo defenderte de los enemigos.",
      difficulty: "Principiante",
      timeToRead: "15"
    },
    {
      icon: <Shield />,
      title: "Supervivencia Básica",
      description: "Consejos fundamentales para mantenerte con vida, gestionar recursos y crear tu primer refugio.",
      difficulty: "Principiante",
      timeToRead: "12"
    },
    {
      icon: <Map />,
      title: "Exploración del Mundo",
      description: "Descubre cómo navegar por el mundo, encontrar recursos y lugares seguros para establecerte.",
      difficulty: "Principiante",
      timeToRead: "8"
    },
    {
      icon: <Users />,
      title: "Jugando en Grupo",
      description: "Aprende las bases del juego cooperativo, cómo formar grupos y estrategias básicas de equipo.",
      difficulty: "Principiante",
      timeToRead: "10"
    },
    {
      icon: <Wrench />,
      title: "Crafteo Básico",
      description: "Guía completa sobre el sistema de crafteo básico y los recursos esenciales que necesitarás.",
      difficulty: "Principiante",
      timeToRead: "15"
    }
  ] as const;

  return (
    <section id="guides" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-accent-500 to-cyan-600">
            Guías para Principiantes
          </h2>
          <p className="text-lg text-gray-300">
            Todo lo que necesitas saber para comenzar tu aventura en OnceHuman. Guías detalladas y consejos útiles para nuevos jugadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            ¿Buscas guías más avanzadas? Únete a nuestro Discord para acceder a recursos adicionales y consejos de jugadores expertos.
          </p>
          <a 
            href="https://discord.gg/oncehuman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300"
          >
            Más Guías en Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default Guides;