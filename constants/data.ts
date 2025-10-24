import type { ServiceCategory, BeforeAfterImage } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Onglerie",
    services: [
      { name: "pédicure médical", price: 200 },
      { name: "pédicure simple", price: 150 },
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
  "#",
  
];

export const beforeAfterImages: BeforeAfterImage[] = [
    {
        before: "https://i.postimg.cc/hvvg9JzD/1.png",
        after: "https://i.postimg.cc/rFdMsr2P/2.png",
    },
    {
        before: "https://i.postimg.cc/KjkwGt3z/3.png",
        after: "https://i.postimg.cc/pLJWMtt0/4.png",
    },
    {
        before: "https://i.postimg.cc/kgf0yMCS/5.png",
        after: "https://i.postimg.cc/tJ3fnpkc/6.png",
    },
    {
        before: "https://i.postimg.cc/0NKVJ9yR/7.png",
        after: "https://i.postimg.cc/hvssqjpT/8.png",
    },
];