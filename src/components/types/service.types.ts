import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
}