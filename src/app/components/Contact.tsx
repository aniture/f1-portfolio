'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gray-950 text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Pit Stop: Contact Me</h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="bg-gray-800 px-4 py-2 rounded text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-gray-800 px-4 py-2 rounded text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-gray-800 px-4 py-2 rounded text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold"
          onClick={(e) => {
            e.preventDefault();
            alert('📬 Message sending feature coming soon!');
          }}
        >
          Send Message
        </button>
      </motion.form>

      {/* Socials */}
      <div className="flex justify-center gap-6 mt-10">
        <a href="https://linkedin.com/in/aditya-niture" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-white hover:text-red-500 transition" />
        </a>
        <a href="https://github.com/aniture" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-white hover:text-red-500 transition" />
        </a>
        <a href="mailto:aniture@hawk.iit.edu">
          <FaEnvelope className="text-3xl text-white hover:text-red-500 transition" />
        </a>
      </div>
    </div>
  );
}
