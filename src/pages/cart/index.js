import { CartItemsList, Summary } from "@/modules/cart";
import React from "react";

const CartPage = () => {
  return (
    <>
      <CartItemsList />
      <Summary />
    </>
  );
};

export default CartPage;
