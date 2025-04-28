import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start items-center px-6 pt-20 pb-10 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1e293b, #0a0f29)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 20s ease infinite",
      }}
    >
      {/* Floating elements and background animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFF044] to-transparent opacity-20 blur-2xl pointer-events-none" />

      {/* Title with Typing Effect */}
      <motion.h2
        className="text-5xl font-extrabold text-[#00FFF0] mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ paddingTop: "3rem" }}  // Pushes the title down a bit
      >
        <span className="typewriter">About Me</span>
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
        <div className="text-gray-300 text-sm space-y-2">
          <p><span className="text-[#00FFF0] font-semibold">Languages:</span> Python, Java, C, C++</p>
          <p><span className="text-[#00FFF0] font-semibold">Web Dev:</span> MERN Stack, HTML, CSS, JavaScript</p>
          <p><span className="text-[#00FFF0] font-semibold">ML/AI:</span> SBERT, Pandas, NLTK, TensorFlow, OpenCV</p>
          <p><span className="text-[#00FFF0] font-semibold">Data Analytics:</span> EDA, Visualization, NumPy, Matplotlib</p>
          <p><span className="text-[#00FFF0] font-semibold">Databases:</span> SQL, MongoDB</p>
          <p><span className="text-[#00FFF0] font-semibold">Tools:</span> Git, GitHub, Streamlit, Gradio</p>
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
        <div className="text-gray-300 text-sm space-y-2">
          <p><span className="text-[#00FFF0] font-semibold">Tools:</span> Anaconda / Jupyter Notebooks, Node.js, MongoDB Compass & Postman</p>
          <p><span className="text-[#00FFF0] font-semibold">Cloud:</span> Microsoft Azure & Docker</p>
          <p><span className="text-[#00FFF0] font-semibold">AI/ML:</span> TensorFlow & PyTorch</p>
          <p><span className="text-[#00FFF0] font-semibold">Data Visualization:</span> Power BI & Tableau</p>
          <p><span className="text-[#00FFF0] font-semibold">Code Editor:</span> VS Code</p>
          <p><span className="text-[#00FFF0] font-semibold">Version Control:</span> Git & GitHub</p>
        </div>
      </motion.div>

      {/* Custom Animation */}
      <style jsx="true">{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #00FFF0;
          width: 0;
          animation: typing 1.5s steps(30) 1s 1 normal both, blink 0.75s step-end infinite;
        }

        @keyframes blink {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: #00FFF0;
          }
        }
      `}</style>
    </section>
  );
}
