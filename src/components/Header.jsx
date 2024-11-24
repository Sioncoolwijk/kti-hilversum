import { useState } from "react";
import { navigation } from "../constants";
import { logo } from "../assets";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="py-14">
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="KTI Hilversum Logo"
            className="object-contain"
            width={100}
          />
          <h2 className="text-2xl whitespace-nowrap"></h2>
        </a>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <button className="text-3xl">
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Navigation items */}
        <div className="hidden md:flex space-x-16 mr-[6rem]">
          {navigation.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.url}
                className="p-3 text-md font-semibold transition-colors hover:text-red"
              >
                {item.title}
              </a>

              {item.subItems && hoveredItem === item.id && (
                <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md">
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.id}
                      href={subItem.url}
                      className="block p-4 text-md hover:text-red"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
