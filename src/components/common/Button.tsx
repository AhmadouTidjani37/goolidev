// components/common/Button.tsx
import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'glass' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  glow = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'relative font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 disabled:from-blue-300 disabled:to-blue-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 disabled:from-gray-50 disabled:to-gray-100 shadow-lg shadow-gray-500/10',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300 bg-transparent backdrop-blur-sm',
    'outline-light': 'border-2 border-white/80 text-white hover:bg-white/10 disabled:border-white/30 disabled:text-white/30 bg-transparent backdrop-blur-sm',
    glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 disabled:bg-white/5 disabled:text-white/50 shadow-lg',
    gradient: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 disabled:opacity-50 bg-[length:200%] hover:bg-right-bottom transition-all duration-500 shadow-lg shadow-purple-600/25',
  };

  const sizeClasses = {
    sm: 'px-5 py-2 text-sm gap-2',
    md: 'px-7 py-3 text-base gap-2.5',
    lg: 'px-9 py-4 text-lg gap-3',
    xl: 'px-12 py-5 text-xl gap-4',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      type={type}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${glow ? 'animate-glow' : ''}
        ${loading ? 'cursor-wait opacity-80' : ''}
        ${disabled ? 'cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de ripple moderne */}
      {isHovered && !disabled && (
        <div
          className="absolute w-32 h-32 bg-white/10 rounded-full pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      )}

      {/* Effet shimmer pour les boutons gradient */}
      {variant === 'gradient' && isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
      )}

      {/* Loading spinner */}
      {loading && (
        <svg className="animate-spin mr-2 h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}

      {/* Icone et texte */}
      {icon && iconPosition === 'left' && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="relative z-10">{icon}</span>}
    </button>
  );
};

export default Button;