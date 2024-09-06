import React, { createContext, useContext, useState } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children, initialCategories }) => {
  const [categories, setCategories] = useState(initialCategories);

  const deleteContextCategory = (_id) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category._id !== _id)
    );
  };

  return (
    <CategoriesContext.Provider value={{ categories, deleteContextCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};
