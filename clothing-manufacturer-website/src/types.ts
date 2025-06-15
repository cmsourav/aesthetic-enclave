export interface Shirt {
  id: number;
  name: string;
  description: string;
  materials: string[];
  variants: {
    name: string;
    image: string;
  }[];
  features: string[];
  minOrderQuantity: number;
  customizationOptions: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}