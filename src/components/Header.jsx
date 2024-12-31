import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../constants";
import { logo } from "../assets";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md" 
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a 
          href="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="KTI Hilversum Logo"
            className="object-contain w-[100px]"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 mr-12">
          {navigation.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button className="p-2 text-gray-700 font-medium hover:text-red-600 transition-colors">
                {item.title}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.subItems && hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-56 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    {item.subItems.map((subItem) => (
                      <motion.a
                        key={subItem.id}
                        href={subItem.url}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {subItem.title}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 hover:text-red-600 transition-colors"
        >
          {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto py-4 px-6 space-y-6">
              {navigation.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="font-medium text-gray-900">{item.title}</div>
                  {item.subItems && (
                    <div className="ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <motion.a
                          key={subItem.id}
                          href={subItem.url}
                          className="block py-2 text-gray-600 hover:text-red-600 transition-colors"
                          onClick={() => setMenuOpen(false)}
                          whileHover={{ x: 4 }}
                        >
                          {subItem.title}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
