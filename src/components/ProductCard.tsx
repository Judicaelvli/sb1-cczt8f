import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{product.price.toFixed(2)} €</span>
          <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}