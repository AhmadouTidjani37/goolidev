import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Users, Target, Sparkles, MapPin, Calendar } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import Team from './Team';
import tidjaniImage from '../../assets/images/propos.jpg';

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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
              
              {/* Conteneur d'image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto bg-gray-200">
                {/* Image principale */}
                <img
                  src={tidjaniImage}
                  alt="Ahmadou Tidjani - Fondateur de Goolidev"
                  className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />

                {/* Loader */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                )}
                
                {/* Fallback */}
                {imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-600">AT</span>
                  </div>
                )}
              </div>
              
              {/* Badges */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium">Garoua</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium">Depuis 2022</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
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
              <strong className="text-primary-600"> Ahmadou Tidjani</strong> a fondé Goolidev en 2022 avec une vision claire.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {founderAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="primary" 
                size="md"
                onClick={() => window.open('https://linkedin.com/in/ahmadou-tidjani', '_blank')}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="md"
                onClick={() => window.open('https://github.com/AhmadouTidjani37', '_blank')}
              >
                GitHub
              </Button>
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
                <Card key={index} padding="lg" className="text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
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
            <div><div className="text-4xl font-bold mb-2">4+</div><div>Années d'expertise</div></div>
            <div><div className="text-4xl font-bold mb-2">52+</div><div>Projets réalisés</div></div>
            <div><div className="text-4xl font-bold mb-2">47+</div><div>Clients satisfaits</div></div>
            <div><div className="text-4xl font-bold mb-2">12+</div><div>Experts dévoués</div></div>
          </div>
        </div>

        {/* Partie 4: Équipe */}
        <Team />
      </div>
    </Section>
  );
};

export default About;