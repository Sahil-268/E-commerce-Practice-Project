const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg">{product.name}</h3>

        <p className="text-red-600 font-bold mt-2">{product.price}</p>

        <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-red-600 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
