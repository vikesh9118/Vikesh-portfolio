import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-24 gap-10">
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Hi, I'm <span className="text-blue-600">Vikesh Kumar</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
          I’m a passionate Full Stack Developer with a focus on building modern, responsive, and dynamic web apps using React, Node.js, and Tailwind CSS.
        </p>
        <Link to="projects" smooth={true} duration={500}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all">
            View Projects
          </button>
        </Link>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImage} alt="Hero" className="rounded-xl shadow-xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
