"use client";

import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
