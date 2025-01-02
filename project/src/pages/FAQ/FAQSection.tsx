import React from 'react';
import { FAQItem } from './FAQItem';
import { faqCategories } from './faqData';

export const FAQSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {faqCategories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{category.title}</h2>
          <div className="space-y-4">
            {category.items.map((item, itemIndex) => (
              <FAQItem
                key={itemIndex}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};