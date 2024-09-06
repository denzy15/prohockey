import React, { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  const deleteContextProduct = (_id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== _id)
    );
  };

  const sortProductByCategory = (categoryId) => {
    setProducts(
      initialProducts.filter((product) => product.category === categoryId)
    );
  };

  const resetSorting = () => {
    setProducts(initialProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        deleteContextProduct,
        resetSorting,
        sortProductByCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
