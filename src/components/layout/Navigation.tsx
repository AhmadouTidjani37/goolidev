import React from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';
import { useMobileMenu } from 'components/hooks/useMobileMenu';
import { navigationItems } from 'components/data/navigation.data';

const Navigation: React.FC = () => {
  const { isOpen, toggle, close } = useMobileMenu();

  const handleLinkClick = (href: string) => {
    close();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
        <Button variant="primary" size="sm">
          Devis gratuit
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700"
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
                className="text-gray-700 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50"
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