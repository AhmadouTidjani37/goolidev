import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';
import heroImage from '../../assets/images/hero.jpg';
import heroThumbnail from '../../assets/images/hero-thumbnail.jpg'; 

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Image de fond avec chargement progressif */}
      <div className="absolute inset-0">
        {/* Miniature floue si disponible */}
        {heroThumbnail && !imageLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(${heroThumbnail})`,
              opacity: imageLoaded ? 0 : 1 
            }}
          />
        )}
        
        {/* Image principale */}
        <img
          src={heroImage}
          alt="Goolidev - Solutions digitales"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Overlay sombre avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 z-10" />
        
        {/* ✨ ANIMATION DE BULLES COLORÉES ✨ */}
        <div className="absolute inset-0 overflow-hidden z-15 pointer-events-none">
          
          {/* Première couche : Bulles bleues électriques */}
          {Array.from({ length: 40 }).map((_, i) => {
            const size = Math.random() * 12 + 4; // 4px à 16px
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 8 + 6; // 6s à 14s
            
            return (
              <div
                key={`blue-${i}`}
                className="absolute rounded-full animate-float-slow"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: 'radial-gradient(circle at 30% 30%, #60a5fa, #2563eb)',
                  boxShadow: '0 0 20px #3b82f6, 0 0 40px #1d4ed8',
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0.9,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}

          {/* Deuxième couche : Bulles rouges ardentes */}
          {Array.from({ length: 35 }).map((_, i) => {
            const size = Math.random() * 14 + 3; // 3px à 17px
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 4;
            const duration = Math.random() * 7 + 5; // 5s à 12s
            
            return (
              <div
                key={`red-${i}`}
                className="absolute rounded-full animate-float-medium"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: 'radial-gradient(circle at 30% 30%, #f1e7e7, #e0d7d7)',
                  boxShadow: '0 0 20px #ef4444, 0 0 40px #7e6868',
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0.9,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}

          {/* Troisième couche : Bulles violettes mystiques */}
          {Array.from({ length: 30 }).map((_, i) => {
            const size = Math.random() * 10 + 2; // 2px à 12px
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 6;
            const duration = Math.random() * 9 + 4; // 4s à 13s
            
            return (
              <div
                key={`purple-${i}`}
                className="absolute rounded-full animate-float-fast"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: 'radial-gradient(circle at 30% 30%, #c2baca, #9333ea)',
                  boxShadow: '0 0 20px #a855f7, 0 0 40px #9c82b3',
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0.8,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}

          {/* Quatrième couche : Micro-bulles dorées */}
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 6 + 1; // 1px à 7px
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 7;
            const duration = Math.random() * 10 + 5; // 5s à 15s
            
            return (
              <div
                key={`gold-${i}`}
                className="absolute rounded-full animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: 'radial-gradient(circle at 30% 30%, #ecebe4, #dad0c1)',
                  boxShadow: '0 0 15px #fbbf24, 0 0 30px #d97706',
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: Math.random() * 0.5 + 0.5, // 0.5-1.0
                  filter: 'blur(0.3px)',
                }}
              />
            );
          })}

          {/* Cinquième couche : Bulles turquoise */}
          {Array.from({ length: 25 }).map((_, i) => {
            const size = Math.random() * 8 + 2; // 2px à 10px
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 8 + 4; // 4s à 12s
            
            return (
              <div
                key={`teal-${i}`}
                className="absolute rounded-full animate-float-slow"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: 'radial-gradient(circle at 30% 30%, #2dd4bf, #0d9488)',
                  boxShadow: '0 0 20px #14b8a6, 0 0 40px #115e59',
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0.8,
                  filter: 'blur(0.4px)',
                }}
              />
            );
          })}

          {/* Effet de particules lumineuses */}
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute rounded-full animate-pulse-glow"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#d8d5cc', '#f87171', '#60a5fa', '#d8d3dd'][Math.floor(Math.random() * 4)],
                boxShadow: `0 0 ${Math.random() * 15 + 10}px currentColor`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
        
        {/* Fallback en cas d'erreur */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 z-0" />
        )}
      </div>

      {/* Contenu */}
      <Container className="relative z-30">
        <div className="max-w-3xl mx-auto text-center text-white">
         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="block">Votre partenaire</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-red-200 to-purple-600 my-2 leading-normal py-1">
          digital
        </span>
        <span className="block">de confiance</span>
      </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Goolidev vous accompagne dans tous vos projets informatiques : 
            du design à la sécurité, en passant par le développement et l'administratif.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={scrollToServices}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Découvrir nos services</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;