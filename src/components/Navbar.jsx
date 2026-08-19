import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Facilities", path: "/facilities" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-20 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="Shin Booking"
            className={`h-10 md:h-12 transition-all duration-300 ${
            (isScrolled || !isHomePage) && !darkMode ? "brightness-0" : ""
          }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                  ? isScrolled || !isHomePage
                    ? "font-semibold text-gray-900 dark:text-white"
                    : "font-semibold text-white"
                  : isScrolled || !isHomePage
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user && (
            <button
              onClick={() => navigate("/owner")}
              className={`rounded-full border px-5 py-2 transition ${
                isScrolled || !isHomePage
                  ? "border-gray-700 text-gray-700 dark:border-gray-500 dark:text-white"
                  : "border-white text-white"
              }`}
            >
              Dashboard
            </button>
          )}
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 md:flex">
          <button>
            <img
              src={assets.searchIcon}
              alt="Search"
              className={`h-6 ${
              isScrolled || !isHomePage ? "invert dark:invert-0" : ""
            }`}
            />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border
              border-gray-300
              bg-white/80
              text-xl
              backdrop-blur
              transition
              hover:scale-110
              dark:border-slate-700
              dark:bg-slate-800/80
            "
          >
            <div className="relative h-5 w-5">
              <Sun
                size={20}
                className={`absolute transition-all duration-300 ${
                  darkMode
                    ? "rotate-0 scale-100"
                    : "rotate-90 scale-0"
                }`}
              />

              <Moon
                size={20}
                className={`absolute transition-all duration-300 ${
                  darkMode
                    ? "-rotate-90 scale-0"
                    : "rotate-0 scale-100"
                }`}
              />
            </div>
          </button>

          {user ? (
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIcon />}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={() => openSignIn()}
              className={`rounded-full px-7 py-2 transition ${
                isScrolled
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white text-black"
              }`}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 md:hidden">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border
              border-gray-300
              bg-white/80
              text-xl
              backdrop-blur
              transition
              hover:scale-110
              dark:border-slate-700
              dark:bg-slate-800/80
            "
          >
            <div className="relative h-5 w-5">
            <Sun
              size={20}
              className={`absolute transition-all duration-300 ${
                darkMode
                  ? "rotate-0 scale-100"
                  : "rotate-90 scale-0"
              }`}
            />

            <Moon
              size={20}
              className={`absolute transition-all duration-300 ${
                darkMode
                  ? "-rotate-90 scale-0"
                  : "rotate-0 scale-100"
              }`}
            />
          </div>
          </button>

          {user && (
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIcon />}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}

          <button onClick={() => setIsMenuOpen(true)}>
            <img
              src={assets.menuIcon}
              alt="Menu"
              className={`h-5 ${
              isScrolled ? "invert dark:invert-0" : ""
            }`}
            />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white dark:bg-slate-900 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={assets.closeIcon}
            alt="Close"
            className="h-6 dark:invert"
          />
        </button>

        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-gray-900 dark:text-white"
            >
              {link.name}
            </NavLink>
          ))}

          {user && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/owner");
              }}
              className="rounded-full border px-6 py-2"
            >
              Dashboard
            </button>
          )}

          {!user && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openSignIn();
              }}
              className="rounded-full bg-black px-8 py-3 text-white"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
