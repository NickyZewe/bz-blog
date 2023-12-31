"use client";
import { FetchCategories } from "@/actions/fetch-categories";
import { CategoryContext } from "@/context/category-context";
import { useContext, useEffect } from "react";
import CategoryCard from "./category-card";

const Categories = () => {
  const categories = FetchCategories();

  const { changeCategory, category } = useContext(CategoryContext);

  useEffect(() => {
    changeCategory(categories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row gap-3 mb-8 p-5 ">
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
