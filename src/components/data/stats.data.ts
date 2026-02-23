import { Users, Clock, Award } from 'lucide-react';
import { Stat } from '../types/service.types';

export const stats: Stat[] = [
  {
    id: 'clients',
    icon: Users,
    value: '47+',
    label: 'Clients satisfaits'
  },
  {
    id: 'experience',
    icon: Clock,
    value: '4+',
    label: "Années d'expérience"
  },
  {
    id: 'projects',
    icon: Award,
    value: '52+',
    label: 'Projets réalisés'
  }
];