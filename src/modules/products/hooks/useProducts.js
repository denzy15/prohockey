import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";

export const useProducts = () => useContext(ProductsContext);
