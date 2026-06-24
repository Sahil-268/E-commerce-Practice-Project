import { useState } from "react";
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

import Style from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Turned the array into an array of objects with Lucide icon references
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
          {/* Logo Section */}
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h1 className={`font-bold ${Style.logo}`}>Apex</h1>
          </div>

          {/* Desktop Navigation */}
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

          {/* Search Bar Desktop */}
          <div className="hidden md:flex relative w-80">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none"
            />
          </div>

          {/* Wishlist Desktop */}
          <div className="hidden lg:flex items-center gap-2 cursor-pointer">
            <Heart size={22} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-full px-4 py-2"
          />
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
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
