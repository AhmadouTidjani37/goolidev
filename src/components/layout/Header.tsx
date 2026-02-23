import React from 'react';

import Navigation from './Navigation';



import logo from '../../assets/images/goolidev_logo.png';
import { useScrollPosition } from 'components/hooks/useScrollPosition';
import { COMPANY_NAME } from 'components/constants';

const Header: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Remplacer l'icône Code par le logo */}
            <img 
              src={logo} 
              alt={`${COMPANY_NAME} logo`} 
              className="h-10 w-auto" 
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {COMPANY_NAME}
            </span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;