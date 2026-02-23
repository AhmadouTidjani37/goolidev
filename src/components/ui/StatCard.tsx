import { Stat } from 'components/types/service.types';
import React from 'react';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const IconComponent = stat.icon;

  return (
    <div className="text-center text-white">
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <IconComponent className="w-8 h-8" />
        </div>
      </div>
      <div className="text-4xl font-bold mb-2">{stat.value}</div>
      <div className="text-white/90 text-lg">{stat.label}</div>
    </div>
  );
};

export default StatCard;