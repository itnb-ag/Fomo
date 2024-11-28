import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';

export function App() {
  return (
    <div className="bg-[#013220]">
      <Hero />
      <Features />
      <Gallery />
    </div>
  );
}

export default App;