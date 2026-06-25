import ProductCard from "../ProductCard/ProductCard";
import Style from "./FeaturedProducts.module.css";
import featuredProducts from "../../data/featuredProducts.json";

const FeaturedProducts = () => {
  return (
    <section className={`${Style.section} py-24`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className={`${Style.heading} text-4xl font-bold`}>
              Featured Products
            </h2>
          </div>

          
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
