import React from 'react';
import { commonBudgetCategories } from '../../utils/budgetCategories';

interface CategorySelectProps {
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  const currentCategory = commonBudgetCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Category</option>
          {commonBudgetCategories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
        <select
          value={selectedSubcategory}
          onChange={(e) => onSubcategoryChange(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          disabled={!selectedCategory}
        >
          <option value="">Select Subcategory</option>
          {currentCategory?.subcategories.map(sub => (
            <option key={sub.id} value={sub.id}>
              {sub.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};