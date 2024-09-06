import axios from "axios";

export const fetchProductsByCategory = async (category) => {
  const { data } = await axios.get(`/api/products?category=${category}`);
  return data;
};
