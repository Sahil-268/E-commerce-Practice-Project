import { useState, useRef, useEffect } from "react";
import {
  Headphones,
  Keyboard,
  Watch,
  Smartphone,
  Monitor,
  Gamepad2,
  Heart,
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/images/logo/logo.svg";
import { ElDropdown, ElMenu } from "@tailwindplus/elements/react";

import { Link, useNavigate } from "react-router-dom";
import products from "../../data/products.json";
import { useWishlist } from "../../context/WishlistContext/wishlistContext";

import Style from "./Header.module.css";

const Header = ({ search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const suggestions =
    search.trim() === ""
      ? []
      : products
          .filter((product) => {
            const keyword = search.toLowerCase();

            return (
              product.name.toLowerCase().includes(keyword) ||
              product.category.toLowerCase().includes(keyword)
            );
          })
          .slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearch]);

  const { wishlist, setIsDrawerOpen } = useWishlist();

  const categories = [
    { name: "Audio", icon: Headphones },
    { name: "Gaming", icon: Keyboard },
    { name: "Wearables", icon: Watch },
    { name: "Mobile", icon: Smartphone },
    { name: "Setups", icon: Monitor },
    { name: "Consoles", icon: Gamepad2 },
  ];

  return (
    <header className={`${Style.header} sticky top-0 z-50 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h1 className={`font-bold ${Style.logo}`}>Apex</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {/* ====== CATEGORIES DROPDOWN ====== */}
            <ElDropdown className="inline-block relative">
              <button className="flex items-center gap-1 focus:outline-none py-2 font-medium transition-colors duration-200">
                Categories
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              <ElMenu
                anchor="bottom start"
                popover="true"
                className="w-48 origin-top-left rounded-md bg-white shadow-lg border border-gray-100 py-1 transition transition-discrete [--anchor-gap:theme(spacing.2)] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in z-50"
              >
                {categories.map((category, index) => {
                  const IconComponent = category.icon;

                  return (
                    <a
                      key={index}
                      href={`#category-${category.name.toLowerCase()}`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 focus:outline-none transition-colors duration-200 group"
                    >
                      <IconComponent
                        size={16}
                        className="text-gray-400 group-hover:text-inherit"
                      />
                      <span>{category.name}</span>
                    </a>
                  );
                })}
              </ElMenu>
            </ElDropdown>
            {/* ================================== */}

            <button className="font-medium transition-colors duration-200">
              New & Featured
            </button>
            <button className="font-medium transition-colors duration-200">
              Best Sellers
            </button>
            <button className="font-medium transition-colors duration-200">
              Connect
            </button>
          </nav>

          <div
            ref={searchRef}
            className="hidden md:flex relative w-80 flex-col"
          >
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && search.trim()) {
                  navigate(`/search?q=${encodeURIComponent(search)}`);
                  setSearch("");
                }
              }}
              placeholder="Search products..."
              className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none"
            />

            {search.trim() !== "" && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border z-50 overflow-hidden">
                {suggestions.length > 0 ? (
                  <>
                    {suggestions.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => setSearch("")}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 transition"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />

                        <div className="flex-1">
                          <h3 className="font-medium text-sm">
                            {product.name}
                          </h3>

                          <p className="text-xs text-gray-500">
                            {product.category}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <button
                      onClick={() => {
                        navigate(`/search?q=${encodeURIComponent(search)}`);
                        setSearch("");
                      }}
                      className="w-full text-left p-3 border-t hover:bg-gray-100 font-semibold"
                    >
                      View all results →
                    </button>
                  </>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No matching products
                  </div>
                )}
              </div>
            )}
          </div>

          <div
            onClick={() => setIsDrawerOpen(true)}
            className="hidden lg:flex items-center gap-2 cursor-pointer relative"
          >
            <Heart size={24} />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="md:hidden pb-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && search.trim()) {
                navigate(`/search?q=${encodeURIComponent(search)}`);
                setSearch("");
              }
            }}
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
          <button className="text-left px-1 font-medium transition-colors duration-200">
            Categories
          </button>
          <button className="text-left px-1 font-medium transition-colors duration-200">
            New & Featured
          </button>
          <button className="text-left px-1 font-medium transition-colors duration-200">
            Best Sellers
          </button>
          <button className="text-left px-1 font-medium transition-colors duration-200">
            Connect
          </button>
          <button className="text-left px-1 font-medium transition-colors duration-200">
            Wishlist
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
