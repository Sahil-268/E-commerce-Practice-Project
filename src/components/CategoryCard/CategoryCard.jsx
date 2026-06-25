import Style from "./CategoryCard.module.css";

const CategoryCard = ({ category, isActive, onClick }) => {
  const Icon = category.icon;

  return (
    <div
      onClick={onClick}
      className={`${Style.card}
        group
        rounded-3xl
        p-8
        text-center
        transition-all
        duration-300
        cursor-pointer
        hover:-translate-y-1
         ${isActive ? Style.active : ""}
      `}
    >
      <div className="flex justify-center mb-4">
        <Icon
          size={42}
          className={`${Style.icon} group-hover:scale-105 transition-transform duration-300`}
        />
      </div>

      <h3 className="font-semibold text-lg">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
