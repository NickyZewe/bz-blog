"use client";
import { FetchCategories } from "@/actions/fetch-categories";
import CategoryCard from "./category-card";
import { useContext, useEffect, useLayoutEffect } from "react";
import { CategoryContext } from "@/context/category-context";

const Categories = () => {
  const categories = FetchCategories();

  const { changeCategory, category } = useContext(CategoryContext);

  useEffect(() => {
    changeCategory(categories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-6 mb-8 ">
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            id={category.id}
          />
        ))}
      <div
        onClick={() => changeCategory(null)}
        className="bg-[#4e4848] text-gray-200 p-4 rounded-lg shadow-md cursor-pointer"
      >
        Clear Filter
      </div>
    </div>
  );
};

export default Categories;
