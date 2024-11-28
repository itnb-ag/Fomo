import React from 'react';
import { SectionTitle } from './SectionTitle';

export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      alt: "Fine dining experience"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
      alt: "Elegant plating"
    },
    {
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80",
      alt: "Exclusive restaurant interior"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-[#F5E6D3]">Curated Experiences</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-64 overflow-hidden rounded-lg transform transition-transform hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}