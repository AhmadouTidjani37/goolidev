import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; 

import Button from '../common/Button';

import logo from '../../assets/images/goolidev_logo.png';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, COMPANY_HOURS } from 'components/constants';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci pour votre inscription : ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Remplacer l'icône Code par le logo */}
              <img 
                src={logo} 
                alt={`${COMPANY_NAME} logo`} 
                className="h-8 w-auto" // Version plus petite pour le footer
              />
              <span className="text-2xl font-bold">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire digital de confiance pour tous vos projets informatiques.
              Expertise, innovation et accompagnement personnalisé.
            </p>
          </div>

          {/* Le reste du footer reste identique */}
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition">Design UI/UX</li>
              <li className="hover:text-white transition">Développement Web</li>
              <li className="hover:text-white transition">Applications Mobile</li>
              <li className="hover:text-white transition">Sécurité Informatique</li>
              <li className="hover:text-white transition">Secrétariat Bureautique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="text-sm mt-2">{COMPANY_HOURS}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Recevez nos actualités et conseils pour booster votre activité
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input 
                type="email" 
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <Button 
                type="submit" 
                variant="primary" 
                size="sm" 
                className="w-full"
              >
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-4 text-sm">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;