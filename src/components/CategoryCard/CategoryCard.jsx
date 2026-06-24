import Style from "./CategoryCard.module.css";

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div
      className={`${Style.card}
        group
        rounded-3xl
        p-8
        text-center
        transition-all
        duration-300
        cursor-pointer
        hover:-translate-y-2
      `}
    >
      <div className="flex justify-center mb-4">
        <Icon
          size={42}
          className={`${Style.icon} group-hover:scale-110 transition-transform duration-300`}
        />
      </div>

      <h3 className="font-semibold text-lg">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
