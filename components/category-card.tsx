interface CategoryCardProps {
  title: string;
  id: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title }) => {
  return (
    <div
      onClick={() => {}}
      className="p-4 rounded-lg shadow-md cursor-pointer bg-[#af8533]"
    >
      {title}
    </div>
  );
};

export default CategoryCard;
