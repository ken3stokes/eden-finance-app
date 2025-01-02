import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  className = ''
}) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-slate-400">{subtitle}</p>}
  </div>
);