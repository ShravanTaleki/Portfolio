import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // using lucide-react icons (or you can replace with any)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to scroll to top when a link is clicked
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close the mobile menu after selection
  };

  return (
    <motion.nav
      className="flex justify-between items-center p-6 px-10 shadow-md bg-black fixed top-0 left-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold text-white">MyPortfolio</div>

      {/* Desktop Links */}
      <div className="space-x-8 hidden md:flex">
        <Link to="/" className="text-[#5a8dee] hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-[#5a8dee] hover:text-white transition-colors">
          About
        </Link>
        <Link to="/projects" className="text-[#5a8dee] hover:text-white transition-colors">
          Projects
        </Link>
        <Link to="/contact" className="text-[#5a8dee] hover:text-white transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links (Dropdown) */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden">
          <Link to="/" className="text-[#5a8dee] hover:text-white transition-colors" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="text-[#5a8dee] hover:text-white transition-colors" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/projects" className="text-[#5a8dee] hover:text-white transition-colors" onClick={handleLinkClick}>
            Projects
          </Link>
          <Link to="/contact" className="text-[#5a8dee] hover:text-white transition-colors" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
