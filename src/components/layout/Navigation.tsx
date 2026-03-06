// components/layout/Navigation.tsx (version avec menu toujours blanc)
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

  return (
    <>
      {/* Desktop Menu - TOUJOURS BLANC */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-white hover:text-primary-300 transition font-medium" // TOUJOURS BLANC
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

      {/* Mobile Menu Button - TOUJOURS BLANC */}
      <button 
        className="md:hidden text-white transition-colors hover:text-primary-300" // TOUJOURS BLANC
        onClick={toggle}
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu - FOND SOMBRE, TEXTE BLANC */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden animate-fade-in">
          <nav className="flex flex-col p-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-white/90 hover:text-white hover:bg-white/10 transition py-3 px-4 rounded-xl font-medium" // TOUJOURS BLANC
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            
            {/* Version mobile du bouton */}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Button 
                variant="outline-light" // Toujours outline-light pour rester cohérent
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