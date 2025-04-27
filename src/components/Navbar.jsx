import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-6 px-10 shadow-md bg-black fixed top-0 left-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold text-white">MyPortfolio</div>
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
    </motion.nav>
  );
}
