import React from 'react';
import { CheckCircle } from 'lucide-react';

import Card from '../common/Card';
import { Service } from 'components/types/service.types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <Card className="hover:shadow-xl transition transform hover:-translate-y-2 h-full flex flex-col">
      <div className="text-blue-600 mb-4">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ServiceCard;