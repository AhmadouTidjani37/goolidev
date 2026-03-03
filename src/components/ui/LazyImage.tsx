// components/ui/LazyImage.tsx
import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  thumbnail?: string; // Miniature optionnelle
  priority?: boolean; // Pour les images prioritaires
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholderColor = '#f3f4f6',
  thumbnail,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Si priority=true, considérer comme dans la vue
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      // Chargement prioritaire immédiat
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
      return;
    }

    // Intersection Observer pour les images non prioritaires
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' } // Charge 50px avant l'apparition
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  // Gestion des formats d'image modernes
  const getSrcSet = () => {
    if (src.includes('.jpg') || src.includes('.jpeg')) {
      return src.replace(/\.(jpg|jpeg)$/, '.webp');
    }
    return src;
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: placeholderColor }}
    >
      {/* Miniature floue (si fournie) */}
      {thumbnail && !isLoaded && (
        <img
          src={thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-105"
          aria-hidden="true"
        />
      )}

      {/* Image principale avec support WebP */}
      {(isInView || priority) && !error && (
        <picture>
          <source srcSet={getSrcSet()} type="image/webp" />
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
      )}

      {/* Fallback en cas d'erreur */}
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
          <span className="text-primary-600 text-4xl font-bold">
            {alt.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      
      {/* Skeleton loader (disparaît quand l'image est chargée) */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;