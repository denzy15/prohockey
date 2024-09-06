import axios from "axios";
import { SERVER_URL } from "./constants";

export const getCategories = async () => {
  const { data: categories } = await axios.get(`${SERVER_URL}/categories`);
  return categories;
};
