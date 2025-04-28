import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1e293b, #0a0f29)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFF044] to-transparent opacity-20 blur-2xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none z-0">
        <div className="w-32 h-32 rounded-full bg-[#00FFF0] opacity-40 animate-bounce"></div>
        <div className="w-48 h-48 rounded-full bg-[#00FFF0] opacity-30 animate-ping"></div>
      </div>

      {/* Container with Two Columns Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-screen-lg mx-auto text-white">
        {/* Left Side (Profile Image & Social Links) */}
        <motion.div
          className="flex flex-col items-center gap-6 w-full lg:w-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Profile Image */}
          <motion.img
            src="/avatar.jpeg"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-xl mb-6 border-4 border-[#00FFF0] hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Social Icons */}
          <motion.div
            className="flex gap-6 mt-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="https://github.com/ShravanTaleki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#00FFF0] hover:text-white transition duration-300 transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="http://www.linkedin.com/in/shravan-taleki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#00FFF0] hover:text-white transition duration-300 transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shravantaleki@gmail.com.com"
              className="text-2xl text-[#00FFF0] hover:text-white transition duration-300 transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side (Description, Contact Info & Skills) */}
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-[#00FFF0] mb-2 animate-pulse"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Shravan Taleki
          </motion.h1>

          {/* Updated Title */}
          <motion.h2
            className="text-lg md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            AI/ML Engineer | Full-Stack Developer | Cloud Computing Specialist
          </motion.h2>

          {/* Contact Information */}
          <div className="flex flex-wrap gap-6 mb-6 text-gray-300">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-[#00FFF0] font-bold">Phone:</span>
              <span>+91 xxxxxxxxxx</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-[#00FFF0] font-bold">Location:</span>
              <span>Bengaluru, India</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="text-[#00FFF0] font-bold">Email:</span>
              <span>Shravantaleki@gmail.com</span>
            </motion.div>
          </div>

          {/* About Description */}
          <motion.p
            className="text-md text-gray-300 mb-6 text-left max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Full-stack web developer with expertise in MERN stack, API development, and
            scalable web applications. Experienced in integrating AI, NLP, and computer vision
            into modern web solutions. Passionate about building high-performance applications
            with seamless user experiences. Pursuing a Bachelor of Technology in Computer Science (6th semester - 2025).
          </motion.p>

          {/* Skills Tags - 2 Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-full mb-8 text-center">
            <motion.div
              className="bg-[#00FFF0] text-[#1e293b] p-3 rounded-xl text-xs md:text-lg shadow-lg hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              AI/ML
            </motion.div>
            <motion.div
              className="bg-[#00FFF0] text-[#1e293b] p-3 rounded-xl text-xs md:text-lg shadow-lg hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Full-Stack Web Development
            </motion.div>
            <motion.div
              className="bg-[#00FFF0] text-[#1e293b] p-3 rounded-xl text-xs md:text-lg shadow-lg hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              Cloud Computing
            </motion.div>
            <motion.div
              className="bg-[#00FFF0] text-[#1e293b] p-3 rounded-xl text-xs md:text-lg shadow-lg hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              Business Analytics
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS Animation */}
      <style jsx="true">{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Typewriter effect for the title */
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.1em solid #00FFF0;
          width: 0;
          animation: typewriter 3s steps(40) 1s forwards;
        }

        /* Bounce effect for social media icons */
        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
