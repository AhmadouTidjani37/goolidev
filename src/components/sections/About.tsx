import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '../common/Section';
import proposImage from '../../assets/images/propos.png'; 

const About: React.FC = () => {
  const advantages = [
    {
      title: 'Expertise polyvalente',
      description: 'Une équipe multidisciplinaire couvrant tous les aspects du numérique'
    },
    {
      title: 'Accompagnement personnalisé',
      description: 'Des solutions sur mesure adaptées à vos besoins spécifiques'
    },
    {
      title: 'Support et maintenance',
      description: 'Une assistance réactive et continue pour vos projets'
    },
    {
      title: 'Technologies innovantes',
      description: 'Utilisation des dernières technologies pour des solutions performantes'
    }
  ];

  return (
    <Section id="about" className="bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img 
            src={proposImage} 
            alt="Équipe Goolidev - Professionnelles africaines musulmanes" 
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir Goolidev ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Avec plus de <strong>4 ans d'expérience</strong> et <strong>52 projets réalisés</strong> dans le domaine du numérique, 
            notre équipe de professionnelles qualifiées met son expertise à votre service pour concrétiser vos 
            projets digitaux avec excellence. La satisfaction de nos <strong>47 clientes et clients</strong> témoigne de notre engagement.
          </p>
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;