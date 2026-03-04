// components/sections/Hero.tsx
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';

// Import des images JPG uniquement
import heroImage from '../../assets/images/hero.jpg';
import heroThumbnail from '../../assets/images/hero-thumbnail.jpg'; // À créer si nécessaire

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Préchargement de l'image principale
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

        {/* Overlay sombre avec bulles animées */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* ANIMATION DE BULLES BLEUES ET ROUGES */}
        <div className="absolute inset-0 overflow-hidden z-15 pointer-events-none">
          {/* Bulles bleues */}
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-[15%] w-48 h-48 bg-blue-600/20 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-[25%] w-24 h-24 bg-blue-400/30 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute bottom-1/4 left-[20%] w-40 h-40 bg-blue-500/25 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-[40%] w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Bulles rouges */}
          <div className="absolute top-20 right-[20%] w-36 h-36 bg-red-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute bottom-10 left-[30%] w-56 h-56 bg-red-600/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-[40%] w-28 h-28 bg-red-400/25 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-1/3 left-[60%] w-44 h-44 bg-red-500/20 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute top-3/4 right-[10%] w-16 h-16 bg-red-400/30 rounded-full blur-xl animate-float-fast" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Petites bulles supplémentaires */}
          <div className="absolute top-[15%] left-[45%] w-8 h-8 bg-blue-400/40 rounded-full blur-md animate-ping-slow"></div>
          <div className="absolute bottom-[25%] right-[35%] w-12 h-12 bg-red-500/30 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="absolute top-[60%] left-[70%] w-6 h-6 bg-blue-500/50 rounded-full blur-sm animate-bounce-slow"></div>
          <div className="absolute bottom-[40%] right-[5%] w-10 h-10 bg-red-400/40 rounded-full blur-md animate-float-very-fast"></div>
        </div>
        
        {/* Fallback en cas d'erreur */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 z-0" />
        )}
      </div>

      {/* Contenu */}
      <Container className="relative z-30">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">Votre partenaire</span>
            <span className="block text-primary-400 my-2">digital</span>
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
              className="group"
            >
              Découvrir nos services
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-gray-900"
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