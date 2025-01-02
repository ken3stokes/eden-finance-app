import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-800 hover:bg-slate-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-slate-800/50">
          <div className="prose prose-invert max-w-none text-slate-300">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};