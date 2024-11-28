import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`font-serif text-3xl md:text-4xl text-center mb-12 ${className}`}>
      {children}
    </h2>
  );
}