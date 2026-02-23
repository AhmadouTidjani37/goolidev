import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  page?: 'accueil' | 'services' | 'contact';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  page = 'accueil'
}) => {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  // Messages personnalisés selon la page
  const getMessage = () => {
    switch(page) {
      case 'services':
        return "Bonjour, je suis intéressé(e) par vos services. Pouvez-vous m'en dire plus ?";
      case 'contact':
        return "Bonjour, j'aimerais obtenir un devis pour mon projet.";
      default:
        return "Bonjour Goolidev, j'aimerais avoir plus d'informations sur vos services.";
    }
  };
  
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(getMessage())}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group animate-bounce-slow"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      <span className="absolute right-20 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Discutons sur WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;