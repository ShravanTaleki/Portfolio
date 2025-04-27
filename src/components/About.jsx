import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1e293b, #0a0f29)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      {/* Blurred Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFF044] to-transparent opacity-20 blur-2xl pointer-events-none" />

      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#00FFF0] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        About Me
      </motion.h2>

      {/* About Text */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 text-center max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        I am a passionate AI Engineer Associate and DevOps Engineer with a love for technology and problem-solving. I work with AI models, machine learning algorithms, and cloud infrastructure. My goal is to leverage these technologies to create scalable and innovative solutions. I believe in continuous learning and evolving with the tech world.
      </motion.p>

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
