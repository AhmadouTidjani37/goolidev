// components/common/Card.tsx
import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: 'default' | 'glass' | 'gradient' | 'neon';
  hoverEffect?: 'scale' | 'glow' | 'lift' | 'border' | 'none';
  glowColor?: 'blue' | 'purple' | 'pink' | 'cyan';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'md',
  onClick,
  style,
  variant = 'default',
  hoverEffect = 'lift',
  glowColor = 'blue'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-9',
    xl: 'p-12'
  };

  const variantClasses = {
    default: 'bg-white',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
    gradient: 'bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-white/20',
    neon: `bg-gray-900 border-2 animate-border-flow`,
  };

  const glowColors = {
    blue: 'rgba(59, 130, 246, 0.5)',
    purple: 'rgba(139, 92, 246, 0.5)',
    pink: 'rgba(236, 72, 153, 0.5)',
    cyan: 'rgba(6, 182, 212, 0.5)',
  };

  const hoverClasses = {
    scale: 'hover:scale-105',
    glow: '',
    lift: 'hover:-translate-y-2',
    border: 'hover:border-blue-500',
    none: '',
  };

  return (
    <div 
      className={`
        relative rounded-2xl shadow-xl transition-all duration-500 
        ${paddingClasses[padding]} 
        ${variantClasses[variant]}
        ${hoverClasses[hoverEffect]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      style={{
        ...style,
        boxShadow: isHovered && hoverEffect === 'glow' 
          ? `0 0 30px ${glowColors[glowColor]}` 
          : style?.boxShadow,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de bordure animée */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent animate-border-flow pointer-events-none" />
      )}

      {/* Effet de particules pour le hover */}
      {hoverEffect === 'glow' && isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;