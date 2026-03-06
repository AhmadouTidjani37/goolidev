// components/sections/Portfolio.tsx
import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';

// Import des images (une seule image anonyme pour le test)
import anonymeImage from '../../assets/images/anonyme.jpeg';
import camertool from '../../assets/images/camertool.jpeg';
import vide from '../../assets/images/vide.jpeg';

console.log('📸 Image anonyme chargée:', anonymeImage);

interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'design';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  link?: string;
  github?: string;
  features?: string[];
}

type FilterType = 'all' | 'web' | 'mobile' | 'design';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  const projects: Project[] = [
    // 2 SITES WEB
    {
      id: 'web-data',
      title: 'CamerToolbox',
      category: 'web',
      categoryLabel: 'Site Web Analytique',
      description: 'Plateforme Analytique des données du Cameroun.',
      longDescription: 'Site web, Tout savoir sur le Cameroun - Statistiques des données du pays, végétation et prediction avec l\'intelligence artifielle.',
      image: camertool,
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      client: 'Projet ONG',
      year: '2026',
      link: 'https://camer-toolbox-ncvy.vercel.app/',
      github: '#',
      features: [
        'Dashboard administrateur',
        'Suivie de la végetation',
        'Coupure d\'électricité géolocalisée'
      ]
    },
    {
      id: 'web-agency',
      title: 'Agence Créative Digital',
      category: 'web',
      categoryLabel: 'Site Vitrine',
      description: 'Site vitrine moderne pour une agence de communication avec portfolio interactif.',
      longDescription: 'Un site élégant et responsive pour présenter les services d\'une agence de communication.',
      image: vide,
      tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Prismic CMS', 'Tailwind'],
      client: 'Agence Créative Digital',
      year: '2026',
      link: 'https://agence-creative.com',
      features: [
        'Animations fluides avec Framer Motion',
        'Blog avec CMS headless',
        'Système de réservation en ligne',
        'SEO optimisé',
        'Formulaire de contact avancé'
      ]
    },

    // 2 APPLIS MOBILES
    {
      id: 'mobile-delivery',
      title: 'Chichi Store',
      category: 'mobile',
      categoryLabel: 'Application Mobile',
      description: 'Application de livraison de repas avec suivi en temps réel des coursiers.',
      longDescription: 'Une application complète de livraison de repas permettant aux utilisateurs de commander.',
      image:vide,
      tags: ['React Native', 'Firebase', 'Redux', 'Google Maps API', 'Stripe'],
      client: 'Chichi Store',
      year: '2026',
      link: 'https://play.google.com/store/apps/details?id=com.rapide.livraison',
      features: [
        'Géolocalisation en temps réel',
        'Paiement intégré (carte et mobile money)',
        'Notifications push',
        'Historique des commandes',
        'Système de notation des coursiers'
      ]
    },
    {
      id: 'mobile-learning',
      title: 'IUT Family',
      category: 'mobile',
      categoryLabel: 'Application Éducative',
      description: 'Plateforme d\'apprentissage en ligne avec cours vidéos et exercices interactifs.',
      longDescription: 'Une application éducative proposant des cours dans toutes les matières.',
      image: vide,
      tags: ['Flutter', 'Django', 'PostgreSQL', 'WebSockets', 'AWS'],
      client: 'Ministère de l\'Éducation (partenariat)',
      year: '2026',
      link: 'https://apps.apple.com/app/edulearn-cameroun/id123456',
      features: [
        'Cours vidéo en streaming',
        'Quiz interactifs avec correction',
        'Suivi de progression',
        'Mode hors-ligne',
        'Espace enseignant'
      ]
    },

   
    {
      id: 'design-restaurant',
      title: 'Saveurs d\'Afrique',
      category: 'design',
      categoryLabel: 'Identité Visuelle & Affiche',
      description: 'Création de l\'identité visuelle complète pour un restaurant traditionnel.',
      longDescription: 'Une identité visuelle chaleureuse et authentique incluant logo, carte des menus.',
      image: vide,
      tags: ['Photoshop', 'Illustrator', 'Branding', 'Print Design', 'Typography'],
      client: 'Restaurant Saveurs d\'Afrique',
      year: '2026',
      features: [
        'Logo et charte graphique',
        'Menu design',
        'Affiches promotionnelles',
        'Flyers et cartes de visite',
        'Signalétique restaurant'
      ]
    },
    {
      id: 'design-fashion',
      title: 'Fashion Week Douala',
      category: 'design',
      categoryLabel: 'Campagne Publicitaire',
      description: 'Campagne complète pour la Fashion Week de Douala 2024.',
      longDescription: 'Une campagne visuelle percutante incluant affiches grand format.',
      image: vide,
      tags: ['Photoshop', 'Illustrator', 'InDesign', 'Motion Design', 'Social Media'],
      client: 'Fashion Week Douala',
      year: '2026',
      features: [
        'Affiches officielles',
        'Bannières pour réseaux sociaux',
        'Invitations VIP',
        'Programme événementiel',
        'Supports digitaux animés'
      ]
    }
  ];


  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);


  const categories = [
    { value: 'all' as FilterType, label: 'Tous les projets' },
    { value: 'web' as FilterType, label: 'Sites Web' },
    { value: 'mobile' as FilterType, label: 'Apps Mobiles' },
    { value: 'design' as FilterType, label: 'Design & Affiches' }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'web': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'mobile': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'design': return 'bg-pink-100 text-pink-700 border-pink-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Gestionnaires
  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);
  const handleFilterChange = (value: FilterType) => setFilter(value);
  const handleViewProject = (project: Project) => setSelectedProject(project);

  return (
    <Section id="portfolio" className="bg-white">
      <div className="space-y-12">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Notre Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">
            Projets récents
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez une sélection de nos réalisations : sites web, applications mobiles et créations graphiques
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleFilterChange(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                filter === cat.value
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRILLE DES PROJETS - AVEC IMAGES VISIBLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              padding="none"
              onClick={() => handleOpenModal(project)} 
            >
              {/* IMAGE - CORRIGÉE POUR S'AFFICHER DIRECTEMENT */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                {/* Utilisation d'une balise img standard au lieu de LazyImage */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    console.error('Erreur chargement image:', project.image);
                
                    e.currentTarget.src = 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Goolidev';
                  }}
                />
                
                {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                <Button 
                  variant="primary" 
                  size="sm"
                  className="bg-white text-gray-900 hover:bg-primary-600 hover:text-white"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleViewProject(project);
                  }}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Voir le projet
                </Button>
              </div>
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}>
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Informations du projet */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}

        {/* MODAL DE DÉTAIL DU PROJET */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={handleCloseModal}
          >
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du modal avec image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x400/2563eb/ffffff?text=Goolidev';
                  }}
                />
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Badges dans le modal */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(selectedProject.category)} bg-white/90 backdrop-blur-sm`}>
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Contenu du modal */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-primary-600 font-medium">Client : {selectedProject.client}</p>
                  </div>
                  
                  {/* Liens */}
                  <div className="flex gap-3">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Voir le site</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description longue */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Fonctionnalités */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Fonctionnalités clés</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 text-lg">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-lg mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio;