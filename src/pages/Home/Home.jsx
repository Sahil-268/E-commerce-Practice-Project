import Hero from "../../components/Hero/Hero";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CategoryFilter />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;
