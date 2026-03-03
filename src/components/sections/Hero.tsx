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

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        {/* Fallback en cas d'erreur */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 z-0" />
        )}
      </div>

      {/* Contenu */}
      <Container className="relative z-20">
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