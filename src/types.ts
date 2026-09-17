export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  partnerBrand?: string;
  partnerOrigin?: string;
  featured?: boolean;
  image: string;
  details: string[];
  keySpecs: { label: string; value: string }[];
  standards?: string[];
  applications: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  criticalFocus: string[];
  relevantSolutions: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface MissionPrinciple {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface OfficeLocation {
  city: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: string;
}

export interface GlobalPrincipal {
  id: string;
  name: string;
  country: string;
  flagEmoji: string;
  established: string;
  specialization: string;
  description: string;
  keyProducts: string[];
  certifications: string[];
  solutionSlug: string;
  websiteUrl?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  location: string;
  category: 'Industrial' | 'Commercial' | 'Power & Energy' | 'Renewable Energy' | 'Life Safety' | 'Infrastructure';
  year: string;
  scopeSummary: string;
  challenge: string;
  solutionEngineered: string;
  keyEquipment: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

export interface ConsultationFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceId: string;
  projectType: 'industrial' | 'commercial' | 'infrastructure' | 'other';
  message: string;
}
