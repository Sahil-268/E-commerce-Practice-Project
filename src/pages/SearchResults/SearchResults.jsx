import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products.json";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((product) => {
    const keyword = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
  });

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">Search Results</h1>

        <p className="text-gray-500 mt-2">
          Found {filteredProducts.length} result
          {filteredProducts.length !== 1 && "s"} for "{query}"
        </p>

        {filteredProducts.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold">No products found</h2>

            <p className="text-gray-500 mt-2">
              Try searching for something else.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} id={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
