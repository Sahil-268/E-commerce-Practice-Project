import Style from "./SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <div
      className={`${Style.skeletonCard} animate-pulse rounded-3xl overflow-hidden shadow-sm`}
    >
      <div className="relative overflow-hidden">
        <div className={`${Style.blank} h-64 w-full`} />

        <div className="absolute top-4 right-4 w-9 h-9 bg-gray-300 rounded-full" />
      </div>

      <div className="p-5">
        <div className={`${Style.blank} h-3 w-16 rounded mb-2`} />

        <div className={`${Style.blank} h-5 w-4/5 rounded mb-4 mt-1`} />

        <div className="flex justify-between items-center mt-3">
          <div className={`${Style.blank} h-6 w-20 rounded`} />

          <div className="flex items-center gap-2">
            <div className={`${Style.blank} h-5 w-5 rounded-full`} />
            <div className={`${Style.blank} h-4 w-8 rounded`} />
          </div>
        </div>

        <div
          className={`${Style.skeletonButton} h-11 mt-4 w-full rounded-xl`}
        />
      </div>
    </div>
  );
};

export default SkeletonCard;
