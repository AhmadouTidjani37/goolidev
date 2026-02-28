import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';
import heroImage from '../../assets/images/hero.jpg';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Votre partenaire 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                digital
              </span>
              de confiance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Goolidev vous accompagne dans tous vos projets informatiques : 
              du design à la sécurité, en passant par le développement et l'administratif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
              >
                Nous contacter
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={heroImage} 
              alt="Développeuse africaine musulmane professionnelle - Goolidev" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"  
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;