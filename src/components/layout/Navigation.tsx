// components/layout/Navigation.tsx (version avec outline-light)
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
  const getButtonVariant = (): 'primary' | 'outline' | 'outline-light' => {
    if (isScrolled) return 'primary';
    if (isDarkSection) return 'outline-light';
    return 'primary';
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`transition font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-600' 
                : isDarkSection
                  ? 'text-white hover:text-primary-300'
                  : 'text-gray-700 hover:text-primary-600'
            }`}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-fade-in">
          <nav className="flex flex-col p-4 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" className="w-full mt-2">
              Devis gratuit
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;