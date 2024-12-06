import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { Dashboard } from './components/Dashboard/Dashboard';
import { products as initialProducts } from './data/products';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const clothesProducts = products.filter(p => p.category === 'clothes');
  const accessoriesProducts = products.filter(p => p.category === 'accessories');
  const shoesProducts = products.filter(p => p.category === 'shoes');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          {isAdmin ? 'Mode Client' : 'Mode Admin'}
        </button>
      </div>

      {isAdmin ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Dashboard products={products} onUpdateProducts={setProducts} />
        </main>
      ) : (
        <>
          <Hero />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <CategorySection title="Vêtements" products={clothesProducts} />
            <CategorySection title="Accessoires" products={accessoriesProducts} />
            <CategorySection title="Chaussures" products={shoesProducts} />
          </main>
        </>
      )}

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chic Boutique</h3>
              <p className="text-gray-400">Votre destination mode préférée pour un style unique et élégant.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@chicboutique.fr</p>
              <p className="text-gray-400">Tél: 01 23 45 67 89</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;