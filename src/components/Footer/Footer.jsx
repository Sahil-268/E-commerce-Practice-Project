import InstagramIcon from "@iconify-react/line-md/instagram";
import TwitterXIcon from "@iconify-react/line-md/twitter-x";
import LinkedinIcon from "@iconify-react/line-md/linkedin";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold mb-4 logo">Apex</h2>

            <p className="text-gray-400 leading-relaxed">
              Premium gadgets, gaming gear, and smart accessories built for the
              next generation of technology enthusiasts.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Trending
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* customer Support */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition"
              >
                <InstagramIcon height="1.8em" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition"
              >
                <TwitterXIcon height="1.8em" />{" "}
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition"
              >
                <LinkedinIcon height="1.8em" />{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Apex. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
