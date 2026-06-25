import { useState } from "react";
import Style from "./ProductCard.module.css";

import HeartLineIcon from "@iconify-react/si/heart-line";
import HeartFillIcon from "@iconify-react/si/heart-fill";
import RoundStarIcon from "@iconify-react/ic/round-star-rate";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className={`${Style.card} group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`${Style.wishlistBtn} absolute top-4 right-4 p-2.5 rounded-full shadow-md transition-transform duration-200 active:scale-95`}
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <HeartFillIcon height="1em" />
          ) : (
            <HeartLineIcon height="1em" />
          )}
        </button>
      </div>

      <div className="p-5">
        {/* Category Label */}
        <span
          className={`${Style.category} text-xs font-semibold uppercase tracking-wider transition duration-500`}
        >
          {product.category || "Category"}
        </span>

        {/* Product Title */}
        <h3 className={`${Style.title} font-semibold text-lg mt-1 truncate`}>
          {product.name}
        </h3>

        <div className="flex justify-between">
          {/* Product Price */}
          <p className={`${Style.price} font-bold mt-3 text-md mb-1`}>
            {product.price}
          </p>

          {/* Rating Row */}
          <div className="flex items-center gap-1 mt-2">
            <div className="flex text-amber-400">
              <RoundStarIcon height="1.5em" className="mb-1" />{" "}
            </div>
            <span className={`${Style.ratingText} text-sm font-medium`}>
              {product.rating || "4.5"}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`${Style.button} mt-4 w-full py-3 rounded-xl transition`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
