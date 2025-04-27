import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start items-center px-6 pt-20 pb-10 text-white bg-[#0a0f29] relative"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold text-[#00FFF0] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Internship Experience Section */}
      <motion.div
        className="w-full md:w-3/4 bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-[#00FFF0] mb-4">Internship Experience</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
          <li><strong>Edunet Foundation</strong> (Jun – Jul 2024) – Worked on AI & Cloud Computing projects.</li>
          <li><strong>Devtern</strong> (Jun – Jul 2024) – Built ML models with real-world data.</li>
          <li><strong>Cisco Networking Academy</strong> (May – Jul 2024) – Focused on Cybersecurity & Threat Detection.</li>
        </ul>
      </motion.div>

      {/* Technical Skills Section */}
      <motion.div
        className="w-full md:w-3/4 bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-[#00FFF0] mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 gap-6 text-gray-300 text-sm">
          <div>
            <p><span className="text-[#00FFF0] font-semibold">Languages:</span> Python, Java, C, C++</p>
            <p><span className="text-[#00FFF0] font-semibold">Web Dev:</span> MERN Stack, HTML, CSS, JavaScript</p>
            <p><span className="text-[#00FFF0] font-semibold">ML/AI:</span> SBERT, Pandas, NLTK, TensorFlow, OpenCV</p>
          </div>
          <div>
            <p><span className="text-[#00FFF0] font-semibold">Data Analytics:</span> EDA, Visualization, NumPy, Matplotlib</p>
            <p><span className="text-[#00FFF0] font-semibold">Databases:</span> SQL, MongoDB</p>
            <p><span className="text-[#00FFF0] font-semibold">Tools:</span> Git, GitHub, Streamlit, Gradio</p>
          </div>
        </div>
      </motion.div>

      {/* Certificates Completed Section */}
      <motion.div
        className="w-full md:w-3/4 bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-[#00FFF0] mb-4">Certificates Completed</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
          <li><strong>AI Practitioner</strong> – Issued by Coursera</li>
          <li><strong>C++ Programming Specialization</strong> – Issued by Coursera</li>
          <li><strong>Meta Front-End Developer Certification</strong> – Issued by Coursera</li>
        </ul>
      </motion.div>

      {/* Specialization and Tools Section */}
      <motion.div
        className="w-full md:w-3/4 bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-[#00FFF0] mb-4">Specialization and Tools</h3>
        <div className="grid grid-cols-2 gap-6 text-gray-300 text-sm">
          <div>
            <p><span className="text-[#00FFF0] font-semibold">Tools:</span> Anaconda / Jupyter Notebooks, Node.js, MongoDB Compass & Postman</p>
            <p><span className="text-[#00FFF0] font-semibold">Cloud:</span> Microsoft Azure & Docker</p>
            <p><span className="text-[#00FFF0] font-semibold">AI/ML:</span> TensorFlow & PyTorch</p>
          </div>
          <div>
            <p><span className="text-[#00FFF0] font-semibold">Data Visualization:</span> Power BI & Tableau</p>
            <p><span className="text-[#00FFF0] font-semibold">Code Editor:</span> VS Code</p>
            <p><span className="text-[#00FFF0] font-semibold">Version Control:</span> Git & GitHub</p>
          </div>
        </div>
      </motion.div>

      {/* Custom Animation for Background */}
      <style jsx="true">{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .about-background {
          background: linear-gradient(45deg, #1f1f1f, #1a1a1a, #2c2c2c);
          animation: gradientMove 10s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>

      <div className="absolute inset-0 bg-about-background z-0 opacity-50"></div>
    </section>
  );
}
