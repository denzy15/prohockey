import React from "react";
import { CategoriesProvider } from "../context/CategoriesContext";
import CategoryList from "../components/categories/CategoryList";

const CategoryPageContent = ({ categories }) => {
  return (
    <CategoriesProvider initialCategories={categories}>
      <CategoryList />
    </CategoriesProvider>
  );
};

export default CategoryPageContent;
