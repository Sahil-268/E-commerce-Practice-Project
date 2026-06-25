import { useParams, Link } from "react-router-dom";
import Styles from "./ProductDetails.module.css";
import RoundStarIcon from "@iconify-react/ic/round-star-rate";
import ArrowLeftIcon from "@iconify-react/ic/baseline-arrow-back";
import catalogProducts from "../../data/products.json";
import Tick01Icon from "@iconify-react/hugeicons/tick-01";

import Header from "../../components/Header/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const product = catalogProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className={Styles.fallbackContainer}>
        <h2 className={`${Styles.fallbackHeading} text-3xl font-bold`}>
          Product Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The product you are trying to reach does not exist or has been
          removed.
        </p>
        <Link
          to="/"
          className="border px-6 py-2.5 rounded-xl hover:bg-black hover:text-white transition"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:h-screen flex flex-col md:overflow-hidden">
      <Header />

      <div className={`${Styles.section} py-6 md:py-10`}>
        <div className="max-w-7xl w-full mx-auto px-4 flex flex-col md:h-full">
          <div className="mb-4 shrink-0">
            <Link
              to={-1}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition"
            >
              <ArrowLeftIcon height="1.3em" /> Back to Products
            </Link>
          </div>

          <div
            className={`${Styles.mainGrid} grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch`}
          >
            <div className={Styles.leftScrollPanel}>
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm md:sticky md:top-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[320px] md:h-[450px] lg:h-[520px] object-cover"
                />
              </div>
            </div>

            <div className={Styles.rightScrollPanel}>
              <h1
                className={`${Styles.title} text-2xl lg:text-4xl font-extrabold mt-1 mb-3 leading-tight`}
              >
                {product.name}
              </h1>

              <div className="flex justify-between items-end mb-5 py-3 border-y border-gray-200/80">
                <div className="   ">
                  <span className="text-xs text-gray-400 block mb-0.5">
                    Price
                  </span>
                  <span
                    className={`${Styles.price} text-2xl lg:text-3xl font-black`}
                  >
                    {product.price}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex text-amber-400">
                    <RoundStarIcon height="1.6em" className="mb-1"/>
                  </div>
                  <span className="text-md font-bold text-gray-900">
                    {product.rating}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">
                  Overview
                </h3>
                <p className={Styles.description}>{product.full_description}</p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`${Styles.featureBadge} px-3.5 py-2.5 rounded-xl text-xs lg:text-sm flex items-center gap-2`}
                      >
                        <span className="text-red-500 flex items-center shrink-0">
                          <Tick01Icon height="1.3em" />
                        </span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100 shrink-0">
                <button
                  className={`${Styles.primaryBtn} flex-1 py-3.5 rounded-4xl font-bold text-sm lg:text-md transition`}
                >
                  Add To Cart
                </button>
                <button
                  className={`${Styles.secondaryBtn} flex-1 py-3.5 rounded-4xl font-bold text-sm lg:text-md transition`}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
