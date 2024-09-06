import React from "react";
import { OrdersProvider } from "../context/OrdersContext";
import OrderList from "../components/orders/OrderList";

const OrdersPageContent = () => {
  return (
    <OrdersProvider >
      <OrderList />
    </OrdersProvider>
  );
};

export default OrdersPageContent;
