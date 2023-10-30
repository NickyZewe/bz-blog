import { FetchCategories } from "@/actions/fetch-categories";
import CategoryCard from "./category-card";

const Categories = () => {
  const categories = FetchCategories();
  console.log(categories);

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
    </div>
  );
};

export default Categories;
