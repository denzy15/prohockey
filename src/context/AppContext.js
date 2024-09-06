import { getCategories } from "@/shared/api";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <AppContext.Provider value={{ categories }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
