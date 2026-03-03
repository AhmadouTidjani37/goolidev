// components/sections/About.tsx
import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Users, Target, Sparkles, MapPin, Calendar } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import Team from './Team';

// Import de l'image principale uniquement
import tidjaniImage from '../../assets/images/propos.jpg';

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Préchargement de l'image
  useEffect(() => {
    const img = new Image();
    img.src = tidjaniImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  const advantages = [
    {
      title: 'Expertise polyvalente',
      description: 'Une équipe multidisciplinaire couvrant tous les aspects du numérique',
      icon: Target
    },
    {
      title: 'Accompagnement personnalisé',
      description: 'Des solutions sur mesure adaptées à vos besoins spécifiques',
      icon: Users
    },
    {
      title: 'Support et maintenance',
      description: 'Une assistance réactive et continue pour vos projets',
      icon: Award
    },
    {
      title: 'Technologies innovantes',
      description: 'Utilisation des dernières technologies pour des solutions performantes',
      icon: Sparkles
    }
  ];

  const founderAchievements = [
    '8+ ans d\'expérience en développement',
    '50+ projets menés avec succès',
    '10+ développeurs formés',
    '3 startups accompagnées'
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="space-y-20">
        {/* Partie 1: Présentation du Fondateur */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-slide-right">
            <div className="relative">
              {/* Effet de glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              
              {/* Conteneur d'image avec dimensions fixes */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto bg-gray-200">
                {/* Image principale */}
                <img
                  src={tidjaniImage}
                  alt="Ahmadou Tidjani - Fondateur de Goolidev"
                  className={`w-full h-full object-cover object-center transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />

                {/* Skeleton loader pendant le chargement */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                )}
                
                {/* Fallback en cas d'erreur */}
                {imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-600">AT</span>
                  </div>
                )}
              </div>
              
              {/* Badges d'information */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center w-full px-4">
                <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2 animate-float">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium">Garoua, Cameroun</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2 animate-float" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium">Fondé en 2022</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Rencontrez le Fondateur
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-2">
                Ahmadou Tidjani
              </h2>
              <p className="text-xl text-primary-600 font-medium mb-4">
                Fondateur & Responsable IT
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Passionné par la technologie et convaincu de son potentiel pour le développement local, 
                <strong className="text-primary-600"> Ahmadou Tidjani</strong> a fondé Goolidev en 2022 avec une vision claire : 
                démocratiser l'accès aux services numériques de qualité dans le Nord du Cameroun.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {founderAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 italic border-l-4 border-primary-600 pl-4 py-2 mb-6 bg-primary-50/50 rounded-r-lg">
                "Le numérique n'est pas qu'une question de technologie, c'est surtout une question d'impact humain. 
                Chaque projet que nous réalisons est une opportunité de transformer positivement une communauté."
              </p>

              <div className="flex space-x-3">
                <Button 
                  variant="primary" 
                  size="md"
                  onClick={() => window.open('https://linkedin.com/in/ahmadou-tidjani', '_blank')}
                  className="flex-1 transform hover:scale-105 transition-transform"
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="md"
                  onClick={() => window.open('https://github.com/ahmadou-tidjani', '_blank')}
                  className="flex-1 transform hover:scale-105 transition-transform"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Partie 2: Pourquoi choisir Goolidev */}
        <div className="text-center">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Nos atouts
          </span>
          <h3 className="text-3xl font-bold mb-12 mt-2">
            Pourquoi nous choisir ?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card 
                  key={index} 
                  padding="lg" 
                  className="text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partie 3: Statistiques */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-white/90">Années d'expertise</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2">52+</div>
              <div className="text-white/90">Projets réalisés</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2">47+</div>
              <div className="text-white/90">Clients satisfaits</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-white/90">Experts dévoués</div>
            </div>
          </div>
        </div>

        {/* Partie 4: Équipe complète */}
        <Team />
      </div>
    </Section>
  );
};

export default About;