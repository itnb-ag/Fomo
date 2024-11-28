import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { Navigation } from './Navigation';
import { MainHeading } from './MainHeading';
import { Locations } from './Locations';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>
      
      <Navigation />
      
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <MainHeading />
        <Locations />
        <div className="max-w-3xl text-center mt-8">
          <p className="text-[#F5E6D3]/90 text-xl md:text-2xl mb-8 leading-relaxed">
            We are a concierge service that curates bookings to exclusive restaurants to make sure you have a good time
          </p>
          <a 
            href="https://wa.me/message/CTD3N52UOCQEA1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 shadow-lg hover:shadow-xl transform transition-transform hover:scale-105">
              <MessageSquare className="w-5 h-5" />
              Text Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}