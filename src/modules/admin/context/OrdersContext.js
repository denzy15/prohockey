import React, { createContext, useEffect, useState } from "react";
import { getOrders } from "../api/api";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const result = await getOrders();
      setOrders(result);
    }

    fetchOrders();
  }, []);

  return (
    <OrdersContext.Provider value={{ orders }}>
      {children}
    </OrdersContext.Provider>
  );
};
