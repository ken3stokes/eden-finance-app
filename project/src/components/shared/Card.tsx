import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = true
}) => (
  <div className={`
    p-8 bg-slate-800 rounded-xl border border-slate-700
    ${hover ? 'transition-transform hover:-translate-y-1' : ''}
    ${className}
  `}>
    {children}
  </div>
);