import React, { useEffect, useState } from 'react';
import { logo } from '../assets';
import { Link } from 'react-scroll';
import { navItems } from '../constant';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white md:bg-transparent">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300'
            : ''
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a>
            <img src={logo} alt="logo" className="w-24" />
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-grey900 hover:text-brandPrimary first:font-medium"
              >
                {name}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-grey900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Register
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`bg-brandPrimary space-y-4 px-4 py-6 mt-16 ${
            isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
          }`}
        >
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white hover:text-grey900 first:font-medium"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
