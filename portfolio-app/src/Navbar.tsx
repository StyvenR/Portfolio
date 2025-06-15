import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 text-black dark:text-white navbar-glass transition-all duration-300"
    >
      <motion.div
        className="navbar-brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold navbar-text-dark transition-colors duration-300">
          Portfolio
        </h1>
      </motion.div>

      <div className="flex items-center space-x-6">
        <motion.div
          className="space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="navbar-text-dark hover:opacity-80 transition-all duration-300"
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            className="navbar-text-dark hover:opacity-80 transition-all duration-300"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="navbar-text-dark hover:opacity-80 transition-all duration-300"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Utilisation du composant DarkModeToggle */}
        <DarkModeToggle />
      </div>
    </motion.nav>
  );
}

export default Navbar;
