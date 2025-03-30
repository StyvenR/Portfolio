import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 text-black backdrop-blur-sm opacity-30 shadow-md"
    >
      <motion.div
        className="navbar-brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-50 text-transparent bg-clip-text">
          Portfolio
        </h1>
      </motion.div>
      <motion.div
        className="space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="bg-gradient-to-r from-gray-400 to-black text-transparent bg-clip-text hover:text-gray-300 transition-colors"
        >
          About
        </motion.a>
        <motion.a
          href="#projects"
          className="bg-gradient-to-r from-gray-400 to-black text-transparent bg-clip-text hover:text-gray-300 transition-colors"
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="bg-gradient-to-r from-gray-400 to-black text-transparent bg-clip-text hover:text-gray-300 transition-colors"
        >
          Contact
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
