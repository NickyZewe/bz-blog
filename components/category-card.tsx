import { CategoryContext } from "@/context/category-context";
import { CategoryCardProps } from "@/entities/types";
import { useContext } from "react";

const CategoryCard: React.FC<CategoryCardProps> = ({ title }) => {
  const { category, changeCategory } = useContext(CategoryContext);

  return (
    <div
      onClick={() => changeCategory(title)}
      className={`${
        title === category ? "bg-[#ffffff] text-black" : "bg-[#af8533]"
      } p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default CategoryCard;
