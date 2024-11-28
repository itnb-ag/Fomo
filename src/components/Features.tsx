import React from 'react';
import { Clock, Star, Phone } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Service",
      description: "Round-the-clock assistance for all your dining needs"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Exclusive Access",
      description: "Priority reservations at the most sought-after restaurants"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Personal Concierge",
      description: "Dedicated support for personalized recommendations"
    }
  ];

  return (
    <div className="bg-[#F5E6D3] py-16">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-[#013220]">Why Choose Fomo</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-[#013220] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[#013220] font-serif text-2xl mb-2">
                {feature.title}
              </h3>
              <p className="text-[#013220]/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}