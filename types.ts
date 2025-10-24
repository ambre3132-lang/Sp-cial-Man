
export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export interface Service {
  name: string;
  price: number;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export interface BeforeAfterImage {
  before: string;
  after: string;
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  timestamp: any;
}