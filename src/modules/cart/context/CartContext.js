import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  const addToCart = (product) => {
    const productCopy = JSON.parse(JSON.stringify(product));
    setCart((prev) => {
      const newCart = [...prev, productCopy];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productIndex) => {
    setCart((prev) => {
      const newCart = [...prev];
      newCart.splice(productIndex, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const changeProductCounter = (productIndex, type) => {
    setCart((prev) => {
      const newCart = [...prev];
      const product = newCart[productIndex];

      if (type === "add") {
        if (product.cartCounter >= 10) {
          product.cartCounter = 10;
          toast.info(
            "Для оптовой покупки на выгодных условиях свяжитесь с нами по телефону"
          );
        } else {
          product.cartCounter += 1;
        }
      } else {
        if (product.cartCounter <= 1) {
          product.cartCounter = 1;
        } else {
          product.cartCounter -= 1;
        }
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeProductCounter,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
