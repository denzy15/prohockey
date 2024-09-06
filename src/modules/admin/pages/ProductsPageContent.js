import React from "react";
import { ProductsProvider } from "../context/ProductsContext";
import SortBar from "../components/products/SortBar";
import ProductList from "../components/products/ProductList";

const ProductsPageContent = ({ products, categories }) => {
  return (
    <ProductsProvider initialProducts={products}>
      <SortBar categories={categories} />
      <ProductList />
    </ProductsProvider>
  );
};

export default ProductsPageContent;
