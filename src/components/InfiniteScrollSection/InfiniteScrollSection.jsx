import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Style from "./InfiniteScrollSection.module.css";
import catalogProducts from "../../data/products.json";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const InfiniteScrollSection = ({ selectedCategory }) => {
  const ITEMS_PER_PAGE = 8;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const loaderRef = useRef(null);
  const isLoadingRef = useRef(false);

  const filteredItems =
    selectedCategory === "All"
      ? catalogProducts
      : catalogProducts.filter(
          (product) => product.category === selectedCategory,
        );

  const items = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
    setIsLoading(false);
    isLoadingRef.current = false;
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoadingRef.current &&
          visibleCount < filteredItems.length
        ) {
          isLoadingRef.current = true;
          setIsLoading(true);

          setTimeout(() => {
            setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
            setIsLoading(false);
            isLoadingRef.current = false;
          }, 500);
        }
      },
      {
        threshold: 1.0,
      },
    );

    const node = loaderRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [visibleCount, filteredItems.length]);

  return (
    <section className={`${Style.section} pt-12 pb-24`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} id={product.id} />
          ))}

          {isLoading &&
            Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))}
        </div>

        {visibleCount < filteredItems.length ? (
          <div ref={loaderRef} className={Style.statusContainer}>
            <div className="h-10 w-full" aria-hidden="true" />
          </div>
        ) : (
          <div className={Style.statusContainer}>
            <div className={Style.endText}>You've reached the apex!</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfiniteScrollSection;
