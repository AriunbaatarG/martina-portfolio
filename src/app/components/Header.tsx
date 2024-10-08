import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // State to manage dropdown visibility for Portfolio and menu for mobile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref to the dropdown element, specifying the type as HTMLDivElement or null
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts or when the dropdown closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="z-10 w-full fixed left-0 top-0 flex items-center justify-between font-mono font-semibold text-l p-10 bg-gradient-to-b from-zinc-200 dark:from-zinc-800 backdrop-blur-2xl border-b border-gray-300 dark:border-neutral-800">
      {/* Invisible div to reserve space for flexbox alignment */}
      <div className="invisible w-full"></div>

      {/* Centered Portfolio Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" passHref legacyBehavior>
          <p className="text-center text-xl">
            Martinaiden Demaj Portfolio&nbsp;
          </p>
        </Link>
      </div>

      {/* Right Side Links (Hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" passHref legacyBehavior>
          <a className="hover:text-gray-500 transition-colors">Home</a>
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="hover:text-gray-500 transition-colors"
          >
            Portfolio
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg dark:bg-zinc-800 rounded-lg">
              <Link href="/event_photography" passHref legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  Event Photography
                </a>
              </Link>
              <Link href="/editorial" passHref legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  Editorial Photography
                </a>
              </Link>
              <Link href="/landscape" passHref legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  Landscape Photography
                </a>
              </Link>
            </div>
          )}
        </div>
        <Link href="/contact" passHref legacyBehavior>
          <a className="hover:text-gray-500 transition-colors">Contact</a>
        </Link>
      </div>

      {/* Button Image for Mobile Screens - Visible on small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-8 w-8 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu - Visible when menu button is clicked */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-zinc-800 flex flex-col items-start space-y-4 p-4">
          <Link href="/" passHref legacyBehavior>
            <a className="block hover:text-gray-500 transition-colors">Home</a>
          </Link>
          <button
            onClick={toggleDropdown}
            className="block hover:text-gray-500 transition-colors"
          >
            Portfolio
          </button>
          {isDropdownOpen && (
            <div className="ml-4">
              <Link href="/event_photography" passHref legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  Event Photography
                </a>
              </Link>
              <Link href="/editorial" passHref legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  Editorial Photography
                </a>
              </Link>
              <Link href="/landscape" passHref legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  Landscape Photography
                </a>
              </Link>
            </div>
          )}
          <Link href="/contact" passHref legacyBehavior>
            <a className="block hover:text-gray-500 transition-colors">
              Contact
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
