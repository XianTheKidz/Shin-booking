import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      color: "#1877F2",
      name: "Facebook",
    },
    {
      icon: <FaYoutube />,
      color: "#FF0000",
      name: "YouTube",
    },
    {
      icon: <FaTiktok />,
      color: "#000000",
      name: "TikTok",
    },
    {
      icon: <FaXTwitter />,
      color: "#111111",
      name: "X",
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#020618] transition-colors duration-300">

      {/* Top Border */}
      <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 via-sky-400 to-cyan-500" />

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <img
              src={assets.logo}
              alt="Shin Booking"
              className="h-10 brightness-0 dark:brightness-100"
            />

            <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Escape to exceptional stays with Shin Booking. Discover
              handpicked beachfront resorts, luxury suites, and unforgettable
              travel experiences crafted for every journey.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8 flex-wrap">

              {socials.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  title={item.name}
                  style={{ "--color": item.color }}
                  className="
                  group
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  dark:bg-slate-800
                  text-gray-700
                  dark:text-white
                  shadow
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  "
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = item.color;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {item.icon}
                </a>
              ))}

            </div>

          </div>

          {/* Explore */}

          <div>

            <h3 className="font-playfair text-xl text-slate-900 dark:text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Rooms
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Experience
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Guest Services */}

          <div>

            <h3 className="font-playfair text-xl text-slate-900 dark:text-white">
              Guest Services
            </h3>

            <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Booking Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Cancellation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-500 transition">
                  Help Center
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-playfair text-xl text-slate-900 dark:text-white">
              Stay Connected
            </h3>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-7">
              Questions or feedback? We'd love to hear from you.
            </p>

            <div className="mt-8 space-y-4">

              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-500">
                  Email
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  support@shinbooking.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-500">
                  Phone
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  +95 9 769 076 982
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-500">
                  Location
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  Myanmar
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Shin Booking. Crafted with ❤ for
            travelers around the world.
            <br />
            <span>
            Vergina Beach Resort • Agia Marina, Chania, Crete
            </span>
          </p>
          <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-400">

            <a href="#" className="hover:text-cyan-500 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-cyan-500 transition">
              Terms
            </a>

            <a href="#" className="hover:text-cyan-500 transition">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;