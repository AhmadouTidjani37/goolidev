// components/types/team.types.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
    twitter?: string;
  };
  badge: string;
  location: string;
  quote: string;
  joinDate?: string;
  projects?: number;
}