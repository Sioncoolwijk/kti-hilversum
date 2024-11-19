import { useState } from "react";
import { navigation } from "../constants";
import { logo } from "../assets";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling hamburger menu

  // Prevent scroll when menu is open
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="relative flex items-center justify-between px-6 py-3 shadow-md">
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
        className="md:hidden relative flex items-center justify-between px-6 py-3"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <button className="text-3xl">
          {menuOpen ? <IoClose /> : <RxHamburgerMenu />}{" "}
          {/* Display "X" when menu is open */}
        </button>
      </div>

      {/* Navigation items (Desktop and larger screens) */}
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

            {/* Dropdown Menu (if the item has subitems) */}
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

      {/* Mobile Menu (hamburger toggle) */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-white shadow-lg z-50`}
      >
        <div className="relative flex items-center justify-between px-6 py-3 shadow-sm">
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
          <div className="flex items-center justify-between px-10">
            <button onClick={() => setMenuOpen(false)} className="text-3xl">
              <IoClose />
            </button>
          </div>
        </div>

        {/* Flex container to center text vertically */}
        <div className="flex items-center justify-center mt-10">
          <div className="">
            {navigation.map((item) => (
              <div key={item.id} className="mb-8">
                <a
                  href={item.url}
                  className="block p-5 text-lg font-semibold transition-colors hover:text-red text-center text-red"
                  onClick={() => setMenuOpen(false)} // Close the menu when an item is clicked
                >
                  {item.title}
                </a>

                {/* Dropdown Menu for mobile (if the item has subitems) */}
                {item.subItems && (
                  <div>
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={subItem.url}
                        className="block p-2 text-lg hover:text-red text-center"
                        onClick={() => setMenuOpen(false)} // Close the menu when a subitem is clicked
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
    </div>
  );
};

export default Header;
