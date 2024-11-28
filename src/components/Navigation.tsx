import React from 'react';
import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <p className="font-serif italic text-[#F5E6D3] text-lg">Never not Fomo</p>
      </div>
    </nav>
  );
}