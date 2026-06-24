import ProductCard from "../ProductCard/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Apex Pro Headset",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: "₹6,999",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    id: 3,
    name: "Smart Watch X",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold">Featured Products</h2>

            <p className="text-gray-500 mt-2">
              Hand-picked tech essentials for every setup.
            </p>
          </div>

          <button className="hidden md:block border px-5 py-3 rounded-xl hover:bg-black hover:text-white transition">
            View All
          </button>
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
