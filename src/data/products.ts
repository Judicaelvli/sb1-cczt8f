import { Product } from '../types';

export const products: Product[] = [
  // Vêtements
  {
    id: '1',
    name: 'Robe d\'été florale',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    category: 'clothes',
    description: 'Robe légère parfaite pour l\'été, motif floral délicat'
  },
  {
    id: '2',
    name: 'Blazer noir élégant',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    category: 'clothes',
    description: 'Blazer noir classique pour un look professionnel'
  },
  {
    id: '3',
    name: 'Jupe plissée midi',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    category: 'clothes',
    description: 'Jupe plissée élégante longueur midi'
  },
  // Accessoires
  {
    id: '4',
    name: 'Sac à main en cuir',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    category: 'accessories',
    description: 'Sac à main élégant en cuir véritable'
  },
  {
    id: '5',
    name: 'Collier en or',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    category: 'accessories',
    description: 'Collier délicat en plaqué or'
  },
  {
    id: '6',
    name: 'Ceinture en cuir',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    category: 'accessories',
    description: 'Ceinture en cuir véritable avec boucle dorée'
  },
  // Chaussures
  {
    id: '7',
    name: 'Escarpins classiques',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    category: 'shoes',
    description: 'Escarpins noirs élégants pour toutes occasions'
  },
  {
    id: '8',
    name: 'Bottines en cuir',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    category: 'shoes',
    description: 'Bottines en cuir véritable pour l\'automne'
  },
  {
    id: '9',
    name: 'Sandales à talons',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33',
    category: 'shoes',
    description: 'Sandales élégantes à talons moyens'
  }
];