import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", name: "HOME" },
    { path: "/services", name: "SERVICES" },
    { path: "/work", name: "WORK & RESULTS" },
    { path: "/about", name: "ABOUT" },
    { path: "/contact", name: "CONTACT" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.img
            src={logo}
            alt="Company Logo"
            whileHover={{ rotate: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {isMobile ? (
          <>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <FaTimes className="icon close-icon" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <FaBars className="icon" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  className="mobile-nav"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  aria-hidden={!isMenuOpen}
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                    >
                      <Link
                        to={link.path}
                        className={`nav-link ${
                          isActive(link.path) ? "active" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                        {isActive(link.path) && (
                          <motion.span
                            className="active-indicator"
                            layoutId="mobileActive"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </>
        ) : (
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${
                      isActive(link.path) ? "active" : ""
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        className="active-indicator"
                        layoutId="desktopActive"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
