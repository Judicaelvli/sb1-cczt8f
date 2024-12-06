import React, { useState } from 'react';
import { Product, ProductFormData } from '../../types';
import { ProductList } from './ProductList';
import { ProductForm } from './ProductForm';
import { Plus } from 'lucide-react';

interface DashboardProps {
  products: Product[];
  onUpdateProducts: (newProducts: Product[]) => void;
}

export function Dashboard({ products, onUpdateProducts }: DashboardProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (formData: ProductFormData) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...formData,
    };
    onUpdateProducts([...products, newProduct]);
    setShowForm(false);
  };

  const handleEditProduct = (formData: ProductFormData) => {
    if (!editingProduct) return;
    const updatedProducts = products.map((p) =>
      p.id === editingProduct.id ? { ...p, ...formData } : p
    );
    onUpdateProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      const updatedProducts = products.filter((p) => p.id !== productId);
      onUpdateProducts(updatedProducts);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Produits</h2>
        {!showForm && !editingProduct && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            <Plus className="h-5 w-5 mr-2" />
            Ajouter un produit
          </button>
        )}
      </div>

      {(showForm || editingProduct) && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}
          </h3>
          <ProductForm
            initialData={editingProduct || undefined}
            onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
            onCancel={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
          />
        </div>
      )}

      {!showForm && !editingProduct && (
        <ProductList
          products={products}
          onEdit={setEditingProduct}
          onDelete={handleDeleteProduct}
        />
      )}
    </div>
  );
}