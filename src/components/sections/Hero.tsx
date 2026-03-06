// components/sections/Hero.tsx (version corrigée)
import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, Zap, Globe, Shield } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';
import heroImage from '../../assets/images/hero.jpg';
import heroThumbnail from '../../assets/images/hero-thumbnail.jpg'; 

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const words = ['Innovation', 'Performance', 'Sécurité', 'Design', 'Excellence'];

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20" // Ajout de pt-20 pour éviter le chevauchement
    >
      {/* Image de fond avec effet parallaxe */}
      <div className="absolute inset-0">
        {heroThumbnail && !imageLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(${heroThumbnail})`,
              opacity: imageLoaded ? 0 : 1 
            }}
          />
        )}
        
        <img
          src={heroImage}
          alt="Goolidev - Solutions digitales"
          className={`w-full h-full object-cover transition-opacity duration-1000 scale-105`}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Overlay moderne avec dégradé dynamique */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 z-10" />
        
        {/* Effet de grille numérique */}
        <div className="absolute inset-0 opacity-20 z-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Particules animées */}
        <div className="absolute inset-0 overflow-hidden z-20">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5,
                  animation: `float ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  boxShadow: `0 0 ${size * 2}px rgba(59, 130, 246, 0.5)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Contenu */}
      <Container className="relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titre principal avec animation - CORRIGÉ */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.2]"> {/* leading normalisé */}
            <span className="block text-white/90">Votre partenaire</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient bg-[length:200%] py-4"> {/* padding vertical ajouté */}
              digital
            </span>
            <span className="block text-white/90">de confiance</span>
          </h1>

          {/* Texte rotatif */}
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-white/80">
              Nous transformons vos idées en{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50" />
                <span className="relative text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {words[currentWord]}
                </span>
              </span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Goolidev vous accompagne dans tous vos projets informatiques : 
            du design à la sécurité, en passant par le développement et l'administratif.
          </p>

          {/* Stats rapides */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Globe, label: '4+ ans', value: 'Expérience' },
              { icon: Zap, label: '52+', value: 'Projets' },
              { icon: Shield, label: '47+', value: 'Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-bold">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient" 
              size="xl" 
              onClick={scrollToServices}
              className="group relative overflow-hidden"
              icon={<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              iconPosition="right"
              glow
            >
              Découvrir nos services
            </Button>
            <Button 
              variant="glass" 
              size="xl" 
              onClick={scrollToContact}
              className="backdrop-blur-md"
            >
              Nous contacter
            </Button>
          </div>
          
          {/* Espace supplémentaire après les boutons */}
          <div className="h-16"></div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;