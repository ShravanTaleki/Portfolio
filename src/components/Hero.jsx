import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1e293b, #0a0f29)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      {/* Blurred Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFF044] to-transparent opacity-20 blur-2xl pointer-events-none" />

      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-xl mb-6 border-4 border-[#00FFF0] hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-[#00FFF0] mb-2 animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Shravan Taleki
      </motion.h1>

      {/* Title */}
      <motion.h2
        className="text-lg md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        AI Engineer Associate | DevOps Engineer
      </motion.h2>

      {/* Contact Info with Glass Effect */}
      <motion.div
        className="bg-white/5 backdrop-blur-md rounded-xl p-6 space-y-2 text-center text-gray-300 text-md md:text-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p><span className="text-[#00FFF0] font-semibold">Phone:</span> +91 xxxxxxxxxx</p>
        <p><span className="text-[#00FFF0] font-semibold">Location:</span> Bengaluru, India</p>
        <p>
          <span className="text-[#00FFF0] font-semibold">Email:</span>{" "}
          <a href="mailto:ffggsanwar@gmail.com" className="hover:underline hover:text-white">
            ffggsanwar@gmail.com
          </a>
        </p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#00FFF0] hover:text-white transition duration-300 transform hover:scale-125">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#00FFF0] hover:text-white transition duration-300 transform hover:scale-125">
          <FaLinkedin />
        </a>
        <a href="mailto:ffggsanwar@gmail.com" className="text-2xl text-[#00FFF0] hover:text-white transition duration-300 transform hover:scale-125">
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Custom CSS Animation */}
      <style jsx="true">{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
