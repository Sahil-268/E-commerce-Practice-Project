import { useState } from "react";
import Style from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  // Simple state to toggle the wishlist heart color locally
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className={`${Style.card} group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      {/* Image Container - set to relative for top-right positioning */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`${Style.wishlistBtn} absolute top-4 right-4 p-2.5 rounded-full shadow-md transition-transform duration-200 active:scale-95`}
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isWishlisted ? "var(--color-primary)" : "none"}
            stroke={
              isWishlisted ? "var(--color-primary)" : "var(--color-black)"
            }
            strokeWidth="2"
            className="w-5 h-5 transition-colors duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      <div className="p-5">
        {/* Category Label */}
        <span
          className={`${Style.category} text-xs font-semibold uppercase tracking-wider`}
        >
          {product.category || "Category"}
        </span>

        {/* Product Title */}
        <h3 className={`${Style.title} font-semibold text-lg mt-1 truncate`}>
          {product.name}
        </h3>

        {/* Rating Row */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-amber-400">
            {/* Star Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className={`${Style.ratingText} text-sm font-medium`}>
            {product.rating || "4.5"}
          </span>
        </div>

        {/* Product Price */}
        <p className={`${Style.price} font-bold mt-3 text-xl`}>
          {product.price}
        </p>

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
