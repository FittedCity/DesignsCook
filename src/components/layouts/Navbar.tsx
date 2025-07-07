import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-5 sm:top-10 z-50 px-4 md:px-20 w-full">
      <div className="bg-[#FFFFFF1A] backdrop-blur-md flex items-center justify-between px-[5%] py-[5%] sm:py-[2%] rounded-full">
        {/* Logo */}
        <img
          src="/assets/logo/designscook-logo.png"
          // width={160}
          alt="DesignsCook logo"
          className="object-contain w-[130px] sm:w-[160px]"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center text-white gap-6 md:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`text-[18px] font-medium tracking-tight cursor-pointer ${
                pathname === link.path ? "underline underline-offset-4" : ""
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-[#1a1a1aee] backdrop-blur-md rounded-xl px-6 py-4"
          >
            <ul className="flex flex-col gap-4 text-white">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`text-[18px] font-medium tracking-tight ${
                    pathname === link.path ? "underline underline-offset-4" : ""
                  }`}
                >
                  <Link to={link.path} onClick={() => setIsMobileOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
