import HeroImg from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}

        <div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Built For The
            <span className="text-red-600"> Future </span>
            Of Technology
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Discover premium gaming gear, smart devices, and modern accessories
            crafted to elevate your digital lifestyle.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red-600 text-white px-7 py-3 rounded-full hover:bg-red-700 transition">
              Shop Collection
            </button>

            <button className="border border-gray-300 px-7 py-3 rounded-full hover:bg-gray-100 transition">
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Content */}

        <div className="relative hero-img">
          <img
            src={HeroImg}
            alt="gaming setup"
            // className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
