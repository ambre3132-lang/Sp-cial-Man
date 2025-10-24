import type { ServiceCategory, BeforeAfterImage } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Onglerie",
    services: [
      { name: "Forme ongle mains", price: 20 },
      { name: "Forme ongle pieds", price: 40 },
      { name: "Manicure", price: 50 },
      { name: "Manicure SPA", price: 80 },
      { name: "Pedicure", price: 150 },
      { name: "Pedicure SPA", price: 200 },
      { name: "Pedicure medical", price: 200 },
    ],
  },
  {
    title: "Soin de visage",
    services: [
      { name: "Gommage + Masque", price: 150 },
      { name: "Soin classique", price: 300 },
      { name: "Soin medical", price: 400 },
      { name: "Soin Vitamine", price: 500 },
      { name: "Soin Hydro-facial", price: 500 },
      { name: "Traitement de Microneedling", price: 600 },
    ],
  },
  {
    title: "Épilation",
    services: [
      { name: "Narines", price: 20 },
      { name: "Oreilles", price: 20 },
      { name: "Joues", price: 30 },
      { name: "Sourcils", price: 30 },
      { name: "Aisselles", price: 50 },
      { name: "Nuque", price: 50 },
      { name: "Jambes", price: 150 },
      { name: "Bras", price: 150 },
      { name: "Ventre", price: 150 },
      { name: "Dos", price: 150 },
    ],
  },
];

export const generalGalleryImages: string[] = [
  "https://picsum.photos/seed/salon1/800/600.webp",
  "https://picsum.photos/seed/salon2/600/800.webp",
  "https://picsum.photos/seed/salon3/800/600.webp",
  "https://picsum.photos/seed/salon4/800/600.webp",
  "https://picsum.photos/seed/salon5/600/800.webp",
  "https://picsum.photos/seed/salon6/800/600.webp",
];

export const beforeAfterImages: BeforeAfterImage[] = [
    {
        before: "https://picsum.photos/seed/before1/600/600.webp",
        after: "https://picsum.photos/seed/after1/600/600.webp",
    },
    {
        before: "https://picsum.photos/seed/before2/600/600.webp",
        after: "https://picsum.photos/seed/after2/600/600.webp",
    },
    {
        before: "https://picsum.photos/seed/before3/600/600.webp",
        after: "https://picsum.photos/seed/after3/600/600.webp",
    },
];