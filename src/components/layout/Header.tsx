import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import logo from '../../assets/images/goolidev_logo.png';
import { useScrollPosition } from 'components/hooks/useScrollPosition';
import { COMPANY_NAME } from 'components/constants';

const Header: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);

    const heroSection = document.getElementById('accueil');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setIsDarkSection(rect.bottom > 0 && rect.top < window.innerHeight);
    }
  }, [scrollPosition]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : isDarkSection
            ? 'bg-transparent py-4'
            : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt={`${COMPANY_NAME} logo`} 
              className="h-10 w-auto" 
            />
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled || !isDarkSection
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent'
                : 'text-white'
            }`}>
              {COMPANY_NAME}
            </span>
          </div>
          
          {/* Navigation */}
          <Navigation 
            isScrolled={isScrolled} 
            isDarkSection={isDarkSection}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;