import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import Section from '../common/Section';
import { services } from 'components/data/services.data';

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nos Services Complets
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une gamme complète de services informatiques pour répondre à tous vos besoins
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;