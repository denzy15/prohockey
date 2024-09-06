import { SERVER_URL } from "@/shared/constants";
import axios from "axios";

export const createOrder = async (orderData, cartItems) => {
  try {
    await axios.post(`${SERVER_URL}/orders`, {
      ...orderData,
      products: cartItems,
    });
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};
