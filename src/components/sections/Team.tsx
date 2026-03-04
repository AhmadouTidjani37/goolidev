// components/sections/Team.tsx
import React, { useState } from 'react';
import { Linkedin, Github, Mail, MapPin, Award, User } from 'lucide-react';
import Card from '../common/Card';

// Import des images
import ceo from '../../assets/images/ceo.jpg';
import director from '../../assets/images/director.jpg';
import anonyme from '../../assets/images/anonyme.jpeg';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  badge: string;
  location: string;
  quote: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'tidjani',
    name: 'Ahmadou Tidjani',
    role: 'Fondateur & Responsable IT',
    description: 'Expert en développement full-stack avec 4 ans d\'expérience. Visionnaire passionné par l\'innovation technologique et l\'impact social du numérique.',
    image: ceo,
    expertise: ['Architecture logicielle', 'DevOps', 'Cloud computing', 'Leadership technique', 'React/Node.js', 'Sécurité'],
    social: {
      linkedin: 'https://linkedin.com/in/ahmadou-tidjani',
      github: 'https://github.com/ahmadoutidjani37',
      email: 'ahmadtidjan00@gmail.com',
    },
    badge: 'Fondateur',
    location: 'Garoua, Cameroun',
    quote: "Le numérique est un levier puissant pour le développement de l'Afrique."
  },
  {
    id: 'halimatou',
    name: 'Halimatou Sadia',
    role: 'Directrice des Opérations',
    description: 'Stratège en transformation digitale avec une expertise en gestion de projet et en expérience client. MBA en Management des systèmes d\'information.',
    image: director,
    expertise: ['Management stratégique', 'Relation client', 'Innovation', 'Qualité', 'RH', 'Finance'],
    social: {
      email: 'halimatousadi00@gmail.com',
    },
    badge: 'Directrice',
    location: 'Garoua, Cameroun',
    quote: "Notre force réside dans notre équipe diversifiée et complémentaire."
  },
  {
    id: 'abdoul',
    name: 'Abdoul Wahab Mohamad',
    role: 'Promoteur & Coordinateur à Touboro',
    description: 'Pionnier du numérique dans la région du Nord, coordinateur des projets terrain et du développement communautaire. Plus de 10 ans d\'expérience en gestion de projets.',
    image: anonyme,
    expertise: ['Développement communautaire', 'Gestion de projets', 'Formation', 'Impact social', 'Partenariats', 'Mobilisation'],
    social: {
      email: 'abdoulwahab00@gmail.com',
    },
    badge: 'Coordinateur',
    location: 'Touboro, Cameroun',
    quote: "Ensemble, construisons un avenir numérique inclusif pour tous."
  },
  {
    id: 'aboubakar',
    name: 'Aboubakar Mohamad',
    role: 'Responsable Administratif',
    description: 'Passionné par les tâches administratives, la gestion des documents et l\'organisation des réunions.',
    image: anonyme,
    expertise: ['Excel', 'Word', 'PowerPoint', 'Gestion documentaire', 'Organisation d\'événements'],
    social: {
      email: 'aboubakar@goolidev.com',
    },
    badge: 'Responsable Admin',
    location: 'Touboro, Cameroun',
    quote: "L'organisation est la clé de la réussite de tout projet."
  }
];

// Composant d'image avec fallback
const MemberImage: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center`}>
        <User className="w-16 h-16 text-primary-600 opacity-50" />
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
};

const Team: React.FC = () => {
  const getAnimationClass = (index: number) => {
    const delays = ['animate-delay-0', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300'];
    return delays[index] || 'animate-delay-0';
  };

  return (
    <div className="mt-20">
      {/* En-tête de section */}
      <div className="text-center mb-16">
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
          Notre Équipe
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 mt-2">
          Des expert·e·s passionné·e·s à votre service
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une équipe pluridisciplinaire de professionnel·le·s engagé·e·s pour la réussite de vos projets
        </p>
      </div>

      {/* Grille des membres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card 
            key={member.id} 
            className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden animate-slide-up ${getAnimationClass(index)}`}
            padding="none"
          >
            {/* Conteneur de l'image */}
            <div className="relative h-80 overflow-hidden bg-gray-200">
              <MemberImage
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badge de localisation */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow-lg flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {member.location}
                </span>
              </div>

              {/* Badge de rôle */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {member.badge}
                </span>
              </div>

              {/* Citation au survol */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                <p className="text-white text-sm italic">
                  "{member.quote}"
                </p>
              </div>
            </div>

            {/* Informations du membre */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-1 group-hover:text-primary-600 transition-colors">
                {member.name}
              </h4>
              <p className="text-primary-600 font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {member.description}
              </p>

              {/* Tags d'expertise */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.expertise.slice(0, 3).map((skill, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
                {member.expertise.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    +{member.expertise.length - 3}
                  </span>
                )}
              </div>

              {/* Réseaux sociaux */}
              <div className="flex space-x-3 pt-3 border-t border-gray-100">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.email && (
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Effet de bordure au survol */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-xl transition-all duration-500 pointer-events-none"></div>
          </Card>
        ))}
      </div>

      {/* Message de l'équipe */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full">
          <Award className="w-5 h-5" />
          <span className="font-medium">
            Une équipe de 12 expert·e·s passionné·e·s à votre service
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;