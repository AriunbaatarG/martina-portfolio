import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-10 w-full fixed left-0 top-0 flex items-center justify-between font-mono font-semibold text-l p-10 bg-gradient-to-b from-zinc-200 dark:from-zinc-800 backdrop-blur-2xl border-b border-gray-300 dark:border-neutral-800">
      {/* Invisible div to reserve space for flexbox alignment */}
      <div className="invisible w-full"></div>

      {/* Centered Portfolio Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" passHref legacyBehavior>
          <img className="justify-center h-[70px]" src="IDENLESSLY2.png" />
        </Link>
      </div>

      {/* Menu Button for All Screens */}
      <div className="relative">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-8 w-8 text-gray-700" />
        </button>

        {/* Dropdown Menu - Visible when menu button is clicked */}
        {isMenuOpen && (
          <div className="absolute top-12 right-0 bg-white dark:bg-zinc-800 flex flex-col items-start space-y-4 p-4 shadow-lg rounded-md min-w-max">
            <Link href="/event_photography" passHref legacyBehavior>
              <a className="block hover:text-gray-500 transition-colors">
                Concerts
              </a>
            </Link>
            <Link href="/editorial" passHref legacyBehavior>
              <a className="block hover:text-gray-500 transition-colors">
                Editorials
              </a>
            </Link>
            <Link href="/landscape" passHref legacyBehavior>
              <a className="block hover:text-gray-500 transition-colors">
                Landscape
              </a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className="block hover:text-gray-500 transition-colors">
                About
              </a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="block hover:text-gray-500 transition-colors">
                Contact
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
