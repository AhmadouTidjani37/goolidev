import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = '',
  containerClassName = ''
}) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;