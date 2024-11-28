import React from 'react';

export function MartiniGlass() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 50 L350 50 L200 400 L50 50 Z" />
      <line x1="125" y1="450" x2="275" y2="450" />
      <line x1="200" y1="400" x2="200" y2="450" />
      <path d="M150 30 C150 30, 200 40, 250 30" />
      <text
        x="200"
        y="200"
        textAnchor="middle"
        className="fill-current"
        style={{ fontSize: '100px', fontFamily: 'serif' }}
      >
        FOMO
      </text>
    </svg>
  );
}