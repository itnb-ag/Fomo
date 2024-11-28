import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-md font-medium transition-all duration-300 text-lg";
  const variants = {
    primary: "bg-[#013220] text-[#F5E6D3] hover:bg-[#024230] active:bg-[#012518]",
    secondary: "bg-[#F5E6D3] text-[#013220] hover:bg-[#ECD9BE] active:bg-[#E6CCA8]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}