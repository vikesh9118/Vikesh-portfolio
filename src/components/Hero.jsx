import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 text-center relative overflow-hidden bg-zinc-900"
    >
      {/* Glowing Circle */}
      <div className="absolute -top-24 -left-24 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] bg-primary opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="max-w-2xl md:max-w-4xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Vikesh Kumar
          </span>
          <br />
          A Passionate Software Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300"
        >
          I design and build modern, responsive web applications using React and Tailwind, with focus on performance and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 sm:mt-8"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="inline-block px-5 py-3 sm:px-6 sm:py-3 bg-primary text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
