import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Product[];
}

export function CategorySection({ title, products }: CategorySectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}