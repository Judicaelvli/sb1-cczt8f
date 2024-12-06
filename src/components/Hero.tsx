import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
        alt="Fashion Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Collection Printemps 2024</h1>
          <p className="text-xl mb-8">Découvrez nos nouvelles tendances</p>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
}