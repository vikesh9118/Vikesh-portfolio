import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-10 border-t border-zinc-700">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-400">
          Thank you for visiting my portfolio. Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href="https://github.com/vikeshkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikesh-kumar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:vikeshkumar8548@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vikesh Kumar. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
