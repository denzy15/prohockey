import React from "react";
import { ProductsProvider } from "../context/ProductContext";
import SortBar from "../components/SortBar";
import ProductList from "../components/ProductList";



const ProductsCategory = ({ initialProducts }) => {
  return (
    <ProductsProvider initialProducts={initialProducts}>
      <SortBar />
      <ProductList />
    </ProductsProvider>
  );
};

export default ProductsCategory;
