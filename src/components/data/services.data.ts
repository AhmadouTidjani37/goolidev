import { 
  PenTool, 
  Code, 
  Smartphone, 
  Shield, 
  Laptop, 
  FileText 
} from 'lucide-react';
import { Service } from '../types/service.types';

export const services: Service[] = [
  {
    id: 'design',
    icon: PenTool,
    title: 'Design UI/UX',
    description: 'Création d\'interfaces modernes et intuitives pour une expérience utilisateur optimale',
    features: ['Maquettes interactives', 'Design responsive', 'Identité visuelle']
  },
  {
    id: 'web-dev',
    icon: Code,
    title: 'Développement Web',
    description: 'Développement de sites web performants et évolutifs avec les dernières technologies',
    features: ['Sites vitrines', 'E-commerce', 'CMS personnalisés']
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et hybrides pour iOS et Android',
    features: ['React Native', 'Flutter', 'Progressive Web Apps']
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Sécurité Informatique',
    description: 'Protection de vos données et infrastructures contre les cybermenaces',
    features: ['Audit de sécurité', 'Pentesting', 'Conformité RGPD']
  },
  {
    id: 'backend-dev',
    icon: Laptop,
    title: 'Développement Backend',
    description: 'Applications web complexes et solutions backend robustes',
    features: ['API RESTful', 'Microservices', 'Cloud computing']
  },
  {
    id: 'secretariat',
    icon: FileText,
    title: 'Secrétariat Bureautique',
    description: 'Services administratifs et bureautiques pour optimiser votre gestion',
    features: ['Gestion documentaire', 'Support administratif', 'Traitement de textes']
  }
];