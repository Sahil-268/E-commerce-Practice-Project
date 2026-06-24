const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      p-8
      text-center
      border
      hover:border-red-500
      hover:-translate-y-2
      transition-all
      duration-300
      cursor-pointer
    "
    >
      <div className="flex justify-center mb-4">
        <Icon
          size={42}
          className="text-red-500 group-hover:scale-110 transition"
        />
      </div>

      <h3 className="font-semibold text-lg">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
