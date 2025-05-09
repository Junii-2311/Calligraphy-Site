import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../store/cartStore';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-50/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/src/assests/images/logo_bg_rmv.png" alt="Rafat Hussain Logo" className="h-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/shop" className="nav-link">
            Shop
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-primary-800 hover:text-accent-700 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart className="text-primary-800" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="text-primary-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-50 shadow-md"
          >
            <div className="container py-4 flex flex-col space-y-4">
              <NavLink
                to="/"
                className="nav-link block py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/gallery"
                className="nav-link block py-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link block py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/shop"
                className="nav-link block py-2"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link block py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;