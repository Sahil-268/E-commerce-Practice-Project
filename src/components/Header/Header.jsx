import { useState } from "react";
import { Heart, Menu, X, Search } from "lucide-react";
import logo from "../../assets/images/logo/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-12 h-12 " />
            <h1 className="font-bold text-xl logo">Apex</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <button className="hover:text-red-600">Categories</button>

            <button className="hover:text-red-600">New & Featured</button>

            <button className="hover:text-red-600">Best Sellers</button>

            <button className="hover:text-red-600">Brands</button>
          </nav>

          <div className="hidden md:flex relative w-80">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 cursor-pointer">
            <Heart size={22} />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="md:hidden pb-3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-full px-4 py-2"
          />
        </div>
      </div>

      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 border-t" : "max-h-0"}
        `}
      >
        <div className="bg-white px-6 py-4 flex flex-col gap-5">
          <button className="text-left px-1">Categories</button>

          <button className="text-left px-1">New & Featured</button>

          <button className="text-left px-1">Best Sellers</button>

          <button className="text-left px-1">Brands</button>

          <button className="text-left px-1">Wishlist</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
