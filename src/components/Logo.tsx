import React from 'react';
import { MartiniGlass } from './MartiniGlass';

export function Logo() {
  return (
    <a 
      href="https://www.instagram.com/nevernotfomo/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <MartiniGlass />
      <div className="flex flex-col">
        <span className="font-serif text-2xl text-[#F5E6D3]">Fomo</span>
      </div>
    </a>
  );
}