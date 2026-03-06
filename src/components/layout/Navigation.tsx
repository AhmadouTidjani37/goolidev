// components/layout/Navigation.tsx (version harmonisée)
import React from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';
import { useMobileMenu } from 'components/hooks/useMobileMenu';
import { navigationItems } from 'components/data/navigation.data';

interface NavigationProps {
  isScrolled: boolean;
  isDarkSection?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ 
  isScrolled, 
  isDarkSection = true 
}) => {
  const { isOpen, toggle, close } = useMobileMenu();

  const handleLinkClick = (href: string) => {
    close();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Déterminer le variant du bouton
  const getButtonVariant = (): 'primary' | 'outline' | 'outline-light' | 'glass' | 'gradient' => {
    if (isScrolled) return 'primary';
    if (isDarkSection) return 'outline-light';
    return 'primary';
  };

  // Déterminer la couleur du texte pour le menu desktop
  const getTextColor = () => {
    if (isScrolled) return 'text-gray-700 hover:text-primary-600';
    if (isDarkSection) return 'text-white hover:text-primary-300';
    return 'text-gray-700 hover:text-primary-600';
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`transition font-medium ${getTextColor()}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
        
        <Button 
          variant={getButtonVariant()}
          size="sm"
        >
          Devis gratuit
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className={`md:hidden transition-colors ${
          isScrolled 
            ? 'text-gray-700' 
            : isDarkSection 
              ? 'text-white' 
              : 'text-gray-700'
        }`}
        onClick={toggle}
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu - HARMONISÉ AVEC LE THEME DU DESKTOP */}
      {isOpen && (
        <div 
          className={`
            absolute top-full left-0 right-0 shadow-2xl md:hidden animate-fade-in
            ${isScrolled || !isDarkSection 
              ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200' 
              : 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10'
            }
          `}
        >
          <nav className="flex flex-col p-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`
                  transition py-3 px-4 rounded-xl font-medium
                  ${isScrolled || !isDarkSection
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            
            {/* Version mobile du bouton avec le même thème */}
            <div className="pt-4 mt-2 border-t border-gray-200/20">
              <Button 
                variant={isScrolled || !isDarkSection ? 'primary' : 'outline-light'}
                size="lg"
                className="w-full"
              >
                Devis gratuit
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;