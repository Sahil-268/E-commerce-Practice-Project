import { X } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext/wishlistContext";

const WishlistPopup = () => {
  const { wishlist, removeFromWishlist, isDrawerOpen, setIsDrawerOpen } =
    useWishlist();

  return (
    <>
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`
fixed
top-0
right-0
h-screen
w-96
bg-white
z-50
shadow-xl
transition-transform
duration-300
${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-xl">Wishlist</h2>

          <button onClick={() => setIsDrawerOpen(false)}>
            <X />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-70px)]">
          {wishlist.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-lg font-semibold">Wishlist Empty</h2>

              <p className="text-gray-500">Add some products ❤️</p>
            </div>
          )}

          {wishlist.map((item) => (
            <div key={item.id} className="flex gap-3 p-4 border-b">
              <img
                src={item.image}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>

                <p>{item.price}</p>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishlistPopup;
