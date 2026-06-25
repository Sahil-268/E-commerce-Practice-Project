import Style from "./SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <div
      className={`${Style.skeletonCard} animate-pulse rounded-3xl overflow-hidden shadow-sm`}
    >
      {/* Mirror Image Container */}
      <div className="relative overflow-hidden">
        <div className={`${Style.shimmer} h-64 w-full`} />
        
        {/* Mirror Wishlist Button Placehold */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-gray-300 rounded-full" />
      </div>

      <div className="p-5">
        {/* Mirror Category Label */}
        <div className={`${Style.shimmer} h-3 w-16 rounded mb-2`} />

        {/* Mirror Product Title */}
        <div className={`${Style.shimmer} h-5 w-4/5 rounded mb-4 mt-1`} />

        <div className="flex justify-between items-center mt-3">
          {/* Mirror Product Price */}
          <div className={`${Style.shimmer} h-6 w-20 rounded`} />

          {/* Mirror Rating Row */}
          <div className="flex items-center gap-2">
            <div className={`${Style.shimmer} h-5 w-5 rounded-full`} />
            <div className={`${Style.shimmer} h-4 w-8 rounded`} />
          </div>
        </div>

        {/* Mirror Action Button */}
        <div className={`${Style.skeletonButton} h-11 mt-4 w-full rounded-xl`} />
      </div>
    </div>
  );
};

export default SkeletonCard;