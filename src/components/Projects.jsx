import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Lightweight Text Summarizer for PDA Devices",
      date: "Jan 2024 – Mar 2024",
      domain: "ML / NLP",
      model: "Trained SBERT",
      summary:
        "Developed a text summarization model optimized for PDA devices, using SVD for dimensionality reduction and SBERT with text-ranking algorithms to extract top summaries.",
      tech: "Pandas, NLTK, SBERT, ROUGE-score",
    },
    {
      title: "Recruitment Management System",
      date: "Aug 2024 – Nov 2024",
      domain: "Web Development",
      model: "Frameworks: Django, Streamlit",
      summary:
        "Built a job portal allowing employers to post jobs and applicants to submit resumes. Implemented user authentication and an intuitive UI for easy navigation.",
      tech: "Django, SQLite, Streamlit",
    },
    {
      title: "Age and Gender Detection with LLM Integration",
      date: "Nov 2024 – Jan 2025",
      domain: "Computer Vision",
      model: "CNN + OpenCV + BLIP",
      summary:
        "Designed a CNN-based age & gender detection model trained on UTKFace, integrating BLIP for image captioning and enhanced descriptions.",
      tech: "TensorFlow, OpenCV, BLIP, Gradio",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1e293b, #0a0f29)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 20s ease infinite",
      }}
    >
      {/* Floating elements and background animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFF044] to-transparent opacity-20 blur-2xl pointer-events-none" />

      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animate-float bg-[#00FFF0] opacity-30 rounded-full w-48 h-48 absolute top-40 left-16"></div>
        <div className="animate-float bg-[#00FFF0] opacity-40 rounded-full w-64 h-64 absolute top-32 left-8"></div>
        <div className="animate-float bg-[#00FFF0] opacity-50 rounded-full w-72 h-72 absolute top-60 right-10"></div>
      </div>

      {/* Title with Typing Effect */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#00FFF0] mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="typewriter">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col shadow-xl hover:shadow-[0_0_20px_#00FFF0] transition-all duration-500 transform hover:scale-105 hover:border-2 hover:border-[#00FFF0]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#00FFF0] mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{proj.date}</p>
            <p><span className="text-[#00FFF0] font-semibold">Domain:</span> {proj.domain}</p>
            <p><span className="text-[#00FFF0] font-semibold">Model Used:</span> {proj.model}</p>
            <p className="mt-2 text-gray-300">{proj.summary}</p>
            <p className="mt-4 text-sm text-gray-400"><span className="text-[#00FFF0] font-semibold">Tech Used:</span> {proj.tech}</p>
          </motion.div>
        ))}
      </div>

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
          animation: typing 2s steps(30) 1s 1 normal both, blink 0.75s step-end infinite;
        }

        @keyframes blink {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: #00FFF0;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
