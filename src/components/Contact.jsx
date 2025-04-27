import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        className="bg-white/5 backdrop-blur-md rounded-xl p-8 space-y-4 text-center text-gray-300 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg">Feel free to reach out to me for collaborations, projects, or any inquiries!</p>
        <form action="mailto:ffggsanwar@gmail.com" method="post" encType="text/plain">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-md bg-gray-700 text-white mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-md bg-gray-700 text-white mb-4"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 rounded-md bg-gray-700 text-white mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[#00FFF0] text-white rounded-full hover:bg-[#00D1B2] transition"
          >
            Send Message
          </button>
        </form>
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
