import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="z-10 w-full fixed left-0 top-0 flex items-center justify-between font-mono font-semibold text-l p-10 bg-gradient-to-b from-zinc-200 dark:from-zinc-800 backdrop-blur-2xl border-b border-gray-300 dark:border-neutral-800 font-roc-grotesk">
      {/* Invisible div to reserve space for flexbox alignment */}
      <div className="invisible w-full"></div>

      {/* Centered Portfolio Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" passHref legacyBehavior>
          <a>
            <Image
              src="/IDENLESSLY2.png" // Ensure the path is correct
              alt="IDENLESSLY Logo"
              width={250} // Adjust the width as needed
              height={70} // Adjust the height as needed
              className="justify-center"
            />
          </a>
        </Link>
      </div>

      {/* Menu Button for All Screens */}
      <div className="relative" ref={menuRef}>
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-8 w-8 text-gray-700" />
        </button>

        {/* Dropdown Menu - Visible when menu button is clicked */}
        {isMenuOpen && (
          <div className="absolute top-12 right-0 bg-white dark:bg-zinc-800 flex flex-col items-start space-y-4 p-4 shadow-lg rounded-md min-w-max">
            <Link
              href="/event_photography"
              passHref
              className="block hover:text-gray-500 transition-colors dark:to-blue-800 "
            >
              CONCERTS
            </Link>
            <Link
              href="/editorial"
              passHref
              className="block hover:text-gray-500 transition-colors dark:to-blue-800 "
            >
              EDITORIALS
            </Link>
            <Link
              href="/landscape"
              passHref
              className="block hover:text-gray-500 transition-colors dark:to-blue-800"
            >
              LANDSCAPE
            </Link>
            <Link
              href="/about"
              passHref
              className="block hover:text-gray-500 transition-colors dark:to-blue-800 "
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              passHref
              className="block hover:text-gray-500 transition-colors dark:to-blue-800 "
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
