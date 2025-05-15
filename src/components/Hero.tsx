import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.alpha = Math.random() * 0.5 + 0.1;
        const colors = [
          `rgba(6, 182, 212, ${this.alpha})`,
          `rgba(225, 29, 72, ${this.alpha})`
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000);
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900" />
      
      <div className="container px-4 mx-auto relative z-10 pt-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-accent-500 to-cyan-600 tracking-tight">
              OnceHuman LATAM
            </h1>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/10 via-accent-500/10 to-cyan-500/10 blur-3xl -z-10" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            Únete a la comunidad latinoamericana de OnceHuman y forma parte de una experiencia de juego única en su tipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://discord.gg/SVYF6SC8hd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-accent-600 to-accent-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-accent-600/20 hover:scale-[1.02] flex items-center justify-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Unirse a Discord
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
              className="group bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/10 hover:scale-[1.02] relative overflow-hidden border border-cyan-500/20"
            >
              <span className="relative z-10">Conócenos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-cyan-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;