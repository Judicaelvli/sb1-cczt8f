export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'clothes' | 'accessories' | 'shoes';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductFormData {
  name: string;
  price: number;
  image: string;
  category: 'clothes' | 'accessories' | 'shoes';
  description: string;
}