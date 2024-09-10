import React, { createContext, useState } from "react";

const ProductsContext = createContext({});

const ProductsProvider = ({ children, initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  const [sort, setSort] = useState("popularity");

  const applySorting = (newSort) => {
    setSort(newSort);
    if (newSort === "popularity") {
      setProducts(initialProducts);
    } else {
      setProducts((prev) =>
        prev.sort((a, b) => {
          if (sort === "price-desc") return a.basePrice - b.basePrice;
          if (sort === "price-asc") return b.basePrice - a.basePrice;
          return 0;
        })
      );
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        sort,
        setSort: applySorting,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
