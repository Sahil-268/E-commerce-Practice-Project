import InstagramIcon from "@iconify-react/line-md/instagram";
import TwitterXIcon from "@iconify-react/line-md/twitter-x";
import LinkedinIcon from "@iconify-react/line-md/linkedin";

import logoWhite from "../../assets/images/logo/logo-white.svg";

import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex items-center gap-2 mb-4 cursor-pointer">
            <img src={logoWhite} alt="logo" className="w-14 h-14" />
            <h2 className={`${Style.logo} text-3xl font-bold `}>Apex</h2>
          </div>

          <div>
            <h3 className={`${Style.heading} font-semibold text-lg mb-4`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={Style.linkItem}>
                  Products
                </a>
              </li>
              <li>
                <a href="#" className={Style.linkItem}>
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className={Style.linkItem}>
                  Trending
                </a>
              </li>
              <li>
                <a href="#" className={Style.linkItem}>
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`${Style.heading} font-semibold text-lg mb-4`}>
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={Style.linkItem}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className={Style.linkItem}>
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className={Style.linkItem}>
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className={Style.linkItem}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`${Style.heading} font-semibold text-lg mb-4`}>
              Stay Connected
            </h3>
            <div className="flex gap-4">
              <a href="#" className={Style.socialIcon}>
                <InstagramIcon height="1.9em" />
              </a>
              <a href="#" className={Style.socialIcon}>
                <TwitterXIcon height="1.6em" />
              </a>
              <a href="#" className={Style.socialIcon}>
                <LinkedinIcon height="1.7em" />
              </a>
            </div>
          </div>
        </div>

        <div className={`${Style.copyright} mt-12 pt-6 text-center`}>
          © 2026 Apex. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
