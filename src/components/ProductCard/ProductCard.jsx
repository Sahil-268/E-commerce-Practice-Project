import Style from "./ProductCard.module.css";

import { Link } from "react-router-dom";

import { useWishlist } from "../../context/WishlistContext/wishlistContext";

import HeartLineIcon from "@iconify-react/si/heart-line";
import HeartFillIcon from "@iconify-react/si/heart-fill";
import RoundStarIcon from "@iconify-react/ic/round-star-rate";

const ProductCard = ({ product, id }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  return (
    <div
      className={`${Style.card} group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative overflow-hidden">
        <img
          src={`${product.image}?w=400&h=400&fit=crop`}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          onClick={() =>
            toggleWishlist({
              id,
              ...product,
            })
          }
          className={`${Style.wishlistBtn} absolute top-4 right-4 p-2.5 rounded-full shadow-md transition-transform duration-200 active:scale-95`}
          aria-label="Add to wishlist"
        >
          {isWishlisted(id) ? (
            <HeartFillIcon height="1em" />
          ) : (
            <HeartLineIcon height="1em" />
          )}
        </button>
      </div>

      <div className="p-5">
        <span
          className={`${Style.category} text-xs font-semibold uppercase tracking-wider transition duration-500`}
        >
          {product.category || "Category"}
        </span>

        <h3 className={`${Style.title} font-semibold text-lg mt-1 truncate`}>
          {product.name}
        </h3>

        <div className="flex justify-between">
          <p className={`${Style.price} font-bold mt-3 text-md mb-1`}>
            {product.price}
          </p>

          <div className="flex items-center gap-1 mt-2">
            <div className="flex text-amber-400">
              <RoundStarIcon height="1.5em" className="mb-1" />{" "}
            </div>
            <span className={`${Style.ratingText} text-sm font-medium`}>
              {product.rating || "4.5"}
            </span>
          </div>
        </div>

        <Link to={`/product/${id}`}>
          <button
            className={`${Style.button} mt-4 w-full py-3 rounded-xl transition`}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
