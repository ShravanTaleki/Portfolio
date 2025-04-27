import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
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
        My Projects
      </motion.h2>

      {/* Project List */}
      <motion.div
        className="space-y-6 max-w-4xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-[#00FFF0] mb-2">Project 1: AI Model for Image Classification</h3>
          <p className="text-gray-300">Built a machine learning model to classify images based on various categories. The model is trained on a large dataset and optimized for high accuracy.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-[#00FFF0] mb-2">Project 2: Full-Stack Web App</h3>
          <p className="text-gray-300">Developed a full-stack web application with React and Node.js. The app features real-time data fetching, user authentication, and dynamic routing.</p>
        </div>
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
