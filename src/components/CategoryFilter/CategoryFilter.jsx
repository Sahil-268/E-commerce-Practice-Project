import {
  Headphones,
  Keyboard,
  Watch,
  Smartphone,
  Monitor,
  Gamepad2,
} from "lucide-react";

import CategoryCard from "../CategoryCard/CategoryCard";
import Style from "./CategoryFilter.module.css";

const categories = [
  {
    id: 1,
    name: "Audio",
    icon: Headphones,
  },
  {
    id: 2,
    name: "Gaming",
    icon: Keyboard,
  },
  {
    id: 3,
    name: "Wearables",
    icon: Watch,
  },
  {
    id: 4,
    name: "Mobile",
    icon: Smartphone,
  },
  {
    id: 5,
    name: "Setups",
    icon: Monitor,
  },
  {
    id: 6,
    name: "Consoles",
    icon: Gamepad2,
  },
];

const CategoryFilter = ({ selectedCategory, onCategoryClick }) => {
  return (
    <section className={`${Style.section} py-24`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className={`${Style.heading} text-4xl font-bold`}>
            Find Your Perfect Tech
          </h2>

          <p className={`${Style.subHeading} mt-4 max-w-2xl mx-auto`}>
            Explore our curated collection of premium gadgets, gaming
            accessories, and smart devices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={selectedCategory === category.name}
              onClick={() => onCategoryClick(category.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
