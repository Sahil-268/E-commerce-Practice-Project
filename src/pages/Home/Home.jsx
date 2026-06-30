import { useState } from "react";

import Hero from "../../components/Hero/Hero";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import InfiniteScrollSection from "../../components/InfiniteScrollSection/InfiniteScrollSection";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? "All" : category,
    );
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Hero />
      <FeaturedProducts />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <InfiniteScrollSection selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
};

export default Home;
