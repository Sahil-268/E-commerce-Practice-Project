import HeroImg from "../../assets/images/hero.jpg";
import HeroImg1 from "../../assets/images/hero1.jpg";
import HeroImg2 from "../../assets/images/hero2.jpg";
import HeroImg3 from "../../assets/images/hero3.jpg";
import HeroImg4 from "../../assets/images/hero4.jpg";
import HeroImg5 from "../../assets/images/hero5.jpg";
import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section
      className={`${Styles.section} flex items-center justify-center relative overflow-hidden`}
    >
      {/* Main Grid Wrapper matching the screenshot layout */}
      <div className="max-w-[1600px] mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-center content-center min-h-[85vh]">
        {/* LEFT COLUMN: Stacked Images (Hidden on mobile, visible on large screens) */}
        <div className="hidden lg:flex flex-col gap-6 h-full justify-between py-4">
          <div className={`${Styles.imageCard} ${Styles.heroLeft} h-[280px]`}>
            <img
              src={HeroImg3}
              alt="gaming setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`${Styles.imageCard} ${Styles.heroLeft} h-[340px]`}>
            <img
              src={HeroImg2}
              alt="gaming setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CENTER COLUMNS: Content + Bottom Images */}
        <div className="lg:col-span-2 flex flex-col justify-between h-full py-4">
          {/* Centered Hero Text */}
          <div className="text-center max-w-xl mx-auto mb-12 lg:mb-6 mt-8">
            <h1
              className={`${Styles.title} text-4xl md:text-5xl lg:text-6xl font-black leading-tight`}
            >
              Built For The <span className={Styles.highlight}>Future</span> Of
              Technology
            </h1>

            <p
              className={`${Styles.description} mt-4 text-base md:text-lg mx-auto`}
            >
              Discover premium gaming gear, smart devices, and modern
              accessories crafted to elevate your digital lifestyle.
            </p>

            {/* Restored both original buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                className={`${Styles.btn} ${Styles.btnPrimary} px-7 py-3 rounded-full`}
              >
                Shop Collection
              </button>

              <button
                className={`${Styles.btn} ${Styles.btnSecondary} px-7 py-3 rounded-full`}
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Center Bottom Row: 2 smaller images side by side */}
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto w-full mt-auto">
            <div
              className={`${Styles.imageCard}  ${Styles.heroBottom} h-[160px] md:h-[220px]`}
            >
              <img
                src={HeroImg1}
                alt="gaming setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`${Styles.imageCard} ${Styles.heroBottom} h-[160px] md:h-[220px]`}
            >
              <img
                src={HeroImg4}
                alt="gaming setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stacked Images */}
        <div className="hidden lg:flex flex-col gap-6 h-full justify-between py-4">
          <div className={`${Styles.imageCard}  ${Styles.heroRight} h-[340px]`}>
            <img
              src={HeroImg}
              alt="gaming setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`${Styles.imageCard}  ${Styles.heroRight} h-[280px]`}>
            <img
              src={HeroImg5}
              alt="gaming setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
