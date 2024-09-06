import { useContext } from "react";
import { OrdersContext } from "../context/OrdersContext";

export const useOrders = () => useContext(OrdersContext);
