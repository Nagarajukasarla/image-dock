import React, { useEffect, useState } from "react";
import { groceryCategories } from "../constants/groceryCategories";
import "../styles/App.css";

interface CategorySelectorProps {
  category: string;
  subCategory: string;
  onCategoryChange: (category: string) => void;
  onSubCategoryChange: (subCategory: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  category,
  subCategory,
  onCategoryChange,
  onSubCategoryChange
}) => {
  const [subCategories, setSubCategories] = useState<string[]>([]);

  useEffect(() => {
    const found = groceryCategories.find((c) => c.category === category);
    setSubCategories(found ? found.subCategories : []);
    if (!found) onSubCategoryChange("");
  }, [category, onSubCategoryChange]);

  return (
    <div className="category-selector">
      <label className="category-label">
        Category
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="category-dropdown"
        >
          <option value="">Select...</option>
          {groceryCategories.map((cat) => (
            <option key={cat.category} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>
      </label>
      <label className="subcategory-label">
        Sub-category
        <select
          value={subCategory}
          onChange={(e) => onSubCategoryChange(e.target.value)}
          className="subcategory-dropdown"
          disabled={!category}
        >
          <option value="">Select...</option>
          {subCategories.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CategorySelector;