import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 sm:hidden" />
            <h1 className="text-2xl font-bold text-gray-800 ml-2">Chic Boutique</h1>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Vêtements</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Accessoires</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Chaussures</a>
          </div>

          <div className="flex items-center">
            <button className="p-2 relative">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}