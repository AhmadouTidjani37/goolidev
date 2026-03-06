// utils/responsive.ts
export const responsiveClasses = {
  // Container responsive
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  
  // Grilles adaptatives
  grid: {
    1: 'grid grid-cols-1',
    2: 'grid grid-cols-1 sm:grid-cols-2',
    3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  },
  
  // Espacements
  spacing: {
    section: 'py-12 sm:py-16 lg:py-20',
    hero: 'pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20',
  },
  
  // Textes
  text: {
    h1: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
    h2: 'text-3xl sm:text-4xl lg:text-5xl',
    h3: 'text-2xl sm:text-3xl lg:text-4xl',
    body: 'text-base sm:text-lg lg:text-xl',
  },
  
  // Images
  image: {
    cover: 'w-full h-full object-cover',
    contain: 'w-full h-full object-contain',
  },
};