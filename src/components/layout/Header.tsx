// components/layout/Header.tsx (version améliorée)
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import logo from '../../assets/images/goolidev_logo.png';
import { useScrollPosition } from 'components/hooks/useScrollPosition';
import { COMPANY_NAME } from 'components/constants';

const Header: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
    
    // Cache le header quand on scroll vers le bas, le réaffiche quand on scroll vers le haut
    if (scrollPosition > lastScrollY && scrollPosition > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollPosition);
  }, [scrollPosition, lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className={`
        transition-all duration-500
        ${isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
        }
      `}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo avec animation */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src={logo} 
                  alt={`${COMPANY_NAME} logo`} 
                  className="h-12 w-auto relative z-10 transition-transform group-hover:scale-110 duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'text-white'
              }`}>
                {COMPANY_NAME}
              </span>
            </div>
            
            {/* Navigation */}
            <Navigation isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;