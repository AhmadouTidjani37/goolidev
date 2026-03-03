// components/ui/AvatarPlaceholder.tsx
import React from 'react';
import { User } from 'lucide-react';

interface AvatarPlaceholderProps {
  name: string;
  className?: string;
}

const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({ name, className = '' }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getColorFromName = (name: string) => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-teal-500',
    ];
    
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className={`${getColorFromName(name)} ${className} flex items-center justify-center text-white font-bold`}>
      {getInitials(name)}
    </div>
  );
};

export default AvatarPlaceholder;